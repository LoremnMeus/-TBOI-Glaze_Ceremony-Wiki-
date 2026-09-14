---
title: V - 密仪
description: "降神仪式"
slug: v-the-sting
kind: card
internalKey: Sting
status: reviewed
---
<p class="wiki-search-index" v-pre>V - 密仪 V - Sting Sting v-the-sting V - The Sting 降神仪式 Invocation ritual 生成一座仪式法阵 在法阵中献祭半格生命，逐次获得不同奖励 优先献祭红心 Creates a ritual circle Sacrifice half a heart within it to receive successive rewards Red Hearts are consumed first</p>

<PublicEntry slug="v-the-sting" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后，在房间中生成一座献祭法阵。

站在法阵上时，会献祭 **半格生命**，并优先扣除红心。每次成功献祭都会推进法阵的献祭次数，并触发对应阶段的奖励。法阵的 EID 会显示下一次献祭可能获得的效果。

| 献祭次数 | 效果                               |
| ---- | -------------------------------- |
| 1    | 生成 **0–4 枚** {{Coin}}            |
| 2    | **50%** 概率生成一个 {{Chest}}         |
| 3    | 清除本层因红心伤害造成的 {{DevilRoom}} 开启率损失 |
| 4    | **30%** 概率生成一个随机道具底座             |
| 5    | 生成 **3 个** {{RedChest}}          |
| 6    | **50%** 概率传送至 {{DevilRoom}}      |

完成全部阶段后，法阵会消失。

## 特殊联动

### {{Collectible:451}}

每次成功献祭额外有 **30%** 概率生成一颗 {{SoulHeart}}。
