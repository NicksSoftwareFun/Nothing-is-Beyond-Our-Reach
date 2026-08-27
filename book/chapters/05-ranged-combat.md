# Ranged Combat {#ch-ranged-combat}

::: flavor
The first morning at the gravel pit, Deacon set one silhouette at a hundred meters and gave each of us five rounds. Nobody impressed anybody. Then he stood the target behind a culvert pipe and gave us five more. Two hits, fourteen shooters. That's the whole war, he said. Any fool can kill a man in the open — the world will rarely sell you one. You'll pay for every clean look with sweat and angles, and when the look comes, your rifle had better already be up. We policed our brass in silence. Every case, he said. We're not the ones with a factory.
:::

This is the gun chapter. {{ref:ch-core-concepts}} taught you the test, the Open-or-Cover call, and line of sight; {{ref:ch-actions}} taught you what a shot costs and when one happens out of turn. This chapter assembles those parts into the complete firing procedure, then walks the armory: what Effective Range means at the table, what every weapon trait does, which guns your people actually carry, and how grenades, smoke, and fire behave. What a hit does to a human being is deliberately not here — that is the business of {{ref:ch-wounds}}, and this chapter hands off to it at the moment the round lands.

## The Attack Procedure {#sec-attack-procedure}

Every shot in the game runs the same six steps — Aimed, Snap, Braced, or Reaction Fire, your rifle or the Warden's. Learn it once; nothing later in this book replaces it, only feeds it.

**1. Declare.** Name the shooter, the target figure, and the kind of shot — Snap, Aimed, or Braced ({{ref:sec-ap}}). Confirm the shot is legal: the target is inside the shooter's frontal arc ({{ref:sec-facing}}), the LOS line is clear ({{ref:sec-los}}), and the target is inside the weapon's range envelope ({{ref:sec-range}}). If any of the three fails, there is no shot to take.

**2. Pay.** Spend the shot's AP from the shooter's pool. Reaction Fire pays the Snap Shot's cost from held AP ({{ref:sec-reaction-fire}}).

**3. Pick one number.** Ask the binary question of {{ref:sec-cover}}: is the target Open or in Cover? Take the matching TN from the shooter's Shoot line. This is the only thing cover ever does to a shot.

**4. Modify.** Apply every line of the closed modifier list that is true — the shot type, the range band, smoke or darkness, a Shaken shooter, a Sprinting target, elevation, Point Blank ({{ref:sec-tests}}). Nothing off the list touches the roll. Clamp the net total to the printed maximum before rolling.

**5. Roll.** 2d10, summed, against the final TN. Equal or higher hits. A natural 20 is a catastrophic success: the hit ignores Armor and adds +3 Severity ({{ref:ch-core-concepts}}). A natural 2 fails and jams the weapon — see below.

**6. Resolve.** On a hit, route by target type and leave this chapter:

- **Crew figure** → the wound procedure: Hit Location, then Severity ({{ref:sec-wound-procedure}}).
- **OPFOR figure** → one Casualty Die ({{ref:sec-opfor-casualty}}).
- **Support unit** (a driver, a porter) → the Casualty Die at −1 ({{ref:sec-opfor-casualty}}).
- **Vehicle** → the vehicle hit-and-damage procedure ({{ref:ch-vehicles}}).
- **Drone** → the drone rules ({{ref:ch-drones}}).

On a miss, check one thing before moving on: the near miss — an Automatic weapon's closest failures can still Shake a target in the open. The near-miss rule is owned by the hit-resolution procedure ({{ref:sec-wound-procedure}}); every other miss is simply a miss.

Finally, book the shot's Noise ({{ref:sec-noise}}). Fire is the loudest thing most missions ever do, and the Warden is listening.

**Jams.** A natural 2 on any shot is the standard firing complication: the weapon jams. A jammed weapon cannot fire again until its bearer clears it with a Reload action ({{ref:sec-ap}}). The jam replaces the natural 2's default complication — the shooter is not also Shaken.

**One trigger, one target.** A shot attacks a single declared figure. The only ways this game puts one roll against several bodies are the Blast weapons later in this chapter ({{ref:sec-grenades}}) and Sustained Fire's Beaten Zone ({{ref:ch-crew-served}}).

## Range and the Envelope {#sec-range}

Every weapon prints an **Effective Range** in squares. It is not a maximum; it is the distance inside which the weapon's user shoots at the printed TNs. From there the envelope has three bands, priced by the modifier list ({{ref:sec-tests}}):

- **Point Blank** — an adjacent square, or any target in the same Zone ({{ref:sec-zones}}): −2 TN. Close is easy, for everyone, in both directions.
- **Inside Effective Range** — the printed TNs, unmodified by distance.
- **Beyond Effective, up to twice Effective** — +2 TN. The weapon still reaches; the shooter is working.
- **Beyond twice Effective** — no shot. A Scoped weapon alone may take it, at +4 TN in place of the ban ({{ref:sec-traits}}).

Measure in squares by the shortest legal count, like every distance in the game.

What the numbers mean on a standard 30×24 board: a Pistol's {{stat:weapons.pistol.eff}} and a Hunting Shotgun's {{stat:weapons.shotgun.eff}} squares make them fighting tools for yards, doorways, and Zones; the Submachine Gun's {{stat:weapons.smg.eff}} covers a farmyard; the Carbine's {{stat:weapons.carbine.eff}} covers most of a board; the Battle Rifle's {{stat:weapons.battle-rifle.eff}} and the Scoped Hunting Rifle's {{stat:weapons.hunting-rifle.eff}} mean that outdoors, distance alone will almost never protect anyone from either. Past the shortest barrels, the practical limit on rifle fire in this valley is not range — it is LOS, brush, and the Cover TN. That is a Leaf Season fact with a mechanical edge: as the hardwoods drop and Concealment thins scenario by scenario, the long guns' envelopes stop being theoretical.

<!-- TODO-TABLE: effective-ranges, per-weapon summary (name, DR, Pen, Effective Range, traits) rendered from weapons.yaml for this section and the QRS -->

## Weapon Traits {#sec-traits}

A weapon card carries its numbers — DR, Pen, Effective Range — and a short list of **traits**. A trait is a standing rule, always on, never optional. This glossary is the owning definition of every trait in the game except the four crew-served traits at the end.

**Automatic.** The weapon fires bursts, and its misses have a fringe: it can inflict the **near miss** — a close miss that Shakes a target in the open. The rule itself is owned by the hit-resolution procedure ({{ref:sec-wound-procedure}}); what the trait marks is which weapons get it. This single rule is the game's hasty suppression, and it is worth building around ({{ref:sec-suppressive-intent}}).

**Scoped.** The weapon may fire beyond twice its Effective Range at +4 TN, where other weapons have no shot at all ({{ref:sec-range}}). The +2 band between one and two times Effective applies to it as normal.

**Bolt.** A manual action. Snap Shots with a Bolt weapon take an additional +1 TN on top of the Snap penalty (it counts inside the modifier cap), and a Bolt weapon is never Automatic — it cannot inflict the near miss. The gun rewards a shooter who takes the time it asks for.

**Spread.** A cone of shot: +1 DR against targets within 3 squares. Spread weapons are also the crew's best answer to small drones — the flat anti-drone TN lives with the drone rules ({{ref:ch-drones}}).

**One-Handed.** Fired from one hand at no penalty. A figure whose arm wound forces it to one hand keeps shooting a One-Handed weapon at its printed TNs, where a long gun pays the wound table's penalty ({{ref:sec-wound-procedure}}).

**Compact.** Short enough to fight indoors. A Compact weapon takes no long-gun penalty in Zone fighting; that penalty is defined with the Zone-fighting rules ({{ref:sec-zone-fighting}}).

**Heavy-Round.** A full-power rifle cartridge. The trait marks the weapon as a threat to soft vehicles through its printed Pen — resolution belongs to {{ref:ch-vehicles}}.

**Blast-1.** The weapon does not attack a figure; it attacks a square, and everything within 1 square of the detonation — a nine-square footprint — takes the blast attack ({{ref:sec-grenades}}).

**Backblast.** The launch throws a cone of fire behind the shooter. A Backblast weapon may not be fired from inside a Zone.

**Single-Shot.** One round is all the figure carries. Once fired, the weapon is spent for the mission; there is no Reload.

**Thrown.** Delivered by the Throw procedure ({{ref:sec-grenades}}). A Thrown weapon's Effective Range is its throwing range, and it does not take the over-Effective bands — 8 squares is the arm's limit, full stop.

**Stun.** No DR and no attack roll. When the weapon resolves, every figure in the target Zone — or within 1 square of the detonation square outdoors — is Shaken, no test. Stun weapons are the key that opens doors: they enable first-fire entry ({{ref:sec-entry}}).

**Placed.** Not thrown. The figure sets the charge in its own or an adjacent square, or against a wall or object, for the AP cost on the card, and it detonates by command or timer as the card and scenario state.

**Breach.** Detonating against a wall blows a new Portal through it ({{ref:sec-breaching}}).

**Fire.** The detonation leaves a fire marker in the impact square ({{ref:sec-fire-markers}}).

**Triggered.** The device detonates on a condition, not an order to throw: command wire, pressure plate, tripwire, per scenario. Both sides use Triggered weapons, and both sides walk carefully because of it.

**Piloted.** The attack is made with a Pilot test, not any figure's Shoot line. Piloted weapons belong to {{ref:ch-drones}}.

**Silent.** Using the weapon generates no Noise ({{ref:sec-noise}}). The blade's takedown procedure itself rides with the stealth rules ({{ref:sec-stealth}}).

**The crew-served traits.** Four traits — **Sustained**, **Crew-Served**, **Mounted**, and **Indirect** — mark the weapons that fight as a team's job rather than one figure's action: machine guns, mounted guns, mortars, the Beaten Zone. They are named here so the cards read; they are defined in {{ref:ch-crew-served}}.

<!-- TODO-TABLE: weapon-traits, one-line trait summaries for the QRS (full definitions live at sec-traits) -->

## The Arsenal {#sec-arsenal}

Every weapon in the campaign is one card, read exactly like a Crew card's weapon line: DR, Pen, Effective Range, traits. The complete arsenal is printed in the appendix at the back of this book; three cards carry most of the game's fights and repay a closer read.

{{card:weapons.carbine}}

The Carbine is the war's common denominator — the ECA carries it, the Civil Order Corps carries it, and every one your Crew owns was probably theirs first. DR {{stat:weapons.carbine.dr}} kills at every range that matters, {{stat:weapons.carbine.eff}} squares of Effective Range covers nearly any board, and Automatic means even its misses do work against people in the open. When a rule in this book needs a default gun, this is the gun.

{{card:weapons.hunting-rifle}}

The Scoped Hunting Rifle is the valley's own answer, walked out of a thousand October deer camps. {{stat:weapons.hunting-rifle.eff}} squares of Effective Range and the Scoped trait give it reaches no carbine has; Bolt takes away the near miss and taxes hasty work. It is a deliberate shooter's weapon in every sense — in Junior Ledford's hands, with his Hunter skill flattening the range bands, it is the closest thing the Crew has to owning a piece of the horizon.

{{card:weapons.shotgun}}

The Hunting Shotgun is short, common as fence wire, and inside 3 squares it hits harder than a rifle — Spread's +1 DR on top of DR {{stat:weapons.shotgun.dr}}. Its {{stat:weapons.shotgun.eff}}-square Effective Range makes it a doorway and barnyard weapon, which is where half this game is decided, and it is the tool the Crew reaches for when the Authority's drones come low ({{ref:ch-drones}}).

Around these three: the Pistol, One-Handed, is the backup that keeps a wounded arm in the fight; the Submachine Gun is Compact volume for Zone work; the Battle Rifle trades handiness for reach and a Heavy-Round that worries trucks. The Medium and Heavy Machine Guns are not personal weapons at all — they are jobs, and {{ref:ch-crew-served}} is their chapter. The Rocket is a Single-Shot argument for use against vehicles and strongpoints, with a Backblast that forbids firing it from indoors.

## Suppressive Intent {#sec-suppressive-intent}

Read the Automatic near miss again, this time as a plan. A burst that misses by 1 or 2 Shakes an Open target — and Shaken is real damage: 4 AP gone, +2 TN on everything, no Reaction Fire ({{ref:sec-shaken}}). So an automatic weapon pointed at somebody in the open does not need to hit to be working, and a shooter who cannot buy a good TN can still buy fear. Snap Shots at long range, at sprinters, from Shaken hands — shots you would never take for the kill are worth taking for the flinch. This is the poor man's suppression: no template, no team, just volume and intent, and your Green shooters can deliver it the mission they arrive.

Its limits are the point. The near miss only works against the Open — a target behind a wall cannot be scared this way, only hit — and a Snap Shot's Noise costs the same as a killing shot's ({{ref:sec-noise}}). When the target is in Cover and must still be made to keep its head down, you have outgrown this section: real suppression is a machine gun's Sustained Fire and the Beaten Zone, and it lives in {{ref:ch-crew-served}}.

::: designer
The near miss converts the fiction everyone already believes — automatic fire is scary before it is lethal — into one free check on a number you have already rolled. No suppression points, no pinning template, no extra dice. It also quietly grades the arsenal: at a hopeless TN 15, an Open target still eats a Shaken on a 13 or 14 — 15% of the curve doing work a miss would waste. And because the rule reads "miss by 1–2," better shooters throw near misses more often too: the band rides just under wherever your TN sits. Skill improves even your failures.
:::

::: example
**The same shot, both ways.** Turn two at the weigh-station. Dale "Deacon" McAllister kneels at a stack of culvert pipe; an ECA Rifleman — Shoot {{stat:opfor.eca-rifleman.shoot}}, Armor {{stat:opfor.eca-rifleman.armor}}, carbine — is 12 squares away, well inside Deacon's own carbine's {{stat:weapons.carbine.eff}}. Deacon's card reads Shoot {{stat:crew.deacon.shoot}} and {{stat:crew.deacon.ap}} AP. Run his activation twice, same dice, and watch what one wall changes.

*Take one — the Open.* The Rifleman is caught crossing the lot between the office and the scale house: upright, Clear terrain, not Sprinting. Deacon steps one square clear of the pipe for the angle (1 AP) and takes an Aimed Shot (4 AP) at the left-hand number of his Shoot line: **Open TN 8**. Nothing on the modifier list applies. He rolls 2d10: **4 and 3 — 7.** A miss by 1 — but his carbine is Automatic and the target is Open, so the near miss lands: the Rifleman is **Shaken**. Deacon has 2 AP left and spends them on a Snap Shot: TN 8, +3 Snap, **TN 11**. He rolls **9 and 4 — 13.** A hit. Roll the Casualty Die ({{ref:sec-opfor-casualty}} — the table lives with the wound rules): d10 comes up **6**, plus the carbine's DR {{stat:weapons.carbine.dr}}, minus Armor {{stat:opfor.eca-rifleman.armor}} — total **8. Dead.**

*Take two — the Cover.* Same range, but this time the Rifleman is firing over the scale-house windowsill: the LOS line touches a Cover square adjacent to him, so the right-hand number applies. Deacon doesn't move — the pipe is a rest, so he opens with a Braced Shot (5 AP): **Cover TN 10**, −1 Braced, **TN 9**. Same dice: **4 and 3 — 7.** A miss by 2, and this time it buys nothing at all — the near miss needs an Open target. His last 2 AP go on the Snap Shot: TN 10, +3 Snap, **TN 13**. Same dice: **9 and 4 — 13.** A hit, with nothing to spare. Casualty Die: **6** + {{stat:weapons.carbine.dr}} − {{stat:opfor.eca-rifleman.armor}} = **8. Dead.**

Same dice, same corpse — but read the ledger. In the open, Deacon's opener hit on a 79% and even its miss Shook the man; the finisher needed an 11 (about 55%). Behind the sill, the opener needed a supported position just to reach 72%, its miss was worthless, and the finisher was a coin toss he won on the exact number (13 hits on 36%). That roughly ten-points-per-TN arithmetic is what a wall *is* in this game. Both takes end the same uncomfortable way, too: {{stat:crew.deacon.ap}} AP all spent, so Deacon holds nothing — no Reaction Fire until he activates again ({{ref:sec-overwatch}}). And both takes owe the Warden Phase the same debt: two unsuppressed shots, capped at gunfire's per-turn maximum ({{ref:sec-noise}}).
:::

## Grenades & Explosives {#sec-grenades}

A grenade is not a fast gun. It is a slow, area-eating machine that attacks a *square*, ignores facing, and resolves on a delay that both sides can spend against. Every Thrown explosive uses this procedure; the Placed and Triggered ones skip the throw and join it at the detonation.

### The Throw {#sec-throw}

Throwing costs 3 AP. Pick a target square within the weapon's range — {{stat:weapons.frag.eff}} squares for a Frag Grenade — that the thrower has LOS to. Low Cover along the line is never a bar to the throw, whatever it does to a shot — a grenade arcs over the wall a bullet has to beat. It cannot be thrown through Block or a closed door, and it always targets a square, never a figure.

Then make the **Throw test: 2d10 ≥ 10.** There is no Cover TN for a throw — the target's wall matters at detonation, not at release — but the modifier list applies as usual (a Shaken thrower is still +2). On a success, place the grenade marker in the target square. On a failure, the grenade **scatters**: roll d8 for direction — a 1 is directly away from the thrower, counting clockwise — and d6 halved (round up) for distance in squares: a 1–2 travels 1, a 3–4 travels 2, a 5–6 travels 3. **Walls stop scatter:** a scattering grenade that would cross a wall or Block edge stops in the last legal square in front of it. A natural 2 on the Throw test takes the default complication — the thrower is Shaken and marks +1 Noise — in addition to scattering.

{{svg:diagrams/diagram-grenade-scatter.svg}}

Throwing into buildings is the close-quarters chapter's business: a grenade posted through an adjacent open Portal neither scatters nor needs a Throw test, and what it does to a Zone full of defenders — Posted, Deep, or stacked to enter — is resolved at {{ref:sec-grenades-zones}}.

### End of the Phase {#sec-blast-timing}

A grenade marker does not detonate when it lands. **Every explosive marker resolves at the end of the current Phase** — throw during your Crew Phase, and it goes off when your Crew Phase ends; a Warden-thrown grenade goes off at the end of the Warden Phase. Those seconds belong to everyone.

Until the marker resolves, any figure — either side, Shaken or not — may pay **1 AP to dive away: go prone and move 1 square,** once per figure per detonation. A dive is not Reaction Fire and does not count against the reaction limit; the AP comes from whatever the figure holds, spent out of turn. Warden figures with held AP dive whenever it would help them ({{ref:sec-good-faith}}). When the Phase ends, resolve all waiting markers in the order they landed: dives first — Crew figures in an order you pick, Warden figures by good faith — then each blast.

### The Blast {#sec-blast}

A detonating Blast-1 weapon makes the **blast attack: 2d10 vs 12/14, at the weapon's DR, separately against every figure within 1 square of the marker** — the nine-square footprint. Judge Open or Cover per figure *from the marker's square* ({{ref:sec-cover}}): the same burst can catch one man Open and spare his neighbor behind the truck. Prone helps only by way of the dive that got you there — at blast distance, prone is not Cover — but a dive that carries a figure out of the footprint entirely is the best save the game sells. Each hit routes by target type exactly as step 6 of the attack procedure ({{ref:sec-attack-procedure}}); Blast hits roll Casualty Dice and Severity like any other hit, and Armor counts. Every detonation is an explosion for Noise purposes ({{ref:sec-noise}}).

The explosives themselves:

{{card:weapons.frag}}

{{card:weapons.flashbang}}

{{card:weapons.demo-charge}}

{{card:weapons.molotov}}

{{card:weapons.ied}}

The **Frag Grenade** is the blast attack in its pure form, DR {{stat:weapons.frag.dr}} against everything in the footprint. The **Flashbang** trades all of that for certainty: Stun, no roll, everyone in the Zone Shaken — the tool that decides an entry before it happens ({{ref:sec-entry}}). The **Demolition Charge** is Placed, not thrown, and its Breach trait rewrites the map, opening Portals where the defender planned walls ({{ref:sec-breaching}}); its DR {{stat:weapons.demo-charge.dr}} blast makes standing near the far side of that wall its own mistake. The **Molotov** is the poor man's artillery — DR {{stat:weapons.molotov.dr}} and a fire marker that keeps working after the glass stops ({{ref:sec-fire-markers}}). The **IED**, Placed and Triggered, is DR {{stat:weapons.ied.dr}} of patience; scenarios state its trigger, and both sides bury them.

::: example
**Scatter at the machine shed.** Crew Phase, turn four. Two Civil Order Corpsmen shelter behind a flatbed by the machine shed; Tanya Okafor is 6 squares off with a Frag Grenade. She pays 3 AP and targets the square between them — the flatbed is low Cover, which blocks neither her LOS nor her throw. Throw test 2d10 ≥ 10: she rolls **5 and 4 — 9.** Short. Scatter: d8 comes up **3** — clockwise from straight-away, that drifts the grenade right — and the d6 comes up **3**, halved and rounded up to **2 squares**. One square out, the shed wall is in the way: walls stop scatter, and the marker halts in the square against the wall — 1 square from one Corpsman, out of footprint of the other. The Crew Phase ends and the marker cooks. The near Corpsman's element held 2 AP, and the Warden spends 1 the sensible way: he dives, prone, 1 square along the wall — still inside the footprint, but now judged from the marker square he is behind the flatbed's corner: Cover. Blast attack at Cover TN 14: Okafor's dice come up **8 and 7 — 15.** A hit anyway. Casualty Die: d10 **4**, + DR {{stat:weapons.frag.dr}}, − Armor 0 = **7. Dead** where he lay. The far Corpsman, outside the footprint, doesn't even roll — and the explosion's Noise goes on the ledger ({{ref:sec-noise}}).
:::

::: sidebar
**Margin note, Deacon's hand:** *The wait is the weapon. Nobody throws frags at soldiers — you throw them at choices. He can dive and be prone and useless, or stand his post and eat it. Either way the door is better than it was. And learn the wall rule cold: thrown short, a grenade rolls to the base of the wall — which is exactly where they put their backs.*
:::

::: designer
End-of-Phase resolution is the load-bearing oddity here. A live grenade that resolved instantly would just be a better rifle; on a delay, it is a zone-denial argument that the enemy gets to answer with AP — which makes held AP, once again, the game's real currency. It also keeps the Warden honest and simple: no interrupt windows, no timing stack. Everything thrown this Phase cooks when the Phase does.
:::

## Smoke {#sec-smoke}

{{card:gear.smoke}}

A smoke grenade is thrown exactly like any Thrown weapon — 3 AP, range 8, Throw test at 10, scatter on a failure — but it is not an explosive: nothing dives from it, and it blooms the moment it lands rather than waiting for the Phase to end. Place a **smoke cloud** covering the landing square and one adjacent square of the thrower's choice. The cloud stands until the End Phase of the *following* turn, then drifts off.

Smoke never blocks LOS ({{ref:sec-los}}). What it does is two things. Any shot whose LOS line crosses a smoke square takes the obscured modifier from the list ({{ref:sec-tests}}) — in either direction; smoke has no friends. And smoke **blocks spotting**: sentries cannot spot through it, Blips do not resolve through it, and figures behind it are not Known by being seen there ({{ref:sec-spotting}}, {{ref:sec-blips}}). Smoke is the only tool in the game that manufactures concealment on demand, in the open, in seconds — which is why crossing the kill zone in {{ref:ch-crew-served}}'s arithmetic so often begins with a can of it. Remember what it is not: it stops no bullets, and a burst fired blind through it can still find you — Shaken shooters and worse odds, but the Warden will still spend rounds on the last place you were Known.

## Fire {#sec-fire-markers}

Fire markers enter play from Molotovs ({{ref:sec-grenades}}), from vehicles that burn ({{ref:ch-vehicles}}), and from scenario events. A burning square is **impassable** — no figure may enter or end movement there — and the fire adds +1 Noise each turn it burns ({{ref:sec-noise}}). A figure standing in a square when it catches fire is driven out: move it 1 square by the shortest legal path as the marker is placed, at no AP cost. Fire does not block LOS and is not Cover; it is simply ground nobody can use. A fire marker burns for the rest of the mission unless the scenario says otherwise; where a scenario wants fire to spread or die, its sheet says how, and the End Phase's clock step is when it happens ({{ref:sec-turn-sequence}}).

Used deliberately, fire is area denial that never gets tired: a burning doorway is a Portal nobody breaches, and a burning lane turns a cordon's map into your map. It is also permanent, loud, and utterly indifferent to Rapport when it reaches something the valley needed — the campaign rules have a memory for that kind of thing ({{ref:ch-long-war}}).

---

You now own the shot from declaration to the moment it lands, and the tools that attack squares instead of silhouettes. Two chapters extend this one: {{ref:ch-close-quarters}} takes the procedure indoors, where every fight is Point Blank and the door decides who fires first — and {{ref:ch-crew-served}} scales it up to the guns that attack the ground itself. What the bullet does when it arrives — location, severity, blood, and the long cost — is waiting in {{ref:ch-wounds}}.
