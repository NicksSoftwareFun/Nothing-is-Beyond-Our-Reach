# Asset spec: Status tokens, track markers, blips, objectives

Read `/design/style-guide.md` §4.2. ViewBox `0 0 75 75`. Glyph-first: `paper-bright` disc
(r 34), ink glyph (copy from components), state ring stroke 3 — `rust` #9C4A38 bad states,
`olive` #5B6244 good/neutral, `blaze` #D96C2E alerts/player-active. Short Oswald label under
glyph only where listed. Files in `/art/tokens/status/`, `/art/tokens/markers/`,
`/art/tokens/objectives/`.

## Status — `/art/tokens/status/`
| File | Glyph | Ring | Label |
|---|---|---|---|
| status-shaken.svg | shaken (zigzag) | rust | — |
| status-pinned.svg | pinned | rust | — |
| status-down.svg | wound (drop) + horizontal figure bar | rust | DOWN |
| status-dying.svg | bleed (three drops) | rust | DYING |
| status-bleed.svg | wound drop | rust | — |
| status-stunned.svg | shaken + star | rust | — |
| status-prone.svg | prone | olive | — |
| status-overwatch.svg | overwatch eye | blaze | — |
| status-hidden.svg | eye crossed | olive | — |
| status-aim.svg | crosshair | olive | — |
| status-ammo-low.svg | ammo | rust | — |
| status-jammed-weapon.svg | ammo + X | rust | JAM |
| status-smoke.svg | smoke cloud | olive | — |
| status-fire.svg | flame | rust | — |
| status-ew-jam.svg | jammer broken-wave | blaze | — |
| status-breached.svg | roadblock bar broken | olive | — |

## Track & play markers — `/art/tokens/markers/`
| File | Glyph | Ring | Label |
|---|---|---|---|
| marker-noise.svg | noise rays | rust | — (cube-tracker pawn face) |
| marker-turn.svg | numeral slot (blank center box) | olive | TURN |
| marker-alert.svg | alarm bell | blaze | — |
| marker-interrupt.svg | d10 outline | blaze | — |
| marker-blip.svg | blip (?-diamond) | ink ring, `tan` disc | — (print x12, numbered 1–12: include a `<text data-field="num">` centered) |
| marker-blip-qrf.svg | blip + chevrons | ink ring, `authority` tint disc | QRF |
| marker-known.svg | eye | blaze | — |
| marker-bz.svg | beaten-zone arrows (2×4 hint) | rust | BZ |

## Objectives — `/art/tokens/objectives/`
| File | Glyph | Ring |
|---|---|---|
| obj-cache.svg | cache crate | olive |
| obj-intel.svg | intel document | olive |
| obj-prisoner.svg | prisoner | olive |
| obj-generator.svg | generator bolt | olive |
| obj-mast.svg | mast tower | olive |
| obj-charge.svg | plunger | blaze |
| obj-roadblock.svg | roadblock | rust |
| obj-sensor.svg | sensor pulse | rust |
