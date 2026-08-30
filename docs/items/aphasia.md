---
title: 失语症
description: "名可名，非常名"
slug: aphasia
kind: collectible
internalKey: Aphasia
status: reviewed
---
<p class="wiki-search-index" v-pre>失语症 Aphasia Aphasia aphasia Aphasia 名可名，非常名 Hardly can I ever read 大部分普通道具文字会被打乱，并从描述中掉落 拾取文字会暂时提高攻击，并保存为文字弹药 发射泪弹时消耗一个文字，使该泪弹获得额外伤害 不会打乱EID Most normal item text is scrambled, and some characters fall to the floor Picked-up words briefly raise damage and are stored as word ammo Firing a tear spends one word and boosts that tear Does not scramble EID</p>

<PublicEntry slug="aphasia" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**失语症会把游戏中的文字拆散：道具名称和描述会失去原本语序，其中一部分文字甚至会从说明中掉到房间里。**

查看道具说明时，名称与描述会被打乱重组；同时会有若干字符从高处落到地面。接触这些落字即可拾取。

## 收集文字

捡起文字会做两件事：

1. **临时攻击状态**：整体攻击上升；收得越多总加成越高，但边际递减，并且会随时间缓慢衰减。
2. **文字弹药**：该字进入库存，留给之后的泪弹消耗。

临时攻击与文字库存不是同一回事：攻击状态会自己衰减，库存字则一直留着，直到被射出去。

## 文字泪弹

发射泪弹时，若库存非空，会随机消耗一个字：字会显示在那发泪弹上，并按文字种类提高该泪弹伤害。中文字符倍率高于拉丁字符。没有库存时，泪弹行为正常。

## 注意

- {{EID}} 不会被打乱。
- 原版道具弹窗、部分命运签 / Tips 等仍可能被改写或随机化；「不受影响」不要扩大成所有外部说明。
- 每颗泪弹最多消耗一个字；穿透等多段命中不会额外再扣字。
- 非泪弹攻击不消耗文字弹药。

## 使用技巧

- 多查看底座或新道具说明，可以主动「刷」出落字。
- 需要爆发时先囤一批字，再集中射击把文字弹药打出去。
- 临时攻击在持续拾取时更稳；长时间不捡字会慢慢掉回去。

<details>
<summary>技术细节</summary>

- 临时攻击贡献约 `(√(n+4)−2)×0.4`，其中 `n` 为累计拾取权重，约每 10 帧乘 `0.97`。
- 单发泪弹倍率：中文等非 ASCII 字约 ×2.5，ASCII 约 ×1.5。

</details>
