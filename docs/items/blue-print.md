---
slug: blue-print
kind: collectible
internalKey: Blue_Print
title: 蓝图
description: "别担心，我有图纸"
status: reviewed
---
<p class="wiki-search-index" v-pre>蓝图 Blueprint Blue_Print blue-print Blue Print Blue Print 别担心，我有图纸 Don&#x27;t worry, I&#x27;ve got the plans 长按使用打开蓝图，制造并管理飞行器 机体底座决定基础性能，装入的道具成为攻击或功能模块 控制带宽限制同时出战的飞行器 持有蓝图时，有机会发现可用于制造的道具原型 Hold to open Blueprint and craft / manage your fleet Frame pedestals set base power; installed items become attack or utility modules Control bandwidth limits how many crafts can fight at once While held, Item Prototypes for crafting may appear</p>

<PublicEntry slug="blue-print" lang="zh" />

## 机制说明

## 效果

蓝图是 {{Character:sp-w-qing}} 用来制造和管理机群的核心工具。

道具被用于制造以后，**不会直接把该道具本体效果加到角色身上**，而是转化为飞行器的底座性能或模块行为。

长按蓝图打开管理面板，可以在三个页面之间切换：

| 页面 | 用途 |
| --- | --- |
| 编队 | 决定哪些机体启用，以及有限控制带宽优先分配给谁 |
| 制造 | 「新建设计」：为新的空行安排底座与模块 |
| 仓库 | 查看已经制造的机体，重新改装或拆除 |

短按蓝图不会打开面板，而会切换机群的**自动 / 压制**火控模式。

完整的制造、模块、带宽与原型规则见 {{System:blueprint-air-flight}}。

## 重新改装

用作底座或模块的真实道具不会被删除，而是暂时被当前配置占用。卸下模块、替换底座或拆除机体后，对应道具会重新变成可分配资源。

已经制造完成的机体也可以再次进入仓库修改，因此不需要在第一次制造时决定整局最终配置。

## 道具原型

持有蓝图时，游戏中有机会出现 {{Pickup:blueprint-prototype}}。

原型记录一件可以被蓝图使用的道具，并提供额外的一次模块安装机会；它不会增加玩家真正持有的道具数量，也不能作为机体底座。

原型的生成与使用规则见 {{Pickup:blueprint-prototype}}。

## 相关内容

- {{Character:sp-w-qing}} — 以蓝图与机群作战的角色
- {{System:blueprint-air-flight}} — 完整制造与舰队规则
- {{Pickup:blueprint-prototype}} — 额外模块资源
- {{Item:air-flight}} — 蓝图的基础机体平台
