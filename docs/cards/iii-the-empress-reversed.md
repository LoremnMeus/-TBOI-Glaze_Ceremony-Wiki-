---
title: "III - 女帝?"
description: "命运的一切礼物，都在暗中标好了价格"
slug: iii-the-empress-reversed
kind: card
internalKey: Empress_r
status: drafted
---
<p class="wiki-search-index" v-pre>III - 女帝? III - The Empress? Empress_r iii-the-empress-reversed III - The Empress? 命运的一切礼物，都在暗中标好了价格 重置本层所有道具 本层的道具均需要购买且无法辨认 售价为道具等级的五倍 Reroll all items in this floor Items on this floor need to be purchased and cannot be identified Its price is related to its quality and their original price</p>

<PublicEntry slug="iii-the-empress-reversed" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后，本层仍可被改写的道具会重新生成，并进入一种**未知且需要付费购买**的状态。玩家在购买前无法正常辨认这些道具。

已经取得的道具不会被回收。带任务标记的剧情 / 关键底座不会被改写。之后在本层新出现的普通道具底座同样会进入该状态，直到换层。

## 价格与辨认

- 道具会显示为问号外观，外部描述也会被遮成无法辨认。
- 售价按 `ceil(品质 × 倍率 × 底价 ÷ 15)` 计算。改写时底价常设为 15、倍率默认为 5，因此常见售价等于 **品质 × 5**。
- 原本已经带有价格的商品也会按同一公式重新计算售价。
- 换层后效果结束。

## 特殊联动

### {{Collectible:451}}

售价倍率由 5 降为 1；在底价为 15 时，常见售价等于 **品质 × 1**。
