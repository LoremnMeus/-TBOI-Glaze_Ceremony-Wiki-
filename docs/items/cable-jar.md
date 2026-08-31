---
title: 罐中雷暴
description: "你感到有点漏电"
slug: cable-jar
kind: collectible
internalKey: Cable_Jar
status: reviewed
---
<p class="wiki-search-index" v-pre>罐中雷暴 Cable Jar Cable_Jar cable-jar Cable Jar 你感到有点漏电 Slightly leaky 将主主动槽中有充能主动的上限压缩至2格 溢出的充能会泄露为留在房间中的能量球 使用主动时，按当前上限/原始上限的概率正常发动 失败：泄露所有充能并释放雷暴，上限+2 受伤时上限-2，并泄露超出新上限的充能 Compresses the charge cap of charged primary actives to 2 Excess charge leaks into energy orbs that remain in the room On use: current cap/original cap chance to activate normally Failure: leak all charge in a thunderstorm; cap +2 Taking damage lowers the cap by 2 and leaks charge above the new cap</p>

<PublicEntry slug="cable-jar" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**罐中雷暴把主主动槽的充能上限变成会因失败扩容、因受伤缩小的漏电容器。**

持有后，主主动槽中有正常充能需求的主动从 **2 格上限**开始。每件主动分别记录自己的上限，换回先前用过的主动时会恢复该主动已有的容量。

超过当前上限的充能会泄露为留在当前房间中的能量球。能量球靠近仍可充能的角色时会飞来；拾取后为当前主动补充 1 格充能。未拾取的能量球会记录在其产生的房间中。

使用主动时，正常发动概率为：

$$
\text{成功率}=\frac{\text{当前上限}}{\text{原始充能需求}}
$$

例如，原本需要 6 格的主动在 2 格上限时有约 **33%** 概率正常发动。失败时主动不发动，当前充能全部化为雷暴与能量球，并将该主动的上限提高 2 格，最高按 12 格计算。

受伤时，当前主动的上限降低 2 格，最低为 2 格；超出新上限的充能会在警告后泄露为能量球。

## 注意

- 只影响主主动槽；口袋主动与其他主动槽不按这套概率处理。
- 无充能需求的主动不受影响。透特之书也被排除，因为其充能条记录的是启示资源。
- {{Collectible:63}} 会照常扩大可储存的总充能，但不会改变成功率使用的基础上限。
- 成功率会显示在主动道具 HUD 附近。

## 特殊联动

### {{Collectible:706}}

对应蝗虫命中敌人时有较低概率生成 1 个能量球，并有 15 秒冷却。

## 轶事

- 「罐中雷暴」指向《游戏王》的「雷精 / Spright」系列。
- 「雷精」大量围绕等级 / 阶级 / Link-2 等数字 **2** 展开，因此本道具的设计也尽可能把电能与数字 2 联系在一起。
