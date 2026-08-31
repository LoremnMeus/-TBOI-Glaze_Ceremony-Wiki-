---
title: D-V-F
description: "At any cost"
slug: d-v-f
kind: collectible
internalKey: DVF
status: featured
---
<p class="wiki-search-index" v-pre>D-V-F D-V-F DVF d-v-f D-V-F 不惜一切代价 At any cost !!! 一次性 使用后举起，按射击键掷出二向箔 计时 箔片悬停后倒计时7秒，结束后抹除范围内相交的所有房间 仅留下一个连接残存边界的额外房间 Boss房 抹除最终Boss房时，在额外房间生成下层入口 !!! One-time use Raise it, then press a fire key to throw a Dual Vector Foil Timer After it lands, a 7-second countdown starts; when it ends, erase every room intersecting its range Leaves only an extra room linking the surviving boundaries Boss Room Erasing the final boss room spawns a next-floor entrance in the extra room</p>

<PublicEntry slug="d-v-f" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**D-V-F cuts a chunk of the floor map out of the route, then inserts a hub room that re-links the surviving borders.**

It is a one-time active. On use the player lifts the foil:

1. Press a fire key to throw in that direction; the collectible is removed on throw.
2. Press **Drop** to put it down and cancel—**no consume**.
3. After the foil lands, an about **7**-second countdown starts; erasure resolves when it ends.

### What “erase” means

The landing spot maps to one minimap cell, then expands to a **3×3** block. Every room whose footprint intersects those nine cells is erased—not only the center room. Large or elongated rooms that merely clip the edge go entirely.

Erased rooms leave the floor's walkable graph: they stop appearing as reachable map targets, and doors that once led into them are redirected through the hub.

### Hub and routing

On a successful erase, the floor gains a dark-backdrop hub. Its doors connect to rooms that still exist and used to border the erased zone. Walking a surviving-room door that would have entered the erased area also sends the player into the hub.

The hub is a routing splice, not a reward room: no extra item pool—only a way to keep a cut floor traversable.

### Where the player ends up

| Situation | Result |
| --- | --- |
| Countdown ends while the player is **outside** the erase region | Erasure resolves remotely; the player stays put |
| Countdown ends while the player is **inside** the erase region | Forced transfer into the hub |
| After erasure the player would still occupy an erased room | Also redirected into the hub |

### Special rooms

- Doors into erased secret / super-secret (and similar) rooms are opened on the surviving side so they do not stay sealed dead ends.
- If the floor's **final boss room** is among the erased set, a trapdoor to the next floor spawns at the hub center.

The effect is floor-bound and does not carry to the next stage.

## Notes

- Using the active again while lifting also stows the foil without consuming it.
- Once the countdown has started, erasure cannot be cancelled—only leave the danger zone, or accept the hub transfer.
- Hub door sides match surviving border directions; multiple doors on one wall can lead to different neighbors.

## Tips

- **The 3×3 around the landing is judged as a whole.** To keep acting in the current area after the countdown, throw from the safe side and leave the erase zone quickly.
- **A large room vanishes entirely if it intersects the zone.** Near a large-room edge, leave an extra cell of slack rather than only avoiding the room center.

## Trivia

The name and dual-vector-foil image reference the dimension-reduction weapon in Liu Cixin's *The Three-Body Problem*: compress a region until it can no longer be traversed normally, then let a hub catch the severed borders.

<details>
<summary>Technical details</summary>

- Flight lasts about 40 frames; countdown is 210 frames (~7 seconds at 30fps).
- Hub uses special-room variant `24820` with a Dark Room–style backdrop.
- Erasure records both room SafeGridIndex and occupied cells; door redirects and danger checks read that table.

</details>
