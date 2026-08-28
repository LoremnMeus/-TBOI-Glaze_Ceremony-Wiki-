---
title: 空行零号·试作型
description: "滴..注入成功.."
slug: air-flight
kind: collectible
internalKey: Air_Flight
status: reviewed
---
<p class="wiki-search-index" v-pre>空行零号·试作型 AF-00 Prototype Air_Flight air-flight Air Flight 滴..注入成功.. Hello World 与你攻击方式相同，自动攻击敌人的小跟班 A baby mimics your attack and automaticly targets enemies</p>

<PublicEntry slug="air-flight" lang="zh" />

## 机制说明

## 效果

空行零号·试作型既是一件自动模仿玩家攻击的宝宝道具，也是 {{Character:sp-w-qing}} 在 {{System:blueprint-air-flight}} 中**唯一的标准机体平台**。

里小青用蓝图制造的所有正式飞行器，都以 AF-00 技术为基础；机群之间的差异来自底座与模块设计，而不是第二种底盘。

## 作为普通道具

被非蓝图角色拾取，或作为普通收藏品宝宝存在时：

- 它会自动寻找敌人；
- 攻击方式尽量模仿玩家本人；
- 行为接近“跟班复制你的射击”。

此时它不读取蓝图配方，也不使用底座 / 模块构筑。

## 作为 Blueprint 的基础机体

当它由 {{Item:blue-print}} 制造出来时，不再简单复制青本人——里小青本人也不会普通射泪。

每一架设计都会读取自己的制造档案，拥有独立的伤害、射速、弹速、射程、幸运、移速、主武器、泪弹特性和模块行为，并可以挂接附属宝宝。完成的设计按序列显示为 **空行01号、空行02号……**。

心智模型是：

- **底座**决定机体规模与基础性能；
- **模块**决定攻击方式与特殊能力。

共通的底座品质、占用、带宽与编队规则见 {{System:blueprint-air-flight}}。

### 第一架免费设计

空行零号是原型机技术。{{Character:sp-w-qing}} 的第一架正式设计不需要占用底座道具，固定按品质 2 底座计算（3 个模块槽、1.00× 基础倍率）。仓库中已有正式机体后，继续「新建设计」需要为底座分配一件真实道具。

## 注意

- 不要用“里青不能射泪，空行复制谁？”来理解蓝图机体：蓝图空行打的是自己的配置，不是青的泪弹。
- 普通道具形态与蓝图机体形态共用同一收藏品条目，但战斗逻辑不同。

## 相关内容

- {{Item:blue-print}} — 打开制造与管理面板
- {{System:blueprint-air-flight}} — 机群共通规则
