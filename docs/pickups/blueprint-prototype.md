---
title: 道具原型
description: "拾取后，将其中展示的道具记录为1份原型模块 原型模块存入蓝图仓库，可额外装配1次对应道具效果 只能作为模块使用，不能作为飞行器底座"
slug: blueprint-prototype
kind: pickup
internalKey: Blueprint_Prototype
status: featured
---
<p class="wiki-search-index" v-pre>道具原型 Item Prototype Blueprint_Prototype blueprint-prototype Blueprint_Prototype 拾取后，将其中展示的道具记录为1份原型模块 原型模块存入蓝图仓库，可额外装配1次对应道具效果 只能作为模块使用，不能作为飞行器底座 On pickup, records the displayed item as 1 prototype module Stored in Blueprint inventory, granting 1 extra installation of that item&#x27;s effect Modules only; cannot be used as a craft base</p>

<PublicEntry slug="blueprint-prototype" lang="zh" />

## 机制说明

## 效果

道具原型**不是**复制一件道具给你。

它复制的是：**再把这件道具装进飞行器一次的资格**。

例如你捡到一份硫磺火原型：

- 玩家不会获得硫磺火本体；
- 不会因此拥有硫磺火对角色本人的效果；
- **不能**把它当作机体底座；
- 但可以给一架机体额外安装一次硫磺火模块。

之后再捡到另一份硫磺火原型，就是第二份独立的模块资源。每份原型同一时间只能被一架机体占用一次；卸下后回到原型库存。

只有场上有人持有 {{Item:blue-print}} 时，原型才会自然出现。共通的模块占用与镜像槽规则见 {{System:blueprint-air-flight}}。

## 如何出现

### 清房

在持有蓝图、且本房曾有可清理敌人的普通清房中，原型基础出现概率为：

**2% + 0.3% × 幸运**，并限制在 **0.5%–6%**。

连续多次满足条件却未出现时会积累保底：

- 从第 **15** 次起逐渐提高；
- 第 **25** 次满足条件的清房保证触发。

出现后保底清零。无人持有蓝图时既不掉落，也不推进保底。

### 商店

- 初次进入商店：**12.5%**
- Restock 后对应机会：**6.25%**

商店价格按原型所展示道具的品质计算，并受 Restock 涨价与 {{Collectible:64}} 影响：

| 品质 | 基础价格 |
| ---: | ---: |
| 0–1 | 7¢ |
| 2 | 10¢ |
| 3 | 15¢ |
| 4 | 25¢ |

### 天使房 / 恶魔房

天使房与恶魔房里的原型只从对应道具池抽取合格模块，不会回退成“任意宝箱房技术”。

这意味着恶魔房看到的仍是恶魔向模块，天使房仍是天使向模块。

恶魔房原型使用独立尖刺售价：拾取时受到一次**固定半心**尖刺伤害，不随品质提高。

## 三种资源对照

| 资源 | 需要真实持有？ | 占用原件额度 | 可当底座 | 可重复使用 |
| --- | --- | --- | --- | --- |
| 真实道具 | 是 | 是 | 是 | 每份一次 |
| 原型 | 否 | — | 否 | 每份一次 |
| {{Collectible:619}} 镜像槽 | 是 | 否 | 否 | 每架机体一个槽 |

镜像槽是对已持有道具的投影；原型是可独立分配的额外安装权。详细镜像规则见 {{System:blueprint-air-flight}}。

## 相关内容

- {{Item:blue-print}} — 持有后原型才会自然生成
- {{System:blueprint-air-flight}} — 底座、模块与镜像槽
- {{Character:sp-w-qing}} — 以蓝图作战的角色
