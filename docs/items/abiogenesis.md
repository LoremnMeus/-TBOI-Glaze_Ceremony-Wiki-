---
title: 无生源论
description: "你看，它自己活了"
slug: abiogenesis
kind: collectible
internalKey: Abiogenesis
status: reviewed
---
<p class="wiki-search-index" v-pre>无生源论 Abiogenesis Abiogenesis abiogenesis Abiogenesis 你看，它自己活了 Look, it lives on its own 电池 每次仅消耗1格充能，但额外消耗 硬币 钥匙 炸弹 各1个 随后观测剩余充能、硬币、钥匙与炸弹 若任一剩余：实验失败，从剩余最多的资源中掉落1个对应掉落物 注意 金钥匙与金炸弹仍视为持有 若四者同时归零：证明无生源论，将其 活化 为无生源论宝宝 Battery Costs 1 charge per use, but also spends 1 Coin Key Bomb each Then observe remaining charge, coins, keys, and bombs If any remain: the experiment fails and spawns 1 pickup of the most remaining resource Warning Golden Key and Golden Bomb still count as holding If all four are 0: prove Abiogenesis, animate it into an Abiogenesis familiar</p>

<PublicEntry slug="abiogenesis" lang="zh" />

## 机制说明


<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**无生源论是一场四资源归零实验：每次支付充能、硬币、钥匙、炸弹各 1；若还能看到剩余，就失败返还；若四者同时归零，实验成功，主动活化成宝宝。**

- 每次使用消耗 **1** 格充能，并额外消耗 {{Coin}} {{Key}} {{Bomb}} 各 1（未被排除的资源）
- 失败：在剩余最多的资源里掉落 1 个对应掉落物（并列则随机）
- {{Warning}} 金钥匙 / 金炸弹即使普通数量为 0，仍视为“还持有”
- 成功：四项观测同时为 0 → 移除主动、记录证明次数，并生成 1 只无生源论宝宝；可多次证明以拥有多只

## 特殊联动

### {{Collectible:34}}

失败时排除一种当前非 0 资源：之后不再支付也不参与归零判定。

### {{Collectible:584}}

失败时按剩余最多的资源生成对应魂火。
