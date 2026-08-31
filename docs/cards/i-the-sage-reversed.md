---
title: "I - 贤者?"
description: "我将绝火"
slug: i-the-sage-reversed
kind: card
internalKey: Sage_r
status: drafted
---
<p class="wiki-search-index" v-pre>I - 贤者? I - The Sage? Sage_r i-the-sage-reversed I - The Sage? 我将绝火 在房间中所有实体边上点燃火堆 复燃所有其他火堆 当前房间内靠近火堆会将其自动熄灭 Light the fire on the edge of all enemies and pickups in the room Re-ignite all other fires The fire will be automatically extinguished when you are close to it in the current room</p>

<PublicEntry slug="i-the-sage-reversed" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后，会重新点燃当前房间中已经熄灭的普通火堆，并在敌人、掉落物等附近的空地生成新的火堆。

生成火堆时会避开玩家附近的位置。

## 熄灭

玩家靠近被标记的火堆时，火堆会自动熄灭，不需要主动攻击。

## 火堆变体权重

新生成火堆按权重随机选择变体（普通 / 桌布）：

| 变体 | 普通 | {{Collectible:451}} |
| --- | ---: | ---: |
| 普通火堆 | 200 | 100 |
| 红色火堆 | 75 | 45 |
| 蓝色火堆 | 30 | 50 |
| 紫色火堆 | 15 | 25 |
| 白色火堆 | 1 | 1 |

## 特殊联动

### {{Collectible:451}}

提高蓝 / 紫火堆相对普通与红火堆的出现权重（见上表）。
