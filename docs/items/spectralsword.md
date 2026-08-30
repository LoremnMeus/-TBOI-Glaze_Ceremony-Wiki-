---
title: 妖刀·逢魔
description: "物皆有灵"
slug: spectralsword
kind: collectible
internalKey: Spectralsword
status: drafted
---
<p class="wiki-search-index" v-pre>妖刀·逢魔 Spectral Sword Spectralsword spectralsword Spectralsword 物皆有灵 Out of its sheath 使用后唤出寄宿于刀中的妖鬼 妖鬼可以重新分配角色的属性，并转换部分基础资源 想得到什么，就必须从自己身上割下别的东西 Use to call the oni that dwells in the blade It can redistribute your stats and convert some basic resources To gain something, you must cut something else from yourself</p>

<PublicEntry slug="spectralsword" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**妖刀·逢魔里寄宿着一个并不真正听命于你的妖鬼。举起妖刀时，它会把刀夺走，并按照你的指示重新切割你的属性与资源：想加强某一处，就必须从另一处付出代价。**

使用主动（0 充能）打开重塑面板。有活跃敌人时无法打开。

## 属性重塑

- 内部用**灵质**计价：提高属性消耗灵质，削减属性释放灵质。
- 首次打开有少量初始灵质，足够一次小型交换。
- 改的是妖刀施加的 **delta 层**，不是直接覆写最终面板数值。
- 每项属性有上下限；确认后才写入并刷新缓存。

## 资源转换

资源页提供离散兑换（如硬币↔炸弹/钥匙、硬币→半魂心等），立即结算，不可借贷。

## 确认与重置

- 面板内先预览，**确认重塑**后统一生效。
- **重置重塑**清空全部属性 delta，并回到初始灵质预算。

## 注意

- 不能凭空无限制造总价值。
- 失去妖刀后，重塑属性立即失效；本局内再获得可恢复先前方案。
- 旧版「词缀 / 改名 / 改描述」已迁出，不再属于本道具。

## 与妖刻·白隙

妖刀·逢魔修改角色自身；{{QingCollectible:Squiresaga}} 妖刻·白隙则把同样的「切割」指向世界中的对象。
