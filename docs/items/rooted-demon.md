---
title: 根植之魔
description: "向更深处扎根"
slug: rooted-demon
kind: collectible
internalKey: Rooted_Demon
status: drafted
---
<p class="wiki-search-index" v-pre>根植之魔 Rooted Demon Rooted_Demon rooted-demon Rooted Demon 向更深处扎根 Rooted ever deeper 进入新房间后，抛出顺位的上一件道具以向下扎根 抛出的道具将视为全新生成 到底后，向上蔓延根系，靠近根系节点的敌人会被穿刺 完成蔓延后，依节点数量沿屏幕边缘发动大规模穿刺攻击 On entering a new room, ejects the preceding item in pickup order to dig deeper Ejected items are treated as newly spawned At the bottom, roots spread upward; enemies near root nodes are pierced Once fully grown, launches a large-scale piercing attack along the screen edges, scaling with the number of nodes</p>

<PublicEntry slug="rooted-demon" lang="zh" />

## 机制说明

<!-- 玩家百科正文：生成器不会覆盖。普通词条先写效果，再按需写注意、交互、协同、技巧、数值、轶事和版本历史；不要生成空章节。 -->

## 效果

根植之魔会不断深入玩家的道具拾取历史，将挡在下方的旧道具重新抛出。抵达历史底部后，它会向上生长根系，最终形成能够攻击敌人的道具网络。

**向下扎根**

- 首次进入新房间时，从拾取历史中寻找位于根植之魔之前、距离最近的一件可用道具，将其从玩家身上移除，并在房间内生成对应的道具底座。
- 被抛出的道具视为全新生成的道具，重新拾取可以再次触发其拾取效果。
- 重新拾取后，该道具会移动到拾取历史的末尾，使根植之魔逐渐向历史底部深入。
- 每份根植之魔每个新房间最多挖掘一件道具。多份根植之魔可以同时挖掘不同道具。

**向上生长**

当根植之魔下方没有可挖掘的道具时，便开始向上蔓延根系。

- 根系以根植之魔的历史图标为起点，逐渐连接其他道具图标，并将它们转化为根系节点。
- 靠近已生长节点的敌人会受到根刺穿刺。根刺可以贯穿多个敌人。
- 根系完全覆盖可连接的道具历史后，若房间内仍有敌人，便会沿屏幕边缘快速蔓延，并从多个位置向敌人发射贯穿根刺。
- 大规模穿刺结束后，根系收回，经过短暂恢复后重新生长，循环发动攻击。

## 注意

- 根植之魔只会挖掘仍然持有的被动道具或跟班。主动道具、任务道具、隐藏道具及饰品不会被挖出。
- 如果此前没有符合条件的道具，根植之魔会直接开始向上生长。
- 挖出的道具需要玩家自行重新拾取，才能再次获得其拾取效果。
- 多份根植之魔会共同形成一张根系网络。
- 根系依赖道具历史 HUD 的显示与排列。隐藏道具历史 HUD 时，根系无法正常生长或攻击。
- 根系生长进度不会因为进入其他房间而自动清零；道具历史的排列或连接结构发生变化时，则会重新生长。

<details>
<summary>详细数值</summary>

| 项目 | 数值 |
| --- | --- |
| 节点攻击范围 | 65 游戏单位 |
| 节点攻击伤害 | 玩家攻击力 × 0.3 |
| 单节点攻击冷却 | 60 游戏帧，约 2 秒 |
| 大规模穿刺伤害 | 玩家攻击力 × 0.66 |
| 大规模穿刺数量 | 2–17 根，随根系节点数量增加 |
| 穿刺额外命中宽度 | 22 游戏单位 |

两种攻击均能贯穿多个敌人，同一根刺对同一敌人最多造成一次伤害。

大规模穿刺的覆盖长度与分支数量随根系节点数量增加。拥有约 40 个以上的根系节点时，分支数量达到 17 根的上限。

</details>
