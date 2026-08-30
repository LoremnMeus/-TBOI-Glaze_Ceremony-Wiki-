---
title: 邪恶干涉
description: "拥抱不祥"
slug: evil-intervention
kind: collectible
internalKey: Evil_Intervention
status: reviewed
---
<p class="wiki-search-index" v-pre>邪恶干涉 Evil Intervention Evil_Intervention evil-intervention Evil Intervention 拥抱不祥 Embrace ominous 概率发射穿透并追踪敌人的蝴蝶泪 蝴蝶泪会吞噬接触的敌方弹幕，并截断敌方激光 蝴蝶消失时，将吸收的攻击转化为友方泪弹与硫磺火返还 Chance to fire a piercing, homing butterfly tear It devours enemy projectiles and intercepts enemy lasers On disappearing, returns absorbed attacks as friendly tears and Brimstone</p>

<PublicEntry slug="evil-intervention" lang="zh" />


## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**邪恶干涉会以一定概率发射可吞噬敌弹、截断敌方激光的蝴蝶泪；蝴蝶消散时把吸收的攻击返还为友方火力。**

开火时有概率发射穿透并追踪的蝴蝶泪。幸运越高，出现率越高。

### 吸收敌方攻击

- **敌弹**：蝴蝶接触后吞掉，并记 1 次。
- **敌方激光**：会被截断并挂在蝴蝶上，持续积蓄能量。

### 返还攻击

蝴蝶消失时：

- 每吞过 1 发敌弹，返还 1 发友方泪弹；
- 若吞过激光，再按积蓄能量返还多道硫磺火（能量越高越多）。

<details>
<summary>技术细节</summary>

出现率使用 `check_rand(Luck, 20, 5, 7)`：幸运 0 时约 **8.7%**，幸运 ≥ **7** 时封顶 **20%**。

</details>

## 使用技巧

- 弹幕密集区域更容易让蝴蝶积累大量返还泪弹。
- 面对持续激光时，可主动让蝴蝶与光束接触，以积累后续的硫磺火反击。
