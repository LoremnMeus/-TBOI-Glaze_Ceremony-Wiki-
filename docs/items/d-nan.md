---
title: 非数骰子
description: "错误：尝试将零作为除数"
slug: d-nan
kind: collectible
internalKey: D_NAN
status: reviewed
---
<p class="wiki-search-index" v-pre>非数骰子 D NAN D_NAN d-nan D NAN 错误：尝试将零作为除数 Warning: division by zero 将房间内的普通道具重置为错误道具 将错误道具重新重置为普通道具 Rerolls normal collectibles into glitched items Rerolls glitched items back into normal collectibles</p>

<PublicEntry slug="d-nan" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

非数骰子会反转房间内道具底座的“正常状态”：普通道具变成错误道具，错误道具变回普通道具。同房若同时存在两类底座，会各自按方向处理。

这里的“错误道具”指 TMTRAINER 风格的 Glitched Items。

## 特殊联动

### {{Collectible:34}}

在错误道具 → 普通道具的方向上，改为从恶魔房道具池生成。

### {{Collectible:584}}

生成特殊魂火；该魂火发射的泪弹会带有随机泪弹特效。
