---
title: 挑战：安全驾驶
description: "伯大尼开局 !!! 无法发射眼泪 蓄满专用充能后，朝攻击方向发出 列车撞击敌人 难度等级：普通"
slug: safe-driving
kind: challenge
internalKey: Safe_Driving
status: reviewed
---
<p class="wiki-search-index" v-pre>挑战：安全驾驶 Safe Driving Safe_Driving safe-driving Safe Driving 伯大尼开局 !!! 无法发射眼泪 蓄满专用充能后，朝攻击方向发出 列车撞击敌人 难度等级：普通 Play as Bethany !!! Cannot shoot tears After the special charge fills, fire a train in your attack direction Difficulty: Normal</p>

<PublicEntry slug="safe-driving" lang="zh" />

## 机制说明

## 效果

**安全驾驶把普通射击换成一班需要蓄力的高速列车：蓄满后朝攻击方向发车，让列车横穿房间撞击敌人。**

- 屏幕上有专用蓄力条。
- 蓄满后给出攻击方向即可发车；发车后重新蓄力。
- 列车复用 {{Item:hyper-velocity}} 的 Harmony：从角色后方沿指定方向驶入并持续加速，撞击敌人，并破坏沿途可破坏地形。

## 注意

- 蓄力已满但没有输入攻击方向时，不会自动清空充能。

<details>
<summary>技术细节</summary>

有效攻击控制状态下每帧累计蓄力；达到 **100** 且攻击方向有效时发车并清零。

</details>
