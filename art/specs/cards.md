# Asset spec: Card templates & backs

Read `/design/style-guide.md` §4.3 (binding). ViewBox `0 0 750 1050` (2.5×3.5in @300 u/in).
Files in `/art/cards/templates/`. These are TEMPLATES: the build fills `{{mustache}}` fields.
Every text field sits inside a `<rect data-field="<name>" fill="none">` bounding box so the
render audit can measure overflow. Use exact field names below. Header band color per deck.
Frame: 24-unit paper margin, ink border 3, inner rules hairline 0.75.

| File | Deck (band color) | Fields (data-field boxes) |
|---|---|---|
| card-crew.svg | crew `#D96C2E` | name, callsign, tier, shoot, grit, ap, skills (large), gear, bio (italic serif) — plus a `<g data-slot="bust">` 220×220 box top-right for the bust illustration |
| card-gear.svg | olive `#5B6244` | name, slot, effect (large), notes, supply |
| card-opfor.svg | authority `#4A4E57` (band recolored per faction by build via `data-band` rect) | name, faction, shoot, grit, armor, doctrine, weapon, special (large), element |
| card-directive.svg | ink `#2B2A26` | title, order (large, 3 lines max), scope (small caps footer) |
| card-event.svg | rust `#9C4A38` | title, trigger, effect (large) — plus `<g data-slot="icon">` 140×140 |
| card-dilemma.svg | topo-brown `#8A6F4D` | title, situation (serif), option-a, option-b — plus `<g data-slot="icon">` 140×140 |

Backs (same files dir, `card-back-<deck>.svg` ×6): centered deck glyph (large, from
components), deck name in Oswald caps, and the `c-motto-stencil` wordmark small at the foot.
Back ground: deck band color; glyph + text in `paper-bright`. No fields on backs.

Style: field-guide document look — the crew card reads like a laminated volunteer-roster
card; OPFOR like a spotting card; Directive like a message-pad slip (add a faint ruled-line
pattern, sanctioned hatch only).
