---
title: IX - 隐者
description: "你的过去萦绕在心"
slug: ix-the-hermit
kind: card
internalKey: Hermit
status: reviewed
---
<p class="wiki-search-index" v-pre>IX - 隐者 IX - The Hermit Hermit ix-the-hermit IX - The Hermit 你的过去萦绕在心 随机生成一个本局失去过的道具，优先被动道具 大便 没有这样的道具：生成摸过的大便 Randomly spawn one lost item (prefer passives) The Poop If none: spawn a touched Poop</p>

<PublicEntry slug="ix-the-hermit" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

隐者会从玩家本局**已经失去过的收藏品**记录中寻找候选，并生成可取回的道具底座。

普通情况下生成 1 个候选。
## 候选

- 失去收藏品时会进入记录；带任务标记的道具不会进入。
- 候选优先考虑被动，其次主动；若完全没有可恢复记录，则改为生成 {{Collectible:36}}。
- 三个候选属于同一互斥选择，只能拿一个。

## 特殊联动

### {{Collectible:451}}

最多给出 **3 个互斥选项**，只能拿走其中一个。
