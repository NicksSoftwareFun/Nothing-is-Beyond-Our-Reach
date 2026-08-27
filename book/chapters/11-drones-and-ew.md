# Drones & Electronic Warfare {#ch-drones}

::: flavor
Taped inside the lid of the quad case, an index card in Oren Petty's careful print: *"RULES OF THE AIR. 1. The sky is a ledger like everything else — every minute this bird is up, somebody is hearing it. 2. Fly the battery, not the map. Eight climbs go up; none of them come back. 3. If you hear a mower where no mower should be, get under trees and get STILL. It is not a mower."* Beneath that, Deacon's block capitals: *"AND THE JAMMER IS A LIT PORCH LIGHT. ASK STATIC BEFORE YOU TOUCH THE SWITCH."* And a third hand, pencil, very small, at the bottom: *the wasps with the wire tails don't care about porch lights. shotgun.*
:::

The heavy-equipment chapters end here, in the air. This one owns everything that flies and everything that fights over the spectrum it flies on: your recon quad, your one-shot strike drone, the dropper rig, the jammer on Petty's back — and the Authority's versions of all four, which are newer, more numerous, and pointed at you. Two loops run through the whole chapter. Yours: see them before they know you are there — the drone as the fieldcraft of {{ref:ch-fieldcraft}} with altitude. Theirs: find, mark, strike — because the Warden shoots only what it Knows ({{ref:sec-known}}), and under ALARM, its drones are how it comes to Know.

## Drones on the Board {#sec-drone-basics}

A drone is a marker, not a figure, and it obeys aircraft rules, all of them short:

- **It flies.** A drone ignores terrain, walls, elevation, and figures for movement. It has no Blind Arc ({{ref:sec-facing}}) and no facing.
- **It sees like a drone.** A drone has LOS to every outdoor square on the board except **canopy** squares — Concealment that is trees (timber and conifer squares, the map's tree-dot texture), whose crowns it cannot look through. It never sees inside a Zone; buildings are closed books from above ({{ref:sec-zones}}).
- **It is flown, not activated.** Every drone belongs to an operator — a Crew figure carrying the kit, or an enemy drone team. It does nothing on its own; it acts only when its operator spends the actions below. One drone aloft per operator.
- **It is a small, fast, miserable target.** Shooting at any drone uses a single flat TN — no Open or Cover, and one hit downs it; drones do not roll damage ({{ref:sec-wound-procedure}}). The numbers and the procedure live at {{ref:sec-counter-drone}}. No figure, either side, may ever take Reaction Fire at a drone — anti-drone fire is always deliberate.
- **It is not terrain.** A drone never blocks LOS and is never cover.

Your quad's fuel is **Battery** — a printed number of charges, spent per control action, never recovered in-mission. When the Battery question and the Noise question ({{ref:sec-noise}}) both come up, you are flying correctly: the drone is a loud clock, and this whole chapter is about what to buy before it runs out.

## The Recon Quad {#sec-recon-quad}

{{card:drones.crew-recon-quad}}

The quad rides in a pack ({{stat:gear.recon-quad.effect}} — the kit fills both of a figure's slots) and launches from the operator's hands.

**Launch (3 AP).** Place the drone marker in the operator's square or an adjacent one, aloft, with its full Battery of {{stat:drones.crew-recon-quad.battery}}. From the moment it is aloft to the moment it lands, it adds **+1 Noise per turn** in the Warden Phase's bookkeeping — the rotor buzz on the noise-sources table ({{ref:sec-noise}}).

**Fly (2 AP and 1 Battery).** While the drone is aloft, its operator may take the Fly action any number of times per activation, paying 2 AP and 1 Battery each, choosing one effect per action:

- **Reposition.** Move the drone up to {{stat:drones.crew-recon-quad.move}} squares.
- **Sweep.** Resolve every Blip within 3 squares of the drone ({{ref:sec-blips}}) — roll each on the Contact Table as normal — and reveal every hidden OPFOR element within 3 squares. Everything the Sweep reveals stays pinned while it remains within 3 squares of the drone: you always know exactly where it is, and it can never resolve with surprise against you.
- **Overwatch Feed.** Designate one Crew figure. Until the drone lands, is downed, or the feed is re-tasked by another Fly action, that figure's shots take **−1 TN against targets within 3 squares of the drone** — the spotter's voice in one shooter's ear. The bonus is a modifier like any other and counts inside the −3 cap ({{ref:sec-tests}}).

**Landing.** A Reposition that ends on the operator's square may land the drone free; packed, it is kit again. A drone that reaches 0 Battery aloft settles where it hovers at the end of the turn and sits there, dead weight — any Crew figure in or adjacent to its square may recover it with an Interact ({{ref:sec-ap}}). A drone shot down is destroyed, and the campaign's supply ledger feels it ({{ref:ch-long-war}}).

**Being shot at.** The Warden fires on your drone only while the force is **Alerted or worse** — an Unaware garrison hears a mower somewhere and files it under Tuesday. Every quiet turn on the ladder is free flying; the moment the mission goes loud, the sky gets expensive. The Warden's procedure is printed with the rest of the anti-drone rules at {{ref:sec-counter-drone}}.

### What a Sweep Buys {#sec-sweep}

{{svg:diagrams/diagram-drone-sweep.svg}}

Read the Sweep against the scouting rules of {{ref:ch-fieldcraft}} and its value is obvious: a Blip normally resolves at 12 squares of ground-level LOS, 6 in Concealment, on the Warden's terms as often as yours. The drone resolves them **at any distance from your Crew**, three squares of map at a time, on your clock, with nobody's rifle committed. A Blip that resolves under the drone deploys its figures as normal ({{ref:sec-blips}}), but it deploys them seen — postures, count, and Leader, from an angle no ditch protects against. The buzz overhead is the price: the pool climbs a point a turn, and Noise never comes back ({{ref:sec-noise}}). Fly early, strip the Blips that matter, and get it back on the ground before the ladder makes the sky hostile.

<!-- TODO-TABLE: drone-control, the drone action list (Launch, Fly: Reposition / Sweep / Overwatch Feed, Land, FPV Strike, Drop) with AP, Battery, and effect — for this chapter and the QRS -->

## The FPV Strike {#sec-fpv}

{{card:weapons.fpv}}

The FPV kit ({{stat:gear.fpv-kit.effect}}) is a different machine for a different job: an armed airframe with a camera, flown into the target and expended with it. It is Single-Shot in the fullest sense — one strike, then the kit is gone — and at Supply {{stat:gear.fpv-kit.supply}} it is the most expensive thing a figure can carry. The campaign, not the mission, decides how many you ever see ({{ref:ch-long-war}}).

**FPV Strike (4 AP, one use).** Choose a target square within {{stat:weapons.fpv.eff}} squares of the pilot. The pilot needs **no LOS** — the camera flies the terminal leg, and dead ground is exactly what this weapon exists to reach — but the square must be one your side actually knows about: it must contain or be adjacent to a revealed OPFOR figure or vehicle, be in some Crew figure's LOS, or lie within 3 squares of your aloft drone. You cannot steer to a guess.

Then make the **Pilot test: 2d10 ≥ 10.** It is a test like any other — a Shaken pilot is +2 — but no figure's Shoot line is involved; the weapon's Piloted trait replaces it ({{ref:sec-traits}}).

- **Success:** the drone detonates in the target square, immediately — no end-of-Phase delay. Resolve the blast attack: 12/14 at DR {{stat:weapons.fpv.dr}} against every figure within 1 square, Open or Cover judged per figure from the detonation square ({{ref:sec-blast}}). Figures with held AP may dive before the blast, once each, as against any detonation. A vehicle in the footprint takes a Vehicle Damage Die at Pen {{stat:weapons.fpv.pen}} ({{ref:ch-vehicles}}) — enough to open anything short of the Authority's protected trucks.
- **Failure:** the strike goes in anyway, somewhere. **Drift d8 × d6 halved** (rounded up) from the target square — direction and distance exactly like grenade scatter, and walls stop drift the same way ({{ref:sec-throw}}) — then detonate there. A drifted warhead is still a warhead; think hard before flying strikes near your own people or anyone else's.
- **Natural 20:** perfect terminal control — against the figure in the target square itself, the hit ignores Armor and adds +3 Severity ({{ref:sec-extremes}}). **Natural 2:** link lost — the drone tumbles into a field and is gone, no detonation; the pilot takes the standard complication (+1 Noise, Shaken).

Every FPV detonation is an explosion for Noise (+3, {{ref:sec-noise}}).

## The Dropper Rig {#sec-dropper}

The dropper ({{stat:gear.dropper-kit.effect}}) is a conversion, not a new aircraft: clamp it under the recon quad and the eye becomes an eye that bombs. The rig itself is one slot and carries **2 drops**; the quad it converts is still the quad — same Battery, same Fly actions, same buzz — so the load usually spreads across two backs.

**Drop (2 AP and 2 Battery).** The converted quad releases a grenade on **its own square**, which must be outdoors — Deep is proof against the sky ({{ref:sec-zones}}). No Throw test, no scatter: three meters straight down does not miss. The grenade resolves like any thrown frag — at the **end of the current Phase**, with dives allowed ({{ref:sec-blast-timing}}) — as a blast attack at DR {{stat:weapons.frag.dr}} with one vertical exception: **every figure in the footprint is judged at its Open TN, even adjacent to cover.** A wall is a roof against rifles and nothing at all against what comes from directly above. Cover-adjacent is precisely the habit the dropper punishes: the Warden's people hug walls because your rifles taught them to.

At 2 Battery a drop, the rig eats the quad's endurance twice as fast as flying does. A full combat load — launch, position, one Sweep, two drops — is 7 of the 8 charges. Fly the battery, not the map.

## Jamming {#sec-jamming}

The jammer pack is the crew's only weapon that fires in a spectrum nobody at the table can see. Its card reads: {{stat:gear.jammer-pack.effect}}

**Running the pack.** The jammer fills both kit slots and takes a working operator — in this crew, that is Oren Petty, whose Ham skill exists for exactly this box. Switching it on or off is an Interact (2 AP). While active, it projects a **bubble of radius 6 squares centered on its carrier**, moving with him. Inside the bubble:

- **RF drones fail.** Any radio-controlled drone inside the bubble — the recon quads, both droppers, your FPV if its target square lies inside — is fighting the noise floor: its **Pilot tests take +4 and drift on failure**, and its **Sweeps simply fail** (the action and Battery are spent; nothing resolves, nothing is revealed, nothing becomes Known). The bubble does not read IFF: **your own quad fails inside it too.** Jamming, like smoke, has no friends.
- **Manpack ALARM dies in the static.** An enemy Leader's manpack ALARM attempt made inside the bubble **automatically fails** ({{ref:sec-noise}}). Fixed sets and landlines are wired, not radios — the bubble does not touch them, which is why the wire still has to be cut the old way ({{ref:sec-stealth}}).

The jammer adds no Noise — the pool measures sound, and the pack makes none a human hears.

### The Cost {#sec-jammer-cost}

Here is the clause that makes the switch a decision and not a setting. **While the jammer is active, the Warden hears it.** Not with ears — with every receiver in the county reading a wall of static and every operator asking what is being protected in the middle of it. You are loud in a spectrum you cannot hear, and you have no meter for how loud.

The rule: **each Warden Phase the jammer is active, the nearest unresolved Blip abandons whatever it was doing and moves toward the carrier's current position** — at its ladder speed, 2 squares while the force is Unaware, 3 from Suspicious up ({{ref:sec-blips}}). It is not made Known and no alert triggers; something is simply, patiently, walking down the bearing. Switch off, and the convergence stops with the static — but the Blip does not walk back.

So the pack is a trade with no neutral position. On: the FPVs the Authority can jam are blunted, their recon quad is blind inside your bubble, and the manpack call that starts the QRF clock dies in Petty's static — while the ground element you have not met yet closes on the one figure in the crew who cannot run fast wearing it. Off: the sky works again, theirs included. The crew that wins this trade is the one that switches on late, for minutes, on purpose.

### The Authority's Jammers {#sec-eca-jamming}

The Authority fields the same physics on a truck. Where a scenario deploys an **ECA EW vehicle**, it projects the same 6-square bubble around itself: your RF drones inside test at +4 and drift, your Sweeps fail, and your Handheld Nets go dead inside it — radio Rally collapses back to voice range ({{ref:sec-rally}}). The truck is a vehicle like any other ({{ref:ch-vehicles}}), which is the good news: a Mobility kill drags the bubble to a stop, and a Wreck turns it off.

::: designer
Everything in this chapter is imported from the drone war over Ukraine, compressed to skirmish scale. The recon-strike loop — a cheap quad finds you, and what follows is fires, not infantry — is the loop the Warden runs under ALARM, and it is why the counter-drone shot and the canopy rule exist: by 2024 the answer to being seen was measured in seconds, and "don't be seen" had become the whole of infantry fieldcraft. EW is modeled as *terrain* — a bubble is a hill you carry, with a military crest and a price for standing on it — because that is how both armies came to treat it: jammers massed where it mattered and switched off where it didn't, since every emitter is a beacon to a direction-finder. And the fiber-optic FPV is here because it is the current last word in that argument: twenty kilometers of glass thread instead of a radio link, immune to every bubble on the board. The counter that ends this chapter — a shotgun, trees, and breaking line of sight — is not a game abstraction. It is the state of the art.
:::

## The Warden's Drones {#sec-warden-drones}

The Authority's drones enter play two ways: a scenario puts a drone team on the board from setup (or the Contact Table resolves one — {{ref:sec-blips}}), or **ALARM launches them** ({{ref:sec-noise}}). Either way the aircraft belongs to an operator element:

{{card:opfor.eca-drone-op}}

The operator runs **one drone per Warden Phase** — the Warden's whole air force is a man with a controller, which is the vulnerability the card prints in the open: **kill him and his drone is grounded** — it settles where it hovers and is out of the mission. OPFOR drones spend 1 Battery per Warden Phase aloft; the Battery of {{stat:drones.eca-recon.battery}} on the recon quad is a mission's endurance, and the {{stat:drones.eca-fiber-fpv.battery}} on the fiber FPV is a leash. Enemy drones add no Noise — the pool is the Warden's ear, not yours.

### The ECA Recon Quad {#sec-eca-recon}

Each Warden Phase it is aloft, the ECA recon quad flies one combined action: **Reposition up to {{stat:drones.eca-recon.move}} squares, then Sweep 3** — every Crew figure within 3 squares of where it stops is **Known** ({{ref:sec-known}}). It flies by priority: toward the last Known Crew position; failing that, toward the newest Noise source; failing that, along the mission anchor, objective first — gaps resolve against you ({{ref:sec-good-faith}}).

Being swept is worse than being seen. A swept figure **cannot become Unknown while it remains within 3 squares of the quad** — the 3-squares-and-gone rule ({{ref:sec-known}}) resumes only once you are outside the envelope; beyond it, the drone does not count as a figure holding LOS. While that eye holds you, every Doctrine in the enemy system has a target ({{ref:ch-enemy-system}}).

Three counters, all real:

- **Kill it.** The flat-TN shot below ({{ref:sec-counter-drone}}). One hit downs it.
- **Canopy.** Squares under tree cover — timber and conifer Concealment — are **immune to Sweep**: the quad cannot see through crowns, and a figure under canopy is never swept, no roll. Note the season: LEAF SEASON's later scenarios thin the hardwoods, and where a scenario sheet says the canopy is down, it is down ({{ref:ch-running-missions}}).
- **Freeze.** A Crew figure in any Concealment that has not moved this turn may hold still as the eye passes: when swept, roll **2d10 ≥ 8** — success, and the figure is not revealed and not Known. Movement is what the camera catches; a shape that could be a stump stays a stump. (A ghillie-rigged figure lying prone does better still — its card says how.)

### The Fiber FPV {#sec-fiber-fpv}

{{card:drones.eca-fiber-fpv}}

This is the SRT's answer to Petty, and the reason the jammer is not a solution. The fiber FPV flies on a spool of optical thread, not a radio link: **it is immune to jamming, entirely** — the bubble might as well be weather. You cannot jam it. You can only kill it, hide from it, or beat it on geometry.

It launches under ALARM or by scenario, and it hunts by the Warden's law: it attacks only a **Known** Crew figure or vehicle ({{ref:sec-known}}). Each Warden Phase aloft it moves up to {{stat:drones.eca-fiber-fpv.move}} squares toward its target; when it can strike, the Warden makes its Pilot test at **11**. Success: detonation on the target's square, immediately — blast attack 12/14 at DR 4, Pen 2, dives allowed, exactly like your own FPV in enemy hands. Failure: drift d8 × d6 halved and detonate. Hit or drift, **the airframe is expended** — every fiber FPV is one strike.

Its weakness is the thread. The spool pays out along the path it has flown, and the drone must keep **LOS along its approach to the target**. Each time its target breaks that LOS — a building, a conifer stand, dead ground — the drone spends its next Warden Phase repositioning to regain the line instead of striking. **The second time its target breaks LOS, the spool fouls and the drone is forced home: remove it.** Mark the first break; a barn with two doors is a weapon against this thing. So is going Unknown — a target it cannot Know is a target it cannot take — and so is its own Battery: count the leash.

### The ECA Dropper {#sec-eca-dropper}

Under ALARM, where the scenario fields one, the ECA dropper works your side of the vertical rule: every **other** Warden Phase, it drops a frag on the square holding the **densest cluster of Known Crew figures** — most Known figures in one blast footprint, ties against you. The drop resolves at end of Phase, dives allowed, and every figure in the footprint is judged at its **Open TN**, cover-adjacent or not, exactly like yours ({{ref:sec-dropper}}). It is an RF aircraft: **it is jammable** — inside your bubble the drop fails like a Sweep. The cluster rule is the lesson: from the moment the Authority's drones are up, standing shoulder to shoulder is a targeting solution. Spread out.

<!-- TODO-TABLE: counter-drone, one-glance anti-drone summary (flat TNs, shotgun exception, Warden's Alerted+ restriction and once-per-element attempt, no Reaction Fire at drones) for the QRS -->

## Shooting Back {#sec-counter-drone}

An anti-drone shot is a normal shot action — Snap or Aimed, from a figure's AP — against a **flat TN of 14**: no Open or Cover, no range bands. The only range rule is that the drone must be inside the weapon's Effective Range. The shooter's own condition still applies off the closed list ({{ref:sec-tests}}): a Snap Shot is +3, a Shaken shooter +2, smoke between you +2. One hit downs any drone — no Casualty Die, no damage roll ({{ref:sec-wound-procedure}}). And a shot is a shot: it makes the shooter Known and pays gunfire's Noise like any other trigger pull ({{ref:sec-known}}, {{ref:sec-noise}}).

**Why the shotgun matters.** The Hunting Shotgun's Spread trait buys it a different number: **TN 11 within 6 squares** — inside its whole Effective Range of {{stat:weapons.shotgun.eff}}. Run the curve: an Aimed carbine shot at 14 connects about one time in four; the shotgun at 11 is better than even money. A cloud of shot against a jinking rotor is twice the gun a rifle is, which is why the crew's oldest, cheapest weapon is standing air defense in this war — and why Okafor's scattergun stays uncased when the mowers start.

**The Warden shoots back too.** While the force is **Alerted or worse**, each revealed OPFOR element that has **no Known Crew target in LOS** and has your drone inside its weapon's Effective Range fires on it as part of its normal activation: **one attempt per element per Warden Phase**, 2d10 ≥ 14, shotgun-armed elements at 11 within 6. People always outrank drones on the Warden's priority list — an element with a Known target in LOS shoots the target, not the aircraft. Neither side ever takes Reaction Fire at a drone.

## What the Drone Feeds {#sec-drone-known}

Close the chapter by closing the loop. Everything the Warden does runs on Known ({{ref:sec-known}}): Doctrine fire, Directive orders, Reaction Fire — no trigger in the enemy system pulls without it ({{ref:ch-enemy-system}}). Before ALARM, the Warden earns Known the slow way: sentries' eyes, your muzzle flashes. After ALARM, the recon quad mass-produces it. One Sweep can hand every element on the board a target at once — the Base-of-Fire line gets its cluster, the Assault element gets its bearing, the QRF gets its grid, the mortar Directive gets the address it was waiting for. The drone is not another rifleman; it is the Warden's supply line for the only ammunition its Doctrines burn.

Which sets your counter-air priorities in order: the **operator** first, because one man grounds the fleet; the **aircraft** second, because one hit downs it; the **geometry** always — canopy, stillness, spacing, and the discipline of going Unknown — because it costs no ammunition at all. The full machinery this feeds — Doctrines, Directives, the QRF — is the next chapter's business: {{ref:ch-enemy-system}}.

::: sidebar
**Margin note, Petty's hand:** *battery math for people who don't do battery math. eight charges. one to get anywhere, one to look, one to get back where I can reach it. that's a five-charge margin and the mission will eat three of them when somebody yells NOW. so no, I will not "just keep it up for a while." the buzz costs a point of quiet a turn and quiet doesn't come back either. tell me the minute you want, and I'll fly you that minute like it's the last one. it might be.*
:::

::: example
**The pump station.** Turn 2 of a raid on a fuel point; thresholds Suspicious 3 / Alerted 7, pool at 2, force Unaware. Blips 2 and 4 sit between the crew and the tanks; a sentry pair with a fixed landline set holds the pump house; across the road, the scenario posts an ECA drone team, grounded until ALARM. Oren Petty carries the recon quad — both slots, so tonight his jammer stayed home — with Reyna Vasquez and Tanya Okafor forward.

*Turn 2.* Petty ({{stat:crew.petty.ap}} AP — Slow): Launch (3 AP), the quad aloft at Battery {{stat:drones.crew-recon-quad.battery}}. Fly: Reposition (2 AP, 1 Battery), 6 squares out over the fence line. Fly: Sweep (2 AP, 1 Battery) — 7 AP, spent to the bone. Both Blips sit within 3 of the drone. Blip 2: d10 = **1** — Nothing; somebody's dog, removed. Blip 4: d10 = **7** — a fireteam, four figures with a Leader, deployed at the culvert in plain view of the camera, pinned while the quad holds them. Battery 6. Vasquez and Okafor walk up and bank AP; the Interrupt Die after the second activation needs a 10 and shows a 4. Warden Phase: rotor buzz, +1 Noise — pool 3, **Suspicious**. The fireteam stands to under a sound it cannot place.

*Turn 3.* Petty: Fly: Reposition (2 AP, 1 Battery — 5) to keep the fireteam in the envelope; Fly: Overwatch Feed (2 AP, 1 Battery — 4), designating Vasquez. Vasquez, rested against a deadfall: Braced Shot (5 AP) at the fireteam Leader behind the culvert lip. Cover TN of her Shoot {{stat:crew.vasquez.shoot}}: 12, −1 Braced, −1 feed — **TN 10**. She rolls **6 and 7 — 13.** Hit. Casualty Die: d10 = **5** + carbine DR {{stat:weapons.carbine.dr}} − Armor {{stat:opfor.eca-rifleman.armor}} = **7. Dead.** The survivors test Grit for their Leader and hold — ECA discipline ({{ref:sec-opfor-morale}}). The unsuppressed shot is +2 Noise — pool 6 — and a shot in their LOS is clear contact: **Alerted**, and Vasquez is Known at her fired-from square.

*Warden Phase.* Directive drawn: EYES UP. The pump-house sentries reach their fixed set — automatic — **ALARM**: QRF clock d6+2 rolls 5 turns, and across the road the drone team wakes. The fireteam has a Known target in LOS, so it fires at Vasquez, not the quad; her deadfall holds. The operator puts up the fiber FPV.

*Turn 4.* Vasquez displaces 4 squares behind the dairy barn, no OPFOR figure holding LOS on the way — **Unknown**. Petty pulls the quad 6 squares homeward (2 AP, 1 Battery — 3) and holds 5 AP. Warden Phase: the fiber FPV closes 8 squares toward her last Known square and finds no Known target — it loiters. The fireteam, nothing Known in LOS now, spends its phase on Petty's quad: one attempt, 2d10 ≥ 14 flat — **8 and 4, 12.** The quad jinks.

*Turn 5.* The fireteam presses the barn; Vasquez fires again to stop the rush — a hit, and Known again. Okafor does not activate: she stands dead still in the crabapple row, shotgun up, banking all 8. Warden Phase: the fiber FPV has its Known figure. Pilot 11: **5 and 4 — 9.** Failure — drift d8 = **6**, d6 = **4**, halved: 2 squares, into the stock pond. The blast attack catches no one, and the airframe is spent: one strike, hit or drift. The operator's next bird, the recon quad, launches and will fly at her last Known square. Petty, under timber canopy, cannot be swept at all.

*Turn 6, Warden Phase.* The ECA quad repositions and Sweeps 3: Vasquez, 2 squares from where it stops, is **Known** — and stays Known while it holds her. Okafor, in Concealment, unmoving since her last activation: freeze test 2d10 ≥ 8 — **9.** A stump stays a stump. Next Crew Phase she ends the argument: the quad crosses the yard at 4 squares, inside her shotgun's {{stat:weapons.shotgun.eff}}; Aimed Shot (4 AP) at the flat **11**: **6 and 7 — 13.** One hit, and it is a lawnmower falling out of the sky — no damage roll, down ({{ref:sec-wound-procedure}}).

Count the ledger. Two Battery stripped both Blips before the crew crossed the fence; the feed bought the −1 that made a TN 10 of a Leader's life; the Authority spent both aircraft and got one drifted warhead in a pond. Cost: the pool went from 2 to loud, Vasquez was Known twice, Okafor's shot marked her — and the QRF clock stands at 2. The sky is a ledger. Balance it and get out.
:::

::: designer
Why price the quad in Battery *and* AP? AP alone would make flying free tempo — the drone as a better scout with no scarcity — and Battery alone would let one figure fly all day while fighting all day. Two currencies make the operator a real specialist: Petty's activation *is* the drone, and eight charges force the question the whole chapter turns on — which three minutes of this mission deserve an eye in the sky? The flat anti-drone TN, meanwhile, is deliberately outside the Open/Cover economy: nothing on the board changes it, so the decision is never "where do I shoot it from" but "who is holding the shotgun" — one number that makes a farm tool into air defense, which is the period-correct joke and true besides.
:::
