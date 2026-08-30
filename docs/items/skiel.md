---
title: 痛苦因子
description: "你的过去由我笼罩"
slug: skiel
kind: collectible
internalKey: Skiel
status: drafted
---
<p class="wiki-search-index" v-pre>痛苦因子 Skiel Skiel skiel Skiel 你的过去由我笼罩 Your past is shrouded by me 持续攻击进行蓄力 蓄满后展开由泪弹连接而成的因子网 松开攻击会失去当前蓄力 Keep firing to charge At full charge, release a linked web of tears Releasing fire resets the current charge</p>

<PublicEntry slug="skiel" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**持续攻击为痛苦因子蓄力；蓄满后，会一次展开由多枚泪弹彼此连接形成的因子网。**

痛苦因子的蓄力时间是三因子中最短的，因此也是最容易频繁发动的一种。

## 如何使用

- 持续按住攻击键即可蓄力。
- 当前蓄力会显示在角色旁的专属蓄力条上。
- 达到满蓄力后发动因子网。
- 提前松开攻击会失去当前蓄力，需要重新开始。

## 因子网

发动时会连续生成数组向外展开的泪弹。

这些泪弹：

- 以角色当前攻击方向为基准展开；
- 相邻泪弹之间形成连接；
- 单枚泪弹造成约角色攻击力一半的伤害；
- 多组泪弹会在短时间内依次生成，从而形成一张展开中的网。

发动时角色会略微沿攻击方向移动。

## 三因子

痛苦因子、绝望因子与泯灭因子属于同一组道具。

当它们作为可拾取道具生成时，底座会在三种因子之间轮换；**拾取时显示的是哪一种，就获得哪一种。**

```text
痛苦因子 → 绝望因子 → 泯灭因子 → …
```

拾取以后，获得的道具不会继续自行变化。

## 特殊联动

每多持有一种其他因子，本道具的蓄力速度提高 15%（持有两种为 115%，三种齐全为 130%）。
