# Mission Architect {#ch-mission-architect}

::: flavor
Taped inside the back cover of the mission book, a half sheet in Deacon's block capitals, older than the war it now runs: *HOW TO PICK A FIGHT. ONE — SMALL. IF THE PLAN NEEDS EVERYBODY, THE PLAN IS A FUNERAL. TWO — LOSABLE. KNOW WHAT WALKING AWAY LOOKS LIKE BEFORE YOU KNOW WHAT WINNING LOOKS LIKE. THREE — THEIR GROUND, OUR HOUR. FOUR — THE WAY OUT GETS PLANNED FIRST AND GETS THE BEST PEOPLE.* Beneath it, Vasquez's small print: *he wrote this for a hunting club in '09. we changed one word.*
:::

LEAF SEASON is six nights; the war is longer, and not confined to one corridor of the Carolinas. This chapter is the toolkit that builds every night after — anywhere in the East. It assumes the mission frame of {{ref:ch-running-missions}} and the Warden's machinery of {{ref:ch-enemy-system}}, and changes neither: what you build here is a scenario sheet those chapters can run. Use it two ways: solo, roll the next mission your campaign demands and play it the same evening — or author a full set for another table that does not know what is on your page ({{ref:sec-architect-campaign}}).

## Design Before Dice {#sec-architect-philosophy}

Four principles govern everything in this chapter. Hold to them and almost nothing else can go badly wrong.

**Build small.** The Crew is four to six neighbors, and the objective must fit in their hands: a transformer, a ledger, a prisoner, forty gallons, one culvert under one road. The Crew is never an army, and a mission is never a battle — if your idea needs a second crew, it is not a mission, it is an arc; cut it into missions. The Warden may field twenty figures. You field a raid party, every name on it mortal.

**Build it losable.** The Warden must be able to win, honestly and often — an OPFOR laid out to be beaten kills the campaign's tension on the table. And build it *walkable-away-from*: from every objective there is a route to the Exfil that does not cross the whole garrison, and scrubbing early is always a legal, survivable, priced choice ({{ref:sec-exfil}}). The design failure is never a mission that is too hard. It is a mission the Crew cannot leave.

**Set the stage; do not write the play.** The Warden does the heavy lifting — the Alert Ladder, the Doctrine scripts, the Directive deck, the dice. Your entire job is honest starting conditions: sentries posted where a competent garrison would post them, routes a real duty roster would walk, thresholds set to the site's temper. Set the stage honestly and the night writes itself, and it will surprise you both.

**State every objective as a testable fact** ({{ref:sec-mission-anatomy}}) — *the charge detonated; the drums are off the east edge; the Crew was never Alerted*. If you cannot phrase it as true-or-false when the board ends, it is not an objective yet.

## The Quick Generator {#sec-generator}

Three d10s, one campaign track, one look at the calendar. Roll in order:

1. **Roll the mission.** One d10 on the Type table. The row's frame is the mission's skeleton — what the objective is shaped like and what the Warden is doing when you arrive.

{{table:mission-type}}

2. **Roll the ground.** One d10 on the Site table, then pick the regional kit the site sits in ({{ref:sec-architect-terrain}}). The site is the board's center of gravity; the kit is everything around it.

{{table:mission-site}}

3. **Roll the twist.** One d10 on the Complication table. Apply one; a set you author may add a second, never a third.

{{table:mission-complication}}

4. **Read the Heat.** The campaign's current Heat ({{ref:sec-tracks}}) sets the enemy's density and quality — take the row as written, then build the roster in {{ref:sec-architect-opfor}}.

{{table:opfor-by-heat}}

5. **Pick season and light** from the Season & Light table ({{ref:sec-architect-terrain}}), following the campaign calendar. The chosen rows go on the sheet — they are rules, not weather report.

6. **Write the page.** One page, six blocks: objectives, primary and opportunity, each priced; the map sketch; the order of battle — scripted posts with facings, Blip count and routes, Contact Table, QRF and its edge; Alert thresholds, starting Noise, fallback timer; Insertion and Exfil with its Deadline; and the aftermath block — track and Supply deltas per outcome, plus any rider beyond the standing ones ({{ref:sec-aftermath}}).

If the dice contradict each other or the campaign — a Defense at a ridge you have never held — reroll the worst-fitting die, once. The generator proposes. You dispose.

{{svg:diagrams/diagram-architect-generator.svg}}

::: example
**Rolling mission seven.** The campaign stands at Heat 5, late October. Three dice: Type d10 = **8, Recovery** — extract something heavy, and the load slows you. Site d10 = **7, fuel depot or gas station**. Complication d10 = **4, Third party** — a rival element enters on turn d6; roll it now and seal it: **4**. Season and light: **late autumn, night**. Heat 5 reads the middle row: 2 scripted posts, 4 Blips, mixed COC/ECA, one crew-served weapon, QRF a mounted COC technical.

Now the page, block by block. **DRY COUNTY** — *Recovery, night.* **Objectives:** primary — four fuel drums loaded on the box truck and the truck off the east road edge (loading a drum: an Interact, two figures adjacent). Opportunity — the requisition ledger in the station office (+1 Supply, pre-resolve one Blip next mission). **Map:** 30×24, Piedmont kit. The station sits on a crossroads at center-east: canopy and pumps on a Clear forecourt — the killing ground; a two-Zone store; a two-Zone garage with catwalk High. A treelined creek crosses the north half — the covered approach. Site rule: any explosion or fire marker within 2 squares of the pumps ignites them — DR 3 blast, then a fire marker, permanent. **Order of battle:** a COC pair at the road barricade south of the pumps, facing south; an ECA MG team on the garage roof, gun laid on the forecourt. Four Blips: two on 8-square loops around the lot fence, one static in the store, one drifting the creekline. Contact Table default. QRF: COC technical, north road edge — it enters behind anyone working the creek. **Third party:** turn 4, three Ferryman Gunhands enter at the west-edge river landing, Doctrine Holding, objective the same drums. They shoot anyone who touches fuel. So do the guards. **Thresholds:** 3/7, starting Noise 0, fallback timer turn 8. **Insertion:** north or west edge, player's choice. **Exfil:** east road edge, Deadline turn 12 — the truck exits there too. **Aftermath:** primary done, Rapport +1, Supply +3 — winter is a number of gallons. If the pumps burned, Heat +1 — a column of flame files its own report.

First die to finished page: about twenty minutes. The Warden handles the rest at the table.
:::

## Building the Map {#sec-architect-maps}

The board is the standard grid of {{ref:sec-terrain}}, buildings Zoned by the conventions of {{ref:sec-zones}}. Draw the map as a sketch with a legend; it need not be pretty, only unambiguous about terrain type, elevation, and every Portal.

**Size.** Default **30×24 squares**. Shrink to 24×18 for a Reconnaissance that is one approach, one perch, and one way home — the full board only adds walking. Keep CQB sites (main street, the mill) tight the other way: same or smaller board, its squares spent on structures and alleys rather than fields, so the mission is fought through Portals, not across distance.

**Terrain density — three rules of thumb.** First: **every map gets a covered approach AND an open killing ground** — one route the Crew can walk in Concealment, and one space the Warden's guns own utterly, usually in front of the objective. A map that is all cover has no fear in it; a map that is all field has no plan in it. Second: **High ground somewhere** — a ridge bench, a catwalk, a roof. Decide who starts closer to it, and know you are deciding something. Third: **never a single viable route.** Two ways in, two ways out, always — one may be slower, wetter, or overlooked, but it exists. One-route maps do not create tension; they create a queue.

**Scripted sentries.** Post them where a garrison that expects nothing but has standards would: watching the road, the gate, the widest lane — the killing ground, not the creek. Print each post's position *and facing*: facings make the Blind Arc real and the quiet game solvable ({{ref:sec-spotting}}). Overlap arcs across the objective's front, and leave one honest seam — the flank a lazy sergeant discounted. Mark where the fixed comms live: ALARM is a human act, and the player is owed a target list ({{ref:sec-alarm}}).

**Blip routes.** Draw each patrol route as a loop of 8–16 squares touching every viable approach at least once — including the seam. Blips walk routes at 2 squares a turn while the force is Unaware ({{ref:sec-warden-blips}}), so a drawn loop is a timetable: check that a walking Crew can slip a gap, and that waiting for it costs turns the Deadline will miss. Take the Blip count from the Heat row and resist adding more — the Contact Table already makes some of them nothing and some worse ({{ref:sec-blips}}).

**The QRF edge.** Name the edge the QRF enters ({{ref:sec-qrf-clock}}). Pick a road edge that threatens the *Exfil*, not the objective — by the time the clock runs out the objective is usually decided, and the QRF's real job is the door. If the map's roads make that impossible, that is information too: this is a site the Authority cannot reinforce, and its thresholds should say so.

## Thresholds, Clocks, and the Stealth Window {#sec-architect-pacing}

**Alert thresholds default to 3/7** — Suspicious at Noise 3, Alerted at Noise 7 ({{ref:sec-alert-ladder}}). Move them to change the site's temper, not its difficulty. A sleepy backwater — low Heat, a bored COC detachment — plays at 4/8 or even 5/9: the quiet game breathes. A taut garrison — a high-value site, a district raided last week, any Defense — plays at 2/5: one Sprint is a risk, one shot is a fight. Widen the *gap* between the numbers to lengthen the investigating phase where Blips drift and one figure comes looking; narrow it to make the site binary. Set **starting Noise** above 0 only when the fiction is already loud — a market day, a storm, a generator hall. Print the **fallback timer** (the missed check-in that triggers ALARM on its own — usually turn 8); pull it earlier at hard sites, and delete it only for enemies with nobody to call ({{ref:sec-architect-opfor}}).

**Turn limits.** The Exfil Deadline defaults to turn 12 ({{ref:sec-exfil}}). By mission type: Reconnaissance and Link-up run tight at 10 — light footprints have no business lingering. Ambush runs 10, the quarry entering on turn 2–3: after the kill window closes, staying is greed. Raid and Sabotage keep 12. Recovery runs 12–14 when the load is heavy and the route long — the load slowing you is the drama; do not double-punish it. Defense inverts the clock: the limit *is* the objective — hold through turn 8–10 — and the mission starts Alerted, the Directive deck live from the first Warden Phase ({{ref:sec-directives}}).

<!-- TODO-TABLE: architect-turn-limits — Exfil Deadline defaults by mission type (Recon 10, Link-up 10, Ambush 10, Raid 12, Sabotage 12, Recovery 12–14, Defense hold-through 8–10) for the briefing sheet and the QRS -->

**The stealth window is arithmetic, so budget it.** Walking is free; the quiet game spends Noise only on Sprints, suppressed shots, and breaches ({{ref:sec-noise}}). At 3/7 a Crew can afford two points of Noise and still be nobody; the first turn of open gunfire adds up to +3, and clear contact makes the pool academic. A default mission therefore has three acts: a quiet approach that can last six or more turns if the player pays for it in patience, a loud middle of three or four turns before ALARM's consequences land, and an exfil leg that must fit in whatever the Deadline has left. Check your build against that shape: count the walking distance from Insertion to objective, add the deed's cost in turns, add the carry back. If the legs do not fit inside the Deadline with two turns of slack, move the Insertion, the Exfil, or the number — a mission that can be done neither quietly nor quickly is not hard, it is broken.

::: designer
The pacing dial is calibrated, not vibes — the design bible's simulation targets pin both ends: loud-from-turn-1 play reaches Alerted by turn 2 and a median ALARM by turn 4; walk-only stealth stays below Alerted through turn 6 with at least 80% probability. Against a Deadline of 12, that is the design in one sentence — roughly six quiet turns to spend, three or four for the fight, the rest for the ford. Every threshold or Deadline you move slides those thirds, which is exactly what moving them is *for*. Just never move them so far that one of the three acts disappears.
:::

## Building the Other Side {#sec-architect-opfor}

Assemble the enemy from the cards of {{ref:ch-forces}}, by the drill printed there ({{ref:sec-assembling-elements}}): every card's **element** line is the unit — a pair, a fireteam, a gun team, a technical and crew — and the element is what activates, tests morale, and dies as a group ({{ref:sec-elements}}). Your Heat row gives the structure: how many scripted posts, how many Blips, whether a crew-served weapon, a marksman, a drone operator, or a vehicle belongs on the table at all. Fill the structure with faction cards, give every element whose card reads *per element* a Doctrine and a post or route, and stop. The row is the difficulty dial, and the campaign turns it — not you. Adding "just one more team" because the mission feels important is how architects quietly break their own game.

**Doctrine assignment is where a mission type starts to sing** ({{ref:sec-doctrines}}):

- **Reconnaissance** wants Holding and Sweep only — nothing hunts, and the tension is the routine itself. An Assault element on a recon map answers a question nobody asked.
- **Link-up** wants Sweep patrols crossing the Crew's likely route, plus one Cordon checkpoint on the obvious road — the mission is threading traffic, not surviving pursuit.
- **Ambush** builds the quarry as a moving column — vehicles and mounted escorts ({{ref:ch-vehicles}}) walking into ground the Crew chose. On contact, dismounts run Assault while a trail element goes Base-of-Fire: the counter-ambush drill, scripted.
- **Raid** is the full grammar: Holding posts on the objective, one Sweep patrol as the wandering variable, Base-of-Fire on the widest lane, Assault arriving only with the QRF or an SRT team — the garrison defends; the *response* attacks.
- **Recovery** wants Holding around the load plus Cordon: this enemy would rather trap you than trade with you, and the Cordon's printed route belongs across your best way home.
- **Sabotage** wants Holding and Base-of-Fire packed tight on the target with thin edges — the mission is a lock to be picked, not a line to be broken.
- **Defense** points the machine at you: Assault and Base-of-Fire on the axis, a Sweep element feeling for the flank, Directives live from turn 1.

<!-- TODO-TABLE: architect-doctrine-by-mission — one row per mission type: the Doctrines it fields and the one it must not (the sec-architect-opfor assignments) for the briefing sheet -->

**Rival factions swap the roster, not the structure** — take the Heat row's shape and deal different cards ({{ref:ch-forces}}). A **Compact ambush** puts Woods-wise bands in Concealment-heavy kits where their halved spotting distances bite, and the Headman's parley special is a door worth leaving open: some fights in this war are conversations with rifles present. A **Ferrymen escort** guards cargo with Holding pairs that are paid, not devoted — they break at half strength, never pursue, and nobody avenges hired guns: delete the QRF and the fallback timer both. A **marauder pack** is all Assault, all appetite: no posts, every Blip moving, the Chief's death ending everything at once ({{ref:sec-opfor-morale}}). For factions without a district radio net, re-skin ALARM rather than deleting it: the Compact's version is signal shots bringing extra Blips at the board edges — the low-Heat row's answer — and a marauder ALARM is the whole pack converging on the noise. The trigger stays a human act; only the machinery answering it changes.

**Three-way fights** — the Third party complication, or your own design — stay small: one element and a leader, never a second army. Run the third force as its own force: its own Alert state, its own Doctrine, the same shared Noise pool. Factions treat each other exactly as they treat the Crew — a figure of another faction seen in LOS becomes Known to that force, and target priority runs unmodified: nearest Known, whoever's war it is ({{ref:sec-good-faith}}). Design the third party's objective to *cross* the Crew's, never to mirror the Warden's — the fuel both of you want, the prisoner only one of you can walk out. Two sides that simply hate the player are one enemy with extra bookkeeping.

## Terrain Kits of the Eastern US {#sec-architect-terrain}

Five regional kits cover the East from the sound country to the lakes: a character sketch, a mix recipe for the standard board, and one signature seed apiece. Whichever you build, finish with the season pass below — the same hollow is four different missions across that table's rows.

**Appalachian hollows.** LEAF SEASON's home ground ({{ref:ch-pineland-burning}}): creases in the map where one road follows one creek and everything else is slope. Sightlines live and die by the leaves; strangers are noticed; the high benches see everything and say nothing. *Recipe:* both long flanks High (ridge benches), 40% hardwood Concealment, two or three conifer stands to break the long looks, Rough slopes between levels, one Water line with a ford, three structures at most. *Seed:* an Authority census team overnights at the schoolhouse at the head of the hollow — Raid it before the trucks come back, on a board where the only road out is theirs.

**Piedmont farm country.** Rolling open ground from the Carolinas to Virginia: fields that are killing grounds by another name, treelines and hedgerows that are highways for the patient, farmsteads like moored ships. High ground is scarce and man-made. *Recipe:* 60% Clear fields, Concealment strips one to two squares wide along fences, a farmstead cluster of two or three buildings, a pond, dirt roads; one barn-loft High. *Seed:* a Link-up gone stale overnight — a COC checkpoint moved onto the crossroads store at dawn (Cordon), the courier still inside, fields on all four sides.

**Coastal lowland and tidewater.** Black creeks, marsh grass, pine flats, causeways — ground half water, and fog that erases the difference. Movement is channeled and quiet is cheap; the Water rule does the map's fighting. *Recipe:* a tidal creek across a third of the board, one causeway or bridge chokepoint, marsh as Rough-plus-Concealment, open pine flat, almost no High — a steeple or a duck blind if any. *Seed:* a Recovery at a Ferrymen river landing — the flatboat arrives two turns before the Deadline, the fog row is in effect, and everything on the dock belongs to somebody armed.

**Post-industrial river town.** Fall-line mill towns from Georgia to New England: the mill a many-Zoned hulk with catwalk High, a main street of facing brick, a rail spur, one bridge that explains the town. The Zone game's home field — fights are decided at Portals, and the street is the killing ground ({{ref:sec-zones}}). *Recipe:* one multi-Zone mill, six to eight small structures, alleys, high Block density, a bridge or lock as Cordon country, the rail embankment High. *Seed:* the district lockup two doors off main street — the rescue the campaign has been owing somebody ({{ref:sec-architect-campaign}}), fought room by room with the QRF clock running.

**Northern hardwood and lake country.** Granite, birch, blowdown, and water in lobes; logging cuts and cabin camps; winter arrives here first and stays longest. Boulder fields slow every flanking dream, and lake edges make half the compass a wall. *Recipe:* one lake lobe, a logging road, a cabin cluster, boulder-field Rough, conifer belts, one hardwood ridge High along a flank. *Seed:* a Defense in the first snow — a marauder pack has found the winter camp, the tracks rule punishes every move, and the families leave across the ice road or not at all.

Season and light are the last pass on any kit, and their rows are rules text:

{{table:season-effects}}

## Stitching a Campaign {#sec-architect-campaign}

A mission set is not a playlist; it is a chain of consequences, and the generator is built to listen. **Heat is the feedback loop:** a loud win raises it ({{ref:sec-tracks}}), and the next generator roll reads a heavier row — the war answering. **Losses write missions:** anyone lost alive at the Deadline is captured, and a rescue becomes a mission you build — a Raid or Recovery at the lockup, the site chosen by where they were taken ({{ref:sec-recover}}). Lost network assets, unpaid debts, and several Hard Choice options do the same — this one hands you a convoy fight in the first snow if you let it:

{{card:dilemmas.the-tribute}}

The chain rule: after each aftermath, before touching the dice, ask what the last mission made true. If the answer names a mission — a prisoner in a lockup, a pass closed, a Ferryman owed — it outranks the generator. Roll only for what the war has not already decided ({{ref:sec-next-mission}}).

**Place Hard Choices deliberately.** The complication table drops one at a mission's midpoint; as an author you may script one instead — at most one per mission, never in consecutive missions, or the weight becomes noise. Place it at the point of maximum leverage: before the exfil decision, not after; while the person the card is about is standing on the board. Draw from the deck ({{ref:sec-hard-choices}}) or write your own to its pattern — both options cost something real, no option is mechanically correct, and at least one cost lands somewhere other than tonight.

**The 4–6 mission set** wants an escalation spine — one pressure that visibly worsens every mission while the rest follows the campaign honestly. The reliable skeleton: **(1)** open quiet — a Reconnaissance or Link-up that teaches the region's map; **(2)** first blood — the Ambush or small Raid whose win raises Heat; **(3)** the answer — the Warden's response, a Defense or a sweep against something the player loves; **(4)** the big one — the arc's true target, Raid or Sabotage, at the heaviest row yet; **(5)** the price — the mission the arc's costs demand, usually a rescue or recovery; **(6)** a finale keyed to the tracks — high Heat points at a Defense, high Capability at the Guerrillas' first led night ({{ref:sec-network}}). For the spine, pick one dial and step it every mission: the Heat band, the season row, or the fallback timer arriving one turn earlier each night. LEAF SEASON's spine is the leaves; yours can be anything the table can see coming.

**Writing for other players.** A set authored for someone else must be complete on paper, because you will not be there to remember it. Each briefing sheet writes down: title, date, and the season/light rows; the map — a drawn sketch or a kit-plus-site recipe, every Portal, elevation, and terrain type unambiguous; objectives as testable facts, opportunities priced; the Insertion and its alternates; the full order of battle — scripted posts with positions *and facings*, the faction roster by card name, Blip count with drawn routes, the Contact Table (default or replaced), each element's Doctrine, the QRF's composition and edge; thresholds, starting Noise, and the fallback timer; the Exfil and its Deadline; the aftermath block — deltas per outcome, loot lines, riders; and at most one special rule. If a fact is not on the sheet, it does not exist — the player at that table is the Warden's hands, and the sheet is everything the Warden knows.

<!-- TODO-TABLE: architect-briefing-checklist — the one-page briefing sheet contents as a printable checklist (objectives; map; order of battle; thresholds/Noise/timer; Insertion/Exfil/Deadline; aftermath block; one special rule) for the sheets build -->

::: sidebar
**The Warden is your co-designer.** Half the mission is written by the machine after the dice hit the table; the strongest thing an architect can do is leave it room. Do not script enemy decisions — no *"on turn 4 the patrol returns"*, no *"the sergeant flees when cornered"*: Doctrines, Directives, the Interrupt Die, and the Contact Table will produce patrols returning at worse moments than you would have dared write. Do not script reactions to the player, and never script an outcome. Script only what a garrison could have decided *before* the night began — posts, routes, clocks, thresholds — and make all of it discoverable: things a player can learn and plan against are tension; things that merely happen to them are weather. The test is simple: if a line on your sheet begins "when the player…", delete it. The Warden already knows what to do when the player.
:::

The generator, the map doctrine, the pacing dial, the enemy shop, the kits, the stitching — that is the whole toolkit, and {{ref:ch-pineland-burning}} is six of these pages filled in by the same method. The Uwharries were never the point. Pick a river you know, an autumn you remember, and build the seventh night yourself: the motto was always a promise about reach.
