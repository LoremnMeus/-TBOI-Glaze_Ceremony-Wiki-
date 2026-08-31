---
title: 来日债主
description: "从来日预支资源，再用未来偿还 靠近后左右切换契约，走进确认 按RT取消"
slug: time-beggar
kind: slot
internalKey: Tomorrows_creditor
status: featured
---
<p class="wiki-search-index" v-pre>来日债主 Tomorrow&#x27;s Creditor Tomorrows_creditor time-beggar Tomorrows_creditor 从来日预支资源，再用未来偿还 靠近后左右切换契约，走进确认 按RT取消 Borrow resources from tomorrow and repay them later Switch contracts with left/right, walk in to confirm Press RT to cancel</p>

<PublicEntry slug="time-beggar" lang="zh" />

## 机制说明

## 效果

来日债主允许现在预支一批资源，代价是之后出现的同类掉落会优先用于偿还债务。债务从签约当下开始，并会跨房间、跨楼层持续到还清。

**不会直接扣除背包里已有的资源。**

## 如何签约

靠近后举起当前契约，头顶显示「立刻获得 → 之后将被收走」。

- 左右切换契约；
- 走进债主确认；
- Drop / RT 取消。

每只固定随机提供 **3** 种不同契约，且只成交一次，随后离开。

## 契约

| 契约 | 现在获得 | 之后偿还 |
| --- | ---: | ---: |
| 来日的钱 | +10¢ | 未来硬币累计 12¢ |
| 来日的钥匙 | +3 | 未来钥匙累计 4 |
| 来日的炸弹 | +3 | 未来炸弹累计 4 |
| 来日的生命 | +2 魂心 | 未来普通红心掉落累计 3 颗 |

## 偿还规则

签约瞬间就会开始扫描房间内已有掉落，并继续收之后自然生成的同类掉落。

计债面额：

- 硬币：1¢ / 幸运币 1 / 双币 2 / 镍币 5 / 一角 10；
- 钥匙：普通 1、双钥匙 2（金钥匙与充能钥匙不计）；
- 炸弹：普通 1、双炸弹 2（金炸弹、大炸弹等特殊炸弹不计）；
- 红心：整心/惊心 1、半心 0.5、双心 2、混合心 1（魂心、黑心、骨心、永恒心等不计）。

单次掉落面额大于剩余债务时，整颗仍被收走，债务归零（超额视为利息）。商店货与玩家自己生成的掉落不会被收债。

## 出现

第 1 / 2 / 3 章替换原版乞丐的概率约为 12% / 10% / 6%；第 4 章及以后不自然生成。新开局清空债务。
