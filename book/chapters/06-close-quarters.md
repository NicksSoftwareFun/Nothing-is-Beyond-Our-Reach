# Close Quarters & Breaching {#ch-close-quarters}

::: flavor
The plywood house behind Herron's mill has no roof, one door, and chalk on every wall. Inside, penciled tallies from weeks of runs: who hesitated on the threshold, who crossed it flat-footed and took a chalk X on the chest for it. *A doorway is a machine for killing the first one through,* Deacon says before every run. *You don't argue with a machine. You feed it something it chokes on — light, noise, a hole where it wasn't watching — and you come in second.*
:::

This chapter owns the fight at door distance: what shooting inside a Zone means, who fires first when a figure comes through a Portal, how to make the answer be you, and what the knife is for. Zones, Portals, and the Posted and Deep states are defined in {{ref:sec-zones}} and are not repeated here; attacks resolve by {{ref:sec-attack-procedure}}, as always. Everything that follows happens inside five meters, in about three seconds, and is mostly decided before anyone steps through the door.

## Fighting Inside a Zone {#sec-zone-fighting}

{{svg:diagrams/diagram-zones-portals.svg}}

Every fight between figures in the same Zone is a Point Blank fight: apply the Point Blank line of the modifier list ({{ref:sec-tests}}) to every attack between them, gun or blade.

Inside a Zone there is no cover. The cover conditions of {{ref:sec-cover}} read from the shooter's side of the wall: a Posted figure counts as in Cover against fire *from outside its Zone*, and only there. Between figures sharing a Zone, every target is Open — shoot the left-hand number. The one exception is the grenade, below.

Facing does not constrain a Zone fight either. A Zone is close chaos: every aware figure in it counts as inside every other's frontal arc — the Blind Arc ({{ref:sec-facing}}) is an outdoor problem. Unaware figures are another chapter's matter ({{ref:sec-stealth}}).

Declare each figure's state — Posted at a named Portal, or Deep — when it enters a Zone, and change it freely at any point while the figure is spending AP, exactly as you change facing. A figure that ends its activation keeps its state until it next spends AP. The two states are the two jobs a room offers: a Posted figure is the room's wall, fighting the outside war through its one Portal; a Deep figure with held AP is the room's ambush, waiting for the inside one. A defense that is all wall can be stunned through its own doorway; one that is all ambush lets you pick when the door opens. The Warden's better elements post one and hide one, and so should you.

Entering or leaving a Zone through a Portal costs AP like any other action ({{ref:sec-ap}}). Entering an *empty* Zone is just movement. Entering an occupied one is the rest of this chapter.

## The Entry Fight {#sec-entry}

When your figure pays the entry cost and comes through a Portal into a Zone holding enemies, resolve the entry fight. The order of fire is the whole rule:

**On a clean entry, all non-Shaken defenders Posted at the entry Portal, or covering it, resolve Reaction Fire against the entering figure first — *then* the entering figure acts.**

A defender is **at** the Portal when it is Posted there, on its side of the opening. A defender **covers** the Portal when it is somewhere else with LOS to it and eligibility to react through it — Posted at an aligned Portal of the next room, or outside on the grid with the doorway in its arc. Deep figures neither hold a Portal nor cover one: Deep buys safety at the price of every first shot.

These first shots are ordinary Reaction Fire in every respect but timing ({{ref:sec-reaction-fire}}): each costs 2 AP of held AP, counts against the two-reaction cap, is barred while Shaken or Pinned, and takes the flat reaction penalty. Read the target as it stands — inside the Zone, Open, Point Blank.

A defender neither at nor covering the Portal gets no shot at the moment of entry — it was watching the wrong opening. It may take ordinary Reaction Fire at the enterer's *subsequent* triggers — a shot fired, further movement — under the normal rules.

Each entering figure is its own entry fight. That arithmetic is why crews enter in a stream, not a trickle: reactions cost 2 AP apiece and cap at two, so the door that kills the first figure through is often empty-handed against the third.

**Breaching first reverses the order.** If the entry follows any of these *in the same Crew Phase*:

- a kicked breach with a grenade put through it,
- a flashbang into the Zone, or
- a demolition breach,

then mark every defender in the entered Zone **Shaken** first, and **the entering figure fires first** — resolve its first action before any defender's reaction, then proceed normally. Shaken defenders cannot react at all, so the room's answer usually never comes. A defender covering the Portal from beyond the blast keeps its nerve and its reactions — but even it fires only after the enterer has.

One skill bends the clean order without explosives: a figure with the SOF vet's **Point Man** skill fires first on clean entries, once per turn, exactly as its card states. It stuns nobody — the defenders' reactions still come, one action late, from defenders still steady.

{{svg:diagrams/diagram-entry-fight.svg}}

::: designer
The entry fight is the chapter in one rule, and it is deliberately lopsided. A defender Posted at a door shoots the first thing through it at Point Blank; the entering figure eats the wound chapter while the defender rolls one die. You are not supposed to beat that exchange. You are supposed to refuse it — take the fight away from the Portal with noise, light, or a new hole in the wall, and arrive after the decision is made. This is the door problem at Zone resolution: room fights are won in the second before entry, or not at all.
:::

## Breaching {#sec-breaching}

Getting in has four prices. Every one is on the universal cost list ({{ref:sec-ap}}) or a card — breaching adds no new dice.

**The door.** An unbarred door opens for 1 AP; climbing through a window costs 2. Opening a door is quiet and is not itself a reaction trigger — but an open Portal works both ways: a defender Posted there sees out, and anything crossing its line outside is fair game for reactions. A door the scenario marks locked or barred does not open for AP. Kick it or blow it.

**The kick.** A kicked breach costs 2 AP and +2 Noise, and the opening is a Portal from then on. Breaching is a Reaction Fire trigger ({{ref:sec-reaction-fire}}): a defender Posted at that door may fire at the kicker as it gives way. The kick alone reverses nothing — entry after a bare kick is a clean entry into a warned room. It earns its keep as the first stroke of kick-and-frag: boot, grenade, figures, one Crew Phase.

**The bang.**

{{card:weapons.flashbang}}

Throw the flashbang like any grenade (3 AP, {{ref:sec-grenades}}); through an adjacent open Portal it cannot scatter and needs no roll. Every figure in the Zone is Shaken — no attack roll, no damage — and entry in the same Crew Phase is a breach entry: your figure fires first. The bang is an explosion for Noise purposes ({{ref:sec-noise}}). It is the tool that leaves survivors — yours, and, when you want prisoners, theirs.

**The wall.** The demolition charge is the Portal-maker. Place it against a wall (4 AP, per its card) and fire it: the wall gains a breach — a new Portal, exactly where the defense posted nobody — and the charge delivers its blast at DR {{stat:weapons.demo-charge.dr}} under the explosives rules ({{ref:sec-grenades}}). Entry through a demolition breach in the same Crew Phase is a breach entry. The explosion is +3 Noise, and a breach heard adjacent is clear contact — Alerted at once ({{ref:sec-noise}}). That is the trade: a perfect door, announced to the county.

<!-- TODO-TABLE: breaching-methods, one-row-per-method summary (door / window / kick / flashbang / demo charge) with AP, Noise, and entry-order effect, for the QRS (bible §6.5–6.6) -->

### Grenades Into Zones {#sec-grenades-zones}

The throw itself — cost, range, scatter, the end-of-Phase timer, diving away — belongs to the grenade rules ({{ref:sec-grenades}}). Zones change two things:

- **An adjacent open Portal is a letterbox.** A grenade thrown through an open Portal from a square adjacent to it does not scatter and needs no Throw test: it lands in the Zone, full stop. From farther out, treat the Portal as the target square and throw normally — walls stop scatter, so a wide throw drops at the frame or bounces back outside, never deeper into the building.
- **The blast owns the room.** A grenade that lands in a Zone attacks *every figure in that Zone* — position does not exist inside, and nowhere in a room is far from a grenade. Resolve its printed blast attack against each figure at its Open TN — except **Deep figures, at its Cover TN**. Deep is back corners and overturned furniture: the only cover a Zone has, and only against this.

## Melee & Takedowns {#sec-melee}

Close quarters ends closer than the gun. Against an **aware** enemy — adjacent on the grid, or sharing a Zone — a blade, a bayonet, or a swung rifle is not a subsystem: it is an attack. Pay the normal attack cost ({{ref:sec-ap}}), roll your Shoot line at Point Blank ({{ref:sec-tests}}), and resolve a hit at DR {{stat:weapons.knife.dr}}. Its one distinction is the **Silent** trait: a blade makes no Noise, whatever it does — the only attack the Alert Ladder cannot hear ({{ref:sec-noise}}).

Understand what that buys. Against a watching enemy at arm's length, your rifle hits the same Point Blank TN at the same DR; the blade's only argument is silence. Draw it when the gun is empty, wrong, or loud.

Against the **Unaware**, the arithmetic changes species. The takedown of an Unaware adjacent sentry is not an attack at all — it is an Interact, it belongs to the quiet game, and its rules live with the rest of fieldcraft: {{ref:sec-stealth}}.

::: designer
There is no dueling subsystem because there are no duels. At this scale a melee is one decision — who was ready — and the general rules already price it: readiness is the entry fight, surprise is the takedown, and everything between is an attack roll at Point Blank. A parry table would add pages to slow down the three seconds this game most wants fast.
:::

::: sidebar
**Stack, breach, bang, flow.** None of this is a rule; it is what the rules will teach you anyway, priced in blood, so take it here instead. **Stack** — the entry team goes flat against the wall beside the Portal, out of the line through the opening, before anyone touches the door; the ground in front of a watched doorway is the worst in the game. **Breach** — one figure owns the door: opens it, kicks it, or blows it, and does nothing else. **Bang** — something goes through the opening before anybody does: a flashbang if you want prisoners, a frag if you don't. **Flow** — the instant it works, everyone enters in the same Crew Phase, first figure to the deepest threat, each follower onto the next Portal, so no defender anywhere gets a second clean decision. Deacon's margin, under the tallies: *speed is not running. speed is no gaps.*
:::

::: example
**The Tolley farmhouse, run twice.** Turn five, loud since turn two: the OPFOR is Alerted, everyone's first-fire Grit tests long paid. The kitchen is one Zone — a yard door, and an interior door to the front room. Two Civil Order Corpsmen hold it, one Posted at the yard door, one Deep, each holding 2 AP of reaction reserve: Shoot {{stat:opfor.coc-militiaman.shoot}}, Armor {{stat:opfor.coc-militiaman.armor}}, carbines at DR {{stat:weapons.carbine.dr}}. Stacked against the outside wall, out of the doorway's line: Hollis Grant at the door, Deacon behind him, Sana Haddad third.

**Run one — the clean entry.** Grant ({{stat:crew.grant.ap}} AP) opens the door, 1 AP, and steps through, 2 AP. The Zone is occupied: entry fight. The Posted Corpsman is at that Portal and steady: his Reaction Fire resolves first, 2 AP. Grant stands inside the Zone — Open, Point Blank: Open TN 13, +3 Reaction Fire, −2 Point Blank — 14. The Warden rolls **9 and 6 — 15.** Hit. Grant takes a wound ({{ref:sec-wound-procedure}}): Hit Location d10 = **6**, Torso, and he wears no plates. Severity d10 = **3**, plus the carbine's DR {{stat:weapons.carbine.dr}}, minus nothing: 6 — a Light wound. Shaken, Bleed 1, and 2 AP off the top: the 5 he still held becomes 3.

*Then* the entering figure acts. Grant can no longer afford the Aimed Shot, so he snaps the shotgun from the hip. His Shoot {{stat:crew.grant.shoot}} gives Open 11, −3 Point Blank (his Deputy skill's better bargain), +3 Snap, +2 Shaken — TN 13. He rolls **8 and 6 — 14.** Hit. Casualty Die ({{ref:sec-opfor-casualty}}): d10 = **5**, plus DR {{stat:weapons.shotgun.dr}}, +1 Spread this close, minus Armor 0: 9. **Dead.**

The Deep Corpsman had no shot at the entry — wrong opening — but Grant's muzzle flash is a trigger in their shared Zone, and he holds 2 AP. His reaction resolves simultaneously with Grant's shot: Open 13, +3, −2 — 14. He rolls **7 and 5 — 12.** A miss by 2, automatic weapon, target in the Open: near miss, Shaken ({{ref:sec-attack-procedure}}). Grant is already Shaken. He is now **Pinned** ({{ref:sec-shaken}}) — 1 AP in hand, bleeding, hugging the wall of a room he half owns.

Deacon ({{stat:crew.deacon.ap}} AP) comes through next, 2 AP. The survivor is Deep and out of held AP: no entry fire. Deacon takes the Aimed Shot, 4 AP — his Shoot {{stat:crew.deacon.shoot}} gives Open 8, −2 Point Blank: TN 6. He rolls **5 and 3 — 8.** Hit. Casualty Die: **6** + {{stat:weapons.carbine.dr}} − 0 = 9. **Dead.** The kitchen is clear. The bill: Grant Pinned and bleeding, Haddad's next activation spent on Buddy Aid instead of the front room, and the whole crew a turn behind.

**Run two — flashbang first.** Rewind. This time the door belongs to Haddad ({{stat:crew.haddad.ap}} AP), because her whole job fits one activation. She steps to the frame, 1 AP, and opens the door, 1 AP, staying flat against the wall, out of the line through the opening — the Posted Corpsman has nothing to react to. Then the flashbang goes through the open Portal from her adjacent square: 3 AP, no scatter, no roll — it is in ({{ref:sec-grenades-zones}}). Every figure in the kitchen is **Shaken**, and the entry order reverses.

Grant enters, 2 AP. Shaken defenders cannot react; the entering figure fires first. Unhurt, with 6 AP, he takes the Aimed Shot: Open 11, −3 Point Blank — TN 8. He rolls **6 and 4 — 10.** Hit. Casualty Die: **4** + 3 + 1 Spread = 8. **Dead.** He ends his activation Posted at the interior door, 2 AP in hand: the front room shows empty through the opening.

Deacon follows, 2 AP, and puts an Aimed Shot on the Deep Corpsman before the stun wears through: TN 8, −2 — 6. He rolls **4 and 2 — 6.** Hit, exactly. Casualty Die: **2** + 3 = 5. **Down** — alive. Next turn Grant will restrain him (his card's Interact; prisoners are worth more than bodies to the campaign). House clear.

Same kitchen, twice. Run two spent one flashbang and finished with nobody bleeding, a prisoner, the medic's hands free, and a gun on the next Portal. Count the Noise honestly, though: run one was gunfire only, +3 at the cap; run two was +3 for the bang *plus* the gunfire cap's +3. The flashbang does not buy quiet. It buys the room. One more line in the ledger: with Deacon first through instead of Grant, Point Man fires first on a *clean* entry once per turn — the reversal without the bang, for one figure, if you can spare him to the door.
:::

The room is yours; now settle accounts. {{ref:ch-wounds}} owns what the bullets did on the way to it, and {{ref:ch-human-factor}} owns whether your people are steady enough to do this twice in one night. And if the building never needed to hear you at all — that argument is {{ref:ch-fieldcraft}}'s, and it is usually right.
