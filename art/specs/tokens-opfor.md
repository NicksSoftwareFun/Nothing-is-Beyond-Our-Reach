# Asset spec: OPFOR, vehicle, and drone tokens

Read `/design/style-guide.md` §4.1, `/art/lib/palette.json`, copy from
`/art/lib/components.svg`. Stats context: `/data/opfor.yaml`, `/data/vehicles.yaml`,
`/data/drones.yaml`. Infantry viewBox `0 0 100 100` facing up + blind notch; vehicles
`0 0 200 100` facing up (long axis vertical — draw in a 100×200 sense rotated? NO:
**draw vehicles in viewBox `0 0 100 200`**, nose at top); drones `0 0 75 75`, no notch.

## Infantry — `/art/tokens/opfor/` (ring color per faction, §palette)
| File | Ring | Body/head | Weapon | Badge |
|---|---|---|---|---|
| opfor-eca-rifleman.svg | authority | standard, helmet | carbine | none |
| opfor-eca-team-leader.svg | authority | standard, helmet | carbine | leader |
| opfor-eca-mg-gunner.svg | authority | heavy, helmet | mmg | ammo |
| opfor-eca-ag.svg | authority | pack (spare barrel/tripod), helmet | carbine | ammo |
| opfor-eca-marksman.svg | authority | standard, cap | hunting-rifle | crosshair |
| opfor-eca-sentry.svg | authority | standard, helmet | carbine | eye |
| opfor-eca-officer.svg | authority | standard, cap | pistol | leader |
| opfor-eca-rto.svg | authority | pack (antenna), helmet | carbine | radio |
| opfor-eca-srt.svg | authority (double ring: outer 6 + inner 1.5) | heavy, helmet | carbine | skull |
| opfor-eca-drone-op.svg | authority | standard, helmet | pistol | drone |
| opfor-coc-militiaman.svg | civil-order | standard, cap | carbine | none |
| opfor-coc-boss.svg | civil-order | heavy, cap | battle-rifle | leader |
| opfor-compact-fighter.svg | compact | standard, hood | battle-rifle | none |
| opfor-compact-headman.svg | compact | standard, cap | carbine | leader |
| opfor-ferryman-gunhand.svg | ferrymen | standard, hood | smg | none |
| opfor-marauder.svg | marauder | standard, bare | shotgun | none |
| opfor-marauder-chief.svg | marauder | heavy, hood | battle-rifle | skull |

## Vehicles — `/art/tokens/vehicles/` (viewBox `0 0 100 200`, top-down, nose up)
| File | Ring/edge | Notes |
|---|---|---|
| vehicle-sedan.svg | neutral | civilian sedan |
| vehicle-pickup.svg | neutral | open bed visible |
| vehicle-box-truck.svg | neutral | box roof |
| vehicle-technical.svg | civil-order | pickup + ring-mounted HMG in bed |
| vehicle-patrol-truck.svg | authority | slat/plate hints on cab |
| vehicle-mrap.svg | authority | angular hull, turret MMG circle |
| vehicle-motorcycle.svg | neutral | narrow, rider silhouette |
| vehicle-wreck.svg | ink/rust | burned frame marker — usable atop any wreck |

Vehicle tokens: faction color as an edge band (stroke 6 rounded rect inset), not a circle
ring; ink outline; roof detail top-down (hood, windshield band, bed/turret).

## Drones — `/art/tokens/drones/` (viewBox `0 0 75 75`)
| File | Color | Notes |
|---|---|---|
| drone-crew-recon.svg | crew ring thin | quad rotor X, camera dot |
| drone-crew-fpv.svg | crew | quad + warhead wedge |
| drone-crew-dropper.svg | crew | quad + hanging cylinder |
| drone-eca-recon.svg | authority | quad, sleeker arms |
| drone-eca-fiber-fpv.svg | authority | quad + trailing spool line to token edge |
| drone-eca-dropper.svg | authority | quad + cylinder |
