# The Human Factor {#ch-human-factor}

::: flavor
Ask anyone who was at the low bridge what they remember and they will not say the shooting. They will say Amos Vance's voice. Boone's gun had gone quiet, two of ours were face-down in the ditch grass, and the line was coming apart one heartbeat at a time. Vance came up the ditch bent double, a hand on each shoulder, a name in every ear, that graveside voice saying *you are not done yet, get your rifle up*. The man is wrong about plenty. He was not wrong about us. We got up. We got everybody home.
:::

Bullets decide less than this chapter does. What Shaken and Pinned do to a figure — the lost AP, the flinch, the reactions that never come — is defined with the rest of the damage rules in {{ref:sec-shaken}}. This chapter owns everything around that state: when your people's nerve is tested ({{ref:sec-morale}}), how a voice restores it ({{ref:sec-rally}}), when the Warden's people break and run ({{ref:sec-opfor-morale}}, {{ref:sec-rout}}), and what you owe an enemy who is done fighting ({{ref:sec-prisoners}}). Fear in the REACH system is not a special subsystem. It is the same 2d10 against a printed number — the number is just written on a person instead of a rifle.

## Nerve Under Fire {#sec-morale}

A morale test is a Grit test: 2d10, unmodified unless a rule says otherwise, against the figure's own printed Grit ({{ref:sec-tests}}). Testing costs no AP and resolves immediately, mid-activation or mid-phase, the moment its trigger occurs. A Crew figure tests at exactly these four moments, and no others:

{{table:crew-morale-triggers}}

- **First blood.** The first time each mission that this figure comes under effective fire — an enemy attack roll is resolved against it, or a blast, template, or near miss touches its square. One baptism per figure per mission; after it, incoming fire is business.
- **A neighbor falls.** A Crew figure goes Down or Dead within 6 squares of this figure, or within its LOS. Every figure that qualifies tests, at once.
- **Surprise at Point Blank.** An enemy the figure did not know was there appears at Point Blank — adjacent, or in its Zone: a Blip resolving in its face ({{ref:sec-blips}}), a door opening onto rifles.
- **The cries of the Dying.** A Dying figure is close enough to hear. This trigger's rule — its radius, its timing, its once-per-turn limit — is printed with the bleed-out clock in {{ref:sec-bleed}}; test as it directs.

**Failure: the figure is Shaken.** A figure that is already Shaken when it fails is Pinned ({{ref:sec-shaken}}). Resolve the shot before the test — so a near miss that Shakes a green shooter, followed by a failed baptism test, leaves that shooter Pinned before they have fired a round.

**Natural 2: Panic.** The figure immediately Sprints — no AP, out of any turn order — to the nearest Cover or Concealment square that takes it away from the nearest revealed enemy; if no such square is in Sprint reach, it Sprints directly away. The flight is not an activation, but it is a Sprint in every other respect: it makes Sprint Noise ({{ref:sec-noise}}) and the figure counts as a Sprinting target until its next activation ends. Then it is Pinned where it stops.

A natural 20 simply holds. There is no prize for being brave; there is only still being in the fight.

Each event triggers one test per affected figure. Passing a test never immunizes anyone against the next one — courage in this game is not a save, it is a habit.

::: sidebar
**Margin note, Vance's hand,** flyleaf of the parish register: *Fear is information, not a verdict. It says: this is real, and you are still here to know it. The ones who worry me aren't the ones who go down behind the wall and shake. It's the ones who never do. Those men have stopped receiving information.*
:::

## Rally {#sec-rally}

Rally is the answer to most of what this chapter can do to you. It costs 2 AP ({{ref:sec-ap}}) and is available only to a figure with the **Leader** trait or a printed Grit of 9 or less — the professionals, and the people the valley already listens to.

When a figure Rallies, every Shaken or Pinned Crew figure within 3 squares — the Rallying figure itself included — immediately rolls 2d10 against its *own* printed Grit, one roll per figure. These rolls are unmodified: they are not the affected figure's action, so Shaken's TN penalty does not apply. On a success, a Shaken figure clears entirely; a Pinned figure drops to Shaken ({{ref:sec-shaken}}) — nobody comes all the way back from the bottom on one word. (Almost nobody: cards can say otherwise, and Amos Vance's Shepherd skill, below, is the standing exception.) On a failure, nothing changes, and nothing prevents another Rally later in the turn, from the same voice or a different one.

A Shaken figure may Rally others. A Pinned one must first pass its Grit at +2 like any other action beyond survival ({{ref:sec-shaken}}) — panic is not led out of a ditch by someone still in it.

Radios widen the circle. The Handheld Net's card reads: {{stat:gear.radio-set.effect}} Both ends of the call need a set — a figure without one must still be within the 3 squares of an actual voice. And the net is only yours while the spectrum is ({{ref:ch-drones}}).

{{svg:diagrams/diagram-rally-radius.svg}}

{{card:crew.vance}}

::: example
**The lot at the substation, turn 5.** Marcus Boone is repositioning his MMG along the fence line when an ECA Marksman fires in the Warden Phase and hits. Hit Location d10: 5 — Torso, and Boone wears no plates. Severity: d10 comes up 8, plus the rifle's DR {{stat:weapons.hunting-rifle.dr}}, minus armor 0 — 11. Critical: Boone is Down and Dying, bleed-out clock d6+2, the d6 lands 3 — five turns ({{ref:sec-wound-procedure}}).

A Crew figure just went Down, so everyone within 6 squares or LOS tests Grit now. Tanya Okafor, two squares away behind the truck, is already Shaken — a burst walked past her in the open earlier this turn, a near miss ({{ref:sec-attack-procedure}}). She needs her Grit of {{stat:crew.okafor.grit}} and rolls 4 and 3 — 7. Failed. Shaken while Shaken: **Pinned.** Birdy Sizemore, four squares off in the ditch, needs her {{stat:crew.birdy.grit}} and rolls 6 and 4 — 10. Failed by one: **Shaken.** Amos Vance, five squares back with LOS, needs his {{stat:crew.vance.grit}} and rolls 6 and 5 — 11. He holds.

**Turn 6, Crew Phase.** Vance activates first. Boone is Dying within 6 squares of him, so the cries rule bites at the start of his activation ({{ref:sec-bleed}}): 9 and 4 — 13 against his 9. He holds again. He has {{stat:crew.vance.ap}} AP: he Walks 2 squares to the truck (2 AP), putting Okafor at 2 squares and Birdy at 3, and Rallies (2 AP) — legal for him twice over, by his Shepherd skill and by his Grit.

Each affected figure rolls against her own Grit. Okafor, Pinned: 8 and 4 — 12 against her 10. Success — and where a base Rally would only step her down to Shaken, Vance's Shepherd skill clears the state entirely: Okafor comes all the way back, whole. Birdy: 5 and 5 — 10 against her 11. Failure — she stays Shaken, face down in the ditch.

Vance keeps his last 4 AP watching. The right play now writes itself: leave Birdy unactivated — if nobody shoots at her, the End Phase clears her for free ({{ref:sec-shaken}}) — and spend Okafor's restored turn getting to Boone, because his clock does not care how anyone feels.
:::

## Breaking the Warden's People {#sec-opfor-morale}

The Warden's figures do not take morale tests shot by shot — being Staggered off the Casualty Die is that story ({{ref:sec-opfor-casualty}}). What the Warden tests is the *group*, at the two moments that break real units:

- an element has lost **half its starting figures** (Down and Dead both count as lost), or
- the element's **Leader** is killed.

When either occurs, each surviving figure of that element tests Grit once — 2d10 against its printed Grit. Card specials are the last word here and modify the Grit TN before rolling; read them. The two ends of the scale:

{{card:opfor.eca-srt}}

{{card:opfor.marauder}}

Some cards go further — an element that ignores its first failure each mission, a pack whose whole spine is one man, hired guns whose card routs them without a test. The card overrides this section wherever it speaks.

**Every figure that fails falls back one Doctrine step** along the ladder:

**Assault → Base-of-Fire → Holding → Rout**

A figure whose current Doctrine is not on the ladder — Sweep, Cordon, QRF — falls back to Holding: it stops maneuvering and goes firm where it stands. A figure that fails while Holding Routs. Figures that pass keep the Doctrine they had, so a mauled element can split — each figure follows its own step, run by its script as normal ({{ref:ch-enemy-system}}), and the Good-Faith Clause governs any seam between them ({{ref:sec-good-faith}}).

Each trigger is tested once, when it occurs — and both can occur to the same element in one bad minute. There is no Rally on the Warden's side of the table: a step lost is lost for the mission. This is why the target-priority conversation in your crew keeps ending on the same word: *leaders*.

{{svg:diagrams/diagram-doctrine-fallback.svg}}

{{table:opfor-group-morale}}

### Rout {#sec-rout}

A Routing figure is done fighting. On each of its activations it ignores its scripts, its Directives, and its friends, and Sprints its full move toward the nearest board edge that takes it away from Crew figures. It does not shoot, does not react, and counts as a Sprinting target. When it exits the board, remove it. Whether you spend rounds on a running man's back is between you and your ammunition — the shot is Noise like any other, and the man was already gone.

## Surrender & Prisoners {#sec-prisoners}

An enemy in the middle band of the Casualty Die is Down — dying or senseless where he fell ({{ref:sec-opfor-casualty}}). The Warden does not track his bleeding: left where he lies, he is out of the fight and, when the mission ends, out of the story. Taking him alive instead is work, and it comes in two parts:

- **Stabilize.** Buddy Aid, exactly as for your own people ({{ref:ch-wounds}}) — same AP, same test, and it spends the same scarce Aid Bag uses. Triage is a policy decision your medic makes with your supplies.
- **Restrain.** An Interact taking 4 AP, adjacent to a Down or surrendered enemy: ties, a search, a moment eye to eye. Skills can shorten the job — restraint used to be Hollis Grant's profession:

{{card:crew.grant}}

**Surrender.** A Routing figure that begins an activation adjacent to a Crew figure, or that is cornered — no legal move that takes it farther from the Crew — drops its weapon and quits. Treat it as Down for capture purposes: no stabilizing needed, restraint still required.

**Moving a prisoner.** A restrained prisoner moves with one escorting Crew figure: while the escort is adjacent, the prisoner Walks along with the escort's own movement at no extra cost. Prisoners never Sprint. A prisoner at the Exfil when your Crew leaves exits with them ({{ref:ch-running-missions}}); one left on the board is lost, and the valley keeps score on people you abandon ({{ref:ch-long-war}}).

**What he is worth.** Scenarios name prisoners as objectives outright, and the campaign prices the rest: a prisoner is intelligence, leverage, a trade — and a mouth, a witness, and a decision you will have to live with. The Long War's dilemma rules make sure of that ({{ref:ch-long-war}}).

::: designer
Play a few missions and count how enemies actually leave the board. Some die. More are Staggered into uselessness, fail a group test over a dead sergeant, fall back a step, fall back again, and run. That is the point. Small-unit fights are decided by fire that makes the other side stop *acting* long before it makes them stop living — suppression is the weapon; bullets are mostly its delivery system. Mechanically, morale is also the only lever that scales: you are eight people in a valley of hundreds, and you cannot shoot the Authority to zero. You can make its people quit tonight. The Rout and prisoner rules exist so that winning that way leaves something on the table — ground, gear, and human beings — instead of a body count.
:::

---

Nerve is the currency every later chapter spends. The machine gun you are about to meet in {{ref:ch-crew-served}} is the game's great engine of Shaken — a weapon whose entire doctrine is this chapter, delivered at 600 rounds a minute — and when you reach the Warden's scripts in {{ref:ch-enemy-system}}, you will find the fallback ladder is where their logic bottoms out. The Authority counts rifles. You have just read the chapter about what it keeps failing to count.
