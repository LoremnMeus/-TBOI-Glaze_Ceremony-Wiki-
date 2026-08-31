---
title: 钻石收购商
description: "靠近后选择出售价格 碰触商人完成定价交易 按 暂时取消"
slug: qing-diamond-merchant
kind: slot
internalKey: Qing_Diamond_Merchant
status: featured
---
<p class="wiki-search-index" v-pre>钻石收购商 Diamond Merchant Qing_Diamond_Merchant qing-diamond-merchant Qing_Diamond_Merchant 靠近后选择出售价格 碰触商人完成定价交易 按 暂时取消 Choose a sale price nearby Walk into the merchant to confirm the trade Press to cancel temporarily</p>

<PublicEntry slug="qing-diamond-merchant" lang="zh" />

## 机制说明

## 效果

钻石收购商属于 {{Item:qings-faceted-market-diamond}} 的永久市场闭环：可以把持有的钻石以自行选择的价格卖给商人；这次成交价也会成为未来各局中钻石的新商店售价。

## 如何交易

持有钻石进入商店并靠近收购商后，角色举起钻石，头顶出现两位价格。

- 左右切换正在调节的个位 / 十位；
- 上下调整当前位（每位 0–9，总价 **0–99¢**）；
- 先离开与商人的重叠范围，再走进确认出售；
- Drop 取消；离开范围也会取消。

## 成交后

- 本次失去 1 颗钻石，并获得议定数量的硬币；
- 若这是最后一颗钻石，商店售价永久改为本次成交价（可以为 0）；
- 若仍持有其他钻石，商店售价只会抬高到不低于本次成交价。

商人在玩家仍有剩余钻石时会留下继续交易；卖完且无剩余钻石后离开。

未购买就离开商店房间的钻石底座，会把永久售价减半一次（最低 1¢）。完整道具规则见 {{Item:qings-faceted-market-diamond}}。

## 出现

仅在商店出现。队伍中有人持有钻石时，每个商店房间有 **50%** 概率生成收购商。
