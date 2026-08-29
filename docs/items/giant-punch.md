---
title: 巨大化
description: "神※拳※粉※碎"
slug: giant-punch
kind: collectible
internalKey: Giant_Punch
status: stub
---
<p class="wiki-search-index" v-pre>巨大化 Giant Punch Giant_Punch giant-punch Giant Punch 神※拳※粉※碎 God-o-hand-o-Crash! ↑ 生命未满时，角色巨大化，攻击翻倍 ↓ 满血后拥有额外生命时，角色缩小，攻击减半 ↑ While below normal full health, grow larger and deal double damage ↓ While holding health beyond normal capacity, shrink and deal half damage</p>

<PublicEntry slug="giant-punch" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

巨大化会根据角色当前生命相对“正常生命容量”的高低，在强化与削弱之间反转。

| 当前生命状态 | 效果 |
| --- | --- |
| 低于正常容量 | 体型 ×1.25，{{Damage}} 伤害 ×2 |
| 等于正常容量 | 无变化 |
| 高于正常容量 | 体型 ×0.75，{{Damage}} 伤害 ×0.5 |

普通角色的正常容量由红心容器与骨心容量组成；魂心、黑心和永恒心会增加当前生命，却不会增加这项容量。例如拥有 6 格红心容量时，5 格生命会触发巨大化，恢复至 6 格会回到正常，再获得魂心则会进入缩小状态。

## 特殊角色

没有红心容量但拥有其他生命资源的角色，会以首次获得巨大化时的当前生命作为固定基线。此后低于基线时巨大化，高于基线时缩小。没有任何可比较生命资源的角色保持中立。

## 使用技巧

回复生命或拾取魂心不再必然提高战斗力。想维持双倍伤害时，需要决定是否保留生命缺口，以及是否拾取会让生命超过正常容量的额外心。

## 轶事

本效果取自《游戏王》装备魔法卡《巨大化》。原卡会根据双方生命值高低令装备怪兽的原本攻击力翻倍或减半；本模组将这一反转关系改写为当前生命与角色正常生命容量的比较。
