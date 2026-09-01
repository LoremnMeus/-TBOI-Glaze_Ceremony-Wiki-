---
title: Brilliant
description: "To the gold of eternity"
slug: brilliant
kind: collectible
internalKey: Brilliant
status: reviewed
---
<p class="wiki-search-index" v-pre>辉煌 Brilliant Brilliant brilliant Brilliant 献给永恒之金 To the gold of eternity +3金心 商店 每颗金心使硬币商品价格-1 辉煌自身最多卖到你当前的硬币数，但最低仍为1 +3 Golden Heart Shop Each Golden Heart reduces coin prices by 1 Brilliant&#x27;s shop price is capped at your coins, but never below 1</p>

<PublicEntry slug="brilliant" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

- Grants **3** Golden Hearts.
- Each Golden Heart reduces coin prices in shops by one coin.
- When Brilliant itself appears in a shop, its price is capped at `max(1, current coins)`—even with 0 coins, it still costs at least **1**.

More Golden Hearts deepen the discount on other coin-priced goods after you already hold Brilliant, and those prices can reach free.

<details>
<summary>Technical details</summary>

- In co-op, the discount uses the total Golden Hearts held by all players.

</details>
