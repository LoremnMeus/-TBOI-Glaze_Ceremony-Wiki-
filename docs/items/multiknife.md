---
title: 倍增重刃
description: "十年磨一剑"
slug: multiknife
kind: collectible
internalKey: Multiknife
status: reviewed
---
<p class="wiki-search-index" v-pre>倍增重刃 Multiknife Multiknife multiknife Multiknife 十年磨一剑 Ten years I honed this sword 拥有至少1格充能时即可使用 消耗当前全部充能，向瞄准方向挥出重刃 攻击 1格充能造成100%角色攻击伤害 每多1格充能，伤害与攻击范围翻倍 Usable with at least 1 charge Spends all current charges to swing a heavy blade toward your aim Damage 1 charge deals 100% of your damage Each extra charge doubles damage and swing size</p>

<PublicEntry slug="multiknife" lang="zh" />

## 机制说明


<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**倍增重刃把充能当成指数放大器：攒几格就按几次翻倍挥出一刀。**

- {{Battery}} 至少 **1** 格即可使用，并消耗当前全部充能
- {{Damage}} **1** 格 = **100%** 角色攻击；每多 1 格，伤害再翻一倍（`2^(充能-1)`）
- 刀刃体量随充能增大；高充能（约 7–12）有视觉/碰撞软限制，不会按纯指数无限撑满屏幕

### 伤害倍率（前几档）

| 充能 | 伤害倍率 |
| -: | ---: |
| 1 | 1× |
| 2 | 2× |
| 3 | 4× |
| 4 | 8× |
| 5 | 16× |
| 6 | 32× |

更高充能继续指数增长；彼列之书可将上限抬到 **12**。

## 特殊联动

### {{Collectible:34}}

充能上限 +2（最多 12），刀刃变为血红。

### {{Collectible:584}}

每消耗 1 格充能生成 1 颗攻击与生命均为 1 的魂火。
