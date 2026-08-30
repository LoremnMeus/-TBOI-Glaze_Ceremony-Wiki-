---
title: Baby Lu
description: "I plan!"
slug: baby-lu
kind: collectible
internalKey: Baby_Lu
status: reviewed
---
<p class="wiki-search-index" v-pre>宝宝露 Baby Lu Baby_Lu baby-lu Baby Lu 我来安排！ I plan! 每层揭示数个尚未探索的特殊房间 宝宝会进行一次仪式，并依次标记这些房间 随后生成用于前往已标记房间的传送入口 Each floor reveals several unexplored special rooms Performs a ritual and marks those rooms in sequence Then spawns portals that lead through the marked rooms</p>

<PublicEntry slug="baby-lu" lang="en" />

## Mechanics


<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Baby Lu plans a special-room route each floor: reveal several special rooms, then travel them through chained portals.**

- Once per floor, runs a ritual that prefers **unvisited** special rooms
- Target count is about `max(3, 2 + Baby Lu count)`: at least **3** with one copy, then more per extra copy
- Skips normal rooms, and also normal Secret, Super Secret, and Ultra Secret rooms
- After the ritual, portals spawn along the marked order, chaining those rooms into a visit path

## How to trigger

Automatic on a new floor while held; after the ritual, map marks and later portals appear.

## Multiple copies

Extra copies increase how many rooms are revealed/chained that floor.

## Notes

Portals follow the marked chain — not a free picker among every revealed special room.

## Trivia

It echoes the matching character's route-planning fantasy, not a full character kit.
