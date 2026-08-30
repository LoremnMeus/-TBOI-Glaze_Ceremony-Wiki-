---
title: 回荡之星
description: "刻度设置完毕"
slug: pendulum-star
kind: collectible
internalKey: Pendulum_Star
status: drafted
---
<p class="wiki-search-index" v-pre>回荡之星 Pendulum Star Pendulum_Star pendulum-star Pendulum Star 刻度设置完毕 Scale set 生成一对摆动的灵摆星 穿过两星之间的泪弹会被记录 灵摆摆至最低点时，从另一侧再次召唤这些泪弹 Spawns a pair of swinging pendulum stars Tears that cross between them are recorded At the next bottom of the swing, those tears are resummoned from the opposite star</p>

<PublicEntry slug="pendulum-star" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**灵摆之星不是普通攻击跟班。两颗星像一对钟摆悬在两侧；攻击穿过刻度后会被记住，并在下一次最低点从另一侧再召唤。**

持有后始终只有**一对**镜像灵摆星（左右各一），份数增加也不会多出更多星。两星之间有一条可见刻度线；它们像钟摆一样同步摆动，本身不碰撞、不自动索敌、也不直接造成伤害。

只有角色自己的**眼泪**算入：一颗泪在飞行中穿过刻度线时会被登记一次（回声泪与已登记泪不会再次登记）。登记内容会记住速度、伤害、旗帜等快照。

当摆动到达下一次**最低点**时，已登记的眼泪会从**另一侧**的星重新召唤出来：原先更靠近左侧登记的，从右侧发出，反之亦然。回声伤害约为原泪的 **75%**；持有 {{Collectible:247}} 时提升到 **100%**。记忆容量为 **12**，每多持有一份本道具再 **+4**。

## 注意

- 激光、炸弹、刀等非眼泪攻击不会被刻度记录。
- 灵摆星不会帮角色瞄准；要靠自己的弹道穿过两星之间的刻度线。
- 每颗泪只登记一次；回声泪带有标记，不会再次写入记忆。

## 使用技巧

- 朝两星之间的刻度线方向射击，比朝单一颗星本身射击更容易攒记忆。
- 需要爆发时，先连续让多发泪穿过刻度，再在下一次触底时吃回声齐射。

<details>
<summary>技术细节</summary>

- `CheckFamiliar` 固定数量为 2；额外份数只影响 `12 + 4×(份数−1)` 的记忆上限，以及小幅回声伤害加成（有 {{Collectible:247}} 时伤害倍率至少拉到 1.0）。
- 回声发射后清空本轮记忆；相位由左星推进，在正弦过零的最低点触发。

</details>
