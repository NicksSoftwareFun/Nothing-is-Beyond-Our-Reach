# Core Concepts {#ch-core-concepts}

::: flavor
Deacon didn't start us on shooting. He walked us up the fire road above Dutton's orchard, put us on line facing the valley, and gave us an hour of silence. Then came the questions. What covers you from the church tower? Where does the creek bend out of sight of the road? How long to cross Tolley's pasture at a dead run — and who is watching while you do it? Write it down, he said. The ground is the only honest thing left in this county. Learn to read it faster than they can, and nothing down there is beyond our reach.
:::

This chapter is the grammar of the REACH system: which die does what, how a test works, how to read a card, and how the game sees space — squares outdoors, Zones indoors, line of sight, cover, and facing. Every other chapter builds its sentences from these parts. The Warden — the system of dice, tables, and Directive cards that runs everything you are fighting — is introduced in {{ref:ch-welcome}} and fully specified in {{ref:ch-enemy-system}}; here you only need to know that when a rule says "the Warden rolls," you roll, on its behalf and in good faith ({{ref:sec-good-faith}}).

Read this chapter once, play a turn or two, then come back for whatever you skimmed.

## One Die, One Job {#sec-dice}

The game uses a standard polyhedral set: two ten-sided dice, plus one each of the d8, d6, and d20. Each die type has exactly one job, and the jobs never mix. This is deliberate. The shape of the die in your hand tells you what kind of question the game is asking before you read a word of the rule.

| Dice | Job |
|---|---|
| **2d10 (sum)** | Every skill test and every attack. Roll both dice, sum them, add modifiers, and compare the total to a Target Number (TN). Results bell-curve from 2 to 20 around a midpoint of 11. |
| **1d10** | Every resolution table: the Casualty Die, Hit Location, Severity, the Contact Table, Doctrine fallback lines, and the Interrupt Die. One die, one lookup, done. |
| **1d8** | Scatter and drift direction — eight compass points, with a result of 1 pointing away from the thrower (or north of the template) and the rest counting clockwise. |
| **1d6** | Distances and clocks: scatter distance, QRF arrival, bleed-out, and ammo or battery dice. |
| **1d20** | Campaign-layer tables only — events, dilemmas, and injury recovery between missions. The d20 never appears in tactical play. |

Roll the two d10s where both faces can be seen, because natural results are read from the faces, not the sum: a natural 20 is *both dice showing 10*, a natural 2 is *both dice showing 1* ({{ref:sec-extremes}}). The pair is always summed — never read as a percentile roll — and the two dice do not need to match or be distinguishable from each other.

The 2d10 curve matters more than it looks. Because two dice sum, results cluster around 11 and every point of TN near the middle swings your odds by roughly ten percentage points. A one-point improvement — a Braced position, an elevated perch — is never cosmetic. This is why the modifier list ({{ref:sec-tests}}) is short and why every entry on it is worth fighting for.

Two conventions apply everywhere in the game:

- **Round halves up.** Whenever a rule halves AP, Speed, distance, or anything else, round the result up.
- **One reroll, ever.** A die may never be rerolled more than once, no matter how many effects would allow it. The second effect is wasted.

## The Test {#sec-tests}

Every question of skill or violence in the REACH system resolves the same way.

1. Roll 2d10 and sum the dice.
2. Add every situational modifier that applies.
3. Compare the total to the TN. Equal or higher: success. Lower: failure.

That is the whole engine: `2d10 + modifiers ≥ TN`.

Not everything is a test. Walking, opening an unlocked door, going prone, climbing into a truck — routine actions simply cost AP and happen ({{ref:sec-ap}}). The game rolls dice only where the fiction is contested or dangerous: shots, throws, morale, first aid, driving through a fence at speed. If no rule calls for a test, do not invent one; the AP cost *is* the resolution.

TNs live on cards wherever possible. Your figure's Shoot line is a TN. Its Grit is a TN. A vehicle's Handling is a TN. When a test does not come from a card — a grenade throw, a climb, a scenario task — the rule that calls for the test states the number.

**Two TNs, no cover math.** Every attack profile prints a pair of numbers, written `Open/Cover` — for example, `9/11`. Use the Cover TN when the target qualifies for cover or concealment under the four conditions in {{ref:sec-cover}}; otherwise use the Open TN. Cover is never a modifier. You will not add for it, argue about degrees of it, or stack it. You will pick one of two printed numbers and roll.

Everything else that can legally change a roll is on this list:

{{table:modifiers}}

This list is closed. If a situation is not on it, it does not modify the roll — no matter how vivid the fiction. Chapters, scenarios, and house instinct add nothing to it. When every modifier is accounted for, clamp the net total to the printed maximum before rolling.

::: designer
Cover could have been a +2 like everything else. It isn't, for two reasons. First, arithmetic: cover applies to more shots than any other condition in the game, so printing both TNs on the cardface moves the single most common addition off the table entirely. Second, honesty: a binary Open-or-Cover call — four conditions, no stacking — resolves in seconds and kills the "my wall plus his smoke plus my crouch" negotiation before it starts. The modifier list stays short precisely because cover never visits it.
:::

### Natural 20, Natural 2 {#sec-extremes}

The REACH system has no critical-hit charts, no confirmation rolls, and no random-event deck ticking away behind the fight. Extreme results on the 2d10 are the game's only random-event trigger during resolution — the dice you already rolled *are* the event.

**Natural 20** — both dice show 10. *Catastrophic success.* On an attack, the hit ignores Armor and adds +3 Severity ({{ref:sec-wound-procedure}}). On any other test, you succeed and gain the bonus effect stated by that rule, if it states one.

**Natural 2** — both dice show 1. *Complication.* The test fails, **and** the acting figure suffers the complication listed for that action — a weapon jam, a stumble, a dropped item. If the action lists no complication, the default applies: +1 Noise ({{ref:sec-noise}}) and the figure is Shaken ({{ref:sec-shaken}}).

Each arrives one time in a hundred rolls. Across a mission's worth of tests that means the spectacular happens about once or twice a night — often enough to dread and hope for, never often enough to plan around. When a natural 2 costs you a rifle at the worst moment, that is not the game interrupting the story. That is the story.

## Reading a Card {#sec-statline}

Every Crew figure is one card, and every card has the same five fields:

- **Shoot `Open/Cover`** — the figure's attack TNs with the weapon class it carries. Left number against targets in the open, right number against targets in Cover.
- **Grit** — the TN for morale, fear, and self-control tests ({{ref:ch-human-factor}}). Lower is steadier.
- **AP** — Action Points per activation: 8 standard, 7 if the card says Slow, 9 if it says Fast. Spending them is the subject of {{ref:sec-ap}}; AP you do not spend waits as Overwatch ({{ref:sec-overwatch}}).
- **Skills** — background abilities, each a short, complete rules text printed on the card. There is nothing to memorize; if a skill matters, the card says how.
- **Gear** — the figure's weapon, armor, and two slots of kit.

Two of those fields deserve a closer look before you play.

A weapon line carries two numbers of its own. **Damage Rating (DR)** is its punch — DR is added to the Casualty Die against the enemy ({{ref:sec-opfor-casualty}}) and to the Severity roll against your own people ({{ref:sec-wound-procedure}}). **Effective Range**, in squares, is the distance inside which the printed TNs hold; past it, the range modifiers on the list above take over.

Armor, meanwhile, is worn in pieces, not as a number for the whole body: plates protect the torso, a helmet protects the head, and limbs go bare. Where a hit lands therefore decides what armor counts — the full procedure is the wound chapter's ({{ref:sec-wound-procedure}}). Enemy cards simplify this to a single flat Armor value; that asymmetry is deliberate, and {{ref:ch-wounds}} explains what it buys.

Crew Shoot lines come in four broad tiers. The spread below is the reference — individual cards vary by a point where their story earns it:

{{table:skill-tiers}}

Notice what the table implies. The valley does not field commandos. Most of your roster shoots like what they are — hunters, linemen, paramedics — and the one or two genuine professionals you have are irreplaceable. The system prices skill honestly: on the 2d10 curve, the gap between a Green shooter and a service veteran is the difference between a coin flip and a near-certainty.

Here is a card in full:

{{card:crew.vasquez}}

Read it top to bottom. Reyna Vasquez shoots at {{stat:crew.vasquez.shoot}} — a service veteran's line. Her Grit of {{stat:crew.vasquez.grit}} means she passes a morale test more often than not even on a bad night. She has {{stat:crew.vasquez.ap}} AP, the standard allowance. Her Leader skill lets her Rally shaken neighbors ({{ref:sec-rally}}); Fire Discipline quiets the shooting around her — which matters because Noise is a currency ({{ref:sec-noise}}). Her carbine hits at DR {{stat:weapons.carbine.dr}} out to an Effective Range of {{stat:weapons.carbine.eff}} squares, and her chest rig speeds her reloads. Everything she can do is on this card or in the universal action list ({{ref:sec-ap}}).

Enemy cards read the same way but leaner — a Shoot line, Grit, Armor, a Doctrine, and one special rule. The Warden's people do not get biographies. What they get instead is a script, and the script is the subject of {{ref:ch-enemy-system}}.

## The Scale of the Fight {#sec-scale}

A square is 1.5 meters — about five feet. A game turn is roughly 30 seconds of fiction. The standard board is 30 by 24 squares: forty-five meters by thirty-six, a farmyard and its outbuildings, a road junction and its ditches, one block of a county seat. A typical mission runs six to ten turns. Hold that math in your head: an entire mission is under five minutes of violence, and most of your figures' 30-second turns are spent moving, watching, and breathing — not shooting.

The turn is a slice, not a sequence. Within one turn, everything is understood to be happening at roughly the same time; the order in which figures activate ({{ref:sec-turn-sequence}}) is a convenience of play, and the Interrupt Die ({{ref:sec-interrupt-die}}) exists to keep you from pretending otherwise. When a rule speaks of an activation, it means one figure spending its AP; when it speaks of a turn, it means the full slice — Crew Phase, Warden Phase, End Phase.

Distances in this book are always in squares, counted the shortest legal way. Ranges, blast radii, Rally reach, spotting distances — squares, every time. Nothing in the tactical game is measured in anything else.

## The Outdoor Grid {#sec-terrain}

Outdoors, the world is a grid of squares, and every square is exactly one terrain type. Movement is square to adjacent square, orthogonal or diagonal; a diagonal step is a legal step and costs the same as an orthogonal one, but a move may never cut the corner of a wall or a Block square — go around. What each step costs in AP is the business of {{ref:sec-ap}}; what the square *is* is the business of this section.

<!-- TODO-TABLE: terrain, outdoor terrain types with movement / LOS / Cover effects, for the QRS (bible §6.1) -->

**Clear.** Pasture, road, farmyard, cut field. No effect on movement, sight, or fire. Clear ground is where people die; the whole tactical game is about how much of it you must cross and who is looking when you do.

**Cover (low).** Stone walls, rock piles, ditches, vehicles, machinery — anything a figure ducks behind that would actually stop or deflect a bullet. Cover terrain never blocks line of sight. What it does is trigger the Cover TN for figures fighting from behind it ({{ref:sec-cover}}).

**Concealment.** Brush, crops, standing timber — things that hide a body without protecting it. Concealment triggers the Cover TN exactly as Cover does: the shot is hard because the shooter cannot see you, not because you are protected. Concealment also feeds the quiet game — figures inside it are far harder to detect ({{ref:sec-spotting}}, {{ref:sec-stealth}}). Two seasonal notes for the Leaf Season campaign: autumn hardwoods count as Concealment while the leaves hold (each scenario sheet says when they have dropped), and conifer stands are Concealment that additionally blocks LOS beyond 2 squares into the stand ({{ref:sec-los}}).

**Block.** Buildings, rock faces, silos. Block terrain stops movement and stops line of sight. You do not fight through Block; you go around it, or you go *inside* — through a Portal, into the Zone rules ({{ref:sec-zones}}).

**Rough.** Streambeds, deadfall, scree, plowed clay. Each square of Rough costs 2 AP to enter on foot. Rough is the terrain of the deliberate route: slower, and usually smarter.

**Water.** Creeks, ponds, the river. Impassable except at fords and bridges, unless the scenario says otherwise.

That is the complete outdoor list. A scenario map may dress these six in any fiction it likes — a burned-out checkpoint is Cover, a kudzu bank is Concealment, a chicken house is Block — but every square on the board is one of the six, and its type answers every rules question about it. Terrain types do not combine or stack within a square; when a real-world feature straddles the categories, the map key's call is final, and where the map is silent, read the square the way it would read to the people standing in it — brush hides, walls stop bullets, buildings stop everything.

### Elevation: Ground and High {#sec-elevation}

Outdoor boards use two elevation levels: **Ground** and **High** — ridgelines, roofs, upper floors, the water tower. The map marks which is which.

Height is an edge, and the game pays it plainly. A shooter on High firing at a target on Ground takes the Elevated shooter modifier from the list in {{ref:sec-tests}}, and ignores the target's cover from low terrain — use the Open TN — unless the target is adjacent to its cover. Looking down flattens the world's walls; only the figure actually hugging one keeps its protection.

{{svg:diagrams/diagram-scatter-elevation.svg}}

Elevation also stretches what you can see and, for thrown and dropped things, complicates where they land — the scatter interactions ride with the grenade rules in {{ref:sec-grenades}}.

## Line of Sight {#sec-los}

To shoot at, Spot, or react to a target, a figure needs line of sight.

Trace a straight line from the center of the acting figure's square to the center of the target's square. The line is blocked by:

- **Block terrain** and closed doors;
- **more than 2 squares of conifer stand or heavy brush** counted along the line.

The line is **not** blocked by Cover terrain, low walls, smoke, or figures — friendly, enemy, or Down. (Smoke and darkness make the shot harder, not impossible; they live on the modifier list, not in the LOS rule.) If the line is blocked, there is no shot and no Spot. There is no partial or degraded LOS: the line is clear or it is not, and everything conditional about the shot is handled by the Open/Cover call and the modifier list.

{{svg:diagrams/diagram-los-cover.svg}}

Indoors the rule compresses: LOS enters and leaves a Zone only through its Portals, and only for figures Posted at them ({{ref:sec-zones}}).

## Open or In Cover {#sec-cover}

Every attack asks one binary question about the target: Open, or in Cover? The answer picks which of the profile's two printed TNs you roll against — and it is the *whole* of the game's cover system.

Use the **Cover TN** when any one of these four conditions is true:

1. **The LOS line crosses or touches a Cover or Concealment square adjacent to the target.** The classic case: shooting at someone behind a wall, a truck, a ditch lip.
2. **The target is prone at 3 or more squares' distance.** A body flat on the ground is a sliver of a target at any real range. (A Crawling figure is prone.)
3. **The target is Posted at a Portal** ({{ref:sec-zones}}). A doorway shooter shows you one shoulder and half a face.
4. **The target is in Concealment.** You are shooting at where the brush moved.

Otherwise, use the **Open TN**.

One condition is enough, and four conditions are no better than one. There is no stacking, no "heavy cover," no cumulative bonus for pressing deeper into the woodline. A target is either Open or in Cover — never both, never doubly.

Ask the question per shot, from the shooter's square: the same figure can be in Cover from the road and stark Open to the ridge above it. That asymmetry — being covered from one direction and naked to another — is most of what maneuvering in this game is *for*. Remember also the exception that height buys: an Elevated shooter can strip condition 1 entirely ({{ref:sec-elevation}}).

::: example
**Reading the ground, then rolling.** Turn 3, a farm lane below Sugar Creek. Reyna Vasquez kneels at the corner of the barn. A Civil Order Corps militiaman stands 14 squares off, at the edge of a brush line.

*The call.* Vasquez traces LOS center-to-center: the line is clear of Block, but it touches a Concealment square adjacent to the militiaman — condition 1. He is in Cover. Her card reads Shoot {{stat:crew.vasquez.shoot}}, so she needs the right-hand number: 12. He is inside her carbine's Effective Range of {{stat:weapons.carbine.eff}} squares and no other line item on the modifier list applies, so 12 it stays. She spends the AP for an Aimed Shot at the printed TN and rolls 2d10: **8 and 5 — 13.** A hit. The Warden rolls the Casualty Die ({{ref:sec-opfor-casualty}}): **d10 = 6**, plus the carbine's DR {{stat:weapons.carbine.dr}}, minus his Armor 0 — total 9. Dead. (Had her dice come up 10 and 10 — a natural 20 — the hit would have ignored Armor entirely and struck at +3 Severity.)

*The stack.* The dead man's partner bolts — a Sprint across the open farmyard toward a wrecked truck. Birdy Sizemore, watching from a ditch with AP still unspent ({{ref:sec-overwatch}}), takes Reaction Fire, which resolves mid-move ({{ref:sec-reaction-fire}}). Her Shoot is {{stat:crew.birdy.shoot}}. The runner is upright in Clear terrain: Open TN 13. Reaction Fire is +3; a Sprinting target is +2. Net +5 — under the +6 cap — for a final TN of 18. She rolls **9 and 6 — 15.** A miss; the runner makes the truck.

*The floor.* Next turn a third militiaman leans out of the machine-shed doorway — Posted at a Portal, condition 3, so Cover TN. Vasquez snaps a shot: her 12, +3 for the Snap, TN 15. The dice come up **1 and 1 — natural 2.** The shot fails and its complication lands with it: a jam, per the ranged attack procedure ({{ref:sec-attack-procedure}}). Her rifle is a club until she clears it.
:::

## Indoors: Zones and Portals {#sec-zones}

Buildings are where the grid stops. Interiors are not gridded square by square. Instead, a building is divided into **Zones**: a room is one Zone, and a large open floor — a barn bay, a church nave, a warehouse — is several Zones of roughly 4×4 squares each. The scenario map draws the boundaries.

Zones connect to one another, and to the outdoor grid, through **Portals**: doors, windows, and breach holes. A Portal is the only way sight, fire, or bodies pass a Zone boundary. Moving through one costs AP like any other action ({{ref:sec-ap}}).

{{svg:diagrams/diagram-zones-portals.svg}}

Inside a Zone, exact position does not exist. Every figure in a Zone is in one of two states, declared by whoever controls it:

- **Posted** — at one named Portal. The figure sees and shoots through that Portal, and only that one. It counts as in Cover against fire from outside ({{ref:sec-cover}}, condition 3), and it may take Reaction Fire through its Portal ({{ref:sec-reaction-fire}}).
- **Deep** — somewhere inside, away from the openings. No LOS in, no LOS out. A Deep figure cannot be seen or shot from outside the Zone, and cannot see, shoot, or react out of it. Deep is safe, and Deep is blind.

Figures in the same Zone are all at Point Blank to one another — the modifier list already prices what a room fight is.

That is the entire spatial model for interiors, and these definitions are all this chapter owns. What happens when somebody comes *through* the door — entry fights, who fires first, breaching, flashbangs, grenades through Portals — is the business of {{ref:ch-close-quarters}}, beginning at {{ref:sec-entry}}. It is most of why this game gets played.

::: designer
Squares outside, Zones inside. Outdoors the questions are metric — how far, how exposed, how many seconds in the open — and a grid answers them cheaply. Indoors the questions are almost never metric: fights at door distance are decided by who controls the opening, who is stunned, and who comes in second. Gridding a farmhouse kitchen would buy precision about a decision nobody is making. The Zone model spends its resolution where the decisions actually live — at the Portal.
:::

## Facing and the Blind Arc {#sec-facing}

Every figure faces one of the four orthogonal directions. Facing changes are free: turn a figure as often as you like at any point while it is spending AP. When its activation ends, it keeps its final facing until it activates again — and that parting choice is a real decision, because of what follows.

The **Blind Arc** is the 90° quadrant directly behind a figure. Precisely: a square is in the Blind Arc when it lies behind the figure along its facing axis and its distance behind is greater than or equal to its sideways offset — the rear diagonals split the difference and count as Blind. A figure cannot see into, Spot into, or take Reaction Fire into its Blind Arc. Everything else — the frontal 270° — it watches.

{{svg:diagrams/diagram-blind-arc.svg}}

The Blind Arc cuts both ways. It is how your people close on a sentry ({{ref:sec-stealth}}), and it is the seam you leave the Warden every time a figure ends its activation careless of what is behind it. An enemy with AP in hand is a loaded trap ({{ref:sec-reaction-fire}}) — but only across the arc it can see.

Vehicles and drones have no Blind Arc: mirrors, cameras, and a rotor's-eye view. Vehicle weapons use their own fire arcs, which are a different mechanism entirely ({{ref:ch-vehicles}}).

::: sidebar
**Margin note, Deacon's hand:** *"Check your six" is a lie — you can't, not while you're working. That's what a buddy is. Pair up and quarter opposite ways; two people offset have no Blind Arc between them. Watch how their sentries stand. When the Authority posts them lazy, both men facing the road — that's not a post, that's a door. Walk through it.*
:::

---

You now hold the grammar: five dice jobs, one test, one card anatomy, one map. {{ref:ch-actions}} puts it in motion — the turn sequence, spending AP, and the Interrupt Die that keeps your bold plans honest. After that, {{ref:ch-fieldcraft}} teaches the discipline that decides more missions than any gunfight: Noise, and who has heard you.
