---
title: I - 魔启
description: "我将启迪"
slug: i-the-invoker
kind: card
internalKey: Invoker
status: drafted
---
<p class="wiki-search-index" v-pre>I - 魔启 I - The Invoker Invoker i-the-invoker I - The Invoker 我将启迪 从原版塔罗与透特牌中随机预言1张牌面 之后使用该牌面时，生成1张随机卡牌并返还 Foretell 1 random face from vanilla tarot and Thoth cards When that face is used, spawn 1 random card and return</p>

<PublicEntry slug="i-the-invoker" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后，从原版塔罗牌与透特牌中随机预言 **1 张牌面**，并显示预测结果。

之后只要该牌面被使用，预言便会实现：

- 生成 **1 张随机卡牌**；
- 重新生成一张 {{Card:i-the-invoker}}。

没有命中的预测会一直保留。

## 可预言的牌

预测范围包括：

- 原版正位塔罗牌；
- 原版逆位塔罗牌；
- 本模组的透特牌。

重复使用 {{Card:i-the-invoker}} 可以继续增加预测。

如果多次预测到相同牌面，该牌面的预测次数会累计；命中时按累计次数生成等量的随机卡牌。

## 触发

只要对应牌面实际发动，就能实现预言。

因此，通过其它道具或卡牌效果间接发动预测中的牌面，也可以触发。

## 特殊联动

### {{Collectible:451}}

一次预言 **3 张不同牌面**，并为每张牌面记录 **2 次预测**。

命中其中任意一个牌面时，会生成 **2 张随机卡牌**。
