---
title: 超忆症
description: "未来来来来来来来来来来"
slug: hypermnesia
kind: collectible
internalKey: Hypermnesia
status: reviewed
---
<p class="wiki-search-index" v-pre>超忆症 Hypermnesia Hypermnesia hypermnesia Hypermnesia 未来来来来来来来来来来 Foreverevereverevereverever 你身上每个重复的道具为你提供额外属性加成 攻击 +0.5攻击 射速 +0.15射速 射程 +1射程 移速 +0.05移速 幸运 +1幸运 回忆 此道具的生成不受道具回忆影响 Gain bonus for every repetitive item that Isaac has Damage +0.5 Damage up Tears +0.15 Tear up Range +1 Range up Speed +0.05 Speed up Luck +1 Luck up Memory This item is not affected by memory</p>

<PublicEntry slug="hypermnesia" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**超忆症会奖励角色身上的每一份重复道具，并且不会被 {{Item:memory}} 的替换影响。**

持有超忆症时，会统计全身上下所有道具的**额外份数**（第一件不算，从第二件起每多一份计入一次），并按该总数提供属性加成。每多 **1** 份重复道具，获得：

| 属性 | 加成 |
| --- | --- |
| 移速 | +0.05 |
| 射速 | +0.15 |
| 攻击 | +0.5 |
| 射程 | +1 |
| 幸运 | +1 |

{{Item:memory}} 不会把超忆症替换掉，因此二者可以自然组合：回忆制造重复，超忆症将重复转化为属性。详见 {{Item:memory}}。

## 注意

- 重复份数按**所有玩家**的持有情况合计（与回忆的候选池范围一致）。
- 任务道具不计入重复统计。
- 超忆症属于[彩虹](/systems/rainbow)道具，但没有以原版道具为贴图原型。

<details>
<summary>技术细节</summary>

- 重复计数：`auxi.get_player_s_item_count`（各道具 `GetCollectibleNum - 1` 之和，排除任务道具）。
- 每点重复份数：+0.05 移速、+0.15 射速、+0.5 攻击、+40 内部射程（显示为 +1）、+1 幸运（经 `EvaluateCache` 应用）。
- {{Item:memory}} 的 `ignorers` 包含超忆症 ID，替换回调不会覆盖其生成结果。

</details>
