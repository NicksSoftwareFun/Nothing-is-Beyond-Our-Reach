# The Enemy System {#ch-enemy-system}

::: flavor
From a Civil Order Corps duty binder, recovered at the Route 9 checkpoint, water-stained and laminated: *"REACT TO CONTACT: 1. RETURN FIRE. 2. TAKE COVER. 3. REPORT. The element in contact fixes. The nearest element flanks. The post reports. Do not pursue beyond your sector. The district does not need chasing. It needs holding."* In the margin, pencil, Deacon's block capitals: *THEY FIGHT BY THE BINDER. GOOD. A BINDER CAN BE READ.* And beneath that, smaller, a different hand: *the binder is in our book now. chapter twelve. read it until you can hate it from both sides of the wire.*
:::

Everything that hunts you in this game is run by **the Warden**: the dice, the tables, the Doctrine scripts, and the Directive deck, operating together as one procedural enemy. The chapters before this one kept pointing here. This is the chapter they were pointing at — the Warden's complete operating manual. Nothing in it is advice. It is procedure, and you will run all of it.

## You Are the Warden's Hands {#sec-warden-overview}

The Warden is not an app, a referee, or a memory game. It is a machine made of four parts: the **Alert Ladder** that sets the whole force's posture ({{ref:sec-alert-ladder}}), the **Doctrine scripts** that tell each element what to do ({{ref:sec-doctrines}}), the **Directive deck** that focuses the force turn by turn ({{ref:sec-directives}}), and the **dice** that settle everything the scripts leave to chance. Play it entirely face up. The Warden hides nothing from you except what the Blip markers hide from everyone ({{ref:sec-warden-blips}}); its scripts are printed in this chapter precisely so that you can read them, plan against them, and still lose to them.

What the Warden knows is exactly three things: the number on the Noise track, the force's current Alert state, and the set of Known positions on the board ({{ref:sec-known}}). It is never psychic and never blind — it is procedural. When a rule says "the Warden rolls," you roll, on its behalf.

That makes you both players at this table, and one rule governs the seam. The **Good-Faith Clause** was stated in {{ref:sec-good-faith}}; it is reprinted here, in full, because this chapter is where you will use it most:

**When a Doctrine script, a Directive, or any Warden procedure is ambiguous, resolve it in the most tactically sensible way *against* the Crew. When two readings are exactly equal, take the one less favorable to you. Break every tie against the player. You are the Warden's hands, not its lawyer.** Do not look for the reading that spares your people; look for the one a competent enemy would take, and take it.

The clause is not a patch for bad rules. It is the Warden's judgment, delegated to you. Scripts can carry a unit to the right wall; only you can decide which side of the doorway it stacks on. When this chapter says "the Warden chooses," it means: apply the clause.

## The Warden Phase {#sec-warden-phase}

The Warden acts once per turn, in the second phase of the turn sequence ({{ref:sec-turn-sequence}}), and always in the same five steps. Run them in order, completely, every turn — including the quiet ones. A Warden Phase in which nothing seems to happen is the Warden Phase working.

**(a) Alert and Noise bookkeeping.** Noise was marked the moment it happened, all turn long ({{ref:sec-noise}}); this step is the audit. Read the pool against the scenario's printed thresholds and move the force's Alert state if a threshold has been crossed. Apply any state changes earned directly during the turn — clear contact, a body found by a revealed element, a sentry's spot — if you have not already; those move the ladder the instant they occur, and step (a) is where you make sure the marker caught up. The state you set here governs the rest of the phase.

**(b) Directive.** If the force is Alerted, draw one Directive card and read it aloud. Under ALARM, draw two ({{ref:sec-directives}}). If the force is Unaware or Suspicious, skip this step — the deck stays face down.

**(c) Blips move.** Every unresolved Blip moves: along its printed route while the force is Unaware, toward the newest Noise source or the last Known position from Suspicious up ({{ref:sec-warden-blips}}). Resolve any Blip whose movement demands it, by the rules of {{ref:sec-blips}}.

**(d) Elements act.** Every revealed OPFOR element activates once, in the order given in {{ref:sec-elements}}, each running its Doctrine script ({{ref:sec-doctrines}}) under the turn's Directive. This is the step with the shooting in it.

**(e) Clocks tick.** Advance every running clock by one: the QRF clock ({{ref:sec-qrf-clock}}), bleed-out clocks ({{ref:sec-bleed}}), fires, drone batteries, and any scenario clock the sheet lists. A clock that reaches zero fires its effect now.

Then the phase is over, and the End Phase settles the turn ({{ref:sec-turn-sequence}}).

## The Alert Ladder {#sec-alert-ladder}

The Alert state is the whole force's posture — one state for every element, sentry, and Blip on the board, moved by the triggers in the table and never moved back. The ladder was introduced from your side of the board in {{ref:sec-noise}}; this is the Warden's side: what its force actually does at each rung.

{{table:alert-states}}

{{svg:diagrams/diagram-noise-ladder.svg}}

**Unaware.** The force runs on its standing posture and nothing else. Sentries stand their posts and check their arcs each Warden Phase ({{ref:sec-spotting}}); Blips walk their printed routes; revealed elements execute their Doctrine's bottom line — Holding elements hold, Sweep patrols follow their waypoints. No Directives are drawn. This is the only state in which takedowns are legal ({{ref:sec-takedowns}}); the window closes forever at Suspicious.

**Suspicious.** Something was heard, and somebody goes to look. The revealed element nearest the newest Noise source investigates it per its script — Holding sends one figure, keeping the post manned ({{ref:sec-doctrine-holding}}); a Sweep element re-routes toward the sound ({{ref:sec-doctrine-sweep}}). Every Blip abandons its route and drifts toward Noise. Still no Directives: the force is curious, not fighting. An unresolved sighting — a shape somebody reported but nobody confirmed — puts the force here regardless of the pool.

**Alerted.** The force is fighting. Draw a Directive every Warden Phase, and run every element's full script against Known positions ({{ref:sec-known}}). **Clear contact** puts the force here instantly, whatever the pool reads: a shot fired at or by an OPFOR figure in any OPFOR element's LOS, a body found by a revealed element ({{ref:sec-bodies}}), or a breach heard from an adjacent square or Zone. From Alerted on, the Warden maneuvers — and its Leaders start looking for a radio.

**ALARM.** The outside world has been told. The moment ALARM triggers: start the QRF clock ({{ref:sec-qrf-clock}}); all Contact Table rolls take the table's printed ALARM modifier for the rest of the mission; OPFOR drone operators launch their aircraft ({{ref:sec-warden-drones}}); searchlights, illumination, and any other scenario-listed effects switch on. From the next Warden Phase, draw two Directives instead of one. ALARM changes nothing about a script's logic — it changes what the board is about to contain.

### ALARM Is a Human Act {#sec-alarm}

The pool cannot trigger ALARM. **Escalating to ALARM requires a person**: an Alerted figure with the **Leader** or **RTO** trait must reach working comms — its own radio, a vehicle set, a fixed base station, a landline — and spend 2 AP on the call. At a fixed set or landline the call succeeds automatically. On a manpack radio while under fire, it needs 2d10 ≥ 12; the attempt spends the AP either way, and a failed call may be retried on a later activation.

Everything about this rule is a target list. Kill the Leaders and RTOs first and nobody ranking is left to call. Cut the landline — an Interact ({{ref:sec-stealth}}) — and the fixed set is furniture. Jam the net ({{ref:sec-jamming}}) and the manpack call dies in static. The Warden, for its part, plays the same list in reverse: its scripts send Leaders toward comms the moment the force is Alerted, and the TALK TO ME Directive orders every Leader to try at once.

Denial is not forever. Every scenario prints a **fallback timer** — a missed radio check-in, usually turn 8. When it expires, ALARM triggers on its own: the silence where a report should have been *is* the report.

### The QRF Clock {#sec-qrf-clock}

When ALARM triggers, roll a d6, add 2, and set the QRF clock to the total. The clock ticks down by one in step (e) of every Warden Phase — including the phase in which it started. When it reaches zero, the reaction force arrives: place it as new Blips at the board edge the scenario names (if the scenario names none, the edge nearest the last Known position), mounted, and run it by the QRF Doctrine from its first activation ({{ref:sec-doctrine-qrf}}). QRF Blips are contacts of known character: they resolve like any Blip ({{ref:sec-blips}}) but never roll on the Contact Table — they resolve into exactly the force the scenario prints.

The clock is public. Set it in the open and count it down where you can see it, because every plan you make after ALARM is a plan about that number.

## Elements {#sec-elements}

An **element** is the group an OPFOR card represents — a sentry pair, a fireteam of four, an MG team, a vehicle and its crew. The card's *element* line prints the grouping. An element activates **as a group**: all its figures act during the same activation, in whatever internal order serves the script, each figure spending its own 8 AP as the script directs — most often movement plus an attack.

**Activation order is nearest-threat-first.** In step (d), activate revealed elements in order of their distance to the nearest Known position, closest element first, measuring from each element's nearest figure. If no position on the board is currently Known, order by distance to the last Known position, and failing that, to the newest Noise source. Break ties by the Good-Faith Clause: the order that serves the Warden best. A Directive that names an order — "Base-of-Fire elements fire before anyone moves" — overrides this sequence for the turn; run the named elements as the card directs, then the rest, nearest-first.

**Held AP.** Each Doctrine prints the AP its figures keep un-spent — their Overwatch ({{ref:sec-overwatch}}), the ammunition of Reaction Fire ({{ref:sec-reaction-fire}}). The printed number is a floor the script protects whenever its line allows: an element ends its activation holding at least that much per figure unless the turn's line or Directive forces it all out the muzzle. Remember the one asymmetry: the Warden's reactions, like all its triggers, fire only at Known figures.

An element that acted early on an Interrupt ({{ref:sec-interrupt-die}}) still activates normally in this step; the Interrupt itself runs the element's same script, with 4 AP.

When an element takes losses, the group tests and can break — that machinery belongs to {{ref:sec-opfor-morale}}, and its fallback ladder is written into every script below. A figure that fails falls back one Doctrine step and runs the new script from then on; an element can split, each figure on its own rung.

## The Six Doctrines {#sec-doctrines}

Every OPFOR card prints a Doctrine, and each Doctrine is a **priority list**: on the element's activation, read the lines from the top and **execute the first line whose condition is true**, spending AP as that line directs. One line per activation — a line, once taken, is the whole order. If no line's condition is true, roll a d10 on the Doctrine's **fallback table** and do what it says. If a card special and a script disagree, the card wins; if a printed **constraint** line and anything else disagree, the constraint wins ({{ref:sec-directives}}).

The six scripts below are the complete set, and this is the only place in the book they appear in full — the cards print only the Doctrine's name. Learn them from this side of the table and you will recognize them from the other.

### Holding {#sec-doctrine-holding}

*Sentries, posted guards, static weapon positions.* **Held AP: {{stat:doctrines.holding.held_ap}}.**

**Constraint:** the element never moves beyond its printed objective radius — by default, 6 squares of its post.

1. **A Known enemy is in LOS** → fire the best shot the AP allows — Aimed with 4 AP or more available, otherwise Snap — from current cover. Do not move.
2. **The force is Suspicious and this element has not yet investigated** → ONE figure moves cover-to-cover toward the newest Noise source, spending at most half its AP; the rest hold.
3. **The force is Alerted and the element contains a Leader, RTO, or fixed comms not yet used** → attempt ALARM per the ladder ({{ref:sec-alarm}}).
4. **Otherwise** → hold position, turn facing toward the newest Noise or the nearest Known, keep all AP.

| d10 | Fallback |
|---|---|
| 1–3 | Hold; face the loudest thing. |
| 4–6 | Shift to better cover within 2 squares. |
| 7–8 | One figure investigates 3 squares toward the last Noise. |
| 9–10 | Comms attempt — or a signal shout: +1 Noise, and the nearest element gains this element's Suspicious focus. |

Fighting a Holding element is prying a rock out of a wall. It will never chase you, and it will kill the ground it owns for as long as it stands on it — {{stat:doctrines.holding.held_ap}} held AP means a post that answers movement twice. You choose when that fight starts. It has already chosen where.

### Sweep {#sec-doctrine-sweep}

*Patrols, search elements, clearing parties.* **Held AP: {{stat:doctrines.sweep.held_ap}}.**

1. **A Known enemy is in LOS** → halt in cover and fire; stay halted while any Known remains in LOS.
2. **A Known position exists anywhere** → advance on-line toward it, cover-to-cover; along the way, figures with Automatic weapons rake Concealment within 8 squares — every Crew figure inside the raked area suffers the near-miss effect ({{ref:sec-attack-procedure}}): it is Shaken, no roll, prone or not, Known or not. Raking is fire at ground, not at a target: it costs the raking figure a Snap Shot's AP, adds gunfire Noise, and neither requires nor creates a Known target.
3. **The force is Suspicious** → move toward the newest Noise source at patrol pace, Spotting from each halt.
4. **Otherwise** → follow the printed patrol route.

| d10 | Fallback |
|---|---|
| 1–4 | Continue the route. |
| 5–7 | Sweep the nearest Concealment area by fire. |
| 8–10 | Hold and observe one full turn. |

A Sweep element is a rake dragged across the map. Hide well and hold still and it passes over you — but the brush you are lying in may get sprayed on principle, and a flinch is all it costs the Warden to find out. Shoot at it and the rake becomes a firing line that does not advance into your muzzle; it halts, fixes you, and waits for the rest of the machine.

### Assault {#sec-doctrine-assault}

*Fire teams tasked to close, SRT, marauder packs.* **Held AP: {{stat:doctrines.assault.held_ap}}.**

1. **An enemy is adjacent or shares a Zone** → Point Blank attacks; entering an occupied Zone follows the Entry Fight rules ({{ref:sec-entry}}) — SRT stack with flashbangs.
2. **A Known enemy is within 3 squares and grenades remain** → grenade first ({{ref:sec-grenades}}), then close.
3. **A Known enemy is in LOS** → bound cover-to-cover toward the nearest, in bounds of 3 squares or less between cover; Snap Shot with remaining AP.
4. **A Known position exists out of LOS** → move toward it by the best covered route.
5. **Otherwise** → move toward the mission anchor: the objective, then the last Noise.

| d10 | Fallback |
|---|---|
| 1–5 | Bound forward toward the anchor. |
| 6–8 | Flank — roll a d6: odd goes left of the last Known, even goes right. |
| 9–10 | Go firm in cover this turn. |

Assault is the clock on the wall of every firefight. It closes a bound at a time, throws at 3 squares, and comes through doorways in pairs, and nothing in its script tells it to stop while a Known target exists. You do not out-wait it. You break its nerve ({{ref:sec-opfor-morale}}) — or you win the range argument before it stops being one.

### Base-of-Fire {#sec-doctrine-base-of-fire}

*MG teams, marksmen, any element told to suppress.* **Held AP: {{stat:doctrines.base-of-fire.held_ap}}.**

**Constraint:** crew-served weapons follow the full deploy and displace rules of {{ref:ch-crew-served}}.

1. **Deployed with a Known in LOS** → Sustained Fire on the largest Known cluster ({{ref:sec-sustained-fire}}) for crew-served weapons; Braced or Aimed Shots for everyone else.
2. **A Known is in LOS but the weapon is not deployed** → deploy now (bipod or tripod).
3. **No firing position** → move at most half AP toward the nearest position with LOS to a Known; deploy next activation.
4. **Flanked — a Known enemy within 6 squares off the gun's axis or behind it** → displace to cover away from the threat; redeploy next activation.
5. **Otherwise** → overwatch the widest lane toward the last Noise; keep all AP.

| d10 | Fallback |
|---|---|
| 1–4 | Hold and scan (keep AP). |
| 5–7 | Shift the fire lane to the next likeliest approach. |
| 8–10 | Displace 3 squares to an alternate position. |

Base-of-Fire does not own squares; it owns lanes. Slow into position and murderous once set, it turns the middle of the board into arithmetic you cannot afford ({{ref:sec-beaten-zone}}). Its script prints its own defeat: line 4 is the flank it fears, and the displace it forces is the only moment the gun is just two men in the open.

### Cordon {#sec-doctrine-cordon}

*Blocking elements, checkpoints, cut-off teams.* **Held AP: {{stat:doctrines.cordon.held_ap}}.**

**Constraint:** the element is assigned a route or board edge at setup and never abandons it while any Crew figure is un-exfiled.

1. **A Crew figure in LOS is moving through or toward the assigned route** → fire; do not pursue beyond 2 squares.
2. **Not yet at the blocking position** → move toward the board edge or route nearest the Crew's entry or objective; occupy the chokepoint — the bridge, the cut, the gate.
3. **At position** → improve cover, hold all remaining AP, watch the assigned lane.

| d10 | Fallback |
|---|---|
| 1–5 | Hold the position. |
| 6–8 | Shift 2 squares to a better chokepoint on the same route. |
| 9–10 | One figure moves to link up visually with the nearest friendly element. |

A Cordon element is not fighting you; it is fighting your Exfil. It will watch a firefight kill its friends and not move, because its script knows what you know: the mission ends at a map edge ({{ref:ch-running-missions}}), and you will arrive at that edge late, loud, and carrying someone. Fight it early or fight it then.

### QRF {#sec-doctrine-qrf}

*Reaction forces, arriving on the QRF clock after ALARM.* **Held AP: {{stat:doctrines.qrf.held_ap}}.**

**Constraint:** arrives mounted at the edge the scenario names — else the edge nearest the last Known.

1. **Off-board and the QRF clock expires** → enter mounted at the designated edge; drive toward the last Known position at road speed ({{ref:sec-driving}}).
2. **Mounted within 8 squares of the last Known** → halt in cover or defilade and dismount — one figure per activation from an MRAP, all at once from open vehicles ({{ref:sec-mounting}}); the vehicle's weapon overwatches.
3. **Dismounted** → split the element: the half with the heaviest weapon acts as Base-of-Fire, the rest as Assault. Run each half by its own script from now on.

| d10 | Fallback |
|---|---|
| 1–4 | Press the assault line. |
| 5–7 | Suppress the last Known position. |
| 8–10 | Hold and attempt comms — report contact: Blips within 12 squares move toward the fight. |

QRF is arithmetic with an engine. It is not a seventh kind of fight — it is a fresh Base-of-Fire and a fresh Assault, delivered to your doorstep at road speed while your ammunition is half spent. Everything you did to leaders and radios earlier in the mission was about the number on its clock.

::: designer
The Warden's intelligence is a priority list plus your good faith, and that division of labor is deliberate. Scripts are honest — you can read them, so ambushing the Sweep or baiting the Assault is real generalship, not guessing what a black box feels like today. But scripts cannot see a board, so every gap they leave is assigned to the one component that can: you, under a rule that forbids you to be kind. The result plays sharper than any flowchart we could print, because the flowchart's gaps are filled by the best enemy commander available at your table.
:::

## Target Priority {#sec-target-priority}

When any script or Directive tells a figure to fire and more than one target qualifies, every Doctrine chooses the same way. Work down this list and take the first match:

1. **The Known enemy that attacked this element** since the element's last activation;
2. **the nearest Known in LOS**;
3. **the most exposed Known** — one an Open TN is available against;
4. **tie** → the candidate nearest to the element's Leader or to its objective.

Card specials modify this list where they say so — a marksman that hunts your Leaders is hunting them past line 2 — and the Good-Faith Clause settles anything the list leaves open.

Above the list stands the law that governs it: **every Warden trigger requires a Known target.** Doctrine fire, Directives, and Reaction Fire alike — an OPFOR figure never shoots at what the force does not Know ({{ref:sec-known}}). No exceptions, however obvious the shape in the field looks from your side of the table; this law is what makes the quiet game playable at all. Fire at ground — a raked treeline, a Beaten Zone laid on a lane — is legal because it targets no figure, and it wounds or Shakes whoever happens to be standing in it without ever learning they were there.

Two boundary cases are already settled. A Crew figure that enters an occupied Zone is Known to the force the moment it crosses the Portal — the Entry Fight ({{ref:sec-entry}}) and this law never conflict. And Known is force-wide and per figure: one Known rifleman is one target, not a revealed crew.

## The Directive Deck {#sec-directives}

The Directive deck is the Warden's command voice: twenty-four short orders that focus the whole force for one turn. Shuffle it at setup. In step (b) of every Warden Phase at **Alerted** or worse, draw one card and apply it this turn; discard it face up — the discard pile is the Warden's visible history. If the deck runs out, reshuffle. Under **ALARM**, draw two: apply both if the force can obey both; if they are incompatible, apply the harsher — the one that, on this board, this turn, hurts the Crew more. That is a Good-Faith call and it is yours to make honestly.

A Directive is an order layered over the Doctrines, and the layering rules are strict:

- **Where the card speaks, it overrides the scripts** for the turn — GO FIRM stops every advance; DELIBERATE FIRE forbids movement outright.
- **Where the card is silent, the scripts run** — "then act normally" means exactly that.
- **A card never overrides a printed constraint.** A Holding element's objective radius, a Cordon's assigned route, the deploy rules on a crew-served weapon: constraints outrank Directives, always. A Directive that would march a Holding element off its post instead moves it to the radius' edge and no farther.
- **A card never overrides the Known law** ({{ref:sec-target-priority}}). "Fire on the carriers" means the Known carriers.

Every card carries the same standing scope clause, printed here once so the cards can stay short: **"If impossible, do the closest legal thing; if nothing is legal, Go Firm — hold cover, keep maximum Reaction AP."** An element with no legal way to obey does not idle on a technicality; it does the nearest thing a competent order-taker would.

Four cards from the deck, to show its range:

{{card:directives.push-them}}

{{card:directives.fix-and-flank}}

{{card:directives.rush-the-wounded}}

{{card:directives.false-calm}}

Read FIX AND FLANK the way the Warden must: "the largest element" is counted in living figures, ties broken by the clause — the candidate whose guns hurt you more becomes the base. "The weakest flank" is the side with the fewest Crew figures, counted at the moment the card resolves. And read FALSE CALM as a warning about the deck's temperament: the Warden's patience is also an order, and a turn of silence with the QRF clock still ticking is not mercy.

Some cards interact with the roster. An ECA Officer on the board re-draws one Directive per Warden Phase and keeps the harsher — his card says so, and killing him is how you cancel the subscription ({{ref:ch-forces}}). On your side, a certain radioman's Intercept skill lets you look at the top card once a mission and decide whether the Warden gets it ({{ref:sec-statline}}). The deck is a resource like any other; both sides get to play it.

<!-- TODO-TABLE: directive-deck, full 24-card Directive list (title / order / scope) for the appendix chapter -->

## The Warden's Hidden Hand {#sec-warden-blips}

Blips — what they are, when they resolve, the Contact Table, surprise — belong to {{ref:sec-blips}}, and nothing here changes a word of it. This section is the other half: how the Warden plays them.

**Movement is posture.** In step (c), move every unresolved Blip: 2 squares along its printed route while the force is Unaware; 3 squares toward the newest Noise source or the last Known position — whichever the force learned of more recently — from Suspicious up. Route the move as the Warden would ({{ref:sec-good-faith}}): the drift that cuts off a retreat is preferred to the drift that follows a parade. A Blip has no eyes, takes no reactions, and never Interrupts ({{ref:sec-interrupt-die}}); it is pressure, not a shooter. Its whole threat is where it is and what it might become.

**Scripted sentries are the shown hand.** The posts printed openly at setup are revealed elements from turn one — Holding elements, almost always, run by their script like anything else, with the spotting rule for eyes ({{ref:sec-spotting}}). The scenario's garrison is this pair of hands together: the sentries you can plan against, and the Blips you cannot, moving on the same ladder.

**The QRF arrives as Blips.** When the QRF clock expires ({{ref:sec-qrf-clock}}), the reaction force enters the board as new Blip markers at its arrival edge — mounted contacts moving by the QRF script's own line 1, at road speed, rather than at Blip walking pace. They resolve by every normal rule except the Contact Table: what they are was printed in the scenario, and the roll is skipped. Headlights on a ridge road are a Blip you already know the name of.

**Directives reach Blips only when they say so.** FLARES AND WHISTLES marches every Blip 3 squares; FALSE CALM freezes them. No other card moves a marker.

{{svg:diagrams/diagram-blip-resolve.svg}}

## Running the Warden Well {#sec-warden-craft}

The procedures above run ninety percent of every mission untouched. The last tenth is seams — places where a script meets a board it never imagined — and the Good-Faith Clause exists for exactly that tenth. The craft is not inventing behavior; it is asking one question, every time: *what would a competent enemy do here, within the rules as printed?* Answer it, play it, and move on. Do not re-litigate a call after the dice land, in either direction.

::: sidebar
**Three seams, worked.** How the clause resolves the gaps you will actually meet:

**"Under fire," on a manpack.** An ECA Team Leader tries the ALARM call on his manpack. Is he "under fire"? The bible defines effective fire once ({{ref:sec-morale}}): an attack roll resolved against the figure, or a blast, template, or near miss touching its square. Apply it here: if that has happened to him since his last activation, the call needs 2d10 ≥ 12; if not — you have been quiet, or shooting at someone else — the call succeeds like a fixed set. Ruling against the player means not stretching "under fire" to cover a man nobody is shooting at.

**When the QRF clock starts ticking.** The ALARM call succeeds in step (d), mid-phase. Does the new clock tick in this same phase's step (e)? Yes. The clause picks the reading less favorable to you, and a clock set at 6 that reads 5 by the End Phase is that reading. Set it the moment the call succeeds; tick it with everything else.

**"The largest element," tied.** FIX AND FLANK, and two four-figure elements tie for largest. The script cannot count past the tie; you can. The element with the machine gun, the better lane, the position you least want pouring Sustained Fire — that one is the base. The tie always breaks toward the board hurting you most.
:::

### A Complete Warden Phase {#sec-warden-turn}

::: example
**The fuel point, turn 5.** The mission went loud in turn 4 — Vasquez's burst across the gate was clear contact, and the force is **Alerted**. The board: a wire-fenced ECA fuel point on a crossroads. The Warden's force — its cards are in {{ref:ch-forces}} — is four revealed elements and one marker. A **sentry pair** (Holding) mans the sandbagged gate. An **MG team** (Base-of-Fire) is deployed on the loading dock, bipod down, one Sustained Fire action already spent from its belt. A **fireteam** — Team Leader and three Riflemen (Sweep) — is coming back in from patrol, behind the tank farm, no LOS to anything Known. The **command element** — an Officer and his RTO (Holding) — is at the office, a fixed radio set inside. **Blip 3** is somewhere north, unresolved. The Crew: Vasquez and Okafor are **Known**, behind a culvert and a stock tank 9 squares from the gate — both fired last turn, and Okafor is prone. Ledford is Unknown, prone in the fence-line brush on the Sweep's path. Pham is Unknown in the ditch behind, holding 4 AP. The Noise pool reads 11 after the Crew Phase (8 carried in, +3 from gunfire at the cap — {{ref:sec-noise}}).

**(a) Bookkeeping.** Pool 11 against thresholds of 3 and 7: Alerted, already marked since turn 4's clear contact. No change; the pool cannot reach ALARM on its own ({{ref:sec-alarm}}).

**(b) Directive.** The force is Alerted: draw one. **FALSE CALM** — *"All elements hold position and cease fire this turn unless fired upon. Blips freeze. The QRF clock still ticks."* But the Officer is alive, and his card re-draws one Directive per Warden Phase, keeping the harsher. The re-draw is **PUSH THEM** — *"Assault and Sweep elements Sprint their first 3 squares toward the nearest Known position, then act normally. Base-of-Fire elements fire before anyone moves."* Which is harsher? Good faith answers from the board: the Crew is bloodied and close, and a turn of pressure hurts more than a turn of quiet. **PUSH THEM stands.** FALSE CALM goes face up on the discard.

**(c) Blips move.** The force is past Suspicious, so Blip 3 moves 3 squares toward the last thing the force learned — the Known culvert — angling, per good faith, toward the crossroads that also happens to be the Crew's way home. It ends far from any Crew LOS: unresolved, still a rumor.

**(d) Elements act.** PUSH THEM sets the order: Base-of-Fire fires before anyone moves. After that, nearest-threat-first ({{ref:sec-elements}}).

*The MG team* (Base-of-Fire, line 1: deployed, Known in LOS). Sustained Fire ({{ref:sec-sustained-fire}}) on the largest Known cluster — Vasquez and Okafor, both inside one 2×4 template. The Gunner lays the Beaten Zone with its near edge on the culvert, rolls one attack at the sustained TN of 11, no Cover TN — the BZ ignores the culvert's low cover along its axis. **2d10: 6 and 7 — 13.** Success: every figure in the zone takes a hit at DR {{stat:weapons.mmg.dr}}. Vasquez: Hit Location **d10 = 9**, Legs; Severity **d10 = 2**, +4, −0 armor = 6 — a **Light** wound: Shaken, −2 max AP, Bleed 1, and no Sprint on that leg ({{ref:sec-wound-procedure}}). Okafor: Location **d10 = 4**, Torso, no plates; Severity **d10 = 1**, +4 = 5 — **Light**: Shaken, −2 max AP, Bleed 1. The zone's other clause — everyone in it Shaken unless prone — adds nothing: Okafor is prone and Vasquez is already Shaken by the wound. The BZ marker stays on the board: crossing it now costs double AP and an attack at TN 13 per square ({{ref:sec-beaten-zone}}). Second belt action spent; one remains. The team ends holding its script's {{stat:doctrines.base-of-fire.held_ap}} AP.

*The gate sentries* (Holding — nearest element, 9 squares from the Known pair). Line 1: a Known enemy in LOS. Each fires the best shot 8 AP allows — Aimed, 4 AP — and note what line 1 quietly costs the Warden: these two have a landline, and their ALARM line is line 3, but the script executes the *first* true line only. Gunfire trumps the phone call. Target priority: Vasquez fired at this element last turn — priority 1 ({{ref:sec-target-priority}}). Both shoot Aimed at Vasquez behind the culvert, Cover TN 14 on their {{stat:opfor.eca-sentry.shoot}} line. **Sentry one, 2d10: 8 and 5 — 13.** Miss. **Sentry two: 6 and 5 — 11.** Miss — the culvert holds. Each ends holding {{stat:doctrines.holding.held_ap}} AP: the gate will answer movement twice before your next turn ends.

*The fireteam* (Sweep, behind the tank farm). PUSH THEM first: all four Sprint their first 3 squares toward the nearest Known position — four Sprints, **+4 Noise**, pool 15. (Their gunfire, when it comes, adds nothing: the +3 turn cap on gunfire Noise is already paid.) Then act normally: no LOS to a Known from the tank farm's shadow, so line 1 fails and **line 2** runs — a Known position exists, advance on-line toward it, cover-to-cover, raking Concealment within 8 squares along the way. The fence-line brush is on the axis at 6 squares. Two Riflemen rake it as they bound — a Snap Shot's AP each, no roll, no target: fire at ground. Ledford is lying in that brush. He suffers the near-miss effect: **Shaken**, prone or not — and still Unknown; the Warden sprayed a treeline, not a man. Each figure ends its bound behind cover holding {{stat:doctrines.sweep.held_ap}} AP. Pham, watching the line cross her arc, could take Reaction Fire — and does not. Her shot would make her Known ({{ref:sec-known}}), and a pistol at 10 squares is a bad price for that.

*The command element* (Holding, at the office, farthest). Line 1: no Known in LOS from the office — false. Line 2: force is not Suspicious — false. **Line 3: the force is Alerted and the element contains a Leader, an RTO, and a fixed set not yet used — attempt ALARM.** The RTO spends 2 AP at the base station: automatic. **ALARM.** Roll the QRF clock: **d6 = 4**, +2 — **the clock is set at 6.** From this moment, Contact rolls take the ALARM modifier and the scenario's floodlights come on; the fuel point has no drone team, so that line stays empty. Next Warden Phase, the deck yields two cards. The Officer holds his remaining AP behind the office wall — line 3 was the element's whole order.

**(e) Clocks tick.** One clock is running. The QRF clock ticks in the phase it started ({{ref:sec-warden-craft}}): **6 → 5.**

That is the phase, and no one decided anything except the dice, the scripts — each line cited above by number — and three good-faith calls: a harsher card, a Blip's drift, a tie that never came up. The End Phase will mark Vasquez's and Okafor's Bleed ({{ref:sec-bleed}}). Read the board the way the Warden now reads it: two Known and bleeding behind a culvert with a live Beaten Zone across their line of retreat, a Sweep line one bound from a Shaken man it does not know it has found, a gate holding eight AP of reactions, and headlights six minutes out. Your move.
:::

The scripts are the enemy's skeleton. The next chapter is its flesh: who these people are, faction by faction, card by card — {{ref:ch-forces}}.
