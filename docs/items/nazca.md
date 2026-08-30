---
title: 纳兹卡巨画
description: "神明立于尘埃之上"
slug: nazca
kind: collectible
internalKey: Nazca
status: drafted
---
<p class="wiki-search-index" v-pre>纳兹卡巨画 Nazca Nazca nazca Nazca 神明立于尘埃之上 Earthbound Deity 在房间中不断绘制地缚图线 敌人站在线上会持续受到伤害 站在线上时，根据图线浓度提高 攻击与 移速 Keeps drawing earthbound lines across the room Enemies standing on the lines take damage over time Standing on denser lines raises Damage and Speed</p>

<PublicEntry slug="nazca" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**纳兹卡巨画会让房间地面逐渐出现越来越完整的地缚图线；这些线本身就是战场的一部分，而不是单纯特效。**

持有后，数名无形绘制者会从角色附近开始画线。同一区域被反复经过时，图线浓度上升，视觉也会更明显——看到的浓淡就是实际强度。

## 绘制

- 每份基础约 **3** 名绘制者；每额外一份再 +1。
- 楼层越高，绘制越快，而不是再堆出更多实体。
- 每个房间重新开画；离开后清空。

## 站在线上

脚下图线越浓：

- {{Damage}} 乘算提升（有上限）；
- {{Speed}} 小幅提升。

## 敌人站在线上

敌人踩在有浓度的图线上时，会持续受伤；浓度越高越痛。伤害来源归属对应持有者。

## 注意

- 不要只追怪：主动站在已经画浓的区域，才能把巨画变成自己的阵地。
- 重复持有会多一名绘制者，并提高单格浓度上限。
- 图线不跨房间保留。

## 特殊联动

### {{Seija}}

只保留 **1** 名绘制者，且图线浓度上限降低。

### {{Collectible:706}}

深渊生成三只对应蝗虫。

## 使用技巧

- 开战后先在安全区绕圈加浓，再把敌人引进「神迹」里。
- 重复持有更适合「画更大的一块阵地」，而不是指望瞬间清房。

<details>
<summary>技术细节</summary>

- 第一份 3 painters；每额外一份 +1 painter，浓度上限 `10 + 2×(份数−1)`。
- 玩家伤害乘算约每层浓度 +3%，上限 +50%；移速约每层 +0.015。
- 敌伤约每 10 帧 `0.15 × 攻击 × 浓度`。
- Seija：1 painter，浓度上限至多 5。
- 逻辑 painter + 分玩家 heat map + 地板视觉；不再生成可控 familiar。

</details>
