# Crew-Served Weapons {#ch-crew-served}

::: flavor
Boone ran the gun class at the quarry, and the first thing he did was make everyone carry it. Up the spoil bank and down again — gun, tripod, spare barrel, and the belts — until the arithmetic lived in their shoulders. Then he set it up and let each of them fire a burst, watched them fall in love, and took the gun away. *The steel is the cheap part,* he said. *Steel doesn't tire and steel doesn't bleed. What they'll try to kill is everything around the steel — the one feeding it, the one hauling for it, the two minutes it takes to move it. They can make more guns. They can't make more of you.*
:::

This chapter owns the weapons that fight as a team's job rather than one figure's action: the machine guns, Sustained Fire and the Beaten Zone, and the Warden's mortars. Nothing upstream changes — a shot from a machine gun still runs the attack procedure ({{ref:sec-attack-procedure}}), its hits still resolve by target type ({{ref:sec-wound-procedure}}, {{ref:sec-opfor-casualty}}), and Shaken still means exactly what {{ref:sec-shaken}} says. What this chapter adds is the team, the specialist actions {{ref:sec-ap}} promised, and one genuinely new idea: an attack made against ground instead of a silhouette. Vehicle mounts are resolved where vehicles live ({{ref:ch-vehicles}}); the scripts the Warden runs its gun teams on live with its Doctrines ({{ref:ch-enemy-system}}).

## The Gun Team {#sec-gun-team}

{{card:weapons.mmg}}

The Medium Machine Gun is served by three jobs. The jobs are positions, not names: any Crew figure or support unit standing in one is doing it, and the rules read the position, never the roster.

- **The Gunner** carries the piece, deploys it, and fires it. Whoever is behind a deployed gun is its Gunner.
- **The Assistant Gunner (AG)** occupies the feed-side square adjacent to the gun. The AG feeds the belt, watches the fall of shot, and halves nearly every cost the gun has — deploying the tripod, reloading, packing up. A figure serves as AG only while it can act: a Down or Pinned figure serves nothing. A Shaken AG can still push a belt — it feeds, but it does not spot ({{ref:sec-sustained-fire}}).
- **The Ammo Bearer** is optional, and is wherever the spare belts are: any figure carrying extra ammunition for the gun. An Auxiliary Porter serving as Bearer carries two belts, per its card.

Kill the figure and the job dies, not the gun. Lose the **Gunner** and the weapon lies where it fell — any figure adjacent may take it over with an Interact (2 AP) and become its Gunner. Lose the **AG** and Sustained Fire stops — no feed, no Beaten Zone — reloads slow to a crawl, and packing up takes twice as long, until another figure moves into the feed square and takes the job. Lose the **Bearer** and the ammunition clock starts: the belts on the body stay on the body until someone recovers them (Interact, 2 AP, adjacent).

{{svg:diagrams/diagram-csw-roles.svg}}

::: sidebar
**Margin note, Boone's hand:** *The Corps builds a gun team backward from how the movies do. The junior man shoots. The senior man lies beside him — binos on the beaten zone, hand riding the belt, calling every correction — and the barrel change, the rate, the next position are all his. Trigger work is the easiest thing we teach. Keeping a gun fed, cool, laid on ground that matters, and alive is the whole trade. So when you are on the wrong end of one: don't shoot the man shooting. Shoot the one beside him who looks like he's doing nothing. He is not doing nothing.*
:::

## The Crew-Served Traits {#sec-csw-traits}

Four traits mark these weapons. They are named in the trait glossary ({{ref:sec-traits}}) and defined here.

**Crew-Served.** The weapon fires only while deployed ({{ref:sec-deploy}}) — never from the shoulder or the hip, not even a Snap Shot. Its Reload costs 3 AP, not 2 ({{ref:sec-ap}}). Off its mount it is a load, not a weapon: a figure carrying a packed gun has both hands full and moves at half AP, exactly like carrying a casualty ({{ref:ch-wounds}}). Boone's Strong Back ignores that penalty, which is half the reason he is Gun One. Inside a Zone, a crew-served weapon fires at the long-gun penalty ({{ref:ch-close-quarters}}), and Sustained Fire is impossible into, out of, or within a Zone — with one exception: a gun deployed Posted at a Portal may lay its Beaten Zone on the grid outside. The classic gun in a window.

**Sustained.** The weapon may take the Sustained Fire action ({{ref:sec-sustained-fire}}). It also makes normal Aimed and Snap Shots while deployed, on the Gunner's Shoot line at the weapon's DR, and it is Automatic, with everything the near miss implies ({{ref:sec-attack-procedure}}). A deployed gun holding AP takes Reaction Fire like any figure ({{ref:sec-reaction-fire}}); there is no better Overwatch in the game.

**Mounted.** The weapon fires from a tripod or a vehicle mount only — never a bipod, never arms. A vehicle mount counts as deployed; fighting from vehicles belongs to {{ref:ch-vehicles}}.

**Indirect.** The weapon uses neither the attack procedure nor its own LOS. It fires by the indirect procedure — a spotter and a walked-in round — defined at {{ref:sec-mortars}}.

## Into Action, Out of Action {#sec-deploy}

**Deploying.** Setting the gun on its **bipod costs 2 AP** and puts the Gunner prone behind it — low, stable, in Cover at any distance a prone figure earns it ({{ref:sec-cover}}), and seeing nothing over a wall. Setting up the **tripod costs 4 AP with an AG assisting, 6 AP without.** The tripod raises the gun: the Gunner fights from behind low cover rather than under it, firing over what a prone gun cannot see, and it is the only ground mount a Mounted weapon accepts. A deployed gun fires. An undeployed gun is freight.

**Displacing.** Packing the gun to move costs **4 AP — 2 with an AG.** This is the vulnerability window, and it is doctrinal and real: **from the moment packing begins until the gun is next deployed, the Gunner and AG count as Open against every attack, whatever the terrain says, and may not take Reaction Fire.** Then the gun travels as a load until somebody pays to put it back into action. Every machine gunner since the trenches has known this arithmetic — the team is never more killable than in the minute it stops being a gun team and becomes people carrying furniture. Plan a displacement like a withdrawal, because it is one: smoke, a covering rifle, and the next position chosen before the first goes quiet.

<!-- TODO-TABLE: csw-actions, per-configuration AP summary for this chapter and the QRS — deploy bipod / deploy tripod / pack up / Reload / take over a gun, each with and without an AG, plus Sustained Fire (bible §12) -->

## Sustained Fire {#sec-sustained-fire}

Sustained Fire is the reason the team exists. It costs **4 AP** and requires all three: the gun **deployed**, a belt with actions left on it ({{ref:sec-belts}}), and an **AG feeding**. No AG, no Sustained Fire — a lone gunner owns a heavy automatic rifle and nothing more.

**1. Lay the template.** Place the Beaten Zone template — 2 squares wide, 4 long — with its long axis along the line of fire and its nearest edge at the target square. Every square of it must be in the Gunner's LOS and within the gun's Effective Range ({{stat:weapons.mmg.eff}} squares for the MMG).

**2. Make one attack roll: 2d10 against a flat TN of 11.** Not the Gunner's Shoot line — the Sustained TN of {{table:beaten-zone}}. There is no Cover TN and never will be: the Beaten Zone ignores low cover along its axis, because grazing fire owns the hand's width of air above every wall's lip. Take **−1 TN if the AG is spotting** — it has LOS to the template and is not Shaken. Boone's Machine Gunner skill fires Sustained at a base of 10 instead. Modifier lines that describe the gun and its crew apply as usual — a Shaken Gunner's +2, obscuring smoke or darkness, an elevated position's −1; lines that describe a single target (Sprinting, Point Blank) never apply, because the Beaten Zone has no single target. A natural 2 jams the gun, cleared by Reload; a natural 20 resolves every hit in the template as a catastrophic hit ({{ref:sec-attack-procedure}}).

**3. Resolve every figure in the template.** On a success, **every figure in the Beaten Zone takes a hit at DR {{stat:weapons.mmg.dr}}** — a Casualty Die for the Warden's people, Hit Location and Severity for yours, rolled per figure. **Success or failure, every figure in the Beaten Zone is Shaken unless prone.** Even the burst that kills nobody rewrites the next thirty seconds.

Sustained Fire is gunfire for Noise purposes, under the gunfire cap ({{ref:sec-noise}}).

{{card:crew.boone}}

### The Beaten Zone {#sec-beaten-zone}

{{table:beaten-zone}}

{{svg:diagrams/diagram-beaten-zone.svg}}

**The template persists.** When the action ends, the marker stays: the gun is laid, locked, and firing interval bursts across that ground. Remove it when the gun moves or packs up, Reloads, fires at anything outside the template, loses its AG, or when its Gunner leaves the trigger — Down, Pinned, dead, or stepped away. Shaken alone does not lift it; flinching men keep firing. While the marker stands, the same Gunner may Sustain again on the same lay — a fresh 4 AP, a fresh belt action, a fresh roll, the full effect repeated.

**Crossing an active Beaten Zone.** Every square of the template costs **double AP to enter**, and **each square entered draws one immediate attack at a flat TN of 13** — no Cover TN, no modifiers, resolved the instant the figure enters, per square, every figure, either side. A hit is a hit at DR {{stat:weapons.mmg.dr}}, wound procedure or Casualty Die as ever. Crawling doubles from 2 to 4 AP per square and the attacks come anyway; prone spares your nerve — the Shaken clause — not your body. Leaving the zone works the same way: every template square entered on the way out is paid for and shot at.

The rule is symmetric, and mostly it will be pointed at you. The Warden's MG teams run everything in this chapter — its Base-of-Fire Doctrine is built on this action ({{ref:ch-enemy-system}}) — and its ECA gun team is a pair with no Bearer: kill its AG and it loses the Beaten Zone, exactly as its card says. Treat an active enemy zone as terrain, because that is what it now is: ground with a price printed on it.

::: designer
The Sustained roll ignores the Gunner's marksmanship on purpose. A laid, traversing gun is not "aiming" in any sense your rifle understands — the beaten zone is a property of the tripod, the traverse, and the man calling corrections, which is why skill enters the number as the AG's −1 and Boone's trade, not a Shoot line. It has no Cover column for the same reason: grazing fire is geometry, not accuracy, and a low wall's lip sits inside the band the rounds own. The crossing tax is tuned so that four upright squares through an active zone are odds-on to end in at least a Serious wound or a Down. The zone is not meant to be crossed. It is meant to be answered — kill the team, or go around.
:::

### Belts, Reloads & Jams {#sec-belts}

A belt feeds **3 Sustained Fire actions**; normal shots off the gun are rounding error and cost the belt nothing. When the third is spent the gun is dry: **Reload — 3 AP with an AG, 5 AP without one.** A gun reloaded without an AG feeds dirty: until its next Reload with an AG assisting, every attack roll it makes jams on a natural total of 4 or less, not just the natural 2. Boone's Machine Gunner reloads at 2 AP with an AG.

The team carries its war on its backs: one belt on the gun, one spare on the AG, two more on the Bearer — four belts, twelve bursts, a full mission's argument. Track the belts with a d6 standing beside the gun: the ammo die. Field the gun without a Bearer and you start two belts poorer; lose a carrier mid-fight and their belts wait on the body for an Interact (2 AP, adjacent) to bring them back into the fight. What belts cost the campaign in Supply is accounted in {{ref:ch-long-war}}.

::: example
**The toll at Herron's field.** Turn six, and the OPFOR is Alerted. Marcus Boone — Gun One, {{stat:crew.boone.ap}} AP — has the MMG on its tripod on the mill-race embankment, laid across the harvest field at the fence gap every approach funnels through. An Auxiliary Porter, Odell, who humped the belts up the bank, lies in the feed square: able to act, so he is the AG. A Civil Order squad — five Corpsmen and their Boss; Corpsmen Shoot {{stat:opfor.coc-militiaman.shoot}}, Armor {{stat:opfor.coc-militiaman.armor}} — is working up the fence line toward the mill.

*Boone activates.* The gun is deployed and Odell is feeding: Sustained Fire is legal, 4 AP. He lays the template on the gap — 2 wide, 4 long, nearest edge on the gap square, all eight squares in LOS and inside {{stat:weapons.mmg.eff}}. Three Corpsmen are inside it, two upright, one prone. The roll: the flat TN is 11, Boone's Machine Gunner makes it 10, and Odell — feed square, LOS to the field, not Shaken — spots for −1: **TN 9.** Boone rolls **6 and 5 — 11. Success.** Every figure in the zone takes a hit at DR {{stat:weapons.mmg.dr}}, one Casualty Die each: **7** + 4 − 0 = **11, Dead**. **2** + 4 − 0 = **6, Down**. **1** + 4 − 0 = **5, Down** — against an unarmored man the die cannot roll low enough to spare him; the floor of a machine-gun hit is Down. The Shaken-unless-prone clause has nobody left to frighten. Turn the ammo die: one of the belt's three actions spent. Boone ends his activation holding 4 AP — two Reaction Fires behind a laid gun — and the template stays on the table. Three of six figures Down or Dead is half the element: the survivors owe Grit tests, and one Corpsman fails even on the Boss's Cruel reroll ({{ref:ch-human-factor}}).

*Warden Phase.* The Directive pushes the squad toward its Known enemy. The flank route around the template is a six-square detour; the shortest path cuts one corner square of the zone, and this turn the Warden judges the detour worse — it pays the toll. A Corpsman steps into the template: the square costs double, 2 AP, and entering it draws the crossing attack — **flat TN 13**, no Cover, no modifiers. The Warden rolls **8 and 6 — 14. Hit.** Casualty Die: **3** + 4 − 0 = **7, Dead** on the wire. The last Corpsman takes the detour. Then the Boss answers from the fence — the fire came from the gun team, and between its two figures the Good-Faith Clause picks the target the Crew can least afford: the AG. Boone's embankment makes it a Cover shot off the Boss's Shoot {{stat:opfor.coc-boss.shoot}}: TN 14. The Warden rolls **9 and 8 — 17. Hit.** Odell is a support unit — Casualty Die at −1: **6** − 1 + {{stat:weapons.battle-rifle.dr}} − 0 = **8. Dead** in the feed square.

Count the field. Four of the Warden's figures Down or Dead for one porter — a trade the ground forced, which is what a laid gun is *for*. But the moment Odell dies, the Beaten Zone marker comes off the table, and Gun One is broken as a system: no Sustained Fire, the next Reload at 5 AP and jamming on a natural 4 or less, the tripod and pack-up costs doubled — until somebody crawls into the feed square and takes the job. The Noise ledger closes at the gunfire cap: +3 ({{ref:sec-noise}}).
:::

## The Heavy Machine Gun {#sec-hmg}

{{card:weapons.hmg}}

The HMG is the same frame with bigger numbers — DR {{stat:weapons.hmg.dr}}, Pen {{stat:weapons.hmg.pen}}, {{stat:weapons.hmg.eff}} squares of Effective Range — and one hard restriction: it is **Mounted**. No bipod, no shoulder; it fights from a tripod dug in behind a berm, or from the ring mount of a technical. Every rule in this chapter applies unchanged, with the Beaten Zone's hits and crossing attacks resolved at the firing weapon's DR — {{stat:weapons.hmg.dr}} here. A vehicle mount counts as deployed, and a second crew member aboard may serve as AG; the gun may fire Sustained only while the vehicle is stationary, and everything else about shooting from, at, and out of vehicles — including what Pen {{stat:weapons.hmg.pen}} does to an armored hull — belongs to {{ref:ch-vehicles}}. When the Civil Order Corps' technical crests the ridge road, this is the gun on it, and the displacement window you practice with the MMG is the habit that keeps you alive under it.

## The Warden's Mortars {#sec-mortars}

{{card:weapons.mortar-60}}

The 60mm mortar is a **scenario asset — the Warden's weapon, not yours.** When a mission fields one, the sheet places the tube: on the board with a crew that can be killed, or off the table where only its rounds visit. Either way the tube is blind. It fires only through a **spotter**: an OPFOR figure with working comms — a radio, a vehicle set, a landline — and LOS to the target area, aiming at a **Known** Crew position, because the Warden never shoots what it does not Know ({{ref:ch-fieldcraft}}).

While the link holds, the tube fires one round per Warden Phase, and the rounds walk:

1. **Spotting round.** The aim square is a Known position. The round scatters: d8 for direction — 1 is north, counting clockwise — and d6 halved, rounded up, for squares of drift. Mark the impact square; the round detonates at the end of the Warden Phase like any explosive, and figures may dive away ({{ref:ch-ranged-combat}}). The impact is a Blast-1 blast attack at DR {{stat:weapons.mortar-60.dr}} against every figure within 1 square.
2. **Corrections.** Each following Warden Phase, the next round lands **1 square closer** to the aim square along the scatter line — the spotter is talking it in. At zero, fire for effect: a round on the aim square itself every Warden Phase the link survives.
3. **Breaking the walk.** The walk needs all three legs, every Phase: the spotter alive, its comms working, its LOS to the fall of shot intact. Break any leg — kill the spotter, cut the landline, jam the net, smoke the OP — and the tube goes silent. A replacement spotter, or a new aim square because you moved, starts over from a fresh spotting round.

Fear it in the right order. The first crump lands wide, and that wideness is a message: you have perhaps two turns before the rounds arrive where you are — {{stat:weapons.mortar-60.eff}} squares of reach means nowhere on the board is out of range, and no wall matters to a round arriving from above. So do not argue with the round. Displace, break LOS, become Unknown, and the walk dies blind — or run the message backward up the wire: somewhere a man with binoculars and a radio is killing you by voice. He has a square on the board. He is the target.

<!-- TODO-TABLE: mortar-walk-in, the Warden's 60mm procedure as a step table for the QRS — link requirements, spotting-round scatter, correction step, fire for effect, break conditions (bible §12) -->

::: designer
The two halves of this chapter are one pincer, built deliberately. The Beaten Zone punishes moving; the mortar punishes staying — between them the game outlaws the wargamer's favorite sin, the perfect position held forever. Notice that every counter to the mortar is human, not material: you cannot shoot down a round, but the round is aimed by a network — a spotter, a radio, a line of sight — and networks have throats. Killing the observer instead of the weapon is this game's whole thesis wearing the other side's uniform.
:::

---

The gun team, the ground it owns, and the tube that answers it: that is the chapter. Where these weapons ride instead of walk — mounts, technicals, and what Pen does to a hull — is {{ref:ch-vehicles}}; how the Warden emplaces its guns and when its Doctrine displaces them is {{ref:ch-enemy-system}}; what belts and tubes cost a campaign that has to steal them is {{ref:ch-long-war}}. And the next time a fence gap looks like the short way, look along it first. Somebody may already own that ground.
