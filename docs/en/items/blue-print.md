---
slug: blue-print
kind: collectible
internalKey: Blue_Print
title: Blueprint
description: "Don't worry, I've got the plans"
status: reviewed
---
<p class="wiki-search-index" v-pre>蓝图 Blueprint Blue_Print blue-print Blue Print Blue Print 别担心，我有图纸 Don&#x27;t worry, I&#x27;ve got the plans 长按使用打开蓝图，制造并管理飞行器 机体底座决定基础性能，装入的道具成为攻击或功能模块 电池 控制带宽限制同时出战的飞行器 持有蓝图时，有机会发现可用于制造的道具原型 Hold to open Blueprint and craft / manage your fleet Frame pedestals set base power; installed items become attack or utility modules Battery Control bandwidth limits how many crafts can fight at once While held, Item Prototypes for crafting may appear</p>

<PublicEntry slug="blue-print" lang="en" />

## Mechanics

## Effects

Blueprint is {{Character:sp-w-qing}}'s core tool for manufacturing and managing the craft fleet.

Items used in manufacturing do **not** apply their normal collectible effects to the player; they become craft frame power or module behavior instead.

Hold Blueprint to open the management panel and switch between three tabs:

| Tab | Purpose |
| --- | --- |
| Formation | Which craft are enabled, and who receives limited control bandwidth first |
| Build | **New Design**: assign a base and modules for a new Air Flight |
| Stock | Inspect manufactured craft, refit them, or dismantle them |

A short press does not open the panel; it toggles the fleet between **Auto** and **Force** fire control.

Full manufacturing, module, bandwidth and prototype rules live on {{System:blueprint-air-flight}}.

## Refitting

Items used as a base or module are not deleted; they are temporarily allocated to the current loadout. Uninstalling a module, swapping a base, or dismantling a craft returns that item to the allocatable pool.

Finished craft can be changed again in Stock, so the first build does not have to lock in a whole-run loadout.

## Item Prototypes

While Blueprint is held, {{Pickup:blueprint-prototype}} can appear in the run.

A prototype records one item Blueprint can use and grants one extra module installation. It does not increase how many collectibles you actually own, and it cannot serve as a craft base.

Spawn and usage rules are on {{Pickup:blueprint-prototype}}.

## Related

- {{Character:sp-w-qing}} — the character who fights with Blueprint fleets
- {{System:blueprint-air-flight}} — shared manufacturing and fleet rules
- {{Pickup:blueprint-prototype}} — extra module resources
- {{Item:air-flight}} — Blueprint's base craft platform
