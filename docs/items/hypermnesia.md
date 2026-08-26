---
title: 超忆症
description: "未来来来来来来来来来来"
slug: hypermnesia
kind: collectible
internalKey: Hypermnesia
status: reviewed
---
<p class="wiki-search-index" v-pre>超忆症 Hypermnesia Hypermnesia hypermnesia Hypermnesia 未来来来来来来来来来来 Foreverevereverevereverever 你身上每个重复的道具为你提供额外属性加成 +0.5攻击 +0.15射速 +1射程 +0.05移速 +1幸运 此道具的生成不受道具回忆影响 Gain bonus for every repetitive item that Isaac has +0.5 Damage up +0.15 Tear up +1 Range up +0.05 Speed up +1 Luck up This item is not affected by memory</p>

<PublicEntry slug="hypermnesia" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**超忆症会奖励角色身上的每一份重复道具，并且不会被 {{Item:memory}} 的替换影响。** 它是专门为回忆构筑留下的成长出口。

持有超忆症时，会统计全身上下所有道具的**额外份数**（第一件不算，从第二件起每多一份计入一次），并按该总数提供属性加成：

- 移速、射速、攻击、射程与幸运都会随重复份数增加。

因此，当 {{Item:memory}} 让后续道具不断复制已有内容时，超忆症能把这些重复从「未必有叠加价值」变成稳定的数值收益。

## 注意

- 重复份数按**所有玩家**的持有情况合计（与回忆的候选池范围一致）。
- 任务道具不计入重复统计。
- 即使回忆已经生效，超忆症仍可以正常从道具池生成，不会被替换成已有道具。

## 相关道具

### {{Item:memory}}

回忆会让本局后续道具生成不断回到已有道具；大量以撒道具的重复拾取本身收益有限，因此回忆单独使用容易「锁死」在一堆不能有效叠加的旧道具上。

超忆症的设计目的就是修正这一点：**让重复本身变得有价值**。两道具搭配时，回忆负责制造重复，超忆症负责把重复转化为属性。

<details>
<summary>技术细节</summary>

- 重复计数：`auxi.get_player_s_item_count`（各道具 `GetCollectibleNum - 1` 之和，排除任务道具）。
- 每点重复份数：+0.05 移速、+0.15 射速、+0.5 攻击、+40 射程、+1 幸运（经 `EvaluateCache` 应用）。
- {{Item:memory}} 的 `ignorers` 包含超忆症 ID，替换回调不会覆盖其生成结果。

</details>
