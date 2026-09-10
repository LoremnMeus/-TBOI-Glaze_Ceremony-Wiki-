---
title: VIII - 调节
description: "无知之幕正在落下"
slug: viii-adjustment
kind: card
internalKey: Adjustment
status: reviewed
---
<p class="wiki-search-index" v-pre>VIII - 调节 VIII - Adjustment Adjustment viii-adjustment VIII - Adjustment 无知之幕正在落下 平衡你的硬币、钥匙与炸弹 余数转化为硬币/炸弹/钥匙三选一 Balance your coins, keys and bombs Convert the remainder into a Coin/Bomb/Key choice</p>

<PublicEntry slug="viii-adjustment" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后，将玩家当前的 {{Coin}}、{{Key}} 与 {{Bomb}} 数量相加，并尽可能平均分配给三种资源。

无法平均分配的余数会在玩家周围生成对应次数的 **{{Coin}} / {{Bomb}} / {{Key}} 三选一**掉落。

## 资源平衡

例如，使用前为 10 硬币、1 钥匙、1 炸弹，总计 12，则结算后变为 4 / 4 / 4。

若使用前为 10 硬币、5 钥匙、2 炸弹，总计 17，则三者先变为 5 / 5 / 5，剩余的 2 点资源会生成 **两组**三选一。

## 特殊联动

### {{Collectible:451}}

完成平衡后，额外获得 **1 硬币、1 钥匙和 1 炸弹**。
