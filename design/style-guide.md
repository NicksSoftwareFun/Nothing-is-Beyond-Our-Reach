# ART STYLE GUIDE — NOTHING IS BEYOND OUR REACH

> **Binding contract for every SVG in `/art`.** `tools/checks/lint-svg.mjs` enforces the
> mechanical rules; the art-director review enforces the aesthetic ones. Read this whole file
> before drawing anything.

## 1. The look: "field-guide realism"

The game's visual world is a **state wildlife pamphlet crossed with a USGS 7.5-minute
topographic quad**, printed circa a good but underfunded year. Think: hunting-regulations
booklet, extension-service diagrams, trail-map kiosks. Muted, warm, matter-of-fact, ink-on-cream.
Never "military techno" (no stencil-grunge, no digital camo, no HUD glow), never cartoon.

Rules of feel:
- Flat fills + line work. Confidence lives in the silhouette, not in shading.
- Warm paper background everywhere (`paper` #F2EDDF); art sits ON the paper, it doesn't fill
  the frame edge-to-edge unless it's a map.
- Blaze orange (`blaze`) is precious: it marks THE PLAYER'S things and active alerts, nothing
  else. A sheet should read mostly olive/tan/ink with rare orange accents.
- The resistance motto appears as painted graffiti motifs (stencil-brush shapes, `rust` or
  `ink`) sparingly — cover, chapter spots, one or two map walls. It is the *citizens'* mark.

## 2. Mechanical rules (lint-enforced — violations fail the build)

1. **Colors:** only hex values from `art/lib/palette.json` (any group), plus `none`. No other
   colors, no `rgb()`, no named colors, no opacity below 1 except the two sanctioned pattern
   uses below.
2. **Strokes:** `stroke-width` only from `art/lib/stroke-weights.json` (0.75 / 1.5 / 3 / 6 at
   the canonical 100 units = 1 inch scale). Scale weights proportionally if your viewBox uses a
   different unit density — the lint normalizes by viewBox.
3. **Self-contained:** no external references of any kind — no `<image>`, no `href` to other
   files, no webfont `@import`. `<use>` may only reference ids *within the same file*.
4. **No gradients, no filters, no masks, no embedded raster.** Clip paths allowed.
5. **Text:** `font-family` must be exactly one of
   `"Oswald", "Liberation Sans", sans-serif` ·
   `"Barlow Semi Condensed", "Liberation Sans", sans-serif` ·
   `"Source Serif 4", "Bitstream Charter", serif`.
   Position text with explicit `x`/`y` and `text-anchor`; never `alignment-baseline`
   (unreliable in print). Convert nothing to outlines — keep text as text.
6. **Sanctioned transparency:** hatch/pattern overlays at `fill-opacity="0.35"` and terrain
   texture dots at `fill-opacity="0.5"`. Nothing else.
7. **ViewBox contracts** (exact, per asset type — §4).
8. Root element must carry `data-nibor="<family>/<name>"` for the audit tooling.

## 3. Component library

`art/lib/components.svg` is the shared drawing vocabulary: weapon silhouettes, body/head/pack
shapes for top-down figures, faction base rings, glyph set, terrain swatches, contour style,
hatch pattern, crop marks. **Copy** the paths you need into your file (keeping ids like
`c-weapon-carbine`) — do not reference across files. If a shape you need is missing, draw it in
the component style and note it in your report so it can be back-ported.

## 4. Asset anatomy & viewBox contracts

### 4.1 Unit tokens (`art/tokens/**`) — viewBox `0 0 100 100` (= 1×1 in)
Top-down figure, **facing up (north)**. Anatomy, bottom to top:
- Base ring: circle r=46, `stroke` faction color, `stroke-width` 6, fill `paper-bright`.
- Figure: shoulders/torso/head top-down silhouette in faction color (crew: `olive` clothing
  with `blaze` ring only), `ink` outline at 3.
- Weapon silhouette overlaid pointing up (from components), `ink`.
- Role badge: 22×22 rounded square at bottom-right on the ring, `paper-bright` fill, `ink`
  border 1.5, glyph in `ink` (crew) or faction color (OPFOR).
- Name/designation: none on the token (cards carry names). Vehicle tokens: `0 0 200 100`
  (2×1 in), top-down vehicle, same ring-and-badge grammar, facing up = front right? **No:
  vehicles face up** (long axis vertical) — the build rotates for sheets if needed.
  Drone tokens: `0 0 75 75`, rotor cross silhouette.
- Blind Arc notch: small `ink` chevron on the ring at the bottom (rear) — all infantry tokens.

### 4.2 Status/marker tokens (`art/tokens/status`, `markers`, `objectives`) — `0 0 75 75`
Glyph-first: `paper-bright` disc, `ink` glyph from the library, thin faction/state ring
(`rust` for bad states, `olive` good, `blaze` alert). Text only where the glyph can't carry it
(e.g., "ALARM"), Oswald, ≤6 characters.

### 4.3 Cards (`art/cards/templates`) — `0 0 750 1050` (2.5×3.5 in at 300 u/in)
Layout templates with `{{mustache}}` text fields (the build fills them). Frame: 24-unit
`paper` margin, `ink` border 3, header band in faction/deck color with Oswald title
(`paper-bright`), body in Barlow Semi Condensed. Backs: centered deck glyph + motto graffiti
band. Fields must live inside declared `<rect data-field="...">` boxes so overflow is testable.

### 4.4 Maps (`art/maps`) — `0 0 3000 2400` (30×24 squares at 100 u/square)
USGS-quad look: `paper` ground, `contour` contour lines (hairline 0.75, every "20 ft",
index contours 1.5), terrain fills from the `terrain` palette group with sparse texture
(tree dots, crop rows), roads `road` with `ink` casings, buildings `building` with `ink`
outline + interior Zone dashes, water with hairline shore. **Grid:** `ink` at
`stroke-opacity` — no; grid lines use `contour` color at 0.75 weight so they read under play;
heavy `ink` border with **edge letters A–Z across, numbers down** every square (Barlow, 40u).
Named places in Oswald small caps. Legend box bottom-left on every map. North arrow + scale
bar. Zone boundaries inside buildings: dashed `ink` 1.5 with Zone ids (Z1, Z2…).

### 4.5 Diagrams (`art/diagrams`) — `0 0 800 500` unless the spec says otherwise
Instructional: pale grid, simplified tokens (ring + glyph only), `blaze` arrows for the thing
being taught, `rust` X for illegal moves, callout labels in Barlow. One concept per diagram.

### 4.6 Cover & spots (`art/cover`, `art/spots`) — cover `0 0 850 1100`, spots `0 0 600 300`
The only "scenic" art. Still flat-vector: layered ridgelines in olive/tan/slate haze, tiny
figure silhouettes, autumn hardwood color. Cover carries title in Oswald caps and the motto
as painted stencil. Spots are chapter-opener vignettes (a glassed ridge, a taped mag, a quad
rotor against cloud, a roadblock at dusk) — restraint over drama.

## 5. Typography

- **Oswald** (Medium/SemiBold): titles, card names, map place names, token text. Tracking +2%.
- **Barlow Semi Condensed** (Regular/Medium/SemiBold): stat lines, table text, labels, badges.
- **Source Serif 4**: long body text in the book only — never inside tokens/cards except card
  flavor lines (italic).
- All-caps for Oswald display uses; sentence case elsewhere. No faux-bold/faux-italic.

## 6. File & naming conventions

`kebab-case.svg`, named for the thing: `crew-mara-vasquez.svg`, `opfor-eca-rifleman.svg`,
`vehicle-coc-technical.svg`, `status-shaken.svg`, `marker-blip.svg`, `diagram-blind-arc.svg`,
`map-03-the-substation.svg`. One asset per file. Root `<svg>` carries `data-nibor`,
`viewBox`, and nothing else (no width/height attributes — the build sets physical size).

## 7. Review bar (art-director pass)

A family passes when: silhouettes are readable at print size (tokens legible at 1 in, glance
test) · faction identity is instant (ring + palette) · line weights consistent · nothing
outside palette · the sheet as a whole looks like ONE hand drew it against this guide.
