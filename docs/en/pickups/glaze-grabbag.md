---
title: Glaze Grabbag
description: "Consumes coins, keys, or bombs and converts them into matching glazed pickups Spawns a Glaze Poop if nothing can be converted"
slug: glaze-grabbag
kind: pickup
internalKey: Glaze_grabbag
status: featured
---
<p class="wiki-search-index" v-pre>琉璃之福袋 Glaze Grabbag Glaze_grabbag glaze-grabbag Glaze_grabbag 消耗硬币、钥匙或炸弹，将其转化为对应的琉璃掉落物 没有可转换的资源时生成琉璃之便便 Consumes coins, keys, or bombs and converts them into matching glazed pickups Spawns a Glaze Poop if nothing can be converted</p>

<PublicEntry slug="glaze-grabbag" lang="en" />

## Mechanics

## Effects

A Glaze Grab Bag spends held basic resources and converts them into matching glazed pickups.

| Resource | Eligible with | Each conversion |
| --- | ---: | --- |
| Coins | At least 1 | {{Pickup:glaze-coin}} |
| Keys | At least 1 | {{Pickup:glaze-key}} |
| Bombs | At least 1 | {{Pickup:glaze-bomb}} |

Each pickup converts **2 or 3** times at random; with {{Item:crown-of-the-glaze}} at full shards it always converts 3 times.

Stock is checked again after every conversion, so the last resource may be spent but cannot be counted twice. If nothing can be converted, spawn {{Pickup:glaze-big-poop}} instead.

When a poop character is in the run and a roll would produce a bomb, it **always** becomes a Glaze Poop instead—but bomb stock is still spent (no extra poop-mana cost).
