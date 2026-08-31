---
title: I - 魔导
description: "我将昭世"
slug: i-the-wizard
kind: card
internalKey: Wizard
status: reviewed
---
<p class="wiki-search-index" v-pre>I - 魔导 I - The Wizard Wizard i-the-wizard I - The Wizard 我将昭世 随机揭示一种房间，并生成通往其中一间的传送门 Reveal a random room type and open a portal to one of those rooms</p>

<PublicEntry slug="i-the-wizard" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->


## 效果

魔导会从本层**已经存在**的非普通房间类型中选出一种，把该类型全部标为可见，并在之后进入对应类型房间时生成通往其他特殊房间的传送入口。

玩家看到的结果是：先被点名一种房型并揭开地图标记，再在合适时机出现可进入的传送门环，用来快速跳到本层其他特殊房间（包括{{DevilRoom}} 恶魔房、{{AngelRoom}} 天使房、{{ErrorRoom}} 错误房、Boss Rush、黑市、超级撒旦等候选）。

## 房间选择

- 目标类型优先从本层实际存在的非普通房型中抽取；已探索与否不单独排除。
- 若本层已经找不到可用的未处理房型，魔导会改为**整层全揭示**，而不是空放。
- 传送门通常是单向捷径；进入黑市或超级撒旦等特殊目标后，可能再出现返回用入口。超级撒旦房间清理后还会额外出现天使池与恶魔池道具各一件。
- 普通使用在进入目标房型时生成约 **4–5** 个传送门。
- 本层标记在换层后清除；已经用过的房型不会反复刷同一批门。

## 特殊联动

### {{Collectible:451}}

进入目标房型时生成的传送门数量进一步增加。
