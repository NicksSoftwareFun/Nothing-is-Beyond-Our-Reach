# NOTHING IS BEYOND OUR REACH

*A solo tabletop wargame of civilian resistance in a collapsed America.*

Four years after the Fracture, the Emergency Continuity Authority holds the towns, the fuel,
and the airwaves. It does not hold the hollows. You run a crew of neighbors — veterans, hunters,
line workers, medics — doing small, precise, dangerous things in the dark: ambushes, raids,
recoveries, sabotage. The dice and the **Warden** system run everything that hunts you.

The motto is the crew's own promise, painted under every overpass the Authority thinks it
controls: **nothing is beyond our reach.**

## What this is

A complete print-and-play wargame:

- **Rulebook** (`release/rulebook.pdf`) — heavy-crunch tactical rules: action points, lethal
  BPRE-style gunfights, crew-served weapons, vehicles, drones and electronic warfare, a full
  solo opposition system (the Warden), a campaign layer, six linked scenarios
  (**LEAF SEASON** — the western Carolinas in autumn), and a Mission Architect toolkit for
  building your own.
- **Quick reference** (`release/qrs.pdf`)
- **Cards** (`release/cards/`) — crew, gear, OPFOR, Warden Directives, events, dilemmas
- **Tokens** (`release/tokens/`) — crew, OPFOR, vehicles, drones, status markers
- **Maps** (`release/maps/`) — six scenario boards, tiled for home printing
- **Play sheets** (`release/sheets/`) — crew roster, campaign log, network tracker

Everything in `release/` is print-ready US Letter. You also need: a polyhedral dice set
(d6, d8, d10, d20 — two d10s), and something to mark with.

## Building from source

```
npm install
node tools/build.mjs all      # or: rulebook | qrs | cards | tokens | maps | sheets | check
```

Sources: rules chapters in `book/chapters/` (Markdown), all game numbers in `data/*.yaml`
(macro-expanded into the book and cards — one source of truth), art as hand-drawn SVG in
`art/`, design specs in `design/`.

## License

Game text and art: CC BY-NC-SA 4.0. Vendored fonts (Oswald, Source Serif 4, Barlow Semi
Condensed): SIL Open Font License — see `fonts/OFL-*.txt`. See `LICENSE.md`.

This is a work of fiction. Factions, places, and events are invented; the setting is
deliberately non-partisan.
