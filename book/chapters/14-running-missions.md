# Running Missions {#ch-running-missions}

::: flavor
From the mission book — a graph-ruled composition book that lives in the church belfry and travels in a bread bag — the entry for the second of October, Vasquez's hand: *WHAT: the fuel point on the crossing. WHY: winter is a number of gallons and we are short. WHO: five. One long gun. Doc. IN: the creek culvert, last dark. OUT: the ford. The truck waits at the ford until moonset, and after moonset the truck is a rumor.* Beneath it, block capitals, the line Deacon has written under every plan since Mackall: *PLAN THE EXFIL FIRST. THE OBJECTIVE IS HOW WE SPEND THE NIGHT. THE FORD IS WHETHER WE GET ANOTHER ONE.*
:::

Everything before this chapter happens inside a turn. This chapter is the frame around the turns: what a scenario hands you, how it goes onto the table, how it ends, and what it pays. The missions themselves live in {{ref:ch-pineland-burning}}, and the toolkit for building your own lives in {{ref:ch-mission-architect}} — both assume you run their frames exactly as this chapter states them. What a mission costs and earns across weeks is the next chapter's business ({{ref:ch-long-war}}); this one is the night itself.

## Mission Anatomy {#sec-mission-anatomy}

Every mission — scripted or built — has the same four-part frame.

**The briefing.** The scenario sheet is the mission's contract, and it prints everything the frame needs: the map and its season notes; the objectives; the Warden's order of battle — scripted sentries, Blips and their routes, the Contact Table, Doctrines and any Directive changes; the Alert thresholds, starting Noise, and fallback timer ({{ref:sec-alert-ladder}}); the Insertion; the Exfil and its Deadline; the mission's Supply cost; and the aftermath block that scores it all ({{ref:sec-aftermath}}). Read the whole sheet before setup. The Warden hides nothing but what the Blips hide.

**Insertion.** Where the Crew starts: a board edge or a marked point, printed per scenario. Intel spends can move it or soften what waits past it ({{ref:sec-insertion}}).

**Objectives.** The **primary objective** is the mission — the sheet states it as a testable fact (*the transformer is destroyed; the prisoner is off the board with the Crew; the convoy exits the east edge*). **Opportunity objectives** are optional work the sheet prices separately: a safe worth opening, a cache worth hauling, a name worth photographing. Take them when the night allows. No opportunity objective is worth a name on the memorial page, and the aftermath arithmetic is built so that this stays true.

**Exfil.** A marked point or edge, and a Deadline. The mission does not end when the objective does; it ends at the Exfil, under the one rule this chapter exists to state ({{ref:sec-exfil}}).

{{svg:diagrams/diagram-mission-anatomy.svg}}

## Setting Up {#sec-setup}

Set up every mission in the same order:

1. **Lay the map.** Build or unfold the printed board and apply the sheet's terrain and season notes — late LEAF SEASON scenarios thin the Concealment as the leaves come down, and the sheet says exactly where.
2. **Place the mission.** Objective markers, caches, vehicles, civilians, and the Exfil marker, per the sheet.
3. **Post the sentries.** Scripted sentries go on the board openly, at their printed posts and facings ({{ref:sec-blips}}).
4. **Seed the Blips.** Numbered markers at their printed positions, patrol routes noted, the scenario's Contact Table beside the board.
5. **Set the ladder.** Note the Alert thresholds, set the Noise pool to the sheet's starting value, and note the fallback timer. The force starts Unaware unless the sheet says otherwise.
6. **Set the clocks.** Turn marker at 1; mark the **Exfil Deadline** — the turn limit, usually turn 12.
7. **Spend intel.** Declare any pre-mission network flips now ({{ref:sec-insertion}}).
8. **Pick the lineup and pay for it.** Choose the mission's crew from the roster ({{ref:sec-roster}}) and build each figure's loadout from the gear pool — a weapon, armor, and two slots of kit ({{ref:sec-statline}}). Then pay the mission's Supply bill ({{ref:sec-resupply}}): the sheet's base cost, plus the printed Supply cost of every item fielded. Rifle Plates cost {{stat:gear.plates.supply}} Supply the night they go out; the recon quad costs {{stat:gear.recon-quad.supply}}; a bare rifle and a knife cost nothing beyond the base.
9. **Insert.** Place the Crew at the Insertion, any facings, and begin turn 1.

## Intel & Insertion {#sec-insertion}

The network is the difference between arriving and being expected. Each spend below **flips one asset from Hidden to Exposed** — the pools, the assets, and what exposure risks are all owned by {{ref:sec-network}}; this section is only when the spends happen and what they buy the night.

**Declared at setup (step 7):**

- **Move the Insertion** (Underground). Start at any alternate Insertion the sheet marks, or shift along the printed edge. Forged passes and a borrowed delivery route put you where the patrol schedule says you cannot be.
- **Reveal a Blip** (Underground). Pre-resolve one Blip of your choice: roll its Contact now and place the result face up. Sometimes the best intelligence is *it's a dog*.
- **A Guerrilla team** (Guerrilla, paid with Capability — {{ref:sec-network}}). Two to four fighters join the lineup for this mission, entering at the Insertion with the Crew unless the sheet says otherwise.
- **An extra gear slot** (Auxiliary). One figure carries three slots tonight; a courier met you at the fence with the rest.

**Declared in play, the moment they matter:**

- **Reroll a Contact roll** (Underground). Once, reroll a just-rolled Contact Table result — take the second roll.
- **Delay ALARM** (Underground). Once, when an ALARM call would succeed, it fails instead — the frequency was changed, the duty officer was bought, the line was already slack ({{ref:sec-alarm}}).
- **Extend the Exfil** (Auxiliary). Declare before the Deadline turn's End Phase completes: the Deadline moves 2 turns later. The truck waits, and somebody will answer for it.

One more Auxiliary spend — off-board medical — is made after the mission, where the recovery roll needs it ({{ref:sec-recover}}).

## The Exfil Rule {#sec-exfil}

The Exfil is a marked point or board edge. A Crew figure there may spend 1 AP of movement to step off the board: remove the figure — it is **out**, and it may not return. A carried Down figure exits with its carrier ({{ref:sec-carrying}}). A restrained prisoner exits with an adjacent escort ({{ref:sec-prisoners}}). Support units exit like Crew. Whatever a figure carries off the board — loot, belts, a body — comes home; everything else stays.

**The mission ends** the moment no living Crew figure remains on the board, or when the Deadline turn's End Phase completes — whichever comes first.

**Anyone not out is lost.** Not delayed, not "next scene" — lost, along with everything they carry. Whether the lost are captured or dead is the campaign's decision, made in the Recover step ({{ref:sec-recover}}); the mission itself only knows they did not reach the ford. There is no CASEVAC and no second truck ({{ref:sec-carrying}}): a Down neighbor is carried to the Exfil or they are gone.

A mission may always be scrubbed — walk everyone out before the primary is done. The aftermath prices failure, and it prices an empty seat at the ford far higher. Scrubbing early, everyone breathing, is not the game punishing you. It is the game working.

::: designer
The Exfil rule is borrowed from every underground that ever fought without a rear area — the Maquis version is the bluntest: whoever missed the rendezvous was mourned, because there was nothing else to do with them. Mechanically it is the keystone under half this book. The Deadline is what makes Noise arithmetic, the QRF clock, and a Cordon element's patience mean anything; the anyone-not-out clause is what makes the carry rule and the Rapport ledger bite. A mission you can leave at leisure is a shooting gallery. One that closes like a door behind you is a raid.
:::

## Aftermath {#sec-aftermath}

Score the mission immediately, while the table still remembers it, in this order:

1. **Outcomes.** Read each objective as the testable fact the sheet stated: complete or not. Partial credit exists only where the sheet prints it.
2. **Campaign deltas.** Apply the Rapport, Heat, and Capability movements printed in the sheet's aftermath block for each outcome — the tracks themselves are defined in {{ref:sec-tracks}}. Then apply the standing riders, which stack with anything the sheet prints: the mission ended under ALARM, **Heat +1**; each Crew body left on the board, **Rapport −1**; each restrained prisoner abandoned, **Rapport −1**; each civilian hit by Crew fire during the mission, **Rapport −2**.
3. **Loot and Supply recovery.** Add the sheet's printed Supply awards for what was actually carried out. Looted weapons and kit carried off the board enter the gear pool; captured arms hauls raise Capability where the sheet says so.
4. **The lost.** List every figure that did not exit, with their state when the board ended — dead, Down, or hale. The Recover step resolves them ({{ref:sec-recover}}).
5. **Log it.** Mission, date, outcomes, deltas, the lost, and one honest sentence about what went wrong. Then put the board away and open the between-mission sequence ({{ref:sec-between-missions}}).

<!-- TODO-TABLE: aftermath-riders, one-glance mission-end summary (Exfil rule, Deadline, exit costs, standing aftermath riders) for the QRS -->

::: example
**Moonset at the ford.** Turn 11 of the depot raid. The sheet prints an Exfil Deadline of turn 12, and the mission has run under ALARM since turn 8 — the Officer's call beat the crew to the radio room. The Exfil is the ford on the southwest edge. Tanya Okafor went Down on turn 10 — Critical, stabilized by Pham the same turn, so the clock is stopped but she must be carried ({{ref:sec-carrying}}). Boone lifts her; his Strong Back skill spares him the half-AP penalty, but both hands are full either way, and the MMG stays in the fence grass where he set it down. Nothing brings that gun home tonight except a figure with a free pair of hands, and there isn't one.

Vasquez crosses the ford on turn 11 and steps off — 1 AP, out. Boone follows on turn 12 with Okafor on his shoulders; Pham walks off beside them with the courier bag. Birdy is not with them. The QRF's Cordon element took the road bridge on turn 10 ({{ref:sec-doctrine-cordon}}), and the long way around it is fourteen squares when the End Phase of turn 12 completes. The mission is over. Birdy is lost — alive when the board ended, and what that means now belongs to the campaign ({{ref:sec-recover}}).

The aftermath, in order. *Outcomes:* the primary — the depot's fuel burns — was completed on turn 7; the opportunity objective, the dispatch office safe, was never touched. *Deltas:* the sheet's aftermath block prints Rapport +1 and Heat +1 for the primary — a fire that size is a loud win. Riders: the mission ended under ALARM, Heat +1 again. No bodies and no prisoners were abandoned, and no civilian was hit. *Loot:* the courier bag is the sheet's loot line — +2 Supply. The MMG comes off the gear pool's ledger, and Birdy's binoculars go where she goes. *The lost:* one name, alive at the end. The Recover step will take her captured — Heat +1 more when it does — and a lockup two counties north goes into the campaign log as unfinished business.

Net: Rapport +1, Heat +3 by the time the Recover step is done, Supply +2, one gun gone, one nineteen-year-old gone. The fuel burned for an hour. The arithmetic is what keeps burning.
:::

The night is scored; the weeks between nights are the other half of the game. The campaign — the roster, the tracks, the network, and the sequence that turns one mission into the next — is {{ref:ch-long-war}}.
