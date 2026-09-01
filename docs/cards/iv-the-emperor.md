---
title: IV - 帝王
description: "命运的囚徒"
slug: iv-the-emperor
kind: card
internalKey: Emperor
status: reviewed
---
<p class="wiki-search-index" v-pre>IV - 帝王 IV - The Emperor Emperor iv-the-emperor IV - The Emperor 命运的囚徒 使用后，沿当前房间墙面尽可能生成通往本层特殊房间的门 原有普通门暂时关闭 After use, spawn as many special doors as possible along this room&#x27;s walls to special rooms on this floor Normal doors are temporarily closed</p>

<PublicEntry slug="iv-the-emperor" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

使用后，会沿当前房间四周的墙面寻找可用位置，并尽可能生成多个特殊门。

这些门分别通往本层的其他特殊房间。使用期间，房间原有的普通门会暂时关闭；离开房间后，本次生成的特殊门消失。

可以把它理解为：暂时把当前房间变成一个布满特殊出口的中转大厅。

## 可到达的房间

生成的门会连接本层已有的特殊房间，并在满足条件时包含少量特殊目标。

每个墙面门位独立抽取目的地。候选池由以下部分构成：

**本层地图已有房间**（本层已生成的全部房间；含普通战斗房，也可能被抽到）：

{{Shop}}、{{TreasureRoom}}、{{BossRoom}}、{{MiniBoss}}、{{SecretRoom}}、{{SuperSecretRoom}}、{{ArcadeRoom}}、{{CursedRoom}}、{{ChallengeRoom}}、{{Library}}、{{SacrificeRoom}}、{{DevilRoom}}、{{AngelRoom}}、{{LadderRoom}}、{{BossRushRoom}}、{{IsaacsRoom}}、{{ChestRoom}}、{{DiceRoom}}、{{Planetarium}}、{{UltraSecretRoom}}、{{ErrorRoom}}、黑市

**可 roll 加入候选池的特殊索引**（各自独立判定，默认约 5% 概率；非 ascent / 终局层）：

| 索引 | 目的地 |
| --- | --- |
| -1 | {{DevilRoom}} / {{AngelRoom}}（若本层尚未生成会先初始化） |
| -2 | {{ErrorRoom}} |
| -4 | {{LadderRoom}} |
| -6 | 黑市（进入后额外出现返回用 {{Card:0-the-fool}} 传送入口） |
| -13 | {{LadderRoom}} |
| -18 | {{AngelRoom}} |

**墙面角落特殊门位**（需满足相邻墙格对齐，且额外 roll 成功；非 ascent / 终局层，本层通常最多 2 处，蓝层最多 1 处）：

| 索引 | 目的地 |
| --- | --- |
| -5 | {{BossRushRoom}} |
| -7 | {{MegaSatan}}（清房后额外出现返回用 {{Card:0-the-fool}} 传送入口） |

清房奖励与特殊互动遵循目标房间自身规则（例如 {{MegaSatan}} 清理后的额外道具）；本卡本身不额外发奖。

## 特殊联动

### {{Collectible:451}}

提高每个墙面可用位置生成特殊门的成功率，因此通常会出现更多门。
