---
title: 小青
description: "灾难之先导"
slug: w-qing
kind: character
internalKey: wq
status: featured
---
<p class="wiki-search-index" v-pre>小青 Qing wq w-qing W.Qing 灾难之先导 The Precursor of Nitimity 投掷小刀攻击敌人，插入物体的小刀同时会成为可返回的瞬移坐标 利用小刀可在攻击与位移之间快速改变自身位置 必要时会自动留下小刀，避免玩家被困 Throw knives to attack; knives lodged in objects also become teleport coordinates Use them to rapidly reposition between attacks When necessary, a knife is automatically placed to prevent becoming trapped</p>

<PublicEntry slug="w-qing" lang="zh" />

## 机制说明

### 关键词：灾难之先导

小青的每一次攻击都可能为下一次行动留下方向。她用刀处理眼前的敌人，也用留在场上的刀规划之后的位置。

### 角色概览

{{Character:w-qing}} 使用小刀取代普通眼泪。她既能近距离挥砍，也能把刀投向远处；成功插入目标的刀还会成为可返回的坐标。因此完整循环并非单纯投掷，而是“挥砍处理近身目标 → 投刀建立坐标 → 借刀改变位置 → 再次攻击”。

### 挥砍、投刀与插刀

敌人已经进入近身范围时，挥砍能直接而稳定地输出，不必为了触发角色机制而强行投刀。面对远处目标、需要穿越危险区域或准备撤退路线时，投刀同时具有伤害与布局价值。

投出的刀可以插入敌人、拾取物及部分有效对象。留下的刀不只是攻击残留：使用角色的返回操作后，小青会迅速前往选中的插刀位置，并回收对应的小刀。若存在多个可用坐标，系统会依次维护它们，而不是把所有刀视作同一个落点。

### 防困保护

小青的移动能力依赖插刀，但系统会避免这套机制把玩家永久困在无法正常离开的区域。缺少安全坐标时，会保留必要的小刀作为脱困路径。它是保底机制，不代表每次投刀都能无视房间地形。

### 使用技巧

好位置往往同时满足两个条件：现在能打中目标，之后又适合进攻或撤离。敌人贴身时先挥砍更自然；需要跨越距离、切换 Boss 两侧或预留退路时，再让投刀承担布局工作。
