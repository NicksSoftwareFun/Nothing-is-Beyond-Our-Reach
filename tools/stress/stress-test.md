<div class="title-block">
<div class="book-title">Nothing Is Beyond Our Reach</div>
<div class="book-subtitle">Layout Stress Test</div>
<div class="book-version">This document exercises every pipeline pattern. It never ships.</div>
<hr class="title-rule">
</div>

{{toc}}

# Field Operations Doctrine

The build must survive this chapter before any real chapter is written. It is
deliberately shaped like a rules chapter: a spanning opener, two dense columns
of serif body text, procedural voice, tables that refuse to stay small, and
cross-references that reach forward into sections that do not exist yet at the
moment the reference is typed. If a pattern in the real book breaks, it should
have broken here first.

Read this document the way the Warden reads your Noise: patiently, and with a
grudge. Every paragraph below carries layout weight. Some paragraphs exist only
to push a table onto a column boundary. Others exist to make the widow and
orphan rules earn their keep. None of them may be trimmed to make a page look
tidier, because tidiness that depends on trimming is not a layout engine, it is
luck.

## The Shape of a Turn

You act in Turns, and each Turn spends Action Points. When your Crew moves
through the orchard rows east of the substation, you are making the same three
decisions every time: how fast, how loud, and how exposed. Fast costs quiet.
Quiet costs time. Exposure costs everything, eventually, and the ledger is kept
by someone who never sleeps.

A figure that Sprints crosses ground quickly but surrenders its Snap Shot and
climbs the Noise ladder. A figure that creeps keeps its Noise at zero and its
silhouette inside the treeline, but the light is always moving, and the light
is not on your side. The full procedure for resolving all of this lives in
{{ref:weapons-data-annex}}, and the drills for the worst case are laid out
under {{ref:contact-drills}}.

Doctrine is not a script. It is a set of defaults that survive contact with a
tired operator at two in the morning. When you cannot think, do the default.
When you can think, the default is still probably right. The long column of
prose in {{ref:the-long-column}} exists to prove that a chapter of nothing but
paragraphs still paginates cleanly, but it also states the doctrine in full.

### Movement Defaults

Move bounding, never strolling. One element moves while one element watches.
The watching element is Posted: it holds Overwatch on the moving element's
route, not on the horizon, because the horizon is a liar and the route is a
fact. When the moving element reaches cover, the roles trade. This is slow. It
is meant to be slow. Speed is what the other side is selling, and the price is
printed on the Casualty Die.

- Bound short: two squares of open ground is a bound, not a hike.
- Post before the bound, not after the shot.
- Trade roles at cover, and only at cover.
- If the route crosses a road, treat the road as a river: scout, then commit.
- If the bound draws fire, the Posted element answers; the moving element
  finishes the bound. Nobody freezes in the open.

### Noise Ladder Drill

Noise is a resource you spend, not an accident that happens to you. Every tool
in the annex lists its Noise cost, and the ladder in the annex table shows what
the Warden does with each step. Run the drill until it is boring: name the
action, name the Noise, name the response, then decide if the action is still
worth it. Most of the time it is not, and knowing that before the bolt cutters
touch the chain is the whole game.

::: example
Mara's Crew needs through the fence before the patrol's next pass. Cutting the
chain is Noise 2: the nearest Blip drifts and a Spot test triggers. Going over
the top is Noise 1 but costs an extra Action Point and leaves her silhouetted
for one Turn. She checks the patrol track, counts the Turns, and takes the
climb. The fence stays intact, the ladder stays short, and the Warden's Spot
test never happens. Nothing about the choice was clever. It was arithmetic.
:::

## Posture and Exposure

Every figure is Hidden or Exposed, and the difference is not where you are but
what you have done. A figure behind a wall that just fired a carbine is Exposed
behind a wall. A figure in the open that has done nothing loud is merely a
problem the Warden has not noticed yet. Posture is the memory of your last
mistake, and it decays slowly.

Cover is measured at the target, not at the shooter. If the answer to "what is
between the muzzle and the meat" is a hardwood trunk, a masonry corner, or an
engine block, the Cover TN applies. If the answer is a shrub, a shadow, or an
opinion, use the Open TN and accept what follows. The distinction is drawn on
the diagram in {{ref:signals-diagrams-and-art}}, which also proves the art
pipeline can center, span, and gracefully degrade.

::: designer
Two-column rules text at ten points is the densest layout in the book, and the
first place any regression shows. If a change to the CSS survives this chapter
with zero overflow findings, it is probably safe everywhere. If it does not,
the stress build fails before a chapter author ever sees the damage. That is
the entire reason this document exists, and why it is written in the same
voice as the book: the layout must be tested under the load it will carry.
:::

Suppression is the honest name for most firefights. A Shaken figure has
flinched; a Pinned figure has voted. Neither is a casualty, and both are wins
for whoever spent the ammunition, because a Pinned figure has stopped being a
maneuver problem and started being furniture. The recovery procedure is a
Rally, it costs the thing you are always short of, and the math behind it is
tabulated in the annex.

> Doctrine survives the people who wrote it. That is the point of doctrine,
> and the reason it must be written down plainly, in sentence case, without
> heroics. The book's flavor voice lives in openers and sidebars. It does not
> interleave with procedure, and the container styles enforce the separation.

# Weapons Data Annex

This chapter exercises the data macros against `data/_stress.yaml`, the
placeholder file that stands in for the real arsenal while it is being
written. Numbers in prose are never typed by hand; they are pulled at build
time, so the day the real data lands, the prose is already correct. Doctrine
for using any of it is back in {{ref:field-operations-doctrine}}.

## Reading a Stat Line

The Patrol Carbine rolls {{stat:_stress.weapons.carbine.dr}} dice with
Pen {{stat:_stress.weapons.carbine.pen}} inside its Effective Range of
{{stat:_stress.weapons.carbine.effective}} squares, and every unsuppressed
shot is {{stat:_stress.weapons.carbine.noise}}. The hunting rifle trades
volume for reach: {{stat:_stress.weapons.scoped-rifle.dr}} dice,
Pen {{stat:_stress.weapons.scoped-rifle.pen}}, Effective
{{stat:_stress.weapons.scoped-rifle.effective}}. The sidearm exists so the
number {{stat:_stress.weapons.sidearm.effective}} appears somewhere honest:
past a hallway, it is a noisemaker.

{{card:_stress.weapons.carbine}}

{{card:_stress.weapons.scoped-rifle}}

## Modifier Tables

Small tables must refuse to split. The fire modifier table below is generated
from data, arrives with a caption and a footnote, and carries the keep class
because it is short enough to hold together on one column.

{{table:_stress.stress-fire-mods}}

The Noise ladder is longer, and it is allowed to break wherever the column
ends, repeating its olive header row on the far side of the break like a
well-trained radio operator repeating the last transmission.

{{table:_stress.stress-noise-ladder}}

## The Casualty Annex

The long table below is hand-written Markdown, forty-eight rows, marked wide
so it spans both columns, and far too tall for one page from where it starts.
It must split across the page boundary with its olive header repeated on the
far side. Cell text stays short and Barlow keeps it legible at eight and a
half points. If the zebra striping drifts out of the palette or the header
fails to repeat, this is where it shows. The Noise ladder earlier in this
chapter stays at column width, so the column-boundary split gets exercised by
a table too.

| d100 | Result | Effect |
|------|--------|--------|
| 01-02 | Grazed | No effect, mark ammo |
| 03-04 | Grazed | No effect, mark ammo |
| 05-06 | Winged | Shaken |
| 07-08 | Winged | Shaken |
| 09-10 | Winged | Shaken, drop item |
| 11-12 | Clipped | Pinned |
| 13-14 | Clipped | Pinned |
| 15-16 | Clipped | Pinned, Bleed 1 |
| 17-18 | Hit | Down |
| 19-20 | Hit | Down |
| 21-22 | Hit | Down, Bleed 1 |
| 23-24 | Hit | Down, Bleed 1 |
| 25-26 | Hit | Down, Bleed 2 |
| 27-28 | Solid | Down, weapon lost |
| 29-30 | Solid | Down, weapon lost |
| 31-32 | Solid | Down, Bleed 2 |
| 33-34 | Solid | Dying |
| 35-36 | Solid | Dying |
| 37-38 | Grave | Dying, Bleed 2 |
| 39-40 | Grave | Dying, Bleed 2 |
| 41-42 | Grave | Dying, Bleed 3 |
| 43-44 | Grave | Out of the fight |
| 45-46 | Grave | Out of the fight |
| 47-48 | Armor | Shaken only |
| 49-50 | Armor | Shaken only |
| 51-52 | Armor | Pinned only |
| 53-54 | Armor | Pinned only |
| 55-56 | Armor | No effect |
| 57-58 | Ricochet | Nearest friend Shaken |
| 59-60 | Ricochet | Nearest friend Shaken |
| 61-62 | Ricochet | Cover degrades |
| 63-64 | Ricochet | Cover degrades |
| 65-66 | Miss | Noise +1 |
| 67-68 | Miss | Noise +1 |
| 69-70 | Miss | No effect |
| 71-72 | Miss | No effect |
| 73-74 | Miss | No effect |
| 75-76 | Wide | Window breaks, Noise +1 |
| 77-78 | Wide | Window breaks, Noise +1 |
| 79-80 | Wide | Livestock bolt |
| 81-82 | Wide | Livestock bolt |
| 83-84 | Wide | Fuel drum holed |
| 85-86 | Dud | Jam, clear with 1 AP |
| 87-88 | Dud | Jam, clear with 1 AP |
| 89-90 | Dud | Jam, clear with 2 AP |
| 91-93 | Freak | GM table, roll twice |
| 94-96 | Freak | Roll twice, keep worse |
| 97-00 | Freak | Roll twice, keep both |

{.wide}

::: sidebar
**Why a d100 here?** It is not for granularity. It is for the table itself:
forty-eight rows is the longest run of repeated structure the book will ever
ask a column to carry, and the annex is where readers will expect to find it.
The stress build keeps this table hand-written on purpose, so both table
sources — data-generated and Markdown — stay under test forever.
:::

# Signals, Diagrams, and Art

Every chapter carries at least one diagram, referenced by macro so the book
builds before the art exists. Below, the same diagram is placed twice: once at
column width, once spanning both columns, followed by a placeholder for a
diagram nobody has drawn. The placeholder is a warning, never an error. Art
debt must not stop the presses.

{{svg:diagrams/diagram-stress-test.svg}}

The figure above sits inside one column. The wide variant below must span both
columns cleanly, without colliding with the running head or the page number,
and the grid inside it must stay crisp at print resolution because it is
vector all the way down.

{{svg:diagrams/diagram-stress-test.svg|wide}}

{{svg:diagrams/diagram-not-drawn-yet.svg}}

## Contact Drills {#contact-drills}

This heading carries a hand-assigned anchor, `contact-drills`, set with the
attribute syntax rather than the automatic slug, and the doctrine chapter
referenced it forward before this page existed. The drill itself is short:
answer fire, name the arc, bound out by the covered route you already chose
when you halted. If you did not choose one when you halted, you have learned
why the halt procedure has three steps instead of two.

::: flavor
The county called it the Fall the first winter, when the substation went quiet
and stayed that way. By the second winter nobody called it anything. You do
not name the weather you live in. You wax your boots, you learn which ridges
carry sound, and you keep the graffiti fresh on the water tower so the ones
who come through know the county is not empty. Nothing is beyond our reach.
:::

## Signals Discipline

Hand signals carry zero Noise and one bit of meaning each, which is all a
bound needs. Radio carries everything, including your position, to everyone.
The compromise is the brevity code: fixed words, fixed meanings, spoken once.
The full code table ships in the real annex; the drill here is only that the
xref machinery can reach backward to {{ref:noise-ladder-drill}} and forward to
{{ref:the-long-column}} from the same paragraph without either reference
going stale as pagination shifts.

# The Long Column

The final chapter is a pure pagination grind: paragraphs, headers, and lists,
with no tables or figures to give the layout engine a place to rest. It states
movement doctrine in full, because filler that carries no meaning gets deleted
by well-meaning editors, and this text must never be deleted.

## The March Order

A Crew moves in the order it fights. Point sees first and shoots last: the
point figure's whole job is to halt the column before the column becomes an
event. Behind point walks the gun, because the first thirty seconds of any
contact belong to whoever establishes a base of fire, and the gun cannot
establish anything from the back of a file. The lead pair are a team, and they
rehearse the halt until it is a reflex.

The middle of the column carries the mission: the satchel, the prisoner, the
medic, the radio. The middle does not fight unless the fight comes to it. Its
job is to be somewhere else by the time the fight matures, and the route out
is the tail's responsibility. Tail counts the column through every linear
danger area and owns the back trail. When the column halts, tail faces the way
you came, because the way you came is the only direction you have proven
somebody can walk.

March intervals are Noise control. Close the interval in fog, open it on
gravel, and never let two figures share a square of open ground on a skyline.
The interval is also the Warden's problem: a spread column gives a Directive
one target instead of six. Doctrine says five squares in the open, two in the
woods, and door-handle distance only inside a Zone, where the geometry does
the spacing for you.

## Halts, Short and Long

The short halt is a knee and a scan, weapon oriented along your arc, and it
happens every time point raises a fist. Nobody speaks. The count is thirty
seconds, and if the reason for the halt has not resolved in thirty seconds it
is not a short halt any more, and the column melts off the trail into the
nearest cover that owns a back door. Melting is a drilled motion, not an
improvisation: each figure has a side of the trail, assigned at the last long
halt, and crossing the trail during a melt is the kind of error the Casualty
Annex was printed for.

The long halt is a perimeter. The column coils, the gun takes the likely
avenue, and the medic finally gets to work on the blisters that have been
voting against doctrine for an hour. Long halts are where plans are revised,
which is why they are also where plans die: a Crew that halts long in daylight
within earshot of a road has traded initiative for comfort. The Warden pays
cash for that trade. Halt long in the dead ground you scouted from the map,
past the crest, off the natural lines of drift, and post the sentry pair where
they can hear the road without seeing it, because a sentry who can see the
road can be seen from it.

1. Coil off the line of march; never halt on it.
2. Gun on the likely avenue, sentries on the sound lines.
3. Count the column, then count it again after any melt.
4. Revise the plan out loud, once, in brevity code.
5. Leave nothing, not even boot prints, if the ground allows it.

## What the Column Proves

If this page renders with both columns filled, the running heads mirrored, the
page number in the outer corner, and not one paragraph clipped at a boundary,
the pipeline has earned the right to carry the real manuscript. The chapter
also proves the backward reference machinery one final time: the doctrine that
opened this document is at {{ref:field-operations-doctrine}}, the art chapter
sits at {{ref:signals-diagrams-and-art}}, and the annex table that will not
stay on one page began in {{ref:the-casualty-annex}}.

The rest is repetition under load, which is all a march ever is. The column
walks the same ridge the reader's eye walks: top of the left column to the
bottom, over the gap, top of the right column to the bottom, and over the page
edge into whatever the Warden has arranged next. The book's job is to make
that walk so quiet the reader never notices the ground. The stress build's job
is to stomp on every plank first, in boots, carrying the heaviest table in the
arsenal, and file a report about what creaked. This sentence is the last
plank. If it sits above the bottom margin with its widow rule intact, the
report reads: nothing creaked, and nothing is beyond our reach.
