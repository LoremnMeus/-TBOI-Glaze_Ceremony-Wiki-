---
title: I - 魔启
description: "我将启迪"
slug: i-the-invoker
kind: card
internalKey: Invoker
status: reviewed
---
<p class="wiki-search-index" v-pre>I - 魔启 I - The Invoker Invoker i-the-invoker I - The Invoker 我将启迪 预言下一张会被使用的透特牌 预言命中时获得奖励并返还召唤者 Foretell the next Thoth card that will be used On a hit, gain a reward and return the Invoker</p>

<PublicEntry slug="i-the-invoker" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后会预言**之后真正被使用的牌面**，并立刻展示当前预测；预言会跨房间保留，直到命中为止。

普通情况下同时预言 **1** 张牌面。

候选来自一整套塔罗相关牌：原版正位与倒位塔罗，以及本模组的透特牌。同一次预言展示中不会重复同一牌面。多次使用可以叠加对同一牌面的命中计数。

## 预言

当之后任意一次卡牌使用命中某个仍有效的预测时：

- 按该牌面积累的命中计数，生成对应数量的随机 {{Card}} 奖励，并伴随圣光提示；
- 同时重新生成一张 {{Card:i-the-invoker}} 回到玩家可拾取处，以便继续下一轮预言；
- 该牌面的预测计数随即清空。

由 {{Item:book-of-thoth}} 等效果**模拟发动**的卡牌，只要同样走“使用卡牌”结算，也会计入预言命中；它不是只认玩家从卡槽亲手打出的那一下。

未命中的预言不会因换房或失败而自动清除。

## 特殊联动

### {{Collectible:451}}

同时预言 **3 张不同牌面**。每个牌面的命中次数独立记录与结算。
