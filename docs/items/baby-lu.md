---
title: 宝宝露
description: "我来安排！"
slug: baby-lu
kind: collectible
internalKey: Baby_Lu
status: reviewed
---
<p class="wiki-search-index" v-pre>宝宝露 Baby Lu Baby_Lu baby-lu Baby Lu 我来安排！ I plan! 每层揭示数个尚未探索的特殊房间 宝宝会进行一次仪式，并依次标记这些房间 随后生成用于前往已标记房间的传送入口 Each floor reveals several unexplored special rooms Performs a ritual and marks those rooms in sequence Then spawns portals that lead through the marked rooms</p>

<PublicEntry slug="baby-lu" lang="zh" />

## 机制说明


<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**宝宝露每层规划一条特殊房探索链：揭示若干特殊房间，再通过传送入口按链前往。**

- 每层触发一次仪式，优先揭示**尚未访问**的特殊房间
- 目标数量约为 `max(3, 2 + 宝宝露数量)`：第一只至少 **3** 个，之后每多一只增加目标数
- 不会选普通房，也不会选普通隐藏房、超级隐藏房或究极隐藏房
- 仪式结束后，按标记顺序生成传送入口，把这些房间串成一条访问链

## 如何触发

持有后进入新层自动规划；仪式演出结束后地图上会出现标记与后续入口。

## 重复持有

重复持有提高本层揭示/链路目标数量。

## 注意

传送是沿已标记房间推进的链式入口，不是在任意已揭示特殊房之间自由点选。

## 轶事

模仿对应角色“规划路线”的核心意象，不是完整角色机制复刻。
