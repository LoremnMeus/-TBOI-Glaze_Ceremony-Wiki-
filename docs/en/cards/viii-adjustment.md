---
title: VIII - Adjustment
description: "Balance your coins, keys and bombs Convert the remainder into pickups of coins, bombs and keys"
slug: viii-adjustment
kind: card
internalKey: Adjustment
status: reviewed
---
<p class="wiki-search-index" v-pre>VIII - 调节 VIII - Adjustment Adjustment viii-adjustment VIII - Adjustment 无知之幕正在落下 平衡你的金币、钥匙与炸弹 余数转化为硬币、炸弹、钥匙三选一 Balance your coins, keys and bombs Convert the remainder into pickups of coins, bombs and keys</p>

<PublicEntry slug="viii-adjustment" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->




## Effects

Adjustment rebalances the player's current **coins, keys, and bombs** as one resource set, rather than adding or removing a fixed amount from each.

After use, the three counts are totaled, then each is set to floor(total ÷ 3). Any remainder that cannot be split evenly is not discarded: it spawns that many **exclusive three-way** pickups around the player—coin, bomb, and key—of which you may take only one.

## Resource balancing

Example: starting from 10 coins, 1 key, and 1 bomb (total 12) settles to 4 / 4 / 4 with no remainder.

Starting from 10 coins, 5 keys, and 2 bombs (total 17) first becomes 5 / 5 / 5; remainder 2 spawns **two** exclusive three-way groups.

## Synergies

### {{Collectible:451}}

Grants an extra run-wide stat bonus based on how unbalanced resources were before/after this use.
