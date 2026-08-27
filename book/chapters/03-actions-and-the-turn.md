# Actions & the Turn {#ch-actions}

::: flavor
A mimeographed drill sheet, pinned inside the feed-store office door, Deacon's block capitals: *"A firefight is thirty seconds of decisions, and you make them in advance or not at all. Move one at a time. One gun watching, always — a rifle that is not firing is still working, holding every yard its muzzle covers."* Beneath it, in pencil, different hands from different weeks: *timed the low bridge fight after. eight seconds of shooting. felt like a year.* — *the sentry that got Royce never took a step. didn't have to. Royce moved.* — *greedy is what gets a whole line killed.*
:::

## The Turn Sequence {#sec-turn-sequence}

A mission plays out in game turns, each about thirty seconds of fiction. Every turn is the same machine run once: your Crew spends its effort, the Warden answers, and the books are balanced. The order never varies.

**1. Crew Phase.** Activate your Crew figures one at a time, in any order, each at most once per turn. Finish each figure's activation completely before beginning the next. After the second Crew activation of the turn ends — and after every Crew activation after that — roll the Interrupt Die ({{ref:sec-interrupt-die}}).

**2. Warden Phase.** Resolve five steps, in order:

- **(a) Noise and Alert bookkeeping.** Total the Noise the turn has generated and check it against the Alert thresholds ({{ref:sec-noise}}).
- **(b) Directive.** If the OPFOR is Alerted or worse, draw one Directive card ({{ref:ch-enemy-system}}).
- **(c) Blips move.** Every unresolved Blip moves by its rules ({{ref:sec-blips}}).
- **(d) Revealed elements act.** Every revealed OPFOR element acts by its Doctrine ({{ref:ch-enemy-system}}).
- **(e) Clocks tick.** Advance every running clock: QRF arrival, bleed-out ({{ref:sec-bleed}}), fires, drone batteries.

**3. End Phase.** In order: mark Bleed for every Bleeding figure ({{ref:sec-bleed}}); remove Shaken from figures that neither activated nor were shot at this turn ({{ref:sec-shaken}}); remove expired effects; advance the Turn marker.

### The Crew Phase

An activation is one figure spending its Action Points ({{ref:sec-ap}}). Choose the next figure only when the last is finished — nothing commits you to an order in advance, and the enemy's reactions will make you glad of that. A figure's activation ends when you declare it over; any AP it has not spent stays with the figure as Overwatch ({{ref:sec-overwatch}}). An ended activation cannot be reopened.

You are not required to activate everyone. A figure you leave alone this turn keeps whatever AP it is already holding, remains available for Reaction Fire, and — if it is Shaken and nobody shoots at it — recovers in the End Phase. Sitting a figure out is often the play: fewer activations mean fewer Interrupt Die rolls, and a rifle already lying in a good position with a deep pool of AP is doing its job by watching.

### The Warden Phase

You run this phase too, and you run it exactly ({{ref:sec-good-faith}}). Steps (a), (c), and (e) are pure bookkeeping — resolve them without editorializing. Step (b) hands the whole enemy force its order for the turn. In step (d), run each revealed element's Doctrine script as printed; the scripts live in {{ref:ch-enemy-system}}. Elements hold back AP where their script says to. That held AP is their Overwatch, and it is loaded — your figures cross it at the same peril the Warden's figures cross yours ({{ref:sec-reaction-fire}}).

An element that acted early on an Interrupt still acts normally in this phase. The Interrupt was a bonus, not an advance.

### The End Phase

The turn exhales. Bleed is the price of business left unfinished ({{ref:sec-bleed}}); Shaken recovery rewards the figures you kept out of the fight; expired effects — smoke drifting off, a stun wearing through — come off the board. Then the Turn marker advances, and the Turn marker is never idle bookkeeping: scenarios carry deadlines, check-in timers, and an Exfil that does not wait ({{ref:ch-running-missions}}).

## Action Points {#sec-ap}

Action Points are the turn's currency. A standard Crew figure activates with 8 AP; a card that says Slow prints 7, a card that says Fast prints 9 — the number on the card is final. OPFOR figures activate with 8 AP as well, but the Warden spends theirs by script, most often as movement plus an attack, with a reserve held back for Reaction Fire wherever the Doctrine says so.

Spend AP in any order and any legal mix — move, shoot, move again, go prone, shoot once more. An action may be taken more than once in an activation if the figure can pay for it and no rule on its card or in its description says otherwise. The universal actions and their costs:

{{table:ap-costs}}

Facing is free. A figure may turn to face any of the four directions at any point while it is spending AP, as often as you like. When its activation ends, it keeps its final facing until it next spends AP — choose that last facing deliberately, because it fixes the frontal arc the figure can see and react into ({{ref:sec-facing}}).

This list is universal and closed. The specialist chapters add actions of their own — deploying a machine gun ({{ref:ch-crew-served}}), driving ({{ref:ch-vehicles}}), flying a drone ({{ref:ch-drones}}) — but no rule in this book changes the costs printed here.

Whatever a figure does not spend, it keeps. Unspent AP persists between activations as Overwatch ({{ref:sec-overwatch}}), and holding some back is not waste — it is the entire defensive half of the game.

## The Interrupt Die {#sec-interrupt-die}

The Crew Phase is yours, but it is not free. Every activation past your second gives the Warden a lengthening chance to cut in.

After your second Crew activation of the turn ends, roll a d10. On a 10, the Warden takes an **Interrupt**. After your third activation the Interrupt comes on 9 or better; after your fourth, 8 or better — the threshold falls by one with each subsequent activation. Nothing modifies this roll.

{{table:interrupt-die}}

{{svg:diagrams/diagram-interrupt-die.svg}}

When an Interrupt comes, the single revealed OPFOR element nearest to any Crew figure — Alerted elements first — acts immediately with 4 AP, running its Doctrine script as if the Warden Phase had arrived early. When the Warden must choose between candidates, an element with contact outranks one without, the nearer outranks the farther, and any remaining tie breaks against you ({{ref:sec-good-faith}}).

Only revealed elements can Interrupt. If nothing is revealed — the whole enemy force still face-down Blips — make the roll and nothing happens; Blips never Interrupt.

The Interrupt is a short but entirely real activation. The element makes Noise, takes and triggers Reaction Fire, and tests morale, all as normal. It loses nothing for the privilege: it still acts in the Warden Phase this turn.

**Maximum one Interrupt per turn.** Once one has resolved, stop rolling the Interrupt Die for the rest of the Crew Phase.

::: designer
The Interrupt Die taxes a specific greed. In most solo games you sequence your entire force in perfect safety, then hand the enemy a turn; every plan is a lecture the opposition politely waits out. Here, running all eight of your people before the Warden answers should feel like sprinting a ridgeline — across a six-to-eight activation Crew Phase the die averages about one Interrupt per turn, so the question "who can afford to move last?" never leaves the table. Fielding a small crew and keeping the phase short is a legitimate answer. That is not an exploit. That is the lesson.
:::

## Overwatch {#sec-overwatch}

Overwatch is not an action, a stance, or a marker you place. It is the name for AP a figure holds while it is not its activation. When a figure's activation ends, its unspent AP stays with it until its next activation begins, and while it holds at least 2 AP it remains a live threat — held AP is what pays for Reaction Fire ({{ref:sec-reaction-fire}}).

At the start of a figure's next activation, its pool resets to the full printed value. Overwatch AP never stacks onto the new allowance; hoarding across turns buys nothing beyond the watching itself.

A figure on Overwatch watches from where and how its activation left it: its position, its posture, and its final facing are fixed until it next spends AP. Facing changes are free only *while spending AP* — between activations, a figure cannot turn, shift, or adjust. Its guard is its frontal 270°, everything except the Blind Arc behind it ({{ref:sec-facing}}).

Both sides keep Overwatch. The Warden's Doctrine scripts state how much AP each element holds back — typically enough for one reaction — and OPFOR held AP obeys every rule yours does.

::: sidebar
**The last two AP.** Veterans of this system develop a closing ritual for every activation: end behind something ({{ref:sec-cover}}), end prone if staying, end facing the threat, and end holding pairs — 2 AP is one reaction, 4 AP is two. Movement in pairs of figures follows from it: one moves while one watches, then they trade — the leapfrog the example below performs. The habit costs nothing and it is the difference between a crew and a queue of targets.
:::

## Reaction Fire {#sec-reaction-fire}

Reaction Fire is a Snap Shot taken out of turn, and it is the reason movement under an enemy's gun is a gamble even when that enemy has already acted — or has not acted at all.

**Requirements.** A figure may take Reaction Fire when all of the following are true:

- it has at least 2 AP remaining;
- it is not Shaken or Pinned ({{ref:sec-shaken}});
- it has reacted fewer than two times since its own last activation ended;
- an enemy figure inside its frontal 270° arc ({{ref:sec-facing}}) and its LOS ({{ref:sec-los}}) performs a trigger.

**Triggers.** Any of the following by an enemy figure: moves from one square to another, or from one Zone to another; stands; Sprints; fires; breaches.

**Procedure.** Pay the Snap Shot's cost from the reacting figure's held AP and resolve one shot at the triggering figure by the normal attack procedure ({{ref:sec-attack-procedure}}). Reaction Fire carries a single flat +3 TN — this *replaces* the Snap Shot penalty, never stacks with it. Every other modifier applies as usual; in particular, a Sprinting target adds its +2 on top, for +5 total. Read Open or Cover TN off the target's situation at the moment of the shot, exactly as for any attack ({{ref:sec-cover}}).

**Timing.** Against movement, the reaction resolves mid-move: after the triggering square, before the next one. A target still standing simply keeps moving — and every further square it enters is a fresh trigger, so a watcher holding 4 AP may react twice to the same crossing. Against a shot, the reaction resolves simultaneously with the trigger: resolve the triggering shot, then the reaction, and apply both results — a reacting figure that is hit still gets its round off, and a triggering shooter cut down still finishes firing.

**Any phase, both sides.** Reactions occur whenever a trigger does: OPFOR figures react to your movement in the Crew Phase, your figures react to OPFOR movement and fire in the Warden Phase and during Interrupts. OPFOR figures use exactly this rule — the Warden's scripts leave AP unspent on purpose, and each Doctrine listing states how much — with one asymmetry: **the Warden reacts only to Known Crew figures.** Like every trigger the Warden owns, Reaction Fire needs a Known target ({{ref:sec-known}}); a shape the force does not Know can cross a watched field untouched. Your figures carry no such law — you react to anything you can see. A Reaction Fire shot is itself fire, so it can trigger Reaction Fire in return from any eligible figure that has it in arc. Defenders Posted at Portals react through them; the entry fight this creates inside buildings is resolved in {{ref:sec-entry}}.

**Limits.** Each figure reacts at most twice between one activation of its own and the next, pays the Snap Shot cost each time, and may never react while Shaken or Pinned. That last clause is suppression's whole purpose ({{ref:sec-shaken}}): the way across a watched field starts with making the watcher flinch.

{{svg:diagrams/diagram-reaction-fire.svg}}

{{card:opfor.eca-sentry}}

::: example
**Leapfrog at the hedgerow.** Turn five, and the mission has been loud for two of them: the OPFOR is Alerted. A hedgerow crosses the pasture with one cut gap, three squares wide, and the far field is where Reyna Vasquez and Birdy Sizemore need to be. Ten squares beyond the gap, behind a sandbagged post, a revealed ECA Sentry faces it. His Holding script left him 2 AP in Overwatch. The gap sits inside his frontal arc, inside his LOS, and well inside his carbine's Effective Range of {{stat:weapons.carbine.eff}} squares — and both women are Known ({{ref:sec-known}}), marked since they shot their way off the last field without ever breaking contact. Somebody is going to get shot at.

Vasquez ({{stat:crew.vasquez.ap}} AP) activates first. She walks 3 squares along her side of the hedgerow to the gap's near corner (3 AP), goes prone (1 AP), and turns to face the post — facing is free. She ends her activation there holding 4 AP: two Reaction Fires' worth. Hers is the first Crew activation of the turn, so no Interrupt Die yet.

Birdy ({{stat:crew.birdy.ap}} AP — Fast) activates. She walks 2 squares to the mouth of the gap (2 AP), then Sprints the 3 open squares (2 AP, +1 Noise, and she now counts as a Sprinting target). One square into the open, the Warden reacts.

The Sentry's side of the ledger: he holds 2 AP, he is not Shaken, and a Known figure entering a square is a trigger inside his arc and LOS. He pays 2 AP — everything he has — for the Snap Shot. Birdy is mid-gap in the open, so he shoots against the first of the two numbers of his Shoot {{stat:opfor.eca-sentry.shoot}}: Open TN 12, +3 for Reaction Fire (the flat reaction penalty — not a Snap penalty stacked on top), +2 for a Sprinting target. TN 17. The Warden rolls 2d10: a 6 and a 5, total 11. A miss by 6 — too wide even for an automatic weapon's near-miss effect ({{ref:sec-attack-procedure}}). The reaction resolved mid-move, so Birdy runs on. Her last two squares are two more triggers — but the post has no AP left to answer with.

The muzzle flash is a trigger of its own. The Sentry fired inside Vasquez's frontal arc and LOS; she is not Shaken, holds 4 AP, and has not reacted since her activation ended. She pays 2 AP and takes Reaction Fire, resolving simultaneously with his shot. The sandbags put him in Cover, so she shoots against the second number of her Shoot {{stat:crew.vasquez.shoot}}: Cover TN 12, +3 for Reaction Fire. TN 15. She rolls a 9 and an 8: 17. A hit. One Casualty Die: the d10 comes up 4, plus the carbine's DR of {{stat:weapons.carbine.dr}}, minus his Armor of {{stat:opfor.eca-sentry.armor}} — total 6. **Down.** The post goes quiet.

Count what the AP bought. The Warden held 2: one reaction, and his script spent it on the hardest shot on offer — a sprinter at +5. Vasquez banked 4: she has spent 2, still holds 2, and has one of her two reactions left, so anything else that moves in that gap before her next activation eats a Snap Shot at TN 15. Birdy finishes the crossing with 5 AP in hand and drops prone against the far bank (1 AP), holding 4 and facing the far field — the leapfrog inverts, and now she watches while Vasquez crosses. Had that post held an MG team keeping 4 AP instead of a lone sentry keeping 2, Birdy's three open squares would have been three triggers against two paid reactions. The arithmetic, not the hedge, is what makes a gap wide.

Bookkeeping owed to the later phases: Birdy's Sprint is +1 Noise, and two unsuppressed gunshots would be +2 each but gunfire caps at +3 Noise per turn — +4 Noise total ({{ref:sec-noise}}). And Birdy's was the second Crew activation to end, so the Interrupt Die is rolled, needing a 10: it comes up 6. No Interrupt. This turn, the tempo held.
:::

::: designer
Reaction Fire is symmetric on purpose, and the symmetry is the doctrine lesson smuggled into the rules: *an unactivated enemy is never safe to cross* — and neither are your people, which is why the Warden's scripts hold AP the way a trained unit holds security. The flat +3 keeps reactions meaningfully worse than deliberate fire, so a watched gap is a cost, not a wall. The game wants you answering held guns the way professionals do — smoke, suppression, a better angle, or a partner whose own held AP makes the enemy's shot the last mistake it takes.
:::
