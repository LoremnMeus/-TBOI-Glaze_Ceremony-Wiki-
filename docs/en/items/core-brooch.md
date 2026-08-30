---
title: Core Brooch
description: "Sacrifice of Heavenly Selection"
slug: core-brooch
kind: collectible
internalKey: Core_Brooch
status: reviewed
---
<p class="wiki-search-index" v-pre>魔法胸针 Core Brooch Core_Brooch core-brooch Core Brooch 神择祭品 Sacrifice of Heavenly Selection !!! 最多选择10次 每次随机展示3项基础属性 选择其中1项强化，同时削弱另外2项 用尽后碎裂为 破碎的胸针 !!! Choose up to 10 times Each use shows 3 random base stats Pick 1 to boost; the other 2 are weakened When spent, shatters into Broken Brooch</p>

<PublicEntry slug="core-brooch" lang="en" />

## Mechanics


<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Core Brooch offers three stat directions each time: bank hard on one, and pay a small cost on the other two. After 10 choices, the brooch shatters for good.**

### Six candidate stats

Speed, Tears, Damage, Range, Shot Speed, Luck.

### Pick one of three

Each use shows 3 random stats from the six; boosting one slightly weakens the other two. Counter +1.

### After 10 uses

The active is removed, shatters, and drops the trinket [Broken Brooch](/en/trinkets/broken-brooch).

<details>
<summary>Technical details</summary>

Internally about +0.3 units on the pick and −0.1 on each reject, then converted by per-stat multipliers. Treat it as one strong gain and two small costs.

</details>
