---
title: "III - The Empress?"
description: "Reroll all items in this floor Items on this floor need to be purchased and cannot be identified Its price is related to its quality and their original price"
slug: iii-the-empress-reversed
kind: card
internalKey: Empress_r
status: drafted
---
<p class="wiki-search-index" v-pre>III - 女帝? III - The Empress? Empress_r iii-the-empress-reversed III - The Empress? 命运的一切礼物，都在暗中标好了价格 重置本层所有道具 本层的道具均需要购买且无法辨认 售价为道具等级的五倍 Reroll all items in this floor Items on this floor need to be purchased and cannot be identified Its price is related to its quality and their original price</p>

<PublicEntry slug="iii-the-empress-reversed" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->


## Effects

After use, rewritable items still on this floor respawn into an **unknown, paid** state. You cannot normally identify them before purchase.

Items already taken are not reclaimed. Quest / story pedestals are not rewritten. Ordinary pedestals that appear later on this floor also enter this state until the next floor.

## Price and recognition

- Items show as question-mark visuals, and external descriptions are obscured.
- Price is `ceil(Quality × multiplier × basePrice ÷ 15)`. On rewrite, base price is often set to 15 and the multiplier defaults to 5, so the common price is **Quality × 5**.
- Goods that already had a price are recalculated with the same formula.
- The effect ends when you leave the floor.

## Synergies

### {{Collectible:451}}

The price multiplier drops from 5 to 1; with base price 15, the common price is **Quality × 1**.
