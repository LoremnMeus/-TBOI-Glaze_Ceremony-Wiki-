---
title: 微型更新
description: "修复了一些已知问题"
slug: tiny-update
kind: collectible
internalKey: Tiny_Update
status: drafted
---
<p class="wiki-search-index" v-pre>微型更新 Tiny Update Tiny_Update tiny-update Tiny Update 修复了一些已知问题 Fixed some known issues 有概率发布一次微型更新 随机增强或削弱其他道具的属性、生命奖励与充能需求 也可能改变道具池中的道具分布 Chance to publish a Tiny Update Randomly buffs or nerfs other items&#x27; stats, heart rewards, and charge requirements May also change item pool contents</p>

<PublicEntry slug="tiny-update" lang="zh" />

## 机制说明

## 效果

**微型更新会随机发布游戏平衡性更新，增强或削弱其他道具。**

每次更新都会暂停游戏，展示包含各项调整的更新公告。调整在本局内持续生效，可以随着后续更新累积，也可能影响尚未获得的道具。

## 发布规则

- 清理战斗房间时，有 **15%** 概率发布更新，每层最多触发一次。
- 进入新楼层时，另有 **50%** 概率发布更新，两种触发方式独立计算。
- 每次更新随机调整 **4–20** 件道具。每多持有一份微型更新，调整数量增加 **2** 件，最多 **32** 件。

## 更新内容

每件被选中的道具可能发生以下变化：

- **基础属性：** 攻击力、射速、射程、弹速、移速或幸运提高或降低 **0.1**。
- **生命奖励：** 改变道具拾取时给予的心之容器、魂心或黑心数量，每次增减 **1** 颗。
- **主动充能：** 充能需求增减 **1** 格，或自动充能时间增减 **1** 秒。
- **道具池：** 将道具加入新的道具池，也可能撤销先前更新添加的道具。

更新公告会列出本次的增强、削弱和道具池变化。道具累计的调整也可以通过 EID 查看。
