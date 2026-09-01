---
title: 纳兹卡巨画
description: "神明立于尘埃之上"
slug: nazca
kind: collectible
internalKey: Nazca
status: reviewed
---
<p class="wiki-search-index" v-pre>纳兹卡巨画 Nazca Nazca nazca Nazca 神明立于尘埃之上 Earthbound Deity 在房间中不断绘制地缚图线 敌人站在线上会持续受到伤害 站在线上时，根据图线浓度提高 攻击与 移速 Keeps drawing earthbound lines across the room Enemies standing on the lines take damage over time Standing on denser lines raises Damage and Speed</p>

<PublicEntry slug="nazca" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**纳兹卡巨画会让数支画笔在房间中自行游走，不断在地面留下图线。反复经过同一区域后，图线会越来越浓。**

角色站在线上时获得攻击与移速提升；敌人踩在线上则持续受到伤害。图线越浓，两种效果越强。

## 绘制

- 进入新房间后，画笔从角色附近开始绘制。
- 画笔会避开障碍，并倾向寻找尚未绘制的区域。
- 同一处被多次经过时，图线浓度提高。
- 离开房间后，本房间的图线消失。

## 图线效果

脚下图线越浓：

- {{Damage}} 攻击提升
- {{Speed}} 移速提升。

敌人踩在有浓度的图线上时，会持续受伤；浓度越高越痛。

## 重复持有

每额外持有一份增加 2 支画笔，并提高同一区域能够积累的最大浓度。画笔数量也会随楼层略微增加。

## 特殊联动

### {{Seija}}

只保留 **1** 名绘制者，且图线浓度上限降低。

### {{Collectible:706}}

深渊生成三只对应蝗虫。

## 轶事

- 灵感来自游戏王地缚神 / 纳兹卡线条相关设定。

<details>
<summary>技术细节</summary>

- 画笔数量：`份数 × 2 + 4 + floor(楼层阶段 / 2)`（第一份起通常已有 6 支以上）；浓度上限 `10 + 2×(份数−1)`。
- 玩家攻击乘算约每层浓度 +3%，上限 +50%；移速约每层 +0.015。
- 敌伤约每 10 帧 `0.15 × 攻击 × 浓度`。
- Seija：1 名绘制者，浓度上限至多 5。

</details>
