# DESIGN BIBLE — NOTHING IS BEYOND OUR REACH

> **This document is the single source of truth for game mechanics.** Every chapter, card,
> table, and scenario must agree with it. Numbers here are asserted by `tools/checks/mathcheck.py`.
> If a chapter needs to deviate, the bible changes first (and the sim re-runs), never the chapter
> alone. Prose style guidance for chapters is at the end.

- **Game title:** NOTHING IS BEYOND OUR REACH
- **System name (informal, used in text):** the REACH system
- **The solo opposition system is called THE WARDEN.** "The Warden does X" is how rules text
  refers to OPFOR decision procedures.
- **One player.** The player runs the Crew. The Warden (dice + tables + Directive cards) runs
  everything else.
- **Mission length target:** 60–120 minutes, 6–10 game turns typical.
- **A game turn ≈ 30 seconds of fiction. A square ≈ 1.5 m (5 ft). Standard board 30×24 squares.**

---

## 1. Dice conventions

The game uses a standard polyhedral set. Each die type has a fixed job — never mix jobs:

| Dice | Job |
|---|---|
| **2d10 (sum)** | All skill tests and attacks: roll ≥ Target Number (TN). Bell curve 2–20, midpoint 11 |
| **1d10** | All resolution tables: Casualty Die (OPFOR), Hit Location, Severity, Contact Table, doctrine fallbacks |
| **1d8** | Scatter/drift direction (8 compass points, 1 = away from thrower/north of template, clockwise) |
| **1d6** | Scatter distance, clocks (QRF arrival, bleed-out), interrupt die pips, ammo/battery dice |
| **1d20** | Campaign-layer tables only (events, dilemmas, injuries) — never in tactical play |

**Extreme results (2d10 tests only):**
- **Natural 20** (both dice 10): *Catastrophic success.* On an attack: the hit ignores armor and
  adds +3 Severity. On any other test: succeed and gain a stated bonus effect.
- **Natural 2** (both dice 1): *Complication.* The test fails AND the acting figure suffers the
  listed complication for that action (weapon jam, stumble, dropped item…). If no complication
  is listed: +1 Noise and the figure is Shaken.
- Extreme results are the game's only "random event" trigger during resolution — no extra rolls.

**Rounding:** always round halves up. **Rerolls:** a die may never be rerolled more than once.

## 2. Core test procedure

`2d10 + situational modifiers ≥ TN` = success.

TNs come printed on cards wherever possible. **Cover is never a modifier: every attack profile
prints two TNs — `Open / Cover`** (e.g., `9/11`). Use the Cover TN when the target has any
qualifying cover or concealment (§6.4); otherwise Open.

**The complete tactical modifier list** (there are no others; chapters may not invent more):

| Modifier | Value |
|---|---|
| Snap Shot (2 AP instead of 4) | +3 TN |
| Reaction Fire (always a Snap Shot) | +3 TN total (replaces Snap penalty, not stacked) |
| Shooter is Shaken | +2 TN |
| Target Sprinting (used Sprint this or its last activation) | +2 TN |
| Beyond Effective Range (up to 2× Effective) | +2 TN |
| Beyond 2× Effective Range | no shot (scoped weapons: +4 TN instead) |
| Firer or target obscured by smoke / heavy rain / darkness without lights | +2 TN |
| Braced (Aimed Shot, no movement this activation, supported position) | −1 TN |
| Elevated shooter (higher terrain level than target) | −1 TN |
| Point Blank (adjacent square or same Zone) | −2 TN |

Maximum net situational modifier: +6 / −3 after all stacking.

## 3. Turn structure

Each game turn:

1. **Crew Phase.** Player activates Crew figures one at a time, any order, each once per turn,
   spending that figure's full AP before the next activates. **After the second and each
   subsequent Crew activation ends, roll the Interrupt Die (§3.2).**
2. **Warden Phase.** In order: (a) Alert & Noise bookkeeping (§8), (b) draw a Directive card if
   the OPFOR is Alerted or worse, (c) blips move (§9), (d) every revealed OPFOR element acts by
   its Doctrine (§10), (e) clocks tick (QRF, bleed-out, fires, batteries).
3. **End Phase.** Bleed marks (§7.4), Shaken recovery for figures that did not activate,
   remove expired effects, advance the Turn marker.

### 3.1 Action Points

Standard Crew figure: **8 AP** per activation (7 if the card says Slow, 9 if Fast). Unspent AP
persists as **Overwatch** (§5). OPFOR figures: 8 AP but the Warden spends them by Doctrine
script, most often as Move + Attack.

**Universal AP costs** (the QRS list; chapters may add specialist actions but may not change these):

| Action | AP | Notes |
|---|---|---|
| Walk 1 square | 1 | quiet |
| Sprint — 3 squares, straight-ish (≤1 turn point) | 2 | +1 Noise per activation that Sprints; Sprinting target +2 TN to hit |
| Crawl 1 square (prone) | 2 | counts as Cover vs shots crossing ≥3 squares |
| Go prone / stand | 1 | |
| Snap Shot | 2 | +3 TN |
| Aimed Shot | 4 | printed TN |
| Braced Shot | 5 | −1 TN; only if no movement this activation |
| Reload | 2 | 3 with crew-served weapons (§12) |
| Throw grenade | 3 | §6.6 |
| Open door / climb window | 1 / 2 | |
| Kick breach | 2 | +2 Noise |
| Enter/exit a Zone through a Portal | 2 | §6.5 |
| Buddy Aid | 4 | Medicine test; EMT background 3 AP |
| Rally (leader, radius 3) | 2 | §7.6 |
| Spot (resolve a Blip in LOS, or search) | 2 | §9 |
| Mount / dismount vehicle | 2 | |
| Interact (cut wire, plant charge, grab cache…) | 2 | unless scenario states |

Facing changes are free at any point while a figure is spending AP; a figure that has finished
its activation keeps its final facing.

### 3.2 The Interrupt Die (tempo pressure)

After the **2nd** Crew activation of a turn ends, roll d10: on **10**, the Warden immediately
takes an **Interrupt** — the single revealed OPFOR element nearest to any Crew figure (Alerted
elements first) acts now with **4 AP**. After the 3rd activation, interrupt on **9+**; after
the 4th, **8+**; and so on (−1 per activation). Maximum one Interrupt per turn. An element that
took an Interrupt still acts normally in the Warden Phase.

*Design intent: sequencing your whole Crew before the enemy answers must feel greedy.*
mathcheck target: with 6–8 Crew activations/turn, mean Interrupts per turn ≈ 0.8–1.2.

## 4. Figures, stats, facing

**Crew card statline:**
- **Shoot `Open/Cover`** — attack TNs with the figure's carried weapon class
- **Grit** — TN for morale, fear, and self-control tests
- **AP** — 8 standard (7 Slow / 9 Fast)
- **Skills** — background abilities (Hunter, EMT, Lineman, Trucker, SOF Vet, Preacher…), each a
  short rules text on the card
- **Gear** — weapon (with Damage Rating & Effective Range), armor, 2 slots kit

**Reference skill tiers (Shoot TNs):**

| Tier | Open/Cover | Grit | Who |
|---|---|---|---|
| SOF vet | 8/10 | 8 | 1–2 per campaign roster, max 1 per mission at start |
| Service vet / trained | 10/12 | 10 | infantry vets, deputies |
| Skilled civilian | 11/13 | 11 | hunters (12/13 but see Hunter skill), competent shooters |
| Green | 13/15 | 12 | most starting civilians |

OPFOR statlines are simpler: **Shoot `Open/Cover`, Grit, Armor (0–2), Doctrine, one special.**
Reference: Authority regular 11/13 Grit 9 Armor 1 · Authority SRT (elite) 9/11 Grit 8 Armor 2 ·
Civil Order Corps militiaman 13/15 Grit 11 Armor 0 · Compact fighter 12/14 Grit 10 Armor 0 ·
Ferryman gunhand 12/14 Grit 10 Armor 0 · Marauder 13/15 Grit 12 (breaks easily) Armor 0.

**Facing:** figures face one of 4 orthogonal directions. The **Blind Arc** is the 90° quadrant
directly behind (all squares where the displacement component along the facing axis is negative
and its magnitude ≥ the sideways component). A figure cannot see, Spot, or Reaction Fire into
its Blind Arc. Vehicles and drones have no Blind Arc (mirrors, cameras, rotors).

## 5. Overwatch & Reaction Fire

A figure's unspent AP remains available between its activations. Any figure with **≥2 AP**
remaining may take **Reaction Fire** — a Snap Shot (+3 TN) — against an enemy figure that,
inside its frontal 270° and LOS, does any of: moves from one square/Zone to another, stands,
Sprints, fires, or breaches. Timing: the reaction resolves **after the triggering square of
movement** (mid-move), or simultaneously with a triggering shot.

- Each figure may react at most **twice** between its own activations, and never while Shaken
  or Pinned.
- OPFOR figures react by the same rule — the Warden's scripts leave AP unspent on purpose
  (Doctrine listings say how much). *An unactivated enemy is never safe to cross.*
- Reaction Fire against a Sprinting target: both +3 (reaction) and +2 (sprinting) apply.

## 6. Space: grid, zones, LOS, cover

### 6.1 Outdoor grid
Squares, orthogonal movement (diagonal step = allowed, costs 1 AP like orthogonal, but a move
may not cut a wall corner). Terrain per square is one of: **Clear · Cover (low)** — walls,
rocks, vehicles, ditches · **Concealment** — brush, crops, timber (autumn hardwoods = Concealment,
conifer stands = Concealment that blocks LOS beyond 2 squares into it) · **Block** — buildings,
rock faces · **Rough** (2 AP/square) · **Water** (impassable except at fords/bridges unless
scenario says).

**Two elevation levels** outdoors: Ground and High (ridges, roofs, upper floors). High → Ground
gains −1 TN and ignores low Cover TN unless the target is adjacent to its cover.

### 6.2 LOS
Center-to-center straight line. Blocked by Block terrain, closed doors, and >2 squares of
conifer/heavy brush. Not blocked by Cover or figures.

### 6.4 Cover determination
Use the **Cover TN** when any of: the LOS line crosses or touches a Cover/Concealment square
adjacent to the target · the target is prone at ≥3 squares distance · the target is Posted at a
Portal (§6.5) · the target is in Concealment. Otherwise Open TN. No stacking; a target is
either Open or in Cover.

### 6.5 Interiors: Zones
Buildings are divided into **Zones** (a room ≈ one Zone; big rooms/warehouse floors = multiple
Zones of roughly 4×4 squares). Zones connect to each other and to the outdoor grid through
**Portals** (doors, windows, breaches). Zone rules:

- A figure in a Zone is either **Posted** at one named Portal (sees/shoots through it, counts
  in Cover from outside, may React through it) or **Deep** (no LOS in or out; safe; may not
  react to outside).
- All combat between figures in the same Zone is Point Blank (−2 TN).
- **Entry fight:** when a figure enters an occupied Zone, all non-Shaken defenders Posted at or
  covering that Portal resolve Reaction Fire first, *then* the entering figure acts. **Breaching
  first reverses this:** if entry follows a kicked breach + grenade, a flashbang, or a demolition
  breach in the same Crew Phase, defenders are Shaken first and the entering figure fires first.
  The SOF Vet "Point Man" skill also fires first on clean entries.
- Grenades into a Zone: no scatter through an open Portal from an adjacent square; all figures
  in the Zone take the blast attack (Deep figures at Cover TN).

*Design intent: room fights are decided before entry — by breaching tools, stuns, and stacking —
exactly the BPRE door problem, at zone resolution.*

### 6.6 Grenades & explosives
Throw 3 AP, range 8 squares (LOS or over 1-height cover). Scatter: on a failed Throw test
(2d10 ≥ 10, Open TN only), d8 direction × d6/2 squares (walls stop scatter). Frag: attack 12/14
vs every figure within 1 square of landing square, DR 3. Resolves **at the end of the current
Phase** — figures may spend AP to dive away (1 AP: prone + 1 square). Demolition charge: placed
(4 AP), breaches walls, DR 5 blast. Molotov: DR 2 + fire marker. IED (Warden and Crew): per
scenario, DR 6 Pen 4, command or victim triggered.

## 7. Damage

### 7.1 Attack sequence (one target figure)
1. Attacker rolls 2d10 vs Open or Cover TN (+ modifiers §2).
2. **Miss** by 1–2 against a target in the open with an automatic weapon: target is Shaken
   (near miss). Other misses: no effect.
3. **Hit:** resolve by target type: Crew figure → §7.3 wound procedure. OPFOR figure → §7.2
   Casualty Die. Support unit (driver, porter) → Casualty Die at −1. Vehicle → §13. Drone → §14.

### 7.2 OPFOR Casualty Die (one d10 roll, no bookkeeping)
`d10 + weapon DR − target Armor`:

| Result | Effect |
|---|---|
| ≤ 3 | **Staggered** — Shaken; if already Shaken, Pinned |
| 4–6 | **Down** — out of the fight (dying/incapacitated; lootable; may be stabilized for capture) |
| 7+ | **Dead** |

Natural 20 attack: Dead, no roll. *mathcheck target: rifle (DR 3) vs Armor 1 regular →
P(Down or Dead | hit) ≥ 0.70.*

### 7.3 Crew wounds (the asymmetric detail)
On a hit against a Crew figure:
1. **Hit Location d10:** 1 Head · 2–3 Arms (2 = weapon arm) · 4–7 Torso · 8–0 Legs.
2. **Severity: d10 + weapon DR − armor at that location** (plates cover Torso only, Armor 3;
   helmet Head 2 when worn; limbs almost never armored). Head adds +2 Severity.

| Severity | Wound | Immediate effect |
|---|---|---|
| ≤ 4 | **Graze** | Shaken |
| 5–7 | **Light** | Shaken · −2 max AP · Bleed 1 · arm: drop to one-handed (long guns +3 TN) · leg: no Sprint |
| 8–10 | **Serious** | Fall prone, Shaken · half AP · Bleed 2 · must pass Grit at start of each activation to do anything but Crawl or self-aid |
| 11+ | **Critical** | **Down and Dying** — bleed-out clock d6+2 turns; unconscious; another Critical = dead |

Wounds stack; a second Light = Serious effects, a second Serious = Critical.

### 7.4 Bleed
End Phase: each Bleeding figure marks bleed points. At 3 accumulated, worsen the wound one step.
**Buddy Aid** (4 AP, Medicine 2d10 ≥ 11; EMT 3 AP and ≥ 9): stop Bleed, remove Shaken from the
patient; on a nat 20 downgrade the wound one step. A Dying figure whose clock expires without
aid is dead. **There is no CASEVAC. A Down crew member must be carried (half AP, both hands) to
the exfil point or they are lost (§15.4).** Dying figures cry out: Grit test for Crew figures
within 6 squares at the start of their activation, once per turn, fail = Shaken.

### 7.5 Shaken / Pinned (suppression — the BPRE "Staggered" adapted)
- **Shaken:** loses 4 AP at its next activation (minimum 2), +2 TN on its tests, cannot Reaction
  Fire. Removed automatically at the end of the figure's next activation, by Rally, or in the
  End Phase if the figure did not activate this turn and was not shot at.
- **Pinned** (Shaken while Shaken): may only Crawl, hug cover, or self-aid; to do anything else,
  pass Grit at +2. Rally or a full un-shot turn clears to Shaken.

### 7.6 Morale (Crew)
Grit tests (2d10 ≥ Grit): first time under effective fire each mission · a Crew figure goes Down
or Dead within 6 squares/LOS · surprise Point Blank contact · hearing a Dying figure (§7.4).
Fail = Shaken. Natural 2 = Panic: immediately Sprint to the nearest cover away from the enemy,
then Pinned. **Rally** (2 AP, any figure with the Leader trait or Grit ≤ 9): figures within 3
squares clear Shaken on 2d10 ≥ their own Grit (roll per figure).

OPFOR group morale (the Warden's): when an element loses half its figures, or its Leader dies:
each survivor tests Grit once; failures fall back one Doctrine step (Assault→Base-of-Fire→
Holding→Rout). Marauders test at +2; Authority SRT at −2. Routed figures Sprint to the nearest
board edge away from the Crew and are removed.

## 8. Noise & the Alert Ladder

A shared **Noise pool** (single track, starts at scenario value, usually 0).

**Noise sources:** unsuppressed gunshot +2 (max +3/turn from gunfire) · suppressed shot +1 (max
+1/turn) · Sprint +1 per figure-activation · breach/kick +2 · explosion/crash +3 · vehicle
engine within the board +2/turn moving · Crew drone aloft +1/turn (rotor buzz) · scenario
events as listed. Noise never decreases during a mission.

**Alert states** (whole OPFOR force; thresholds printed per scenario, defaults in parentheses):

| State | Trigger | Warden behavior |
|---|---|---|
| **Unaware** | start | elements follow standing posture (sentry posts, patrol routes); no Directives |
| **Suspicious** | Noise ≥ (3), or an unresolved sighting | nearest element investigates the newest Noise source; blips move toward Noise |
| **Alerted** | Noise ≥ (7), or clear contact (shot fired at/by OPFOR in LOS, body found, breach heard adjacent) | Directive cards each Warden Phase; elements act by Doctrine vs Known positions |
| **ALARM** | Leader/RTO action only (below) | QRF clock starts (d6+2 turns, then arrives at a marked edge as new blips); all blips +2 on Contact rolls; OPFOR drones launch; searchlights/illum per scenario |

**Escalating to ALARM is a human act, not a threshold:** an Alerted figure with the Leader or
RTO trait must reach working comms (its radio, a vehicle set, a landline) and spend 2 AP; it
succeeds automatically at a fixed set, or 2d10 ≥ 12 on a manpack under fire. Killing leaders
and radios first, cutting the landline (Interact), or jamming (§14) prevents or delays ALARM.
If the scenario's fallback timer expires (a missed radio check-in — usually turn 8), ALARM
triggers on its own.

*mathcheck targets: loud play from turn 1 reaches Alerted by turn 2 and median ALARM ≤ turn 4;
pure-stealth play (no shots, no Sprints, walk-only) stays below Alerted through turn 6+.*

## 9. Blips (hidden contacts)

Scenario setup places numbered **Blip** markers (patrols, posts) plus **scripted sentries**
(placed openly — the hybrid model). Blips:

- Move in the Warden Phase: Unaware — along their printed patrol route (2 squares/turn);
  Suspicious+ — 3 squares toward newest Noise source / last Known Crew position.
- **Resolve** when a Crew figure has LOS within 12 squares (6 if the blip is in Concealment,
  any distance under a Crew drone's sweep), or when the player pays 2 AP to Spot a blip in LOS:
  roll d10 on the scenario's **Contact Table**. Default table: 1–2 Nothing (dog, wind, refugees
  — remove) · 3–5 Patrol pair · 6–7 Fireteam (4, with Leader) · 8 Sentry + MMG team · 9 Drone
  team (operator + RTO) · 10 Special (scenario). Under ALARM: +2.
- Blips resolve immediately if they would end movement within 6 squares of a Crew figure, and
  **a blip that moves adjacent to a Crew figure resolves with surprise** — its figures deploy
  first and the Crew figure tests Grit.
- Crew figures in Concealment who do not fire are not detected by blips; scripted sentries use
  the Spotting rule instead: a sentry spots a Crew figure in its frontal arc, LOS, within 12
  squares (6 in Concealment/dark) at the start of the Warden Phase → the force is Alerted and
  that figure is Known.

**Known vs Unknown:** the Warden shoots and maneuvers only against **Known** Crew positions
(fired-from squares, spotted figures, drone sweeps). A Crew figure that moves ≥3 squares out of
LOS of all OPFOR becomes Unknown again (remove its Known marker). Doctrine scripts say what the
Warden does with no Known targets (search, hold, sweep toward mission anchor).

## 10. The Warden: Doctrine AI

Every OPFOR card prints a **Doctrine**. Each Doctrine is a priority list: *the element executes
the first line whose condition is true.* If none apply, roll d10 on the printed fallback line.
An element = the group a card represents (pair, fireteam, team, vehicle); it activates as a group.

| Doctrine | Base behavior sketch (full scripts in ch. 12) |
|---|---|
| **Holding** | stay at post in cover; fire at Known in LOS; Suspicious: one figure investigates to last Noise, rest hold; never leaves objective radius (printed) |
| **Sweep** | patrol waypoints; Alerted: on-line advance toward last Known, clearing Concealment by fire if Directive allows |
| **Assault** | move cover-to-cover toward nearest Known, grenade at ≤3 squares, enter Zones with pairs |
| **Base-of-Fire** | move to nearest position with LOS to a Known, then sustained/suppressive fire (§12); displaces only if flanked |
| **Cordon** | move to block the map edge / route nearest the Crew's entry or objective; digs in at chokepoints |
| **QRF** | arrives mounted under ALARM; drives to 8 squares from last Known, dismounts, splits: half Assault, half Base-of-Fire |

**Target priority (all Doctrines):** 1 the Known enemy that attacked this element since its last
activation → 2 nearest Known in LOS → 3 most exposed Known (Open TN available) → tie: closest.
**Reaction AP:** each script states AP held (typically 2). **The Good-Faith Clause (printed in
ch. 1 and ch. 12):** when a script is ambiguous, the Warden does the most tactically sensible
thing *against* the Crew; when two options are equal, the less favorable one for the player.
The player is the Warden's hands, not its lawyer.

**Directive cards** (24-card deck, drawn 1/Warden Phase at Alerted+): 2–3 line orders that focus
all elements for a turn ("PUSH THEM: Assault and Sweep elements Sprint their first 3 squares;
Base-of-Fire holds"; "FIX AND FLANK: the largest element becomes Base-of-Fire; the nearest other
element moves around the Crew's open flank"…). Directives never contradict Holding objective
radii. Under ALARM draw two, apply both if compatible, else the harsher.

## 11. Stealth summary (how quiet play works)

Walking, Crawling, Concealment, darkness, suppressed weapons, blade/point-blank takedowns
(Interact vs an Unaware adjacent sentry: automatic Down, no Noise, but leaves a body — bodies
found by blips/patrols add +3 Noise and Suspicion), cutting comms, and timing patrol routes.
The stealth game is Noise arithmetic against the Alert Ladder — the mission usually goes loud;
the question is *on whose terms*.

## 12. Crew-served weapons (chapter 9 expands)

MMG team = Gunner + Assistant Gunner (+ Ammo Bearer optional). Bipod deploy 2 AP; tripod 4 AP
with AG, 6 without. **Sustained Fire** (4 AP, deployed, AG feeding): place the **Beaten Zone**
template (2×4 squares, long axis along fire, nearest edge at target square, must be fully in
LOS): one attack roll (11/— sustained TN; no Cover TN — the BZ ignores low cover along its
axis); every figure in the BZ: on the roll succeeding, take a Casualty Die / wound at DR 4;
succeed or fail, every figure in the BZ is **Shaken unless prone**. The BZ marker **persists**
until the gun moves, reloads, or fires elsewhere: any figure inside it pays double AP per
square and eats one immediate attack at 13/— **per square entered**.
Belt: 3 Sustained Fire actions, then Reload (3 AP with AG; without AG: 5 AP and jam on any
natural ≤4). AG also spots: −1 TN. Displace: 4 AP pack-up (2 with AG), during which the team
counts as Open and cannot react — *the vulnerability window is doctrinal and real*.
Crew HMG/technicals: same frame, DR 5, Pen 3. OPFOR mortars (60mm, scenario asset): spotting
round walks in — d8×d6/2 scatter, −1 square per correction, needs an OPFOR spotter with comms;
impact DR 5 blast 1-square radius.
*mathcheck target: crossing an active BZ upright over 4 squares ≥ 50% chance of at least a
Serious/Down result.*

## 13. Vehicles (chapter 10 expands)

Vehicle statline: **Handling TN · Speed (squares per 1 AP: 3 road / 2 rough for most) · Armor
(0 civilian / 1 improvised / 2 armored) · Special.** Vehicles activate with 6 AP (driver's).
Mount/dismount 2 AP (per passenger, their AP). Firing from a moving vehicle +3 TN. Drivers are
**Support units**: one-line stat (Drive TN, Grit), Casualty Die like OPFOR (user-locked design).

**To hit a vehicle:** 2d10 ≥ 8 (+3 if it moved ≥4 squares this turn). Then **Vehicle Damage
Die: d10 + weapon Pen − Armor**, where every weapon prints **Pen** (rifle 0 · AP/heavy rifle 1 ·
MMG 2 · HMG 3 · RPG 6 · demo/IED 4–8). **Pen cap:** against Armor 2+, a weapon with Pen < 2
treats any Damage Die result above 5 as 5 (small arms rattle armor, shred tires, never kill the
truck).

| Damage Die | Effect |
|---|---|
| ≤ 3 | Rattled — occupants Shaken; cosmetic damage |
| 4–5 | **Mobility hit** — Speed halved; second Mobility = immobilized |
| 6–7 | **Weapon/exposed hit** — mounted weapon disabled or one exposed occupant takes a hit (random) |
| 8–9 | **Crew hit** — driver or one occupant (random) takes a direct hit (wound/Casualty Die at +2) |
| 10+ | **Wreck** — vehicle destroyed; occupants each take a DR 3 hit and bail adjacent; 12+ it burns |

Ramming (Handling test, failure = crash: Mobility hit + occupants Shaken): target figure takes
a DR 4 hit (Open TN 8 to be struck, prone/adjacent-cover figures 12); barriers/checkpoint
gates: Handling at +2, success = through + Noise 3. Vehicles are Cover terrain when stationary;
wrecks are Cover permanently.

## 14. Drones & EW (chapter 11 expands)

**Crew recon quad:** launch 3 AP; **Battery 8** — each control action costs 1 Battery: reposition
up to 6 squares · **Sweep** (resolve all blips and reveal all OPFOR within 3 squares of the
drone; those elements are Known while it stays) · Overwatch feed (a designated Crew figure gets
−1 TN vs targets under the drone). Aloft = +1 Noise/turn. OPFOR shoots it down at 14 flat
(shotgun 11 within 6 squares); Alerted+ only.
**Crew FPV (one-shot, campaign-scarce):** Pilot test 2d10 ≥ 10 to strike a Known square within
20; DR 4 Pen 2, 1-square blast. **Dropper:** grenade attack from above (Open TN even vs cover-
adjacent targets), 2 uses.
**Jamming:** an active jammer (Crew gear or Authority vehicle-mounted) projects a 6-square
bubble: RF drones inside test at +4 and drift d8 × d6/2 on failure; Sweeps fail; **fiber-optic
FPVs ignore jamming** (Authority SRT asset — the counter the player cannot jam, only shoot or
outrun; it follows LOS of its spool path). Jammers are loud in EW terms: an active Crew jammer
marks the Crew's rough position for the Warden (nearest blip converges) — jamming trades
safety-from-FPV for being hunted.
**OPFOR drones (launch under ALARM or by scenario):** recon quad sweeps 3 squares, makes swept
Crew figures Known (counter: kill it — 14 to hit, 11 shotgun ≤6 — stay under tree canopy
squares: immune to sweep, or stand still in Concealment: 2d10 ≥ 8 to stay hidden); fiber FPV:
attacks one Known figure/vehicle, Pilot 11, DR 4 Pen 2.

## 15. Missions & campaign (chapters 14–15 expand)

### 15.1 Mission frame
Briefing → **Insertion** (edge/point per scenario; intel spends may move it) → objectives
(primary + opportunity) → **Exfil**: a marked point/edge; the mission ends when all living Crew
exit or the Exfil Deadline (turn limit, usually 12) passes. **Anyone not out is lost** —
captured or KIA (Maquis rule; drives the entire endgame tension).

### 15.2 Campaign tracks (0–10)
- **Rapport** (start 3): standing with the valley's people and the G-chief. Raised by wins,
  restraint, aid; lowered by civilian harm, failures, abandoning bodies/prisoners. At 0–1:
  betrayal events, no Auxiliary use. At 8+: recruits, safehouse network upgrades.
- **Heat** (start 2): Authority attention. Raised by loud missions, ALARM exfils, captured crew;
  lowered by lying low, spoofing. Heat sets OPFOR density/quality table per mission and drives
  sweep events at 8+.
- **Capability** (start 1): partner-force development. Spent to field Guerrilla teams as
  scenario support; raised by training missions and captured arms.

### 15.3 Network pools
**Underground** (urban access, intel, forged papers — flip an asset: reroll a Contact Table
roll, reveal a blip pre-mission, delay ALARM once) · **Auxiliary** (caches, couriers, early
warning, safehouses — flip: extra gear slot, off-board medical, exfil extension +2 turns) ·
**Guerrilla** (bodies: a 2–4 figure support team for one mission, paid with Capability).
Assets are **Hidden or Exposed** (COIN flip): using one Exposes it until "rested" a mission;
an Exposed asset caught in a Heat sweep event is lost (d20 table).

### 15.4 Persistence
Post-mission: injury resolution (worst wound → d20 recovery table: missions out, permanent
effects: −1 AP, +1 Shoot TN, lost eye…), **2 Advances** per mission among survivors (buy TN
−1 steps, Grit −1, new skill; costs escalate), gear pool update (loot, ammo scarcity: each
mission costs Supply; crew-served/drones cost more), roster management (8–12 named characters;
the dead stay dead — memorial page in the campaign log).

### 15.5 Dilemmas
Between missions and scripted in-mission: d20 **Hard Choices** table + scenario-specific.
Structure: both options cost something real (Rapport vs Legitimacy vs Heat vs a person). No
mechanically correct answer. (Robin Sage war-crime negotiation pattern; Falling Skies stakes.)

## 16. The world (fiction constraints for all writers)

- **Timeframe:** four years after "the Fracture" — a constitutional crisis that broke federal
  authority; no nukes, no plague, no zombies. Grid down east of the mountains except Authority
  enclaves. Deliberately **ideology-free**: the Authority is "continuity of government" turned
  occupation; nobody says left or right, ever. Real geography, fictional details.
- **The Authority:** the Emergency Continuity Authority (ECA) — professional core (Army/federal
  LE remnants), the **Civil Order Corps** (local collaborator militia, poorly trained,
  numerous), and **SRT** (special reaction teams, the elite). Checkpoints, census sweeps,
  drone surveillance, requisitions. Their regional slogan-graffiti war with the resistance is
  an art motif.
- **Rivals:** **the Compact** (county militias federated into a protection racket), **the
  Ferrymen** (smuggling network — sometimes a vendor, sometimes a target), **marauders**
  (transient predators).
- **The Crew:** neighbors from the valley. The motto — *NOTHING IS BEYOND OUR REACH* — is
  **theirs**: painted under overpasses, on water towers, on the backs of Authority signs. It is
  a promise about the valley's people, their reach into every hollow, shop floor, and radio
  room the Authority thinks it holds. Every scenario intro quietly proves it.
- **Campaign arc: "LEAF SEASON"** — the Uwharrie–Blue Ridge corridor, western Carolinas,
  October–November. Hunting season provides cover for armed movement; leaves fall scene by
  scene (later scenarios have longer sightlines — mechanically real via Concealment notes);
  first frost, then the passes close.
- Tone: grounded, terse, procedural — field-manual voice with human margins (handwritten-style
  annotations in sidebars). Violence is sudden, brief, and costly; never gratuitous. Civilians
  are present in the world and protected by the rules' incentives (Rapport), not props.

## 17. mathcheck.py assertion targets (tolerance ±3% unless noted)

1. SOF vet (8/10), Aimed, Effective range vs Open: P(hit) = .79 → assert ≥ .70
2. Same vs Cover: = .64 (assert ≤ .70 and ≥ 12 points below the Open value); Green (13/15)
   Snap vs Cover: ≤ .15
3. Rifle DR 3 hit vs Armor-1 OPFOR: P(≥Down) ≥ .70; vs Armor-0 ≥ .85
4. Unarmored Crew, rifle hit: P(Serious+) ≥ .45; with plates, torso hits only: P(Serious+) ≤ .40
5. Full attack chain, vet vs regular in Open at Effective: P(out of fight in one Aimed) ≥ .55
   (BPRE benchmark ≈ .62 elite-on-elite)
6. Interrupt Die with 6/7/8 Crew activations: mean interrupts/turn within 0.6–1.3
7. Alert pacing (Monte Carlo of Noise arithmetic): loud-from-turn-1 median ALARM turn ≤ 4;
   walk-only stealth stays < Alerted through turn 6 with ≥ 80% probability
8. BZ crossing (4 squares, upright): P(≥Serious/Down) ≥ .50
9. Every Doctrine × Alert state has ≥1 legal action line (structural check on ch. 12 scripts +
   directives.yaml)
10. Vehicle: HMG (Pen 3) vs Armor 0 pickup: P(Wreck|hit) ≥ .30; rifle (Pen 0) vs Armor 2:
    P(>Mobility) = 0 (the cap holds)

## 18. Writing rules for chapter agents

- **Capitalized game terms only when they carry rules weight**, and only terms from the
  Glossary: Action Points (AP), Aimed/Snap/Braced Shot, ALARM, Alert(ed), Armor, Beaten Zone,
  Bleed, Blind Arc, Blip, Capability, Casualty Die, Contact Table, Cover TN / Open TN, Crew,
  Deep, Directive, Doctrine, Down, Dying, Effective Range, Exfil, Grit, Heat, Hidden/Exposed,
  Interrupt Die, Known, Noise, Overwatch, Pen, Pinned, Point Blank, Portal, Posted, Rally,
  Rapport, Reaction Fire, Shaken, Spot, Sprint, Sustained Fire, the Warden, Turn, Zone.
- Numbers always via `{{stat:...}}` / `{{table:...}}` macros against `/data/*.yaml` — never
  hand-typed in prose. Tables live in `data/tables.yaml`, referenced by id.
- Every chapter: one worked example in a sidebar (`::: example` block), diagrams referenced via
  `{{svg:diagrams/<name>.svg}}`.
- Rules voice: second person, present tense, imperative where procedural ("Roll the Casualty
  Die. Apply the result immediately."). Flavor voice: only in openers and sidebars, never
  interleaved with procedure.
- Cross-references via `{{ref:anchor}}`; never "see page X" by hand.
