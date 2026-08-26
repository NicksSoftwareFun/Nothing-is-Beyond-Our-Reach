#!/usr/bin/env node
/* ============================================================================
   tools/build.mjs — single build entry for NOTHING IS BEYOND OUR REACH.

   Usage:  node tools/build.mjs <target>
   Targets:
     rulebook   book/book.yaml chapters -> release/rulebook.pdf
     qrs        (TODO stub) quick reference sheet
     stress     tools/stress/stress-test.md -> build/stress-test.pdf + PNGs
     check      dry build: manifest, macros, xrefs, fonts, palette discipline
     cards      (TODO stub)
     tokens     (TODO stub)
     maps       (TODO stub)
     sheets     (TODO stub)
     all        rulebook + stubs

   Macro contract (runs on chapter Markdown BEFORE markdown-it):
     {{stat:<file>.<dotted.path>}}   scalar from /data/<file>.yaml   (missing = build error)
     {{table:<id>}}                  table from /data/tables.yaml    (missing = build error)
     {{table:<file>.<id>}}           table from /data/<file>.yaml `tables:` map (or top level)
     {{table:<id>|wide}}             same, spanning both columns (splits only at page breaks)
     {{card:<file>.<dotted.path>}}   stat-block div from any /data yaml mapping
     {{svg:<relpath>}}               inline /art/<relpath> in <figure class="art">
     {{svg:<relpath>|wide}}          same, column-spanning     (missing art = warning + placeholder)
     {{ref:<anchor>}}                cross-ref; text = target heading, page no. via CSS
     {{toc}}                         table of contents built from the book's h1s
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import YAML from "yaml";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import attrs from "markdown-it-attrs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = {
  data: path.join(ROOT, "data"),
  art: path.join(ROOT, "art"),
  book: path.join(ROOT, "book"),
  chapters: path.join(ROOT, "book", "chapters"),
  build: path.join(ROOT, "build"),
  release: path.join(ROOT, "release"),
  stress: path.join(ROOT, "tools", "stress"),
};
const SHELL = path.join(DIR.book, "templates", "shell.html");
const CSS = path.join(DIR.book, "css", "book.css");
const MANIFEST = path.join(DIR.book, "book.yaml");
const POLYFILL = path.join(ROOT, "vendor", "pagedjs", "paged.polyfill.js");

/* ---------------------------------------------------------------- utilities */

const warnings = [];
const errors = [];
const warn = (msg) => { warnings.push(msg); console.warn(`  warn: ${msg}`); };
const fail = (msg) => { errors.push(msg); };

function readText(p) { return fs.readFileSync(p, "utf8"); }

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(s) {
  return String(s).trim().toLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const dataCache = new Map();
function loadData(name) {
  if (dataCache.has(name)) return dataCache.get(name);
  const p = path.join(DIR.data, `${name}.yaml`);
  let doc = null;
  if (fs.existsSync(p)) {
    try { doc = YAML.parse(readText(p)); }
    catch (e) { fail(`data/${name}.yaml does not parse: ${e.message}`); }
  }
  dataCache.set(name, doc);
  return doc;
}

function deepGet(obj, dotted) {
  let cur = obj;
  for (const part of dotted.split(".")) {
    if (cur == null || typeof cur !== "object" || !(part in cur)) return undefined;
    cur = cur[part];
  }
  return cur;
}

const isScalar = (v) => ["string", "number", "boolean"].includes(typeof v);

/* --------------------------------------------------------------- markdown-it */

function makeMd() {
  const md = new MarkdownIt({ html: true, typographer: true });
  md.use(attrs);
  md.use(anchor, { slugify, permalink: false, tabIndex: false });
  containerPlugin(md, ["example", "sidebar", "designer", "flavor"]);
  return md;
}

/* Tiny hand-rolled `::: name` container -> <aside class="name"> (no new deps). */
function containerPlugin(md, names) {
  md.block.ruler.before("fence", "nibor_container", (state, startLine, endLine, silent) => {
    const open = state.src.slice(
      state.bMarks[startLine] + state.tShift[startLine],
      state.eMarks[startLine]
    );
    const m = /^:::\s*([a-z][a-z-]*)\s*$/.exec(open);
    if (!m || !names.includes(m[1])) return false;
    if (silent) return true;

    let next = startLine;
    let closed = false;
    while (++next < endLine) {
      const line = state.src.slice(
        state.bMarks[next] + state.tShift[next],
        state.eMarks[next]
      );
      if (/^:::\s*$/.test(line)) { closed = true; break; }
    }

    const oldParent = state.parentType;
    const oldLineMax = state.lineMax;
    state.parentType = "nibor_container";
    state.lineMax = next;

    let token = state.push("nibor_container_open", "aside", 1);
    token.attrSet("class", m[1]);
    token.map = [startLine, next];
    token.block = true;

    state.md.block.tokenize(state, startLine + 1, next);

    token = state.push("nibor_container_close", "aside", -1);
    token.block = true;

    state.parentType = oldParent;
    state.lineMax = oldLineMax;
    state.line = next + (closed ? 1 : 0);
    return true;
  }, { alt: ["paragraph", "reference", "blockquote", "list"] });
}

/* ---------------------------------------------------------------- macro pass */

function macroPass(src, md, ctxLabel) {
  return src.replace(
    /\{\{(toc)\}\}|\{\{(stat|table|card|svg|ref):([^}]+)\}\}/g,
    (whole, tocKw, kind, arg) => {
      if (tocKw) return `<nav class="toc" data-toc="1"></nav>`;
      arg = arg.trim();
      try {
        switch (kind) {
          case "stat": return macroStat(arg, ctxLabel);
          case "table": return macroTable(arg, md, ctxLabel);
          case "card": return macroCard(arg, md, ctxLabel);
          case "svg": return macroSvg(arg, ctxLabel);
          case "ref": return `<a class="xref" href="#${escapeHtml(arg)}"></a>`;
        }
      } catch (e) {
        fail(`${ctxLabel}: {{${kind}:${arg}}} -> ${e.message}`);
        return whole;
      }
      return whole;
    }
  );
}

function macroStat(arg, ctx) {
  const dot = arg.indexOf(".");
  if (dot < 1) throw new Error("expected <file>.<dotted.path>");
  const file = arg.slice(0, dot);
  const dotted = arg.slice(dot + 1);
  const doc = loadData(file);
  if (doc == null) { fail(`${ctx}: {{stat:${arg}}} -> data/${file}.yaml not found`); return "??"; }
  const v = deepGet(doc, dotted);
  if (v === undefined) { fail(`${ctx}: {{stat:${arg}}} -> path '${dotted}' missing in data/${file}.yaml`); return "??"; }
  if (!isScalar(v)) { fail(`${ctx}: {{stat:${arg}}} -> not a scalar (got ${Array.isArray(v) ? "array" : typeof v})`); return "??"; }
  return escapeHtml(v);
}

function resolveTableSpec(id) {
  if (id.includes(".")) {
    const dot = id.indexOf(".");
    const file = id.slice(0, dot);
    const key = id.slice(dot + 1);
    const doc = loadData(file);
    if (doc == null) return { err: `data/${file}.yaml not found` };
    const spec = (doc.tables && doc.tables[key]) ?? doc[key];
    if (!spec) return { err: `table '${key}' missing in data/${file}.yaml` };
    return { spec };
  }
  const doc = loadData("tables");
  if (doc == null) return { err: "data/tables.yaml not found" };
  const spec = doc[id] ?? (doc.tables && doc.tables[id]);
  if (!spec) return { err: `table '${id}' missing in data/tables.yaml` };
  return { spec };
}

function macroTable(arg, md, ctx) {
  const [id, ...flags] = arg.split("|").map((s) => s.trim());
  const wide = flags.includes("wide");
  const { spec, err } = resolveTableSpec(id);
  if (err) { fail(`${ctx}: {{table:${id}}} -> ${err}`); return `<!-- table:${escapeHtml(id)} missing -->`; }
  const { title, dice, columns = [], rows = [], note } = spec;
  const inline = (v) => md.renderInline(String(v));
  const cls = wide ? " wide" : rows.length <= 12 ? " keep" : "";
  const parts = [];
  parts.push(`<table class="rules-table${cls}">`);
  parts.push(
    `<caption>Table: ${inline(title ?? id)}` +
    (dice ? ` <span class="dice">(${escapeHtml(dice)})</span>` : "") +
    `</caption>`
  );
  parts.push("<thead><tr>" + columns.map((c) => `<th>${inline(c)}</th>`).join("") + "</tr></thead>");
  parts.push("<tbody>");
  for (const row of rows) {
    parts.push("<tr>" + row.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>");
  }
  parts.push("</tbody>");
  if (note) parts.push(`<tfoot><tr><td colspan="${columns.length}">${inline(note)}</td></tr></tfoot>`);
  parts.push("</table>");
  return parts.join("\n");
}

function macroCard(arg, md, ctx) {
  const dot = arg.indexOf(".");
  if (dot < 1) throw new Error("expected <file>.<id>");
  const file = arg.slice(0, dot);
  const dotted = arg.slice(dot + 1);
  const doc = loadData(file);
  if (doc == null) { fail(`${ctx}: {{card:${arg}}} -> data/${file}.yaml not found`); return `<!-- card missing -->`; }
  const entry = deepGet(doc, dotted);
  if (entry == null || typeof entry !== "object" || Array.isArray(entry)) {
    fail(`${ctx}: {{card:${arg}}} -> entry '${dotted}' missing or not a mapping in data/${file}.yaml`);
    return `<!-- card missing -->`;
  }
  const inline = (v) => md.renderInline(String(v));
  const parts = [`<div class="statblock">`];
  if (entry.name != null) parts.push(`<div class="statblock-name">${inline(entry.name)}</div>`);
  const dts = [];
  for (const [k, v] of Object.entries(entry)) {
    if (k.startsWith("_") || k === "name" || k === "notes") continue;
    if (!isScalar(v)) continue;
    const label = escapeHtml(k.replace(/[-_]+/g, " "));
    dts.push(`<dt>${label}</dt><dd>${inline(v)}</dd>`);
  }
  if (dts.length) parts.push("<dl>" + dts.join("") + "</dl>");
  if (entry.notes != null) parts.push(`<p class="statblock-notes">${inline(entry.notes)}</p>`);
  parts.push("</div>");
  return parts.join("\n");
}

function macroSvg(arg, ctx) {
  let [relpath, ...flags] = arg.split("|").map((s) => s.trim());
  const wide = flags.includes("wide");
  const p = path.join(DIR.art, relpath);
  if (!p.startsWith(DIR.art)) throw new Error("path escapes /art");
  if (!fs.existsSync(p)) {
    warn(`${ctx}: art not drawn yet -> placeholder for ${relpath}`);
    return `<figure class="art missing${wide ? " wide" : ""}"><div class="art-tbd">[ART TBD: ${escapeHtml(relpath)}]</div></figure>`;
  }
  let svg = readText(p)
    .replace(/^﻿/, "")
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();
  if (!/^<svg[\s>]/.test(svg)) throw new Error(`${relpath} does not start with <svg> after prolog strip`);
  /* markdown-it html blocks end at a blank (or whitespace-only) line — keep
     the figure gap-free by dropping empty lines entirely */
  svg = svg.split("\n").filter((line) => line.trim() !== "").join("\n");
  return `<figure class="art${wide ? " wide" : ""}">\n${svg}\n</figure>`;
}

/* ----------------------------------------------------------- HTML post steps */

function collectHeadings(html) {
  const map = new Map(); // id -> plain text
  const h1s = []; // [{id, text}] in document order
  const re = /<h([1-6])\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;
  let m;
  while ((m = re.exec(html))) {
    const text = m[3].replace(/<[^>]*>/g, "").trim();
    if (!map.has(m[2])) map.set(m[2], text);
    if (m[1] === "1") h1s.push({ id: m[2], text });
  }
  return { map, h1s };
}

function fillXrefs(html, headings, ctx) {
  const allIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  return html.replace(
    /<a class="xref" href="#([^"]+)"><\/a>/g,
    (whole, id) => {
      const text = headings.map.get(id);
      if (!allIds.has(id)) {
        fail(`${ctx}: {{ref:${id}}} -> no element with that anchor exists`);
        return whole;
      }
      if (!text) {
        /* target exists but is not a heading: keep the anchor id as visible text */
        return `<a class="xref" href="#${id}">${escapeHtml(id)}</a>`;
      }
      return `<a class="xref" href="#${id}">${escapeHtml(text)}</a>`;
    }
  );
}

function tocHtml(h1s) {
  const items = h1s.map(({ id, text }) =>
    `<li><a class="toc-link" href="#${id}"><span class="toc-title">${escapeHtml(text)}</span><span class="toc-dots"></span></a></li>`
  ).join("\n");
  return `<nav class="toc"><div class="toc-head">Contents</div>\n<ol>\n${items}\n</ol>\n</nav>`;
}

function placeToc(html, h1s, { autoPrepend }) {
  const placeholder = `<nav class="toc" data-toc="1"></nav>`;
  const nav = tocHtml(h1s);
  if (html.includes(placeholder)) return html.split(placeholder).join(nav);
  if (autoPrepend && h1s.length) return nav + "\n" + html;
  return html;
}

/* -------------------------------------------------------------- book compose */

function loadManifest() {
  if (!fs.existsSync(MANIFEST)) throw new Error(`missing manifest ${MANIFEST}`);
  const man = YAML.parse(readText(MANIFEST));
  if (!man || !man.title || !Array.isArray(man.chapters)) {
    throw new Error("book/book.yaml must define title and chapters[]");
  }
  return man;
}

/* Concatenate chapters into one markdown source with raw <section> wrappers so
   a single markdown-it render keeps heading slugs globally unique. */
function concatChapters(chapterSources) {
  return chapterSources.map(({ id, md }) =>
    `<section class="chapter" id="${id}">\n\n${md.trim()}\n\n</section>`
  ).join("\n\n");
}

function composeHtml({ title, chapterSources, autoToc }) {
  const md = makeMd();
  let source = concatChapters(chapterSources);
  source = macroPass(source, md, "book");
  let body = md.render(source);
  const headings = collectHeadings(body);
  body = fillXrefs(body, headings, "book");
  body = placeToc(body, headings.h1s, { autoPrepend: autoToc });
  const shell = readText(SHELL);
  const css = readText(CSS);
  return shell
    .split("{{TITLE}}").join(escapeHtml(title))
    .split("{{CSS}}").join(css)
    .split("{{BODY}}").join(body);
}

function rulebookChapterSources(man) {
  const sources = [];
  for (const rel of man.chapters) {
    const p = path.join(DIR.chapters, rel);
    if (!fs.existsSync(p)) { warn(`chapter not written yet, skipped: book/chapters/${rel}`); continue; }
    sources.push({ id: `chapter-${slugify(rel.replace(/\.md$/, ""))}`, md: readText(p) });
  }
  return sources;
}

function titleBlock(man) {
  return [
    `<div class="title-block">`,
    `<div class="book-title">${escapeHtml(man.title)}</div>`,
    man.subtitle ? `<div class="book-subtitle">${escapeHtml(man.subtitle)}</div>` : "",
    man.version ? `<div class="book-version">Version ${escapeHtml(man.version)}</div>` : "",
    `<hr class="title-rule">`,
    `</div>`,
  ].filter(Boolean).join("\n");
}

/* Stress doc: one file, split into pseudo-chapters at each h1 so it exercises
   exactly what the manifest build does (a chapter file starts with an h1). */
function stressChapterSources() {
  const p = path.join(DIR.stress, "stress-test.md");
  const src = readText(p);
  const lines = src.split("\n");
  const chunks = [];
  let cur = [];
  for (const line of lines) {
    if (/^# (?!#)/.test(line) && cur.some((l) => l.trim() !== "")) {
      chunks.push(cur.join("\n"));
      cur = [line];
    } else {
      cur.push(line);
    }
  }
  if (cur.length) chunks.push(cur.join("\n"));
  return chunks.map((mdText, i) => ({ id: `stress-part-${i}`, md: mdText }));
}

/* ------------------------------------------------------------ paged rendering */

async function renderPaged(htmlPath, { pdfPath, screenshots }) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = "/opt/pw-browsers";
  const { chromium } = await import("playwright-core");
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--font-render-hinting=none"],
  });
  try {
    const page = await browser.newPage();
    page.on("pageerror", (e) => console.error(`  [pageerror] ${e.message}`));
    page.on("console", (m) => { if (m.type() === "error") console.error(`  [console] ${m.text()}`); });
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load", timeout: 300000 });
    await page.waitForFunction("window.__pagedDone === true", null, { timeout: 300000 });
    const audit = await page.evaluate("window.__audit()");
    const pageCount = await page.evaluate("window.__pagedPageCount");

    if (screenshots && pageCount > 0) {
      const targets = [
        { index: 0, path: screenshots.first },
        { index: Math.floor(pageCount / 2), path: screenshots.mid },
      ];
      for (const t of targets) {
        const el = page.locator(".pagedjs_page").nth(t.index);
        await el.scrollIntoViewIfNeeded();
        await el.screenshot({ path: t.path });
      }
    }

    fs.mkdirSync(path.dirname(pdfPath), { recursive: true });
    await page.pdf({ path: pdfPath, printBackground: true, preferCSSPageSize: true });
    return { audit, pageCount };
  } finally {
    await browser.close();
  }
}

function printAudit(name, { audit, pageCount }) {
  console.log(`\n== AUDIT: ${name} ==`);
  console.log(`  pages:            ${pageCount}`);
  console.log(`  overflows:        ${audit.overflows.length}`);
  for (const o of audit.overflows) console.log(`    - ${o}`);
  console.log(`  unresolved xrefs: ${audit.unresolvedRefs}`);
  console.log(`  fonts loaded:     ${audit.fontsOk ? "yes" : "NO"}`);
  console.log(`  build warnings:   ${warnings.length}${warnings.length ? " (missing art / skipped chapters — not fatal)" : ""}`);
  const bad = audit.overflows.length > 0 || audit.unresolvedRefs > 0 || !audit.fontsOk;
  return !bad;
}

/* -------------------------------------------------------------------- targets */

async function targetRulebook() {
  const man = loadManifest();
  const chapterSources = rulebookChapterSources(man);
  if (chapterSources.length === 0) {
    warn("no chapters exist yet — building title page only");
  }
  const html = composeHtml({
    title: man.title,
    chapterSources: chapterSources.length
      ? chapterSources
      : [{ id: "front", md: titleBlock(man) }],
    autoToc: true,
  });
  bailOnErrors();
  fs.mkdirSync(DIR.build, { recursive: true });
  const htmlPath = path.join(DIR.build, "rulebook.html");
  fs.writeFileSync(htmlPath, html);
  const pdfPath = path.join(DIR.release, "rulebook.pdf");
  const res = await renderPaged(htmlPath, { pdfPath });
  console.log(`  wrote ${pdfPath}`);
  const ok = printAudit("rulebook", res);
  process.exitCode = ok ? 0 : 1;
}

async function targetStress() {
  const chapterSources = stressChapterSources();
  const html = composeHtml({ title: "NIBOR Layout Stress Test", chapterSources, autoToc: false });
  bailOnErrors();
  fs.mkdirSync(DIR.build, { recursive: true });
  const htmlPath = path.join(DIR.build, "stress-test.html");
  fs.writeFileSync(htmlPath, html);
  const res = await renderPaged(htmlPath, {
    pdfPath: path.join(DIR.build, "stress-test.pdf"),
    screenshots: {
      first: path.join(DIR.build, "stress-p1.png"),
      mid: path.join(DIR.build, "stress-mid.png"),
    },
  });
  console.log(`  wrote ${path.join(DIR.build, "stress-test.pdf")}`);
  const okAudit = printAudit("stress-test", res);
  const okPages = res.pageCount >= 6;
  if (!okPages) console.error(`  FAIL: expected >= 6 pages, got ${res.pageCount}`);
  process.exitCode = okAudit && okPages ? 0 : 1;
}

function targetCheck() {
  let ok = true;

  /* environment */
  for (const f of [
    "fonts/Oswald.ttf", "fonts/SourceSerif4.ttf", "fonts/SourceSerif4-Italic.ttf",
    "fonts/BarlowSemiCondensed-Regular.ttf", "fonts/BarlowSemiCondensed-Medium.ttf",
    "fonts/BarlowSemiCondensed-SemiBold.ttf", "fonts/BarlowSemiCondensed-Bold.ttf",
    "vendor/pagedjs/paged.polyfill.js",
  ]) {
    if (!fs.existsSync(path.join(ROOT, f))) { console.error(`  MISSING: ${f}`); ok = false; }
  }

  /* palette discipline in book.css: every color literal must be a palette hex */
  const palettePath = path.join(DIR.art, "lib", "palette.json");
  if (fs.existsSync(palettePath)) {
    const palette = JSON.parse(readText(palettePath));
    const allowed = new Set();
    for (const group of Object.values(palette)) {
      if (typeof group !== "object") continue;
      for (const v of Object.values(group)) {
        if (typeof v === "string" && v.startsWith("#")) allowed.add(v.toUpperCase());
      }
    }
    const css = readText(CSS);
    for (const m of css.matchAll(/#([0-9a-fA-F]{6})\b/g)) {
      const hex = `#${m[1].toUpperCase()}`;
      if (!allowed.has(hex)) { console.error(`  book.css color ${hex} not in palette.json`); ok = false; }
    }
    for (const m of css.matchAll(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/g)) {
      const hex = "#" + [m[1], m[2], m[3]]
        .map((n) => Number(n).toString(16).padStart(2, "0")).join("").toUpperCase();
      if (!allowed.has(hex)) { console.error(`  book.css tint base ${hex} not in palette.json`); ok = false; }
    }
  } else {
    warn("art/lib/palette.json missing — palette check skipped");
  }

  /* dry compose of the rulebook: surfaces macro + xref errors without a browser */
  try {
    const man = loadManifest();
    const chapterSources = rulebookChapterSources(man);
    composeHtml({
      title: man.title,
      chapterSources: chapterSources.length ? chapterSources : [{ id: "front", md: titleBlock(man) }],
      autoToc: true,
    });
  } catch (e) {
    console.error(`  compose failed: ${e.message}`);
    ok = false;
  }
  if (errors.length) {
    console.error(`\n  ${errors.length} macro/xref error(s):`);
    for (const e of errors) console.error(`    - ${e}`);
    ok = false;
  }
  console.log(`\ncheck: ${ok ? "OK" : "FAILED"} (${warnings.length} warning(s))`);
  process.exitCode = ok ? 0 : 1;
}

function bailOnErrors() {
  if (errors.length) {
    console.error(`\nBUILD FAILED — ${errors.length} error(s):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
}

function todo(name) {
  console.log(`[${name}] TODO: not implemented yet (dispatch is wired; see tools/build.mjs)`);
}

/* ------------------------------------------------------------------ dispatch */

const target = process.argv[2];
switch (target) {
  case "rulebook": await targetRulebook(); break;
  case "stress": await targetStress(); break;
  case "check": targetCheck(); break;
  case "qrs": todo("qrs"); break;      /* TODO: quick reference sheet build */
  case "cards": todo("cards"); break;  /* TODO: card sheet build from /art/cards + /data */
  case "tokens": todo("tokens"); break;/* TODO: token sheet build from /art/tokens */
  case "maps": todo("maps"); break;    /* TODO: map poster build from /art/maps */
  case "sheets": todo("sheets"); break;/* TODO: play-aid sheets build */
  case "all":
    await targetRulebook();
    for (const t of ["qrs", "cards", "tokens", "maps", "sheets"]) todo(t);
    break;
  default:
    console.error("usage: node tools/build.mjs <rulebook|qrs|stress|check|cards|tokens|maps|sheets|all>");
    process.exit(2);
}
