# Fieldcraft {#ch-fieldcraft}

::: flavor
From the crew's night-movement standing order, typed on the back of a co-op seed invoice, in Deacon's block capitals: *"SPEED IS A PURCHASE AND THE CURRENCY IS SOUND. WALK WHEN YOU CAN. CRAWL WHEN YOU MUST. RUN WHEN IT NO LONGER MATTERS. THE VALLEY HEARS EVERYTHING ONCE — WHAT COUNTS IS WHAT IT HEARS TWICE."* Beneath that, penciled in Ledford's slope: *a sentry is a man doing the most boring work on earth. he watches the road because the road is the only thing that ever brought him anything. come from the direction nothing ever came from.* And a third hand, small, at the bottom margin: *cutters buried at the third fencepost past the ford. you know which ford.*
:::

The chapters before this one move figures and spend dice. This chapter is about the game the Warden is playing while you do it — a game kept in ledgers, not in line of sight. What has the enemy *heard*? What is actually *out there*? What has it *seen*? What does it *know*? Those four questions have four mechanisms — Noise, Blips, spotting, and the Known marker — and most missions are decided in them before the first Aimed Shot. The whole discipline reduces to one sentence you should hold onto for the rest of the book: the quiet game is Noise arithmetic against an alert ladder, the mission will probably go loud anyway, and fieldcraft is how you choose *on whose terms*.

## Gaits and Stances {#sec-gaits}

Your figures move at three gaits. Their costs live in the universal action list ({{ref:sec-ap}}) and nothing in this chapter changes them; what follows is what each gait means to the quiet game.

**Walk.** The default, and the quiet one. A walking figure adds no Noise — ever, over any distance, on any surface. When the mission is silent, it is silent at a walk.

**Sprint.** Fast, and a purchase: every activation in which a figure Sprints feeds the Noise pool ({{ref:sec-noise}}). A Sprinting figure is harder to hit — the modifier list prices it ({{ref:sec-tests}}) — but the pool does not care whether anyone was shooting. You pay in sound either way.

**Crawl.** Prone movement: slow, silent, and small. A prone figure at three or more squares reads as in Cover to anyone shooting at it ({{ref:sec-cover}}), and a crawling figure is prone by definition. The Crawl is the stalker's gait — the way a body crosses the last of the open without becoming a silhouette.

A figure's stance is standing or prone, and the transition is its own action on the universal list. Prone buys the range-cover above and keeps a figure under the sightlines that matter; it costs tempo, because everything useful except crawling and shooting starts with standing back up.

Route selection does the rest. Concealment hides the mover and shortens every enemy eye that might find it ({{ref:sec-spotting}}); conifer stands go further and cut LOS itself ({{ref:sec-los}}); and every enemy figure drags a Blind Arc behind it that no rule lets it watch ({{ref:sec-facing}}). The quiet approach is rarely the short one. It is the one stitched from brush, dead ground, and the direction nobody is facing.

## The Noise Pool {#sec-noise}

Noise is a single shared pool for the whole mission — not per figure, not per place. One track, one number. It starts at the scenario's printed value, usually zero. Add to it the moment a source occurs, whoever caused it — your gunfire and the Warden's pour into the same pool, and so does the engine of the truck you stole. **Noise never decreases.** There is no waiting it out, no all-clear, no rule that forgives. Quiet spent early is the only quiet you get.

{{table:noise-sources}}

Read the caps carefully. Gunfire is capped *per turn, not per figure*: no matter how many unsuppressed weapons fire in a turn, they add at most the printed maximum, and suppressed fire adds at most its own smaller maximum. Everything else stacks as it happens — three figures Sprinting in one turn is three separate points. Scenario sheets add listed sources of their own: a generator kicked over, a dog pen, a church bell.

Track the pool face up. You are the Warden's hands ({{ref:sec-good-faith}}), and the Warden's hearing is procedural, not psychic: it knows exactly the number on the track and nothing more. Noise carries no direction and no author — the pool does not remember which shot came from which hedgerow; that is what the Known rules are for ({{ref:sec-known}}). What the pool buys the enemy is posture, and posture only.

Mark Noise the moment it happens; the ladder moves during the Warden Phase's bookkeeping step ({{ref:sec-turn-sequence}}). Each scenario prints the two thresholds its garrison wakes at — a sleepy fuel depot and a jumpy checkpoint are different numbers — and certain events move the ladder directly, without waiting on the pool; those triggers, and the Warden's full behavior at each rung, belong to {{ref:ch-enemy-system}}. What this chapter owes you is the view from your side of the board:

{{svg:diagrams/diagram-noise-ladder.svg}}

**Unaware.** The board runs on rails. Posts stand where the briefing said, patrol Blips walk their printed loops, nothing is drawn from the Directive deck. Every minute of Unaware is yours: the tempo, the routes, the choice of when it ends.

**Suspicious.** Someone comes to look. The nearest element walks toward the newest Noise source, and every Blip on the map stops patrolling and starts drifting toward sound ({{ref:sec-blips}}). Nothing is hunting you yet — but the geometry you scouted is already out of date.

**Alerted.** The Warden starts fighting. It draws a Directive every Warden Phase, and its elements run their Doctrines against Known positions ({{ref:sec-known}}). From here on the enemy maneuvers, suppresses, and flanks — the machinery of {{ref:ch-enemy-system}} at full turn.

**ALARM.** The outside world is coming: a QRF clock starts, Contact rolls sharpen, enemy drones go up, lights come on where the scenario has them. But mark this — **ALARM is a human act, not a threshold.** The pool cannot send it. Somebody with rank has to reach working comms and get the call out, which is why leaders die first, landlines get cut, and jammers exist ({{ref:ch-enemy-system}}). Deny the call, and Alerted is as bad as your night gets — until the scenario's missed check-in timer runs out and the silence itself becomes the message.

::: designer
The pool never drains because it is not modeling sound — sound decays; suspicion accumulates. Every point of Noise is an entry in some duty log, a corporal who heard *something*, a dog that would not settle, and the ratchet is what makes the chapter's one sentence true: you cannot claw quiet back, so the decision that matters is not "how do we stay silent forever" but "what do we spend the silence on." Printing the thresholds per scenario, rather than fixing them, lets scenario design tune exactly how long that question stays open.
:::

## Blips {#sec-blips}

The enemy arrives on your board in two forms, and the difference between them is the spine of the scouting game.

**Scripted sentries** are placed openly at setup: real figures, at printed posts, visible across the board from turn one. You can count them, time them, and plan around them before a die is rolled. They are revealed elements like any other — the Warden runs them by their Doctrine ({{ref:ch-enemy-system}}) — and their eyes are governed by the spotting rule ({{ref:sec-spotting}}).

**Blips** are everything else: numbered markers, face down, placed by the scenario. A Blip is a *contact*, not a unit. It might be a fireteam. It might be a dog. Until it resolves, it has no figures, no facing, no weapon — and no eyes. A Blip never spots, never shoots, never reacts. It threatens you in exactly two ways: where it is, and what it turns out to be.

**Blips move** in the Warden Phase ({{ref:sec-turn-sequence}}). While the force is Unaware, each Blip walks its printed patrol route at 2 squares a turn — on rails, and therefore on a clock you can read. From Suspicious up, every Blip moves 3 squares a turn toward the newest Noise source or the most recent Known or last-Known Crew position, whichever the Warden learned of last; when the choice is arguable, it goes the Warden's way ({{ref:sec-good-faith}}).

**Resolving.** A Blip resolves — turns face up into whatever it is — the moment any of the following is true:

- a Crew figure has LOS to it within 12 squares (6 if the Blip is in Concealment);
- it is under a Crew drone's Sweep, at any distance ({{ref:ch-drones}});
- a Crew figure pays to Spot it ({{ref:sec-spotting}});
- it would end its move within 6 squares of a Crew figure it can detect (see below) — it resolves at that point of the move;
- it moves adjacent to a Crew figure it can detect — **surprise**, below.

To resolve, roll d10 on the scenario's Contact Table; under ALARM, add the table's printed modifier. The default:

{{table:contact-default}}

On *Nothing*, remove the marker — the shape in the treeline was wind, a dog, refugees who want no part of this. On anything else, place the contact's figures on and adjacent to the Blip's square, postures and facings chosen to the Warden's best advantage ({{ref:sec-good-faith}}). From that moment they are a revealed element and act by Doctrine ({{ref:ch-enemy-system}}).

{{svg:diagrams/diagram-blip-resolve.svg}}

**Surprise.** A Blip that moves adjacent to a Crew figure it can detect resolves *with surprise*: its figures deploy before anything else happens — before Reaction Fire, before your figure can lift a weapon — and the Crew figure tests Grit at once for surprise Point Blank contact ({{ref:sec-morale}}). Letting an unresolved contact walk into arm's reach is how a quiet night ends worst.

**Concealment is Blip-proof.** A Crew figure in Concealment that holds its fire cannot be detected by Blips at all: the two proximity triggers above simply do not apply to it, and a patrol Blip can pass within a spade's length of the laurel it is lying in. Firing ends the guarantee — not because the Blip hears, but because the shot makes you Known ({{ref:sec-known}}) and puts you on every ledger at once.

::: designer
Why the hybrid? All-Blips would make the stealth game a guessing exercise — you cannot stalk a probability cloud, and takedowns, timing, and approach routes need fixed problems to be worth planning against. All-visible would kill the dread that makes scouting worth AP. So the scenario splits the difference the way real intelligence does: the posts you knew about going in are on the map, and everything your sources could not pin down is a numbered marker moving on a schedule. The sentries are the chess problem. The Blips are the weather.
:::

## Spotting {#sec-spotting}

Two kinds of eyes work the board: yours and theirs.

**Yours: the Spot action.** Spot ({{ref:sec-ap}}) does one of two things. Aimed at a Blip in your LOS — at any distance, provided the line is clean ({{ref:sec-los}}) — it resolves that Blip immediately, on your clock: you stop, you glass the shape, you find out *now*, from ground you chose, instead of at 12 squares with your crew halfway across a field. Aimed at the ground, it is a search: where a scenario hides something findable — a cache, a tripwire, papers on a body — the scenario says what a search turns up and from how close. You cannot Spot into your own Blind Arc ({{ref:sec-facing}}).

**Theirs: the sentry's eyes.** At the start of each Warden Phase, every scripted sentry checks its watch: any Crew figure inside its frontal arc ({{ref:sec-facing}}), in its LOS, within 12 squares is spotted. If the figure is in Concealment, or the board is dark, that reach is 6 squares — either condition alone does it, and they do not stack further, though some cards and kit shrink the distance again. Spotting needs no roll and offers no save: **the force is immediately Alerted, and the spotted figure is Known** ({{ref:sec-known}}). One lazy silhouette at the wrong moment skips the whole ladder.

The timing is the rest of the rule. Sentries check when the Warden Phase *begins*, not when you move. Whatever happens inside your own phase — the rush across the last of the yard, the knife — is never seen unless a sentry survives to the check. Fieldcraft against a manned post is therefore an exercise in phase arithmetic: end every turn outside the reach of every living eye, and make sure the activation that finally crosses inside it is the one that finishes the job.

Patrols and other revealed elements are not sentries; their noticing, like everything else they do, is written into their Doctrine scripts ({{ref:ch-enemy-system}}).

## Known and Unknown {#sec-known}

The Warden shoots at, and maneuvers against, **Known** Crew positions — and only Known ones. This is the whole of the enemy's targeting law, and it governs every trigger the Warden owns: Doctrine fire, Directives, and Reaction Fire alike. A Crew figure that is not Known is a shape in a field. Elements do not fire at shapes; scripts with no Known target search, hold, or sweep instead ({{ref:ch-enemy-system}}).

A Crew figure becomes Known — mark it — when any of the following happens:

- **it fires.** The square it fired from is marked along with it. A suppressor changes the Noise, not the marking: muzzle flash and impact tell direction even when the report is a cough.
- **a sentry spots it** ({{ref:sec-spotting}}), or an element's script says so ({{ref:ch-enemy-system}}).
- **an enemy drone sweeps it** ({{ref:ch-drones}}).

Known is kept **per figure**. One spotted rifleman does not reveal the crew: the figure that fired is Known, and the four lying silent in the ditch beside it are not, even though the Warden's rounds are cracking a body's length over their heads. This is why a crew splits its jobs — one gun that is Known and moving is a fact the Warden must chase; five that are Known is a firing solution.

A Known figure becomes **Unknown** again by disappearing properly: move at least 3 squares with no OPFOR figure holding LOS to you at any point along the way, and at the end of that move, remove your Known marker. The place you went dark from persists in the Warden's memory as the **last Known position**: Blips drift toward it, Doctrines search toward it ({{ref:ch-enemy-system}}). It ages; you move. The gap between where you are and where the Warden is still looking is the maneuver space this whole chapter exists to buy.

Make the loop a habit before the shooting chapters make it doctrine: fire, then move — three squares and a screen of anything solid, and the return fire arrives where you were. A crew that shoots twice from the same wall has told the Warden everything it needs.

## The Quiet Game {#sec-stealth}

Everything above assembles into a toolkit, and this is it, whole:

- **Walk and Crawl.** The silent gaits ({{ref:sec-gaits}}). The pool only hears what you spend.
- **Concealment.** Shortens sentry eyes, blinds Blips entirely while you hold fire, and reads as Cover when the shooting starts ({{ref:sec-cover}}).
- **Darkness.** Shortens sentry eyes the same way, and thickens every shot fired without lights ({{ref:sec-tests}}). The scenario says when the board is dark, and whose gear ignores it.
- **The Blind Arc.** Every enemy figure drags a blind quadrant behind it ({{ref:sec-facing}}). Approach routes are built out of them.
- **The patrol clock.** Unaware Blips move a fixed distance on a printed loop ({{ref:sec-blips}}). Count squares, count turns, and the gap in the coverage is yours to schedule.
- **Suppressed weapons.** Quiet on the pool — the smaller cap on the Noise table — but quiet is all they buy. Firing still makes you Known ({{ref:sec-known}}), and a shot fired at an enemy who lives to understand it, or in view of another enemy element, is clear contact: the force is Alerted, suppressor or none ({{ref:ch-enemy-system}}). A suppressor is arithmetic, not absolution. Shoot the watcher no one is watching, kill with the first round, and the pool barely stirs; miss, and the report was never the problem.
- **Cut comms.** A landline is an Interact away from being slack wire, and dead comms is the difference between a garrison that is Alerted and a garrison that has told someone ({{ref:sec-noise}}, {{ref:ch-enemy-system}}).

### Takedowns {#sec-takedowns}

While the enemy force is Unaware ({{ref:sec-noise}}), a Crew figure carrying a blade may take down an adjacent enemy figure. Spend an Interact ({{ref:sec-ap}}): the target is **Down** — automatically. No test, no attack roll, no Noise. In practice the target is a scripted sentry, because while the force is Unaware, sentries are usually all that stands revealed.

The conditions are the entire difficulty. *Adjacent* means you crossed every spotting distance on the board and were standing at his shoulder when your activation gave you the AP ({{ref:sec-spotting}}). *Unaware* means the window closes on its own: once the force is Suspicious or worse, nobody on that board is Unaware enough, and the knife goes back to being a tool. The approach — Blind Arc, Concealment, the phase arithmetic of the sentry check — is the skill being tested. The Interact is just the receipt.

A takedown is silent, not tidy. The man is Down, not vanished — lootable, restrainable, and findable. Which brings us to the oldest problem in this line of work.

### Bodies {#sec-bodies}

Every quiet kill leaves a body, and a body is Noise waiting to be counted. A Blip, or a revealed OPFOR figure with LOS outside its Blind Arc, that moves within 3 squares of a body **discovers** it: add +3 Noise immediately. If the finder is a revealed element, the discovery is also clear contact — the force is Alerted at once ({{ref:ch-enemy-system}}). If the finder is a Blip, the pool moves and the Blip walks on, unresolved; somewhere out there, something has started barking.

You can spend sweat against the clock. Move a body as you would carry a Down crew member — both hands, half AP ({{ref:ch-wounds}}). A body dragged into Concealment or water, or laid Deep inside a Zone ({{ref:sec-zones}}), is discovered only by a Blip or figure entering its square or an adjacent one. There is no hiding a man forever: posts get relieved and radio checks come due, and the scenario's fallback timer is how the Warden's patience runs out ({{ref:ch-enemy-system}}). Hiding the work buys turns, not absolution — but turns are the only currency this chapter deals in.

::: sidebar
**Margin note, Ledford's hand:** *sentry work is three clocks. his relief, his partner, his phase. the relief you get from the scenario sheet. the partner you find before you commit — posts are pairs, and the second man is the one that kills you. the phase you already own: he looks when the Warden's turn starts, not when you move, so the last stretch is free if — IF — the knife finishes before the phase does. count your AP twice on the way in. and put the far one down first if you can reach him with a quiet rifle. the near one you can always reach with your hands.*
:::

{{card:crew.ledford}}

::: example
**The landline shack.** Turn 3 of a night raid; the sheet prints Alert thresholds of Suspicious 3 and Alerted 7, and the pool sits at 2 from two Sprints during insertion. The force is Unaware. Where the landline crosses the creek stands a shack with a sentry pair: Sentry A behind sandbags at the road gate, facing north up the road; Sentry B at the east wall, facing the treeline. Their post's fixed line means ALARM is automatic if they are ever Alerted at it — the wire is the mission. Blip 4 walks a road loop behind the spur, out of everyone's LOS. Junior Ledford and Reyna Vasquez are in the hardwoods 9 squares east; her carbine wears the crew's one suppressor.

*Distances first.* A sentry spots at 12 squares — 6 with the Concealment and the dark, either one enough. Ledford's Stalker skill cuts that to 3, and prone in his ghillie he cannot be spotted past 2. Vasquez has no such card: she holds at 7 squares, one outside the sentries' reach.

*Turn 3.* Ledford ({{stat:crew.ledford.ap}} AP) walks 5 squares through the brush (5 AP) to its edge, 4 from Sentry B, and goes prone (1 AP), holding 2. Vasquez ({{stat:crew.vasquez.ap}} AP) shifts 2 squares (2 AP) to a deadfall with an angle on the gate. Second activation ends: the Interrupt Die ({{ref:sec-interrupt-die}}) comes up 4 — nothing. Warden Phase: the pool reads 2, still Unaware; both sentries check — Ledford is prone-ghillie at 4 squares, past his 2; Vasquez at 7, past her 6 — nothing. Blip 4 walks its printed loop 2 squares, behind the spur.

*Turn 4.* Ledford stands (1 AP) and crosses the yard, 3 squares (3 AP) — inside the 6 the dark allows, but sentries check when the Warden Phase starts, and B does not have one coming. Interact (2 AP): automatic Down. No roll, no Noise. He ends behind the shack, its Block breaking LOS to the gate. Vasquez has not moved this activation and is rested on the deadfall: a Braced Shot (5 AP). Sentry A's sandbags clip her line — Cover, so the second number of her Shoot {{stat:crew.vasquez.shoot}}: TN 12, +2 for darkness without lights, −1 Braced. TN 13. She rolls 2d10: **9 and 6 — 15.** Hit. Casualty Die: **d10 = 5**, plus the carbine's DR {{stat:weapons.carbine.dr}}, minus his Armor {{stat:opfor.eca-sentry.armor}} — 7. **Dead.** The suppressed shot adds +1 Noise — pool 3 — and marks Vasquez Known at her fired-from square. No living enemy saw any of it: no clear contact. The Interrupt Die is rolled and means nothing — no revealed element left standing, and Blips never Interrupt. Warden Phase: pool 3 — **Suspicious.** Blip 4 stops patrolling and moves 3 squares toward the newest Noise source: the shack.

*Turn 5.* Ledford cuts the landline (Interact, 2 AP), then drags Sentry B — both hands, half AP — 2 squares into the creek-ditch laurel (4 AP) and goes prone (1 AP). One AP left; Sentry A stays where he fell. Thirty seconds is thirty seconds. Vasquez displaces 4 squares back through the timber, no OPFOR figure holding LOS at any point: **Unknown** — her old square lingers as the Warden's last Known position, aging. Warden Phase: Blip 4 rounds the spur 11 squares from Ledford, in his LOS — it resolves. **d10 = 4** on the Contact Table: a patrol pair. Next turn they reach the gate and find Sentry A: +3 Noise — pool 6 — and a body found by a revealed element is clear contact. **Alerted**, one point shy of the threshold anyway.

Count what the fieldcraft bought. The Warden is Alerted with no Known target on the board, its Directives start a turn late, and its only line out of the valley ends in slack wire. The mission has gone loud — on the crew's terms.
:::

The next chapter is for the moment the terms are set and the argument starts: {{ref:ch-ranged-combat}}, where the shooting is deliberate and the arithmetic you have been banking — Noise, position, Known and Unknown — gets paid out in TNs.
