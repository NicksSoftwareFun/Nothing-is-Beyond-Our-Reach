# Vehicles {#ch-vehicles}

::: flavor
Taped above the fuel gauge of the box truck, Delgado's cramped ballpoint: *"The Authority thinks a road is a thing you hold. A road is a thing you know. They have the blacktop, the bridges, and the checkpoints. I have every logging cut, church lot, and creek ford from here to the dam — and the difference is, they need theirs."* Below it, other hands, other weeks: *rule one. the truck is a promise, not a fort. it takes you there and it brings you home, and the day you start fighting from it is the day it does neither.* — *rule two: count heads at the tailgate. twice. — V.*
:::

This chapter owns everything with an engine except the drones: how vehicles are read, boarded, driven, fired from, shot at, and lost. Attacks against them still begin with the attack procedure ({{ref:sec-attack-procedure}}) and hits on the people inside still end in the wound rules ({{ref:ch-wounds}}); the mounted machine gun's Sustained Fire belongs to {{ref:ch-crew-served}}, and how the Warden drives — QRF columns, patrol trucks, the technical at the wire — is scripted in {{ref:ch-enemy-system}}. What this chapter teaches is the trade every vehicle offers: speed and carriage, bought with Noise and a very large silhouette.

## Reading a Vehicle Card {#sec-vehicle-cards}

Every vehicle is one card with five fields:

- **Handling** — the TN for Handling tests: rams, barrier runs, and any stunt a card or scenario calls one. Ordinary driving never tests.
- **Speed** — two numbers, road and rough: how many squares 1 AP of driving buys on each kind of ground.
- **Armor** — 0 for civilian steel, 1 for improvised plate, 2 for the real thing. Subtracted from the Vehicle Damage Die ({{ref:sec-shooting-vehicles}}).
- **Seats** — how many figures it carries, driver included.
- **Special** — the card's own rules text. As always, the card wins.

{{card:vehicles.pickup}}

{{card:vehicles.technical}}

{{card:vehicles.mrap}}

Read the three together and the game's whole vehicle spectrum is visible. The Pickup is fast, common, and made of excuses — Armor 0, and the bed carries three riders the card names **exposed**. The Technical is the same truth with a Heavy Machine Gun rung into the bed: the gunner is exposed too, and the gun is why anyone tolerates it. The ECA Protected Vehicle is the other end — Armor 2, eight seats, slow, and the reason this chapter has a section called the Pen cap.

**Exposed occupants.** A figure aboard a vehicle is either enclosed or exposed, and *the card decides*: only occupants the card names — the Pickup's bed riders, the Technical's gunner — are exposed. Everyone else rides enclosed: they cannot be targeted directly, and they are reached only through the damage table. Exposed figures can be shot like anyone else ({{ref:sec-shooting-vehicles}}), and they are who a **Weapon / exposed** result finds.

<!-- TODO-TABLE: vehicle-profiles, one row per vehicle (name, Handling, Speed road/rough, Armor, seats, special) rendered from vehicles.yaml, for this section and the QRS -->

## Getting In and Getting Out {#sec-mounting}

Mounting or dismounting costs **2 AP of the figure's own allowance** ({{ref:sec-ap}}), moving between a seat and any square adjacent to the vehicle. Name the seat or position taken; changing seats or positions inside is an Interact (2 AP). A figure aboard has no facing and no Blind Arc — mirrors, windows, and a load bed see all round ({{ref:sec-facing}}).

{{svg:diagrams/diagram-mount-dismount.svg}}

**The armored door.** The ECA Protected Vehicle's card is the standing exception: its occupants mount and dismount through the rear door only, and the door passes **one figure per activation** — whoever's activation it is. A fireteam does not flow out of that truck; it trickles, and every activation it spends trickling is another roll of the Interrupt Die for whoever is watching ({{ref:sec-interrupt-die}}).

**Bailing out.** You may leave a vehicle while it is moving: during the vehicle's move, any occupant may pay 2 AP from its held AP — out of turn, like a dive ({{ref:sec-blast-timing}}) — to go out the door. Place the figure prone in a square adjacent to any square the vehicle passed through this move; it takes a **DR 2 hit** ({{ref:sec-crew-wounds}}). The ground is not soft. Occupants thrown out by a Wreck result bail by that rule instead ({{ref:sec-vehicle-damage}}), at no AP.

**Stealing them.** An unattended civilian vehicle with no keys starts with a hotwire: an **Interact, 4 AP**, requiring a Tool Roll — no test, no Noise until the engine turns. Authority vehicles do not hotwire: take the keys off a driver, or read the scenario. A stolen engine pays engine Noise like any other the moment it moves ({{ref:sec-driving}}).

## Driving {#sec-driving}

A vehicle activates **once per turn, during its driver's activation, with 6 AP** — a fixed allowance, whatever the driver's card prints. If the driver has already spent AP this activation before taking the wheel, subtract it from the 6. Vehicle AP never persists: there is no vehicle Overwatch, and a driver at the wheel never attacks and never takes Reaction Fire — the hands are full. A driver who dismounts mid-activation (2 AP) finishes on foot with whatever remains.

**Moving.** Each 1 AP of driving moves the vehicle up to its Speed in squares — the road value while every square entered is road or Clear, the rough value the moment the move touches Rough, Concealment, or plowed ground; if one AP's move crosses both, use the rough value for all of it. Reversing always uses the rough value. Block, Water, walls, and standing timber are impassable — a checkpoint barrier is the one wall a vehicle argues with ({{ref:sec-ramming}}) — and a vehicle occupies two squares, nose and tail, turning freely as it moves. Squares holding figures are entered only as a ram.

**The engine is a source.** A vehicle that moves at all during a turn adds **+2 Noise** for that turn ({{ref:sec-noise}}). It is spotted, becomes Known, and is forgotten by the same rules as a figure ({{ref:sec-known}}) — the engine feeds the pool, not the map.

**Two speeds of target.** Track the vehicle's movement across the whole turn, because two thresholds hang on it, both expiring in the End Phase. A vehicle that moved **at least 1 square** this turn is *moving*: everyone firing from it takes +3 ({{ref:sec-vehicle-fire}}), and it is not Cover ({{ref:sec-vehicles-as-cover}}). A vehicle that moved **4 or more squares** this turn is a *fast mover*: shots at it — and at its exposed occupants — take +3 ({{ref:sec-shooting-vehicles}}). Between 1 and 3 squares of movement lies the worst of both: hard to shoot from, easy to hit. Roll through or stay parked.

### The Handling Test {#sec-handling}

A Handling test is 2d10 against the vehicle's printed Handling — the Sedan's forgiving {{stat:vehicles.sedan.handling}}, the Technical's {{stat:vehicles.technical.handling}}, the Protected Vehicle's brutal {{stat:vehicles.mrap.handling}}. A card that prints a **Drive TN** — a skill or a support unit's stat line — uses that number instead, in any wheeled vehicle. Test only when a rule calls for it: rams, barrier runs, card specials, scenario stunts.

**Failure on a ram or barrier run is a crash**, and a **natural 2 on any Handling test is a crash**: the vehicle takes a Mobility hit ({{ref:sec-vehicle-damage}}), stops in the last legal square, every occupant is Shaken, and the noise books as +3 ({{ref:sec-noise}}).

### Drivers {#sec-drivers}

Most wheels are held by **support units** — one-line figures, not Crew:

{{card:crew.support.driver}}

A support unit has no wound track and no hit locations. A hit on one resolves as a **Casualty Die at −1** ({{ref:sec-opfor-casualty}}) — they are not soldiers, and the table knows it. The Volunteer Driver's line is also a warning: he will not leave the vehicle unless Rallied ({{ref:sec-rally}}) — the truck is his cover, his post, and the whole of his war.

One Crew card turns driving from a liability into a weapon:

{{card:crew.delgado}}

Delgado's **Driver** skill makes every Handling test a TN 8 test, in anything with wheels, and waives the barrier run's +2 outright. His **Mechanic** skill is the game's only field repair: an Interact, 4 AP, with his Tool Roll, clears one Mobility hit from a vehicle — once per vehicle per mission. Immobilized is two Mobility hits; even Delgado only buys one of them back.

## Firing From Vehicles {#sec-vehicle-fire}

Passengers fight; drivers drive. Any occupant except the driver may attack with its own AP, using the normal attack procedure — plus one flat modifier: **firing from a vehicle that has moved this turn is +3 TN**. Passengers with held AP take Reaction Fire under the usual rules ({{ref:sec-reaction-fire}}), at the same +3 while the vehicle is moving. Braced Shots require a platform that has not moved this turn and a passenger who goes nowhere — a parked truck bed is a fine rest; a rolling one is not.

Who can shoot *where* is the vehicle's geometry:

{{svg:diagrams/diagram-vehicle-arcs.svg}}

- **Cab seats** fire out the windows: the two flank quadrants only, never dead ahead through the windshield or dead astern through the load.
- **Exposed positions** — an open bed, a ring mount — fire in any direction.
- **The driver** fires in no direction. If the driver must fight, the vehicle has already failed.

### Mounted Guns {#sec-mounted-guns}

A ring or turret mount — the Technical's Heavy Machine Gun, the Protected Vehicle's turret Medium Machine Gun — counts as **deployed at all times**: no bipod, no set-up AP. The gunner fires it with ordinary shot actions at the printed TN while the vehicle is stationary, and at the moving +3 like any other passenger when it is not. **Sustained Fire** and the Beaten Zone ({{ref:ch-crew-served}}) are available from a mount only while the vehicle is stationary and another occupant feeds as assistant gunner. At DR {{stat:weapons.hmg.dr}} and Pen {{stat:weapons.hmg.pen}}, the mounted HMG is the board's argument-ender against people and soft vehicles alike — which is exactly why the damage table's **Weapon / exposed** row exists, and why ring gunners are exposed: the gun draws every eye, and the man behind it stands in all of them.

## Shooting at Vehicles {#sec-shooting-vehicles}

A vehicle is a huge target and an indifferent one. Declare your target: the **vehicle itself**, or one **exposed occupant**. An exposed occupant is attacked as a figure — your Shoot line, and always the Cover TN; the hull is the cover — at +3 if the vehicle is a fast mover.

Against the vehicle itself, skill barely matters and the procedure changes:

**1. Strike.** Roll **2d10 ≥ 8** — every shooter, every weapon. Add +3 if the vehicle moved 4 or more squares this turn. Your shooter-side modifiers apply as usual — Snap or Reaction Fire, Shaken, smoke, range bands, Point Blank ({{ref:sec-tests}}) — but a vehicle never has a Cover TN and never counts as a Sprinting target: the fast mover +3 is the whole of its evasiveness.

**2. Damage.** On a strike, roll the **Vehicle Damage Die: d10 + the weapon's Pen − the vehicle's Armor**, and read the table. Every weapon card prints Pen ({{ref:sec-statline}}): a Carbine's {{stat:weapons.carbine.pen}}, the Battle Rifle's {{stat:weapons.battle-rifle.pen}}, the MMG's {{stat:weapons.mmg.pen}}, the HMG's {{stat:weapons.hmg.pen}}, the Rocket's {{stat:weapons.rpg.pen}}.

{{table:vehicle-damage}}

A **natural 20** on the strike ignores Armor and adds +3 to the Damage Die — subject, always, to the cap below. **Explosives** reach vehicles too: a Blast weapon whose footprint covers any of a vehicle's squares makes its blast attack against the vehicle at TN 12 flat, and a Triggered device detonating beneath one strikes automatically; on either, roll the Damage Die with the weapon's Pen. That arithmetic — the Rocket's Pen {{stat:weapons.rpg.pen}}, the IED's {{stat:weapons.ied.pen}} — is what actually opens armor.

### The Pen Cap {#sec-pen-cap}

This is the rule the whole section stands on. **Against a vehicle with Armor 2 or more, a weapon with Pen less than 2 treats any Vehicle Damage Die result above 5 as 5.**

Run the numbers against the Protected Vehicle, Armor {{stat:vehicles.mrap.armor}}. A carbine, Pen {{stat:weapons.carbine.pen}}: even a d10 of 10 totals 8 — a Crew hit, says the table, except the cap folds it back to 5: a Mobility hit. A natural 20 that ignores Armor and adds 3 still folds back to 5. There is no roll, no volume of rifle fire, no lucky burst that takes that truck's occupants or its life. Small arms rattle the hull, blow the run-flats, wreck the vision blocks — Rattled and Mobility results, nothing above them, ever.

What the cap leaves you is the honest menu: strip its **mobility** — two Mobility hits leave it a pillbox with a turret, sitting exactly where you chose to shred its tires; kill what it **carries** when the door opens one figure at a time; or bring **real Pen** — the Rocket, the demolition charge, the IED buried where the Authority's trucks have to drive. The cap is also why the Warden's armor is never the mission: it is the terrain the mission routes around.

::: designer
The cap exists because the alternative lies. Without it, thirty rifle hits eventually roll a 10 and the armored truck dies to small arms — statistically certain, dramatically false, and it teaches exactly the wrong lesson about what an insurgency shoots at. With it, the build's math assertion is literally zero: rifle fire cannot exceed a Mobility result against Armor 2, at any odds, on any night. The MRAP problem is supposed to feel like the MRAP problem — you do not outshoot it, you out-plan it, and the campaign prices the tools that beat it (Rockets, demo, IEDs) as the scarce political objects they are.
:::

### What the Damage Means {#sec-vehicle-damage}

**Rattled.** Every occupant is Shaken ({{ref:sec-shaken}}) — the standard condition, with its standard escalation: an occupant Shaken again is Pinned. The hull is not effective fire against the people inside ({{ref:sec-morale}}); a direct hit on one of them is.

**Mobility hit.** Halve both Speed values, rounding halves up. A **second** Mobility hit **immobilizes** the vehicle: it cannot move again this mission, though everything else aboard — seats, mounts, radio — still works, and it counts as stationary for every rule that cares. Delgado's Mechanic skill clears one hit ({{ref:sec-drivers}}); nothing clears the second.

**Weapon / exposed hit.** The round finds whatever stands proud of the hull: randomize among the vehicle's mounted weapon and its exposed occupants. A mounted weapon struck is disabled for the mission; an exposed occupant struck takes a direct hit from the firing weapon — wound procedure for Crew, Casualty Die for the Warden's people, −1 for support units. If the vehicle has neither a mounted weapon nor an exposed occupant — and no card line like the Patrol Truck's radio — the burst finds the engine bay instead: apply a Mobility hit.

**Crew hit.** Someone inside is hit through the skin of the truck. Randomize among *all* occupants, driver included; that figure takes a direct hit from the firing weapon **at +2** — added to the Severity roll or the Casualty Die. Personal armor counts at its location, as always ({{ref:sec-armor}}). If the driver goes Down or Dead while the vehicle is moving, it crashes immediately: Mobility hit, occupants Shaken, stopped. A cab occupant may take a dead man's wheel with an Interact (2 AP) — the vehicle drives again on that figure's next activation.

**Wreck.** The vehicle is destroyed, this mission and every mission. Each occupant takes a **DR 3 hit**, resolved by target type, and bails: place each prone in an adjacent square, no AP. On a **12 or higher, it burns**: place fire markers on its squares ({{ref:sec-fire-markers}}) — impassable, +1 Noise a turn, a column of smoke the whole valley can read. Burning or cold, a wreck is Cover, permanently ({{ref:sec-vehicles-as-cover}}); steel burns standing up.

## The Ram {#sec-ramming}

A vehicle's last weapon is its mass. Declare a ram when the vehicle's move would enter squares holding figures, a barrier, or both; the ram is part of movement and costs no extra AP. Make **one Handling test** for the action ({{ref:sec-handling}}):

- **Failure — crash.** Mobility hit, every occupant Shaken, the vehicle stops in the last legal square, +3 Noise.
- **Success — resolve each figure in the path.** Roll 2d10 per figure: **struck on 8 or more** — **12 or more if the figure is prone or adjacent to Cover** (there is something to dive behind, and the table assumes they use it). A struck figure takes a **DR 4 hit**, resolved by target type. A figure not struck threw itself clear: place it prone in the nearest square out of the vehicle's path. Either way the vehicle drives on, and a ram that connects with anything books +3 Noise as a crash.

**Barriers.** Checkpoint gates, drop-arms, wire tangles, a sedan nosed across the lane — whatever the scenario marks as a barrier — take the same Handling test **at +2**. Success carries the vehicle through, the barrier is gone or flattened, and the crash is **+3 Noise**. Figures on or behind the barrier are in the path: resolve them as above. Delgado's card waives the +2; for everyone else the arithmetic is honest about what running a gate in a farm truck actually is.

::: example
**Running the Wire Road checkpoint.** Turn 7, and the mission has been Alerted since the substation came apart. The crew is mounted for the Exfil: Delgado at the wheel of the box truck, Vasquez in the cab beside him, and four in the cargo box — Boone, Pham, Okafor, Birdy — out of sight behind plywood and sheet steel, exactly as the card promises.

{{card:vehicles.box-truck}}

The Wire Road runs straight through a Civil Order Corps checkpoint: a swing gate six squares ahead with a Corpsman standing on it, and a technical parked on the shoulder past the wire, its ring gunner holding 2 AP by his script, the truck long since Known — nothing about a box truck at speed is stealth ({{ref:sec-known}}). Vasquez rides with her carbine up, but the checkpoint sits dead ahead, and cab seats fire the flanks only ({{ref:sec-vehicle-fire}}). The truck's answer to a checkpoint is the accelerator.

Delgado activates — the first Crew activation of the turn — and the vehicle takes its 6 AP. Speed on the road is {{stat:vehicles.box-truck.speed_road}} squares per AP. The first AP moves the truck 2 squares — and the Warden reacts *now*, while the shot is cheap: the truck has not yet moved 4 squares this turn, so no fast mover penalty. Reaction Fire with the ring HMG at a vehicle: TN 8, +3 for Reaction Fire — **11**. The Warden rolls **9 and 7 — 16.** Struck. Vehicle Damage Die: d10 comes up **5**, plus the HMG's Pen {{stat:weapons.hmg.pen}}, minus the truck's Armor {{stat:vehicles.box-truck.armor}} — **8: Crew hit.** Number the six aboard and roll: **Boone.** A direct hit from a DR {{stat:weapons.hmg.dr}} weapon at +2. Hit Location d10: **6 — Torso**, and Boone wears Rifle Plates. Severity: d10 = **2**, +5 DR, +2 Crew hit, −3 plates — **6: Light.** Shaken, −2 max AP, Bleed 1 ({{ref:sec-crew-wounds}}). Half-inch round, plywood wall, plate edge: bare, that d10 totals 9 — Serious, prone in a moving cargo box.

Delgado does the only correct thing: more speed. The second AP makes it 4 squares — the truck is a fast mover now, +3 to be struck for the rest of the turn. The third AP carries it squares 5 and 6, onto the gate: a **barrier run** with a man on the bar. One Handling test at +2 — except Delgado's Driver skill makes any wheeled vehicle **TN 8** and waives the barrier penalty; anyone else tests against the truck's Handling of {{stat:vehicles.box-truck.handling}} plus 2. He rolls **6 and 5 — 11.** Through — the gate tears off its hinge, **+3 Noise** ({{ref:sec-noise}}). The Corpsman is in the path, upright in the open lane: struck on 8 or more. The Warden's man rolls to be missed and the dice say **6 and 4 — 10**: struck, a DR 4 hit. Casualty Die: d10 = **6**, +4, −0 Armor — **10: Dead** ({{ref:sec-opfor-casualty}}). The last three AP spend as 6 more squares, and the truck is through the wire and opening the range.

**Warden Phase.** The technical's element acts by Doctrine: the gunner, stationary, puts an Aimed burst after the truck. TN 8, +3 fast mover — **11**. The Warden rolls **7 and 5 — 12.** Struck. Damage Die: d10 = **2**, +3 Pen, −0 — **5: Mobility hit.** Rear tires gone to rag: both Speeds halve, road {{stat:vehicles.box-truck.speed_road}} to 1, rough already 1 (halves round up). The truck limps — 6 squares a turn on rims, which is still six people carried at walking pace by one activation, and Delgado's Mechanic skill waits at the first quiet culvert: an Interact, 4 AP, Tool Roll, once per vehicle, and the tires are cut brush and prayer but the Speed comes back.

**End Phase.** Boone marks Bleed 1 ({{ref:sec-bleed}}). The turn's ledger reads like a vehicle chapter: engine +2, crash +3, gunfire +3 at the cap — **+8 Noise** in thirty seconds, and somewhere behind them the checkpoint Boss is shouting into a manpack for ALARM ({{ref:sec-noise}}). A truck buys distance with attention. Spend it on purpose.
:::

::: sidebar
**Margin note, Delgado's hand,** inside the box truck's log book: *The first four squares belong to their gunner — cheap shots, before the speed is real. So the run starts before they can see it: I want fourth gear at the sight line, not at the wire. And I never stop in the funnel. Shot, gate, screaming — the answer is the far side. A stopped truck is cover for everybody except the people inside it.*
:::

## Steel as Ground {#sec-vehicles-as-cover}

A vehicle that has not moved this turn is **Cover terrain** in its squares ({{ref:sec-terrain}}): figures fighting from behind it get the Cover TN by the normal determination ({{ref:sec-cover}}). A vehicle that moved this turn is nothing — a blur the rules do not stop bullets with. A **wreck is Cover permanently**, one of the few pieces of terrain the fight itself manufactures, and worth manufacturing: a wrecked patrol truck in a gateway is a wall the Authority paid for. The parked box truck goes one better by card — Block for LOS, a rolling piece of dead ground the width of a barn.

::: designer
Vehicles in this game are logistics that can die, not cavalry. Six AP, a fixed pool, hands-full drivers, +3 to shoot on the move: the design pushes every vehicle toward the two jobs trucks actually did in every war this one rhymes with — carry people and things, and mount a gun *while parked*. The one-line driver is the same decision from the other side (and it is locked): the wheel is not a character sheet, and the game will not ask you to mourn a truck. It will ask you to mourn the volunteer who would not leave it — which is why he gets a Grit line and a rule about being Rallied, and the vehicle gets a damage table.
:::

---

That is the motor pool: read the card, load by twos, drive loud, and know to the pip what a rifle cannot do to an armored hull. The other machines the Authority owns are smaller, quieter, and overhead — {{ref:ch-drones}} is their chapter, and the sky is worse than the wire. When the Warden's own wheels roll — the QRF clock, the column at the board edge, the technical that was always parked at the crossroads — their scripts are waiting in {{ref:ch-enemy-system}}.

<!-- TODO-TABLE: vehicle-actions, one-glance driving summary (vehicle activation 6 AP; move by Speed road/rough; Mount/Dismount 2 AP; bail out; ram / barrier run with Handling TNs; hotwire Interact 4 AP; Mechanic repair 4 AP; strike TN 8 +3 fast mover; Damage Die d10 + Pen − Armor with the Pen cap) for the QRS (bible §13) -->
