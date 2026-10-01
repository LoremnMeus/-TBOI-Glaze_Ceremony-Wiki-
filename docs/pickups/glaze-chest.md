---
title: 琉璃之宝箱
description: "本层另一个房间会出现对应钥匙，钥匙房会在地图上标记 只有对应钥匙才能打开宝箱 60%：生成4~7个随机琉璃掉落 40%：复制一个当前持有的随机道具"
slug: glaze-chest
kind: pickup
internalKey: Glaze_chest
status: drafted
---
<p class="wiki-search-index" v-pre>琉璃之宝箱 Glaze Chest Glaze_chest glaze-chest Glaze_chest 本层另一个房间会出现对应钥匙，钥匙房会在地图上标记 只有对应钥匙才能打开宝箱 60%：生成4~7个随机琉璃掉落 40%：复制一个当前持有的随机道具 A matching key appears in another room on this floor; its room is marked on the map Only that key can open the chest 60%: spawns 4~7 random glazed pickups 40%: duplicates a random item you currently own</p>

<PublicEntry slug="glaze-chest" lang="zh" />

## 机制说明

## 效果

每个琉璃之宝箱都会在本层另一个房间生成一把与它对应的钥匙跟班。钥匙所在房间会在地图上被标记。

靠近钥匙后，它会跟随玩家。将钥匙带回对应的琉璃之宝箱即可开箱；普通钥匙不能打开它。

## 奖励

开箱时：

- **60%** 概率生成 **4–7 个**随机琉璃掉落；
- **40%** 概率复制玩家当前持有的一个随机道具。

在 **Chest / Dark Room** 中，宝箱固定走复制道具分支。

## 房间交互

单纯接触琉璃之宝箱不会启动房间的伏击流程。

只有对应钥匙完成开锁后，才会尝试启动当前房间已有的 Ambush。这个效果主要影响挑战房、Boss Rush 等本身支持伏击流程的房间；普通房间不会因此额外生成一场伏击。

## 多个宝箱

每个宝箱都有自己对应的钥匙任务。多个琉璃之宝箱可以同时存在，各自的钥匙不会因为换房或小退重新生成出额外副本。

## 特殊联动

### {{Item:crown-of-the-glaze}}

辉片满层时，如果本次开箱走琉璃掉落分支，掉落数量额外 **+4**，因此变为 **8–11 个**。

复制道具分支不会额外生成这 4 个琉璃掉落。
