# Asset spec: LEAF SEASON campaign maps (chapter 16)

Six playable boards for `book/chapters/16-pineland-burning.md`. Files in `/art/maps/`:

| File | Scenario |
|---|---|
| map-01-eyes-on-the-valley.svg | S1 — Eyes on the Valley |
| map-02-red-mud-crossing.svg | S2 — Red Mud Crossing |
| map-03-the-substation.svg | S3 — The Substation |
| map-04-long-haul.svg | S4 — Long Haul |
| map-05-signal-and-noise.svg | S5 — Signal and Noise |
| map-06-they-came-at-dawn.svg | S6 — They Came at Dawn |

Read `/design/style-guide.md` §4.4 and copy the drawing language of the approved
`/art/maps/sample-excerpt.svg` (contour treatment, field dashes, tree dots, road casings,
building + Zone dashes, ford ticks, haloed edge coordinates). **Every position below comes from
the chapter's scenario text and is tactically load-bearing. Draw what is specified where it is
specified; invent texture, never geometry.** If a square is not named here or in the terrain
masses, it is open ground of the surrounding mass.

## Shared conventions (all six maps)

- **ViewBox `0 0 3000 2400`** — 30×24 squares at 100 units/square. Root carries
  `data-nibor="maps/<file-stem>"`.
- **Grid refs:** columns **A–Z then AA–AD**, west→east (the style guide's "A–Z" letters extend
  to double letters for the 30-wide board); rows **1–24**, north→south. Square `N12` spans
  x 1300–1400, y 1100–1200 (col index 14, row index 12). North is up on every map.
- **Grid:** `contour` lines at 0.75 over the terrain; heavy `ink` border (6); edge letters and
  numbers every square in Barlow 40u with the `paper-bright` halo exactly as in the sample.
- **Contours:** `contour` hairlines 0.75, index contours 1.5, USGS style. Contours must agree
  with the Elevation section of each map: High areas sit inside a closed index contour with
  short hachure ticks on the downhill side, plus a small caps `HIGH` label in Barlow 40u.
- **Terrain fills** from the `terrain` palette group: `field` with crop-row dashes (clipped,
  per sample), `hardwood-autumn` blobs with `ink` texture dots at 0.5 opacity, `conifer` masses
  (darker, tighter dot texture), `marsh` with tuft glyphs, `water` with `ink` hairline shore,
  `road` with `ink` 1.5 casings, `gravel` for spurs/lots, `rough` for slope/boulder ground,
  `building` with `ink` outline 3.
- **Buildings:** interior Zone boundaries as dashed `ink` 1.5 with Zone ids `Z1, Z2…` (Barlow);
  Portals: door gaps in the wall stroke with a `paper-bright` tick (per sample), windows as
  short `paper-bright` dashes. Zone counts below are contractual.
- **Fords:** paired `paper-bright` 1.5 ticks across the water (per sample). **Culverts:**
  dashed `ink` 1.5 pipe through the road/track fill. **Bridges:** road fill carried across
  water between `ink` 3 abutment strokes.
- **Fences:** chain-link = `ink` 1.5 with tiny x-ticks every 50u; split-rail = `ink-soft` 1.5
  dashed 10-7; stone fence = double `ink` 0.75 rails filled `gravel`.
- **Scripted sentry posts:** open circle r 30 in the faction color (`civil-order` or
  `authority`), stroke 3, with a facing chevron on the rim and a Barlow label `P1`, `P2`…
  matching the listing below. These print on the map — the hybrid model shows its hand.
- **Blip routes:** `olive-light` dashed 1.5 polyline square-center to square-center, small
  arrowheads showing patrol direction, label `B1`… at the route's start square.
- **Insertion / Exfil / scripted entries:** `blaze` corner brackets along the stated edge span
  with small caps Barlow labels (`INSERTION`, `EXFIL`, `CONVOY ENTERS T4`, etc.). Blaze marks
  the player's things and active threats only — nothing decorative.
- **Objective / interact points:** `ink` circle r 22 with center cross + small caps label
  (`CACHE`, `MAST`, `SWITCHGEAR`…). The scenario's objective tokens sit on these at setup.
- **Floodlight pools:** dashed `ink-soft` 0.75 circle, radius 3 squares (300u), centered on the
  pole square; pole = filled `ink` dot r 8 with a tiny light glyph.
- **Furniture on every map:** legend box bottom-left (terrain swatches, post/route/edge marks,
  the High convention); north arrow; scale bar (`10 squares = 15 m / 50 ft`); named places in
  Oswald small caps. Keep labels off key play squares.

---

## map-01-eyes-on-the-valley.svg — the Sorrel bend below Gault Ridge

**Orientation.** The ridge fills the north edge; the river and Route 9 cross the south third;
Bray Creek comes down column N from the hollow mouth at the top of the map.

**Terrain masses.** Hardwood (full canopy) ≈45% — the slopes between the ridge bench and the
river, both sides of the creek; conifer ≈8% — two stands, **G4–J7** and **R3–T6**; field ≈12% —
south-bank river fields **Q18–AD24** with crop rows; marsh ≈4% — **A20–C22** at the west bend;
water ≈8%; roads/gravel ≈4%; the rest clear/rough slope.

**Water.** The Sorrel: enters the west edge as a 2-wide band at **A18–A19**, meanders east
through **G19**, **N18** (confluence), **U17**, exits at **AD16–AD17** (rows 16–19 band,
impassable — no fords on this map). Bray Creek: 1-wide, from **N1** south along column N,
under Route 9 through the **culvert at N15**, joining the river at **N18**.

**Roads.** Route 9 (blacktop, `road` + casings): enters **AD14**, runs west along rows 14–15,
**bridge over Bray Creek at N15**, continues along row 16 to exit **A16**. Gravel quarry spur:
leaves Route 9 at **D16**, north to **D13** into the quarry floor.

**Buildings.** **Hale's Sawmill**, footprint **M9–P11** (4×3): 2 Zones — Z1 saw floor (west),
Z2 kiln room (east); Portals: main door on the south face at N11, slider on the west face at
M10, window on the east face at P10. Mark the link-up point in Z2 (`CONTACT`). No other
structures except the **landline shack at O14** (single-square, 1 Zone, door west).

**Quarry.** Floor **C12–E13** in `gravel`/`rough`; rock face **C11–E11** drawn as Block (cliff
symbol, `ink`); rim above it **C10–E10** is High.

**Powerline cut.** A 2-wide cleared lane, columns **U–V, rows 1–14**: `field` fill without crop
rows, pylon glyphs at **U2, U7, U13**, scattered single-square brush clumps at **U4, V8, U12**
(hardwood dots).

**Elevation.** High: the Gault Ridge bench, **rows 1–3 full width (A1–AD3)**, and the quarry
rim **C10–E10**. Everything else Ground.

**Scripted positions & routes.** `civil-order` posts: **P1 at O15** (facing west, over the
bridge), **P2 at P15** (facing east, up the road); sandbag arc glyph on the road shoulder;
landline wire (thin dashed `ink-soft`) from the post into the shack at O14. Blip routes:
**B1** F16↔L16 along the road shoulder; **B2** U2↔U13 down the powerline cut; **B3** loop
M8→P8→P12→M12→M8 around the sawmill. Interact point: `DROP` in the culvert square **N15**.

**Edges.** INSERTION: north edge **A1–K1**; ALT INSERTION (smaller brackets, label
`ALT`): **T1–AD1**. EXFIL: north edge **A1–K1** (same span — label both). Convoy arrow:
`CONVOY ENTERS T4` at **AD14**, exit arrow at **A16**.

**Labels.** GAULT RIDGE (north bench), THE SORREL, ROUTE 9, BRAY CREEK, HALE'S SAWMILL,
MERCER QUARRY, POST 9 (the checkpoint).

---

## map-02-red-mud-crossing.svg — the ford on Landis Road

**Orientation.** The river crosses the middle; the clay road runs top to bottom through the
ford at board center; the ambush country is the south half.

**Terrain masses.** Hardwood ≈40% — the south half outside the fields and road, plus the north
block **E3–K8**; crop concealment ≈12% — old corn **Q3–AA8** (crop-row dashes, drawn as
Concealment mass); conifer ≈5% — **F17–I20**; marsh ≈5% — **A11–D14** spanning both banks at
the west bend; water ≈8%; clear pasture the rest.

**Water.** The Sorrel: rows **12–13**, full width A–AD, 2-wide. **The ford at N12–O13**
(4 squares): ford ticks across both rows; tint the ford squares `rough` under the ticks —
red clay, and the scenario's Handling trap.

**Roads.** Landis Road (clay — use `gravel` fill with `rust`-dot texture sparsely, `ink`
casings): enters **N1**, south along column N to **N11**, through the ford, resumes **N14** to
exit **N24**.

**Buildings.** **Parham's barn**, **L9–M10** (2×2): 1 Zone; Portals: door on the south face at
L10, door on the east face at M9. Split-rail fence **K11–P11** along the field edge south of
the barn. **True's Store (ruin)**, **T16–U17** (2×2): 1 Zone, roofless — draw walls in
`building` with the interior left as `paper` (no roof fill), rubble dots.

**Elevation.** High: **the Cutbank, P14–S14** — a bluff band on the south bank, index contour
tight against the river with hachures facing the water. Everything else Ground.

**Scripted positions & routes.** `civil-order` picket at the barn: **P1 at L10** (south door,
facing south), **P2 at M9** (corner, facing east). Blip routes: **B1** loop E4→K4→K8→E8→E4 in
the north woods; **B2** N16↔N22 drifting the south road. Convoy arrow at **N1**:
`CONVOY ENTERS T2` with a three-vehicle glyph string (pickup — box truck — technical).

**Edges.** CREW SETUP (brackets + label `SET-UP — HIDDEN`): the south half, rows **14–24**
(note on the map: *3+ squares from any road square*), plus a small secondary bracket on the
corn mass **Q3–AA8** (`UP TO 2 FIGURES`). EXFIL: west edge, rows **14–24**.

**Labels.** RED MUD CROSSING (at the ford), LANDIS ROAD, THE SORREL, PARHAM'S BARN,
THE CUTBANK, TRUE'S STORE (RUIN).

---

## map-03-the-substation.svg — Gault Ridge relay

**Orientation.** The fenced compound sits east of center on a cleared bench; the crew's
country is the west woods and the knob; the access road climbs from the south edge.

**Terrain masses.** Hardwood (leaves down — sparser dot texture than maps 01–02) ≈40% — west
and south of the compound; conifer ≈10% — a solid belt **rows 1–4, columns H–AA**; cleared
ground ≈15% — every square within 3 of the fence, drawn as `field` without crop rows; gravel
(yard interior + spur) ≈8%; the rest rough slope.

**The compound.** Chain-link perimeter rectangle from **N8** (NW corner) to **W15** (SE
corner), fence drawn on the boundary of that block; **gate at R15** (gap + gate-leaf strokes).
Yard interior: `gravel`. Contents: **transformer bank A at O10–P11** and **bank B at S10–T11**
— Block, drawn as transformer glyph clusters with `ink` outline, each with an objective mark
(`BANK A`, `BANK B`); **generator shed O13–P14** (2×2, 1 Zone, door north at O13);
**comms mast at V8** (lattice glyph + objective mark `MAST`); **control house U9–W11** (3×3):
2 Zones, split by a north–south dash between columns V and W — Z1 control room (east, column
W9–W11) with the objective mark `SWITCHGEAR` at W10, Z2 bunk room (west, columns U–V);
Portals: door south face V11, door west face U10, two windows north face V9/W9. **Roof sangar at V10**: sandbag ring glyph
on the roof, marked High, with a `authority` MG post symbol (**P3**, facing south) and a thin
`ink-soft` fire-lane wedge down the gate lane toward **R15–R20**.

**Roads.** The Relay Spur (gravel): enters **R24**, straight north up column R to the gate at
**R15**.

**Lighting.** Floodlight poles at the fence corners **N8, W8, N15, W15** and the **gate R15**;
dashed pools radius 3 around each.

**Elevation.** High: **Huckleberry Knob, D5–H9** (hardwood-covered knob, closed index contour,
`HIGH`); the **control house roof/sangar V10** (marked with the building, not a contour).
The compound bench itself is Ground.

**Scripted positions & routes.** `authority` posts: **P1 at R15** (gate, facing south),
**P2 at S15** (gate, facing east); landline wire dashed from the gate to the control house.
P3 is the roof sangar above. Note printed beside the house (Barlow, small): `OFF-SHIFT
FIRETEAM — Z2`. Blip routes: **B1** loop just inside the fence N8→W8→W15→N15→N8; **B2** the
dog run outside the south face, loop Q17→U17→U19→Q19; **B3** R18↔R24 on the spur; **B4**
J10↔J16 in the west woods. QRF arrow at **R24**: `QRF (ALARM)`.

**Edges.** INSERTION and EXFIL: west edge, rows **6–18** (one bracket span, both labels).

**Labels.** GAULT RIDGE RELAY, HUCKLEBERRY KNOB, RELAY SPUR, THE YARD, BANK A, BANK B.

---

## map-04-long-haul.svg — Dutton's Cross

**Orientation.** Piedmont crossroads country: Route 9 runs full width through the hamlet at
center; the truck comes from the east edge and must leave by the west; the river crosses the
south; the logging road runs the north edge.

**Terrain masses.** Field ≈50% — open crop and pasture blocks divided by hedgerows; hardwood
≈15% — riverbank trees (rows 19 and 22, broken), the NW orchard border, scattered lots;
orchard ≈6% — **Dutton's Orchard C7–H10**, planted rows (regular tree dots in lines);
water ≈9%; buildings/roads the rest. Hedgerow Concealment strips exactly 1 square wide along:
**row 8, J–T** · **column T, rows 3–8** · **row 16, E–N** · **column F, rows 12–16**.

**Water.** The Sorrel: rows **20–21**, full width. **Simmons Ford at O20–O21** (ford ticks).
**Hodge's Pond G17–H18** (water, hairline shore).

**Roads.** Route 9 (blacktop): enters **AD12**, west along rows 12–13 through the cross,
exits **A13**. Chapel Road (gravel): enters **O1**, south down column O through the cross at
**O12/O13**, over Simmons Ford, exits **O24**. Logging road (dirt — `gravel` with `rough`
texture): enters **AD5**, west along rows 4–5, exits **A4**; connector from **X5** south down
column X to Route 9 at **X12**.

**Buildings.** The hamlet: **store M10–O11** (3×2): 2 Zones — Z1 front (south, porch strip
along row 11), Z2 stockroom (north); door south N11, door east O10. **Chapel Q10–R11** (2×2):
2 Zones — Z1 nave, Z2 vestry; door west Q11; **belfry at Q10 marked High**. **House M14–N15**
(1 Zone, door north). **House Q14–R15** (1 Zone, door west). **Equipment shed T11–U12**
(1 Zone, full-width slider on the east face). **Dutton barn B5–C6** (1 Zone; **loft marked
High at B5–C6**).

**Elevation.** High: the chapel belfry **Q10**, the barn loft **B5–C6**, and the bald
**knoll V17–W18** (closed contour, `HIGH`). Otherwise Ground — this is flat country.

**Scripted positions & routes.** The checkpoint (`civil-order`): drum-barrier glyphs across
Route 9 at **P12–P13**; technical vehicle silhouette parked at **O13**, gun-lane wedge east
along the road; posts **P1 at P12** and **P2 at P13** (both facing east); **P3 at N12** (store
porch, facing east) and **P4 at N11** (porch corner, facing south), with a note `BOSS — STORE
Z1`. Blip routes: **B1** G12↔C12 on
west Route 9; **B2** O22↔O18 on the south track. Compact entry arrow at **O1**:
`COMPACT — TURN d6`. QRF arrow at **A13**: `QRF (ALARM)`.

**Edges.** INSERTION: east edge — truck glyph at **AD12**, bracket rows 11–14. EXFIL (truck):
**A13** and **A4**, each with a truck-exit arrow; EXFIL (crew): full west edge bracket.

**Labels.** DUTTON'S CROSS, ROUTE 9, CHAPEL ROAD, SIMMONS FORD, THE SORREL, DUTTON'S ORCHARD,
HODGE'S POND, LOGGING ROAD.

---

## map-05-signal-and-noise.svg — Prewitt Dam

**Orientation.** The lake fills the north; the dam crest crosses the gorge at row 8; the
ground-control site sits on the west abutment lot; the crew's approach is the wooded south
slopes.

**Terrain masses.** Water ≈30% — **Lake Sorrel, rows 1–7 full width** (shoreline wobbles
within row 7), plus spillway/stilling pool/tailrace; hardwood (leaves down) ≈35% — the south
slopes, rows 13–24 outside the road and conifer; conifer ≈8% — east edge **columns AA–AD,
rows 14–20**, plus a pocket **A18–C21**; rough ≈10% — the gorge walls **rows 9–11, K–S** (steep
hachures); gravel/concrete the rest.

**The dam.** Crest walkway: **row 8, columns J–U** — concrete (use `building` fill, `ink`
casings), 1 square wide, **High** along its whole length (hachure the south face of the dam
below it). **Gatehouse N8–O8** (2 squares, 1 Zone): door west face N8, roof is the marksman's
perch; objective mark `FREQ BOOK` inside. **Spillway chute T9–U11** (white-water dashes,
impassable), **stilling pool T12–U13**, **tailrace** flowing east rows 12–13 to **AD13**.
**Powerhouse P10–Q11** (2×2, 2 Zones, barred doors — draw door strokes with lock ticks) at the
dam foot.

**The site (west abutment).** Visitor lot **F9–J11** in `gravel`: **GCS trailer G10–H10**
(2 squares, 1 Zone, door east at H10; objective marks `TRAILER` and inside it `AIRFRAMES`);
**antenna mast G9** (lattice glyph, objective `MAST`); **generator F11**; **fuel blivet I11**
(objective `BLIVET`); lit pole **H9**.

**Roads & trails.** Route 9 spur (gravel): enters **D24**, switchbacks north — D24→D20→E16→
**E14 (line-cut pole, objective mark `LINE`)**→E13→F12 into the lot. Line poles (dots) follow
it. East foot trail (dashed `ink-soft` path): **AD16**→Z13→X10→**W9** onto the knob.

**Lighting.** Floodlights at **K8** and **R8** on the crest, pole **H9** in the lot; dashed
pools radius 3.

**Elevation.** High: the crest walkway **J8–U8** (gatehouse and its roof with it) and the
**East Knob V8–X9** (closed contour, `HIGH`). The gorge walls are steep Rough, not High.

**Scripted positions & routes.** `authority` posts: **P1 at F12**, **P2 at G12** (lot
entrance, both facing south down the spur); **P3 at S8** (crest, facing south over the gorge);
**P4 at T8** (crest, facing east to the knob trail); marksman symbol on the gatehouse roof
(**P5**, scoped glyph); note at the trailer: `DRONE TEAM — OP + RTO`; note at the gatehouse:
`OFFICER — FIXED SET`. Blip routes: **B1** J8↔U8 along the crest; **B2** loop
F9→J9→J11→F11 around the lot; **B3** AD16→W9 up the trail; **B4** M16↔R18 on the south slope;
**B5** (draw in lighter dash, keyed in the legend as *conditional — S3 ALARM*) P13↔T13 on the
tailrace path. QRF arrow at **D24**: `QRF (ALARM)`.

**Edges.** INSERTION and EXFIL: south edge, columns **H24–AA24** (one bracket span, both
labels).

**Labels.** PREWITT DAM, LAKE SORREL, THE GATEHOUSE, SPILLWAY, TAILRACE, POWERHOUSE,
ROUTE 9 SPUR, EAST KNOB.

---

## map-06-they-came-at-dawn.svg — Bray Hollow

**Orientation.** The hollow runs bottom (mouth, south) to top (head and Chinquapin Gap,
north); high benches wall both flanks; the Warden enters from the south and east edges; the
families leave by the north. First snow: ground is `paper` with sparse `tan` grass ticks —
this is the one map whose base reads white; keep terrain fills but lighten texture density.

**Terrain masses.** Open pasture ≈30% — **the Bottoms, rows 15–22** between the benches, plus
the churchyard flats; hardwood (bare — outline-heavy, minimal dots) ≈35% — the bench slopes;
conifer ≈8% — **the gap stand L1–P3** (canopy — mark with the canopy ring used on drone-immune
stands) and a pocket **A21–C23**; orchard ≈3% — **D6–E9** by the farmhouse; water/roads/
buildings the rest.

**Water.** Bray Creek, 1-wide, source at **P1**: P1→O4→N7→**N10 (plank footbridge)**→M13→
**M18 (ford)**→**M21 (culvert under the farm track)**→exits **M24**.

**Roads & trails.** The hollow road (gravel): enters **L24**, north up the creek's west side —
L24→L20→L14→L10→L7 — ending in the churchyard at **L6**. The gap trail (dashed path): from the
churchyard **M4**→M2, exiting the north edge across **L1–N1** through the conifer stand.
The east bench trail (dashed path): enters **AD8**→Z7→V6→**T6**.

**Buildings.** **Little Union Church K4–M6** (3×3): 2 Zones — Z1 nave (south 2 rows), Z2 back
room (north row); double door south face L6, back door west face K5; **belfry at L4 marked
High**; objective mark `CACHE` in Z1. **The Creek School P5–R6** (3×2): 2 Zones — Z1
schoolroom (west 2×2), Z2 cloakroom (east); door west P6, window strip south. **Bray
farmhouse F7–G8** (2×2): 2 Zones; door east G8, door west F7. **Barn E10–F11** (2×2): 1 Zone
+ **loft marked High at E10**; slider south E11.

**Walls & furniture.** Stone fences (low Cover): along **row 14 from H14 to R14**, with gaps
at the road (**L14**) and the creek (**M14**); along the road's west side **L16–L20**; orchard
wall **D6–D9**. The **district sign at L23**, beside the road: a small `ink` signboard glyph —
this is the map's one sanctioned motto mark: stencil-brush `rust` letters, per style guide §1
(keep it small; it reads at arm's length, not across the room).

**Elevation.** High: **west bench, columns A–C, rows 2–20**; **east bench, columns X–AD,
rows 2–18**; the belfry **L4**; the barn loft **E10**. Bench edges get index contours with
hachures facing the hollow floor.

**Scripted positions & routes.** No standing garrison — this map prints **entry arrows**
(blaze, with turn labels) instead of posts: `FIRETEAM A — T1` at **J24–L24**; `FIRETEAM B —
T1` at **Q24–S24**; `MG TEAM + COMMAND — T2` at **L24** (road); `MARKSMAN — T2` and `COC
SQUAD (CORDON) — T3` sharing the east trail head at **AD8**, the Cordon's assigned route drawn
as an `olive-light` dashed line AD8→T6; `QRF — MRAP (ALARM)` at **L24**. Column marker: a
civilian-column glyph string in the churchyard at **L5–M6** with a movement arrow up the gap
trail, labeled `COLUMN — MOVES T2`.

**Edges.** CREW SETUP: bracket the whole board north of and including row 14 (label `SET-UP —
ROWS 1–14`). EXFIL: north edge, columns **K1–P1** — THE GAP, brackets through the conifer
stand.

**Labels.** BRAY HOLLOW, BRAY CREEK, CHINQUAPIN GAP, LITTLE UNION CHURCH, THE CREEK SCHOOL,
BRAY PLACE, THE BOTTOMS.

---

## Cross-map continuity notes (for the artist's eye, not the rules)

- Map 01 sits at the **mouth of Bray Hollow**: its Bray Creek (column N, flowing south to the
  Sorrel) is the same creek that runs the length of map 06. Let the two maps' creek
  linework and the hollow-road/gap-trail character agree.
- Maps 01 and 03 share **Gault Ridge**: map 01's north bench is the same landform as map 03's
  setting; contour character should match.
- Maps 02 and 04 share the **Sorrel's middle reach** (red-clay banks — a thin `rust` tint line
  along the waterline is welcome on both), and map 05 is its gorge headwater at **Prewitt
  Dam**; the lake, spillway, and tailrace explain where every other map's water comes from.
- Season progression is part of the art: maps 01–02 full canopy (dense hardwood dots), 03–05
  leaves down (sparse dots, more visible contour), 06 first snow (pale ground, bare trees).
  It must be visible when the six maps are laid side by side — the campaign's sightlines
  literally open map by map.
