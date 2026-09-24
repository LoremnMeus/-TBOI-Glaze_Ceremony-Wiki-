---
title: 无生源论
description: "你看，它自己活了"
slug: abiogenesis
kind: collectible
internalKey: Abiogenesis
status: reviewed
---
<p class="wiki-search-index" v-pre>无生源论 Abiogenesis Abiogenesis abiogenesis Abiogenesis 你看，它自己活了 Look, it lives on its own 每次仅消耗1格充能，但额外消耗 各1个 随后观测剩余充能、硬币、钥匙与炸弹 若任一剩余：实验失败，从剩余最多的资源中掉落1个对应掉落物 金钥匙与金炸弹仍视为持有 若四者同时归零：证明无生源论，将其 活化 为无生源论宝宝 Costs 1 charge per use, but also spends 1 each Then observe remaining charge, coins, keys, and bombs If any remain: the experiment fails and spawns 1 pickup of the most remaining resource Golden Key and Golden Bomb still count as holding If all four are 0: prove Abiogenesis, animate it into an Abiogenesis familiar</p>

<PublicEntry slug="abiogenesis" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**通过实验逐步清空充能、硬币、钥匙和炸弹；当四项观测同时归零时，证明无生源论。**

* 最大拥有 **12** 格充能，获得时初始拥有 **3** 格充能
* 每次使用分别消耗 **1** 格充能、**1** {{Coin}}、**1** {{Key}} 和 **1** {{Bomb}}
* 消耗后观察四项资源的剩余数量
* 若仍有资源剩余，实验失败，并从当前剩余最多的资源中返还 1 个对应掉落物；并列时随机选择
* {{Warning}} 金钥匙与金炸弹仍视为持有对应资源
* 当四项资源同时归零时，实验成功：移除无生源论，记录一次证明，并生成 1 只无生源论宝宝
* 可以再次取得无生源论并完成新的实验；每次证明都会增加 1 只宝宝

## 无生源论宝宝

无生源论宝宝会根据玩家当前持有的资源生成对应的悬浮发射器，并在玩家攻击时依次使用它们。

没有对应资源时，该发射器不会出现。持有更多对应资源会强化该武器。

### {{Coin}} 硬币

快速连续发射硬币眼泪。

* 硬币会以小幅散射高速连射
* 命中敌人时有概率掉落硬币
* 持有更多硬币时，每轮连续射击会持续更久；高数量时可以维持很长时间的连射

### {{Key}} 钥匙

发射高速钥匙眼泪。

* 钥匙可以穿透敌人与地形障碍
* 持有更多钥匙时，攻击速度更快、伤害更高，并可在一轮攻击中发射更多钥匙
* 每枚钥匙有 **30%** 概率变为血泪钥匙；这种钥匙拥有真正的钥匙效果，可以打开宝箱和上锁的门

### {{Bomb}} 炸弹

投掷高伤害炸弹。

* 炸弹会稍微修正发射方向，倾向于朝附近敌人投掷
* 每颗炸弹都造成较高伤害
* 持有更多炸弹时，每次攻击会同时投掷更多炸弹
* 炸弹发射器攻击频率明显低于其他发射器，但单次爆发更强

### {{Battery}} 电池

向前释放多股电流。

* 一次攻击会同时释放多条电弧
* 每条电弧会分为数层依次向前传播，最多可形成较长的多段放电
* 后续电弧从上一层末端继续，并随着传播变得更加不稳定
* 邻近敌人会对部分电弧产生轻微吸引，但电流仍主要按照自身传播方向延伸
* 持有更多主动充能时，会释放更多电弧并提高电流伤害

## 特殊联动

### {{Collectible:34}}

实验失败时，从当前仍有剩余的资源中随机排除一种。

被排除的资源之后不再需要支付，也不参与实验成功所需的归零判定。

### {{Collectible:584}}

实验失败时，根据当前剩余最多的资源生成对应魂火。
