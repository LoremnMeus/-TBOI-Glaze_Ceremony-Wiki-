---
title: 悲悯
description: "它们被迫为我而死"
slug: pathetique
kind: collectible
internalKey: Pathetique
status: featured
---
<p class="wiki-search-index" v-pre>悲悯 Pathetique Pathetique pathetique Pathetique 它们被迫为我而死 They die for me 受到敌人伤害时，牺牲1件被动道具并抵消伤害 低品质道具更容易被牺牲 射速 每件被牺牲的道具使射速+0.5，并在牺牲时释放攻击 失去悲悯时，返还所有因此失去的道具 Taking enemy damage sacrifices 1 passive item and negates the hit Lower-quality items are more likely to be sacrificed Tears Each sacrificed item grants +0.5 tears and releases an attack Losing Pathetique returns all items lost this way</p>

<PublicEntry slug="pathetique" lang="zh" />


## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**悲悯会让一件被动道具代替玩家承受来自敌人的伤害。**

受到敌人伤害时：

1. 按品质权重暂时移除一件被动并完全抵消这次伤害；
2. 低品质更容易被选中，但并非绝对；
3. 每牺牲一件，{{Tears}} 射速 **+0.5**；
4. 同时向四周爆发攻击，例如大泪或血水迹；
5. 若没有其他可牺牲被动，悲悯会把自己作为最后牺牲。

**失去悲悯后，记录中的牺牲品会全部返还，对应射速加成也会消失。** 悲悯自身不会被“返还回来”作为额外道具；它本来就会在牺牲或失去时离开。它不是永久销毁那些被扣留的被动。

### 示例

身上同时有 Q0 / Q1 / Q3 / Q4 时，悲悯更偏向吃掉低品质，但仍可能抽到高品质。不要假设“Q4 绝对安全”。

## 注意

- 只响应敌人伤害；献血机、献祭房等非敌人来源不会触发。
- “优先低品质”是加权随机，不是严格从低到高排队。
- 因其他效果失去悲悯同样会启动返还，并播放短暂回收演出。

## 使用技巧

需要取回被扣留道具时，可以通过失去悲悯一次性返还，但也会失去已叠的射速。

## 特殊联动

### {{Seija}}

仍可牺牲挡伤，但不再因牺牲获得射速。

## 轶事

设计受到《游戏王》“珠泪哀歌”系列影响：被移除的道具像暂时送入墓地，换取抵伤与射速；当悲悯自己成为最后祭品时，墓地里的道具会回来。

<details>
<summary>精确规则</summary>

### 品质选择权重

| 道具品质 | 相对权重 |
| --- | ---: |
| 0 | 100 |
| 1 | 60 |
| 2 | 20 |
| 3 | 5 |
| 4 | 1 |

### 返还规则

按玩家分别记录牺牲品；不再持有悲悯时启动返还，并清除对应射速奖励。

</details>
