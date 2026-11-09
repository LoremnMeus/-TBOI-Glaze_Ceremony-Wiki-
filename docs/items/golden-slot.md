---
title: 黄金抽奖机
description: "投币赢大奖！"
slug: golden-slot
kind: collectible
internalKey: Golden_Slot
status: featured
---
<p class="wiki-search-index" v-pre>黄金抽奖机 Golden Slot Golden_Slot golden-slot Golden Slot 投币赢大奖！ Insert coin to win! 每次使用消耗1枚金币进行抽奖 可能获得各种黄金奖励 连续落空会逐渐提高中奖机会 极小概率获得超大金箱或金奖杯 Costs 1 coin per use May grant various golden rewards Consecutive misses gradually improve win chance Tiny chance for a mega golden chest or trophy</p>

<PublicEntry slug="golden-slot" lang="zh" />

## 机制说明

## 效果

**每次使用消耗 1 枚 {{Coin}} 硬币，随机获得黄金奖励。连续落空会逐渐提高中奖率。**

- 初始中奖率为 **10%**，每次落空提高 **4 个百分点**，最高 **40%**。
- 中奖后，中奖率重置为 **10%**。
- 连败次数跨楼层保留。随着连败增加，道具图标会逐渐出现更明显的金色光晕与抖动。

## 奖励

中奖后，从以下奖励中随机获得一种：

| 奖励 | 概率 |
| --- | ---: |
| 点金苍蝇 | 24% |
| 黄金硬币 | 18% |
| 黄金自爆炸弹 | 15% |
| 金心 | 11% |
| 金药丸 | 8% |
| 金电池 | 6% |
| 金炸弹 | 5% |
| 金钥匙 | 5% |
| 金饰品 | 4% |
| 巨型金药丸 | 3% |
| 特殊大奖 | 1% |

特殊大奖有 **95%** 概率生成巨型宝箱，**5%** 概率生成奖杯。

## 特殊联动

### {{Collectible:34}}

每次抽奖改为消耗 **2** 枚硬币。中奖时抽取两份奖励，获得其中价值较高的一份。

### {{Collectible:584}}

每次落空生成一枚黄金魂火，最多存在 **3** 枚。

- 黄金魂火及其泪弹命中敌人时，有 **12%** 概率使其点金。
- 连败越多，黄金魂火越大、越明亮。
- 中奖后，所有黄金魂火消失。

### {{Collectible:356}}

额外触发不会消耗硬币，也不会再次抽奖。

## 机制细节

- 中奖率按连续落空次数计算：连续落空 **8** 次后达到 **40%** 上限。
- 所有黄金抽奖机共用连败次数，多人游戏中同样如此。
- 使用 {{Collectible:34}} 时，奖励按预设价值进行比较，其中特殊大奖的价值最高。
