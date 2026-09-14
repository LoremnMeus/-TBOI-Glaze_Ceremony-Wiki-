---
title: V - Sting
description: "Invocation ritual"
slug: v-the-sting
kind: card
internalKey: Sting
status: reviewed
---
<p class="wiki-search-index" v-pre>V - 密仪 V - Sting Sting v-the-sting V - The Sting 降神仪式 Invocation ritual 生成一座仪式法阵 在法阵中献祭半格生命，逐次获得不同奖励 优先献祭红心 Creates a ritual circle Sacrifice half a heart within it to receive successive rewards Red Hearts are consumed first</p>

<PublicEntry slug="v-the-sting" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->



## Effects

On use, creates a ritual circle in the room.

Standing on the circle sacrifices **half a heart**, consuming Red Hearts first. Each successful sacrifice advances the ritual and triggers the reward for that stage. The circle's EID displays the effect of the next sacrifice.

| Sacrifice | Effect                                                                  |
| --------- | ----------------------------------------------------------------------- |
| 1         | Spawn **0–4** {{Coin}}                                                  |
| 2         | **50%** chance to spawn a {{Chest}}                                     |
| 3         | Restore Devil Room chance lost to Red Heart damage on the current floor |
| 4         | **30%** chance to spawn a random item pedestal                          |
| 5         | Spawn **3** {{RedChest}}                                                |
| 6         | **50%** chance to teleport to the {{DevilRoom}}                         |

The ritual circle disappears after all stages are completed.

## Synergies

### {{Collectible:451}}

Each successful sacrifice has an additional **30%** chance to spawn a {{SoulHeart}}.
