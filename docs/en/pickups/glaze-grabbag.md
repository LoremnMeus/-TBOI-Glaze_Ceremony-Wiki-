---
title: Glaze Grabbag
description: "Convert surplus coins/keys/bombs into glazed pickups Only coins>5, keys>1, bombs>1 count Up to about 3 Poop Spawns a glaze poop if nothing to convert"
slug: glaze-grabbag
kind: pickup
internalKey: Glaze_grabbag
status: featured
---
<p class="wiki-search-index" v-pre>琉璃之福袋 Glaze Grabbag Glaze_grabbag glaze-grabbag Glaze_grabbag 消耗富余的硬币/钥匙/炸弹，生成对应琉璃掉落 硬币&gt;5、钥匙&gt;1、炸弹&gt;1才会计入 最多约3份 便便 没有可消耗资源时生成琉璃便便 Convert surplus coins/keys/bombs into glazed pickups Only coins&gt;5, keys&gt;1, bombs&gt;1 count Up to about 3 Poop Spawns a glaze poop if nothing to convert</p>

<PublicEntry slug="glaze-grabbag" lang="en" />

## Mechanics

## Effects

A Glaze Grab Bag only spends **surplus** basic resources and converts them into matching glaze pickups, keeping a minimum stock of coins, keys, and bombs.

| Resource | Keep | Each conversion |
| --- | ---: | --- |
| Coins | 5 | {{Pickup:glaze-coin}} |
| Keys | 1 | {{Pickup:glaze-key}} |
| Bombs | 1 | {{Pickup:glaze-bomb}} |

Each pickup converts **2 or 3** times at random; with {{Item:crown-of-the-glaze}} at full shards it always converts 3 times.

If nothing can be converted, spawn {{Pickup:glaze-big-poop}} instead.

When a poop character is in the run and a roll would produce a bomb, it **always** becomes a Glaze Poop instead—but bomb stock is still spent (no extra poop-mana cost).
