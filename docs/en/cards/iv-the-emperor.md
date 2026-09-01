---
title: IV - The Emperor
description: "After use, spawn as many special doors as possible along this room's walls to special rooms on this floor Normal doors are temporarily closed"
slug: iv-the-emperor
kind: card
internalKey: Emperor
status: reviewed
---
<p class="wiki-search-index" v-pre>IV - 帝王 IV - The Emperor Emperor iv-the-emperor IV - The Emperor 命运的囚徒 使用后，沿当前房间墙面尽可能生成通往本层特殊房间的门 原有普通门暂时关闭 After use, spawn as many special doors as possible along this room&#x27;s walls to special rooms on this floor Normal doors are temporarily closed</p>

<PublicEntry slug="iv-the-emperor" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->




## Effects

After use, scans the current room's outer walls for usable spots and spawns as many special doors as possible.

Each door leads to another special room on this floor. While active, the room's normal doors are temporarily closed; leaving the room removes the spawned doors.

Think of it as turning the room into a temporary hub ringed with special exits—not retargeting your existing doorways.

## Destinations

Spawned doors connect to special rooms already on this floor, and can also roll in a few extra special destinations when conditions are met.

Each wall slot picks its destination independently. The candidate pool has three parts:

**Rooms already on this floor's map** (every generated room on the floor, including normal combat rooms):

{{Shop}}, {{TreasureRoom}}, {{BossRoom}}, {{MiniBoss}}, {{SecretRoom}}, {{SuperSecretRoom}}, {{ArcadeRoom}}, {{CursedRoom}}, {{ChallengeRoom}}, {{Library}}, {{SacrificeRoom}}, {{DevilRoom}}, {{AngelRoom}}, {{LadderRoom}}, {{BossRushRoom}}, {{IsaacsRoom}}, {{ChestRoom}}, {{DiceRoom}}, {{Planetarium}}, {{UltraSecretRoom}}, {{ErrorRoom}}, and the Black Market

**Special indices that can roll into the pool** (each checked on its own; default ~5% chance; not on Ascent / certain finale layers):

| Index | Destination |
| --- | --- |
| -1 | {{DevilRoom}} / {{AngelRoom}} (initialized first if missing) |
| -2 | {{ErrorRoom}} |
| -4 | {{LadderRoom}} |
| -6 | Black Market (spawns a return {{Card:0-the-fool}} portal after entry) |
| -13 | {{LadderRoom}} |
| -18 | {{AngelRoom}} |

**Special corner wall slots** (requires aligned adjacent wall tiles plus an extra roll; not on Ascent / certain finale layers; usually up to 2 per floor, 1 on Blue Womb):

| Index | Destination |
| --- | --- |
| -5 | {{BossRushRoom}} |
| -7 | {{MegaSatan}} (spawns a return {{Card:0-the-fool}} portal after the room is cleared) |

Clear rewards and special interactions follow the destination room's own rules (for example extra items after clearing {{MegaSatan}}); this card does not grant extra loot by itself.

## Synergies

### {{Collectible:451}}

Raises the per-wall spawn success rate, so you usually see more doors.
