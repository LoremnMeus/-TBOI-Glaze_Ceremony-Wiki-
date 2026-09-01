---
title: VIII - 调节
description: "无知之幕正在落下"
slug: viii-adjustment
kind: card
internalKey: Adjustment
status: reviewed
---
<p class="wiki-search-index" v-pre>VIII - 调节 VIII - Adjustment Adjustment viii-adjustment VIII - Adjustment 无知之幕正在落下 平衡你的金币、钥匙与炸弹 余数转化为硬币、炸弹、钥匙三选一 Balance your coins, keys and bombs Convert the remainder into pickups of coins, bombs and keys</p>

<PublicEntry slug="viii-adjustment" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后，把玩家当前的 {{Coin}}、{{Key}} 与 {{Bomb}} 视为一组资源重新平衡，而不是各自加减一个固定数量。

使用后，先把三者数量加总，再各自设为「总和 ÷ 3」向下取整。无法平均分配的余数不会消失，而会在玩家周围生成对应次数的**互斥三选一**掉落：{{Coin}}、{{Bomb}}、{{Key}} 各一，只能拿走其中一个。

## 资源平衡

例如：若使用前为 10 硬币、1 钥匙、1 炸弹，总计 12，则结算后变为 4 / 4 / 4，没有余数。

若使用前为 10 硬币、5 钥匙、2 炸弹，总计 17，则三者先变为 5 / 5 / 5，余数 2 会生成 **两组**互斥三选一。

## 特殊联动

### {{Collectible:451}}

按本次平衡前后的失衡程度，为本局提供额外属性加成。
