---
title: 期望协定
description: "概率上一致"
slug: consistent-expectations
kind: trinket
internalKey: Consistent_Expectations
status: reviewed
---
<p class="wiki-search-index" v-pre>期望协定 Consistent Expectations Consistent_Expectations consistent-expectations Consistent Expectations 概率上一致 Equal in Expection 商店 原价高于1硬币的商品只需1硬币尝试购买 每次有1/原价的概率成功 失败仍支付1硬币，商品留在原地 Shop Goods priced above 1 Coin cost 1 Coin per attempt Success chance is 1 / original price Failure still spends 1 Coin; the goods stay</p>

<PublicEntry slug="consistent-expectations" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**期望协定把高价商品变成一次 1 硬币的抽奖：越贵的东西，每次真正买到的概率越低。**

对于原价为 **N** 枚硬币的商品：

- 每次尝试只支付 **1** 硬币；
- 成功概率为 **1 / N**；
- 成功后正常取得商品；
- 失败仍扣除这 1 枚硬币，但商品继续留在货架上，可以再次尝试。

例如原价 **15**：

> 每次花 1 枚硬币，有约 **6.7%** 概率买到。

如果一次成功率是 `1 / N`，则平均需要约 **N** 次尝试。因此在无限重复、没有其它干扰的理想情况下，原价 N 的商品平均仍约花 **N** 枚硬币——它主要改变的是价格分布与风险，而不是直接降低数学期望。

在挑战房等可触发伏击的房间中，失败购买还可能启动伏击。

## 使用技巧

- **少量硬币也能尝试原本买不起的高价商品。** 代价是失败后硬币照样消耗，所以它提供的是提前搏取商品的机会，而不是稳定折扣。
