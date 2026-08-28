---
slug: blue-print
kind: collectible
internalKey: Blue_Print
title: Blueprint
description: "Don't worry, I've got the plans"
status: reviewed
---
<p class="wiki-search-index" v-pre>蓝图 Blueprint Blue_Print blue-print Blue Print Blue Print 别担心，我有图纸 Don&#x27;t worry, I&#x27;ve got the plans 长按打开蓝图，制造并管理飞行器 底座决定机体性能，模块赋予攻击与特殊能力 控制带宽决定当前能够出战的机体 持有时有机会发现道具原型 Hold to open Blueprint and manage your craft fleet Base frames set craft power; modules grant attacks and abilities Control bandwidth limits how many crafts can fight at once While held, Item Prototypes may appear</p>

<PublicEntry slug="blue-print" lang="en" />

## Mechanics

## Effects

Blueprint is {{Character:sp-w-qing}}'s core tool for manufacturing and managing the craft fleet.

Hold Blueprint to open the management panel and switch between three tabs:

| Tab | Purpose |
| --- | --- |
| Formation | Which craft are enabled, and who receives limited control bandwidth first |
| Build | **New Design**: assign a base and modules for a new Air Flight |
| Stock | Inspect manufactured craft, refit them, or dismantle them |

A short press does not open the panel; it toggles the fleet between **Auto** and **Force** fire control.

Full manufacturing, module, bandwidth and prototype rules live on {{System:blueprint-air-flight}}.

## Refitting

Blueprint does not permanently consume items used in a recipe.

Items assigned as a base or module still belong to the player; Blueprint only marks them as currently allocated. Uninstalling a module, swapping a base, or dismantling a craft returns that item to the allocatable pool.

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
