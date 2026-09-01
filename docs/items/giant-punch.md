---
title: 巨大化
description: "神※拳※粉※碎"
slug: giant-punch
kind: collectible
internalKey: Giant_Punch
status: reviewed
---
<p class="wiki-search-index" v-pre>巨大化 Giant Punch Giant_Punch giant-punch Giant Punch 神※拳※粉※碎 God-o-hand-o-Crash! ↑ 生命未满时，角色巨大化，攻击翻倍 ↓ 满血后拥有额外生命时，角色缩小，攻击减半 ↑ While below normal full health, grow larger and deal double damage ↓ While holding health beyond normal capacity, shrink and deal half damage</p>

<PublicEntry slug="giant-punch" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

巨大化会把生命劣势变成攻击优势，而生命超过正常满值时，效果则会反过来削弱角色。

| 当前生命状态 | 效果 |
| --- | --- |
| 低于正常容量 | 体型 ×1.25，{{Damage}} 伤害 ×2 |
| 等于正常容量 | 无变化 |
| 高于正常容量 | 体型 ×0.75，{{Damage}} 伤害 ×0.5 |

普通角色的“正常容量”由红心容器与骨心容量组成。魂心、黑心和永恒心会增加当前生命，但不会提高这个基准。

例如拥有 6 格正常红心容量时：

| 当前生命 | 效果 |
| --- | --- |
| 5 格 | 巨大化 |
| 恢复至 6 格 | 恢复正常 |
| 满红心后再获得魂心，总生命超过 6 格 | 缩小 |

## 特殊角色

使用硬币心的 Keeper 系列直接比较当前硬币心与硬币心上限：未满时巨大化，填满时恢复正常。

没有红心容量、但使用魂心等生命资源的角色，会以首次获得巨大化时的当前生命作为基线。之后低于该基线时巨大化，高于基线时缩小。

没有可比较生命资源的角色保持中立。

## 使用技巧

- **生命并非越满越好。** 保留少量生命缺口可以维持双倍伤害；满血后继续拾取魂心等额外生命，甚至可能让角色进入伤害减半状态。

## 轶事

巨大化 Neta 自《游戏王》同名装备魔法卡。原卡会根据双方生命值的高低，使装备怪兽的原本攻击力翻倍或减半；本模组用角色当前生命与正常容量的关系表现这一反转。
