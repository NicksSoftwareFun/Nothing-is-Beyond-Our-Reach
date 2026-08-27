# Wounds & Recovery {#ch-wounds}

::: flavor
Handout from the Tuesday aid class in the church basement, typed on the back of a hymn insert, Casey Pham's block capitals: *BLOOD IS TIME. A leg wound is not a story about pain. It is a story about minutes, and the minutes belong to whoever counts them first. You will want to shoot back. Wrong order. Somebody makes the shooter flinch. Somebody gets low. Somebody gets the bag open. Then you shoot back.* Beneath it, ballpoint, added later in a different mood: *Nobody is coming to fly your neighbor out of here. Whoever you carry in, you carry out. Practice the carry.*
:::

This chapter owns everything downstream of the attack roll: what a miss can still do, what a hit does to each kind of target, how your people bleed, how they are treated, carried, and lost, and what suppression — Shaken and Pinned — does to anyone on either side. The attack itself, from declaration to dice, belongs to {{ref:sec-attack-procedure}}; morale, fear, and Rally belong to {{ref:ch-human-factor}}; what wounds become between missions belongs to {{ref:ch-long-war}}. Everything in between is here.

## Resolving a Hit {#sec-wound-procedure}

When an attack roll lands, resolve it in this order. The sequence is the same for every attack in the game — Aimed, Snap, Braced, Reaction Fire, a grenade's blast attack, the Warden's fire and yours.

**1. Read the roll.** Total the 2d10, apply modifiers, and compare to the chosen TN ({{ref:sec-attack-procedure}}). Equal or higher is a hit — go to step 3. Lower is a miss — check step 2.

**2. The near miss.** If the attack missed **by 1 or 2**, the weapon has the **Automatic** trait ({{ref:sec-traits}}), and the target was in the open — the attack used the Open TN — the target is **Shaken** ({{ref:sec-shaken}}). Any other miss has no effect. This is the rule that makes automatic fire dangerous even when it is not accurate: a burst that cracks past your ear does its work on your nerve, not your body. It applies to every attack, including Reaction Fire, and to both sides.

**3. Resolve the hit by target type.** What a hit *is* depends entirely on what it struck:

- **A Crew figure** — roll Hit Location, then Severity ({{ref:sec-crew-wounds}}, below).
- **An OPFOR figure** — one roll of the Casualty Die ({{ref:sec-opfor-casualty}}).
- **A support unit** — a driver, porter, guide, or any other figure with a one-line stat, on either side — the Casualty Die at **−1**.
- **A vehicle** — the Vehicle Damage Die ({{ref:ch-vehicles}}).
- **A drone** — drones do not roll damage; a hit downs them ({{ref:ch-drones}}).

A natural 20 on the attack roll rides through this whole procedure: the hit ignores Armor and, against a Crew figure, adds +3 to Severity ({{ref:sec-extremes}}); against an OPFOR figure it kills without a roll.

{{svg:diagrams/diagram-wound-procedure.svg}}

## Crew Wounds {#sec-crew-wounds}

Your people do not have hit points. When one of them is hit, the game asks two questions the enemy never gets asked: *where*, and *how bad*. Answer them in order, with one d10 each.

**Step 1 — Hit Location.** Roll a d10:

{{table:hit-location}}

**Step 2 — Severity.** Roll a d10, add the weapon's DR, and subtract the target's Armor **at that location** ({{ref:sec-armor}}). A Head location adds +2 to the Severity total on top of everything else.

{{table:severity}}

**Step 3 — Apply the wound line immediately**, together with the location effect. AP penalties bite at once, including AP the figure is still holding mid-activation — a wounded watcher may find its next reaction no longer affordable. A Light or worse wound to either arm puts the figure on one hand — long guns fire at +3 TN until the war is over or the mission is, whichever the recovery table decides ({{ref:ch-long-war}}); a sidearm with the One-Handed trait does not care. A Light or worse leg wound forbids Sprinting. A Graze, at any location, is a flinch and a story: Shaken, nothing lasting.

**Step 4 — Mark the wound** on the roster sheet, by location and level. Wounds do not come off during a mission. Aid stops dying; it does not heal ({{ref:sec-aid}}).

Note what a Serious wound actually does before you ever roll one: the figure falls prone where it stands, is Shaken, operates on half AP, bleeds at 2, and — this is the part players forget — must pass a Grit test at the start of each of its activations to do anything at all beyond Crawling or self-aid. A Serious casualty is not a weaker soldier. It is a neighbor on the ground, and the question of who goes and gets them is now the tactical problem.

### Armor Is Worn in Pieces {#sec-armor}

Crew armor is not a number for the whole body; it is equipment covering the part it covers. Rifle Plates print **{{stat:gear.plates.effect}}** A Ballistic Helmet prints **{{stat:gear.helmet.effect}}** Limbs are almost never armored, and the tables assume they are bare.

Subtract armor from the Severity roll only when the Hit Location is the location the armor covers. Plates make a torso hit survivable more often than not; a helmet takes the edge off the Head location's +2 without removing the fear of it; a leg is a leg. A natural 20 on the attack ignores armor entirely ({{ref:sec-extremes}}).

OPFOR figures compress all of this into the single flat Armor value on their card, already built into the Casualty Die ({{ref:sec-opfor-casualty}}).

### Wounds Stack {#sec-wound-stacking}

Track every wound separately. A figure's **condition** — which effect line from the Severity table it currently suffers — is set by its worst wound, with one escalation: **a new wound at the same level as the figure's current condition worsens the condition one step.** A second Light puts the figure on the Serious line. A second Serious is Critical — Down and Dying. A second Critical is dead. A new wound *below* the current condition adds its location effect and nothing more; Grazes leave no lasting wound and never stack.

All location effects apply simultaneously — a one-armed figure that cannot Sprint is exactly as bad off as it sounds. Where two effects both change AP, halve first, then subtract flat penalties. The figure's Bleed rate is the rate printed on its current condition line, not the sum of its wounds ({{ref:sec-bleed}}).

## Bleed {#sec-bleed}

Some wounds keep costing after the impact. A figure whose condition line prints a Bleed rating is **Bleeding**, at that rating.

In the **End Phase** of every turn — the first step of it ({{ref:sec-turn-sequence}}) — each Bleeding figure marks bleed points equal to its Bleed rating. Keep the marks beside the figure's card where you can see them, because the threshold is the whole rule: **at 3 accumulated marks, the wound worsens one step.** Apply the new condition line immediately and erase the marks; if the new line still prints a Bleed rating, the count starts again. A Serious wound that worsens becomes Critical: the figure goes Down and Dying right there in the End Phase, and you roll its bleed-out clock ({{ref:sec-down-dying}}).

Run the arithmetic once and you will never need reminding. Bleed 1 gives you three turns of grace. Bleed 2 gives you one full turn — the wound lands, the End Phase marks 2, and the next End Phase marks 2 more unless someone has reached the casualty and stopped it. Bleeding stops only through aid ({{ref:sec-aid}}); when it stops, erase the accumulated marks. Down and Dying figures do not mark Bleed — their dying has its own clock, and it is faster.

## Buddy Aid {#sec-aid}

Buddy Aid is the action that stops the arithmetic. A figure in a square adjacent to the casualty — or in the same Zone — spends **4 AP** and makes a **Medicine test: 2d10 ≥ 11**. Aiding anyone other than yourself requires an Aid Bag: **{{stat:gear.med-kit.effect}}** Each attempt spends a use, success or failure — gauze does not go back in the wrapper.

**On a success:** the patient's Bleed stops and its accumulated marks are erased, and the patient's Shaken is removed. If the patient was Down and Dying, they are **stabilized** — the bleed-out clock stops ({{ref:sec-down-dying}}). On a **natural 20**, additionally downgrade the patient's worst wound one step — a Serious becomes a Light, and the better line applies from now on. On a **natural 2**, the default complication applies ({{ref:sec-extremes}}): the medic is Shaken and the shouting is +1 Noise. On any other failure, nothing happens; you may try again if you can pay for it.

**What aid is not:** it is not healing. The wound, its AP penalties, its location effects, and its Grit gate all remain until the recovery tables between missions ({{ref:ch-long-war}}). Aid converts *dying* into *wounded*. That is all, and it is everything.

**Self-aid** is the same action performed on yourself: same cost, same test, no Aid Bag required. A figure that is Down and Dying is unconscious and cannot self-aid — that casualty is now somebody else's job. Self-aid is one of the actions a Serious figure may always take without passing its Grit gate, and one of the few things a Pinned figure may do at all ({{ref:sec-shaken}}).

**Cards change this action.** Medicine is a skill like any other, and the people who have it are on your roster, not in a rulebook. Casey Pham's EMT background performs Buddy Aid at **3 AP against 2d10 ≥ 9**. Sana Haddad's Combat Medic does it at 3 AP, can move 2 squares and still treat in one 4 AP action, and — her Under Fire skill — ignores the Shaken penalty while aiding, which is worth more than every other line on her card the night it matters. The Auxiliary Medic support unit aids at the standard cost and test. Read the card; the card wins.

{{card:crew.pham}}

::: sidebar
**Margin note, Doc Pham's hand:** *The bag rides center of the stack — never on point, never trailing. If I go down, the bag is still in the middle of you. Count my uses out loud when you take one; three is a smaller number than it sounds. And learn the order: suppress, then move, then treat. A medic who runs to a casualty under an unbothered gun is the second casualty. The class where I make you say it back is the class that saves somebody.*
:::

::: example
**Blood and minutes.** Turn 6 of a raid gone loud. Tanya Okafor is caught mid-yard when an ECA Rifleman takes an Aimed Shot at her — upright in Clear terrain, so against his Shoot of {{stat:opfor.eca-rifleman.shoot}} he needs the Open number, 11. The Warden rolls **9 and 4 — 13.** A hit, resolved by target type: she is Crew, so location and severity.

*The wound.* Hit Location d10: **9 — Legs.** Severity: d10 = **6**, plus the carbine's DR {{stat:weapons.carbine.dr}}, minus armor at the location — legs are bare — total **9: Serious.** Apply the line at once. She falls prone where she stands. She is Shaken. Her {{stat:crew.okafor.ap}} AP is halved to 4. She takes Bleed 2, and the leg adds its own tax: no Sprint. From now on she must pass Grit at the start of each activation to do anything beyond Crawling or self-aid.

*End Phase, turn 6.* Okafor marks her Bleed: 2 points accumulated. The arithmetic is public and merciless — at 3 marks the wound worsens a step, and Serious worsens to Critical. The next End Phase takes her there. Casey Pham has exactly one Crew Phase.

*Turn 7.* Pham activates first ({{stat:crew.pham.ap}} AP), six squares away at the barn corner. She Sprints 3 squares into the yard (2 AP, +1 Noise — and she is a Sprinting target now). One square into the open, the Rifleman spends held AP on Reaction Fire ({{ref:sec-reaction-fire}}) — Pham has been Known since she returned fire from the barn corner earlier in the fight, and the Warden reacts only to Known figures ({{ref:sec-known}}): Open TN 11, +3 for Reaction Fire, +2 for a Sprinting target — TN 16. The Warden rolls **8 and 6 — 14.** A miss by 2, from an Automatic weapon, against a target in the open: the near miss ({{ref:sec-wound-procedure}}) makes **Pham Shaken** — +2 TN on her tests from this instant, no Reaction Fire, and 4 AP owed against her next activation. She keeps going: 2 squares Walking (2 AP; 4 spent) puts her at Okafor's side. Her EMT skill makes Buddy Aid 3 AP against 2d10 ≥ 9 — but Shaken adds +2 TN, so tonight the number is 11. One use comes off her Aid Bag. She rolls **5 and 7 — 12.** Success: Okafor's Bleed stops, the 2 marks are erased, and Okafor's Shaken is removed. The wound stays Serious — aid stops dying, not damage. (Double tens would have downgraded it to Light.) Pham spends her last AP going prone: 2+2+3+1 makes 8, and she holds nothing.

Okafor activates next. Start of activation, Serious: Grit test against her {{stat:crew.okafor.grit}}. She rolls **4 and 3 — 7.** Failed — this activation is Crawl or self-aid only. She Crawls 2 squares, all 4 of her halved AP, into the ditch. That ends the second Crew activation of the turn; the Interrupt Die needs a 10 and comes up **4** ({{ref:sec-turn-sequence}}). When the Warden Phase brings fire back across the yard it finds two prone shapes behind a ditch lip — Cover TN — and no hits.

*End Phase, turn 7.* Okafor is no longer Bleeding: no marks. Pham both activated and was shot at this turn, so her Shaken does not clear on its own ({{ref:sec-shaken}}). It rides into turn 8, where she activates with 8 − 4 = 4 AP, crawls in beside her patient, and is finally rid of it when that activation ends.

Now count the bill for one Serious wound and the *good* outcome: a Green figure on half AP who must still be walked to the Exfil, the crew's only medic Shaken and a turn behind, one of three Aid Bag uses gone, +1 Noise on the ladder. Had Pham arrived one turn later, the End Phase would have put Okafor's marks at 4: Critical — Down and Dying, a d6+2 clock, and somebody carrying her out with both hands full.
:::

## Down and Dying {#sec-down-dying}

A Critical wound — rolled, stacked into, or bled into — puts a figure **Down and Dying**. The figure falls prone, drops what it holds, and is unconscious: no activations, no AP, no tests, no facing. It is out of the fight. It is not dead.

**Roll the bleed-out clock immediately: d6+2 turns.** Set the count in the open beside the figure. It ticks down in the Warden Phase's clocks step each turn ({{ref:sec-turn-sequence}}). If it reaches zero without aid, the figure is dead.

**Dying figures cry out.** Any Crew figure that starts its activation within 6 squares of a Down and Dying figure tests Grit; on a failure it is Shaken. Each figure tests at most once per turn, no matter how many of its neighbors are dying around it. This is a Grit test like any other, with everything a natural 2 implies ({{ref:sec-morale}}). The sound is the mechanism: a casualty does not just subtract one gun from your line — it degrades every gun that can hear it.

**Stabilizing.** A successful Buddy Aid on a Dying figure stops the clock ({{ref:sec-aid}}). A Trauma Kit is the blunt instrument: **{{stat:gear.trauma-kit.effect}}** Pham's Triage skill can pause a clock from across the yard while she works her way over. A stabilized figure is still Down — unconscious, prone, out of the fight for the mission — but it has stopped dying and stopped crying, and it will keep until you can move it. If a Down and Dying figure is hit again, resolve the hit normally; a second Critical result kills outright.

Dead is dead. There is no roll, no timer, and no chapter later in this book that walks it back. What the death costs the campaign — and what leaving the body costs — is accounted in {{ref:ch-long-war}}.

### Carrying the Fallen {#sec-carrying}

A Down figure moves only if somebody moves it. Lifting a casualty onto your shoulders is an Interact ({{ref:sec-ap}}); setting one down gently is free.

While carrying, a figure has **half its AP** (round up) and **both hands full**: it may Walk and Crawl only — no Sprinting, no climbing, no attacks, no Reaction Fire, no Interacting with anything but the casualty. Marcus Boone's Strong Back skill carries without the half-AP penalty, which is why the biggest man in the crew is not automatically the machine gunner. A Dying casualty's clock keeps ticking on your back — stabilize first, or you are hauling a timer.

**There is no CASEVAC.** No helicopter, no ambulance exchange point, no rear. A Down crew member is either carried to the Exfil point before the mission ends, or they are lost — captured or dead, resolved with everything else you left behind ({{ref:ch-running-missions}}).

::: designer
The carry rule is the campaign's conscience, and it is deliberately expensive. Half AP with empty hands is the cost of the promise painted on the water tower — *we bring everyone home* — and the missions where you pay it are the missions this game is about. If losing a figure only cost you a card, retreat would be an accounting decision. Because someone must sling the body and someone else must cover the two of them across every open yard between here and the Exfil, retreat is a plan, made under fire, by people who are tired. That is the war this book is trying to put on your table.
:::

## The Enemy's Ledger: the Casualty Die {#sec-opfor-casualty}

A hit on an OPFOR figure resolves with one roll and no bookkeeping: **d10 + the weapon's DR − the target's Armor**, read off the table. Apply the result immediately.

{{table:opfor-casualty}}

**Staggered** uses the same suppression rules as everyone else ({{ref:sec-shaken}}): the figure is Shaken, and if it was already Shaken it is Pinned. **Down** figures are out of the fight — dying or incapacitated, the fiction's choice — and they matter after the shooting: they can be looted, and they can be stabilized and taken as prisoners, with everything a prisoner is worth and costs ({{ref:ch-running-missions}}). **Dead** is removed from the board. A natural 20 on the attack roll is Dead with no roll at all.

**Support units** — drivers, porters, guides, and any other figure with a one-line stat, on either side of the fight — resolve on the same table at **−1** on the die. They are not soldiers, and the table knows it.

What a falling figure does to the survivors around it — yours and the Warden's — is morale's business, not this table's ({{ref:sec-morale}}).

::: designer
One die for their people, two tables and a bleed track for yours: the asymmetry is the point, and it is load-bearing. Detail is the game's way of saying *this one has a name*. The Warden's figures exist for thirty violent seconds, so a single roll answering "is it still shooting?" is all the fidelity the fight needs — and it keeps your solo turn fast on exactly the side of the table you care least about. Your people persist across a campaign, so their wounds get locations, rates, and consequences that follow them home. When the same rifle round is a d10 lookup for them and a femur for you, the rules are telling you whose story this is.
:::

## Shaken & Pinned {#sec-shaken}

Suppression arrives from everywhere in this book — near misses ({{ref:sec-wound-procedure}}), wounds, failed Grit tests ({{ref:sec-morale}}), blasts and flashbangs, the Beaten Zone ({{ref:ch-crew-served}}). Wherever it came from, the condition itself is owned here, and it works the same for every figure in the game, yours and the Warden's.

**Shaken.** A Shaken figure:

- **loses 4 AP at its next activation** (to a minimum of 2);
- takes **+2 TN on its tests** — every 2d10 test it makes: attacks (this is the "Shooter is Shaken" line of the modifier list, not a second penalty on top of it), Grit, Medicine, Handling, all of it;
- **cannot take Reaction Fire.**

A figure Shaken during its own activation feels the TN penalty and the reaction ban immediately; the AP loss falls on the next activation it begins while still Shaken.

Shaken ends in exactly three ways:

1. **Automatically, at the end of the figure's next activation.** You pay the shortened, degraded activation, and come out the far side clean.
2. **By Rally** ({{ref:sec-rally}}).
3. **In the End Phase, if the figure did not activate this turn and was not the target of any attack** — hit or missed. Left alone, people collect themselves.

**Pinned.** A figure that becomes Shaken *while already Shaken* — by any source, including the Casualty Die's Staggered result — is **Pinned**. A Pinned figure may only Crawl, hug its cover where it is, or self-aid ({{ref:sec-aid}}). To attempt anything else, it must first pass a Grit test at +2 — one test at the start of its activation; on a failure, Crawl, cover, or self-aid is all that activation holds. A Pinned figure still cannot take Reaction Fire, and its tests still carry the +2 TN.

Pinned recovers **to Shaken**, never straight to clean, in either of two ways: a Rally, or a full turn in which the figure is not shot at — clear it to Shaken in the End Phase. There is nothing below Pinned; further suppression on a Pinned figure changes nothing, which is its own small mercy.

One dose of Field Stims will carry a figure through the worst of this — **{{stat:gear.stims.effect}}** — and the crew members who insist on packing them are usually the ones who have needed them.

{{table:status-effects}}

{{svg:diagrams/diagram-shaken-pinned.svg}}

Read the two states as what they are: the game's model of fire that works without hitting. A rifle that makes three figures Shaken has taken six or more AP and three reacting guns off the board — often a better trade than a wound. The Warden knows this arithmetic cold, and its machine guns are built on it ({{ref:ch-crew-served}}). Learn to spend suppression the way you spend ammunition, and learn what it means when it is being spent on you: someone intends to move while you flinch.

---

That is the whole cost of being hit: location, severity, blood, and nerve. What it does to the mind — fear, morale, panic, leadership, and the Rally that answers them — is the next chapter's subject ({{ref:ch-human-factor}}). What it does to the roster — recovery tables, permanent injuries, and the memorial page — waits in {{ref:ch-long-war}}. Between those two lies the discipline this chapter teaches by arithmetic: keep the bag close, count the marks out loud, and never plan a mission whose exfil route you could not walk at half AP.
