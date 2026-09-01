---
title: 辉煌
description: "献给永恒之金"
slug: brilliant
kind: collectible
internalKey: Brilliant
status: reviewed
---
<p class="wiki-search-index" v-pre>辉煌 Brilliant Brilliant brilliant Brilliant 献给永恒之金 To the gold of eternity +3金心 商店 每颗金心使硬币商品价格-1 辉煌自身最多卖到你当前的硬币数，但最低仍为1 +3 Golden Heart Shop Each Golden Heart reduces coin prices by 1 Brilliant&#x27;s shop price is capped at your coins, but never below 1</p>

<PublicEntry slug="brilliant" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

- 获得 **3** 颗金心。
- 每拥有 1 颗金心，商店中的硬币价格降低 1 枚硬币。
- 辉煌自身出现在商店时，售价不会高于 `max(1, 当前硬币数)`；即使身上没有硬币，它也仍至少价值 **1** 枚硬币。

金心越多，已经持有辉煌后的其他硬币商品折扣越大，最低可以降至免费。

<details>
<summary>技术细节</summary>

- 合作模式下，折扣按所有玩家持有的金心总数计算。

</details>
