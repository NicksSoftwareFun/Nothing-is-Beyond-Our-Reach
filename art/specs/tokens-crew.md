# Asset spec: Crew & Support tokens

Read `/design/style-guide.md` (§4.1 token anatomy is binding), `/art/lib/palette.json`,
copy shapes from `/art/lib/components.svg`. All viewBox `0 0 100 100`, facing up, crew ring
(`#D96C2E`), `c-blind-notch` at rear. Files in `/art/tokens/crew/` and `/art/tokens/support/`.
Match weapons/roles to `/data/crew.yaml` (`gear_default`). Role badge glyph bottom-right.

| File | Body/head | Weapon overlay | Badge glyph |
|---|---|---|---|
| crew-deacon.svg | standard, cap | carbine | leader (chevrons) |
| crew-vasquez.svg | heavy (plates corners), helmet | carbine | leader |
| crew-boone.svg | heavy, cap | mmg | ammo |
| crew-pham.svg | pack, cap | pistol | medic |
| crew-ledford.svg | standard, hood | hunting-rifle | eye |
| crew-okafor.svg | pack, helmet(hardhat reads as helmet) | shotgun | gear |
| crew-delgado.svg | standard, cap | smg | gear (steering-wheel variant if drawn) |
| crew-vance.svg | standard, bare | shotgun | shield |
| crew-birdy.svg | standard (slighter), hood | pistol | eye |
| crew-grant.svg | standard, cap | shotgun | shield |
| crew-haddad.svg | standard, helmet | carbine | medic |
| crew-petty.svg | pack (antenna whip line), bare | pistol | radio |
| support-driver.svg | standard, cap | none (hands at wheel arc) | gear |
| support-porter.svg | pack (double), cap | none | ammo |
| support-guide.svg | standard, hood | none | eye |
| support-medic.svg | pack, cap | none | medic |

Support tokens use the `neutral` ring (`#C9BA95`) with a thin inner crew-orange ring
(stroke 1.5) to read as "ours, but simplified."
