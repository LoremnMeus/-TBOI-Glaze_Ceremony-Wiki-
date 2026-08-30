---
title: 拖延症
description: "马上就做……"
slug: procrastination
kind: collectible
internalKey: Procrastination
status: featured
---
<p class="wiki-search-index" v-pre>拖延症 Procrastination Procrastination procrastination Procrastination 马上就做…… I&#x27;ll do it soon... 持有后每经过30秒，永久获得 攻击 +0.1攻击 每层最多累计 攻击 +1攻击 击杀任意Boss后，立即停止本层的攻击增长 包含Boss敌人的房间门始终保持开启 While held, permanently gain Damage +0.1 every 30 seconds Accumulate up to Damage +1 per floor Killing any boss immediately stops this floor&#x27;s damage growth Doors in rooms with living bosses stay open</p>

<PublicEntry slug="procrastination" lang="zh" />

## 机制说明

## 效果

**拖延症会奖励玩家在击杀 Boss 前花时间探索楼层。**

持有期间每 30 秒永久获得攻击力，直到本层达到上限或任意 Boss 被击杀。只要当前房间仍有存活的 Boss 敌人，房门就不会因战斗锁死，因此可以暂时离开再回来。

| 规则 | 数值 |
| --- | ---: |
| 增长间隔 | 30 秒 |
| 每次增长 | {{Damage}} +0.1 |
| 每层最多增长 | {{Damage}} +1 |

进入新楼层时，计时重新开始，本层已累计的增长量清零，并重新获得最多 +1 的增长空间；此前获得的永久攻击不会消失。Boss 停止状态也会解除。

## 细节

- 击杀任意带有 Boss 标记的敌人后，本层立即停止增长。
- 持有多份拖延症时，每 30 秒获得的攻击力按份数增加，但每层总上限仍为 +1。例如持有 2 份时，每 30 秒获得 +0.2，约 150 秒达到本层上限。

## 使用技巧

- 本层还有商店、宝箱房或其他探索目标时，可以先完成探索再挑战 Boss。
- 正常清房、购物和探索的时间都会计入，不需要为了获得加成停在原地等待。

## 轶事

拖延症属于[彩虹](/systems/rainbow)道具，其图标以 {{Collectible:260}} 为基础重新绘制。它把“晚点再打 Boss”变成可以永久积累的攻击收益，让拖延本身成为玩法的一部分。

<details>
<summary>技术细节</summary>

永久攻击加成与本层已获得量按玩家分别记录；Boss 停止状态由当前楼层共享。因此多人游戏中，任意 Boss 死亡都会让所有持有拖延症的玩家停止本层增长。

</details>
