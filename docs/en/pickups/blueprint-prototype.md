---
title: Item Prototype
description: "On pickup, records the displayed item as 1 prototype module Stored in Blueprint inventory, granting 1 extra installation of that item's effect Modules only; cannot be used as a cra"
slug: blueprint-prototype
kind: pickup
internalKey: Blueprint_Prototype
status: featured
---
<p class="wiki-search-index" v-pre>道具原型 Item Prototype Blueprint_Prototype blueprint-prototype Blueprint_Prototype 拾取后，将其中展示的道具记录为1份原型模块 原型模块存入蓝图仓库，可额外装配1次对应道具效果 只能作为模块使用，不能作为飞行器底座 On pickup, records the displayed item as 1 prototype module Stored in Blueprint inventory, granting 1 extra installation of that item&#x27;s effect Modules only; cannot be used as a craft base</p>

<PublicEntry slug="blueprint-prototype" lang="en" />

## Mechanics

## Effects

An Item Prototype is **not** a copy of a collectible for the player.

It copies one thing only: **one extra right to install that item into a craft**.

For example, a Brimstone prototype:

- does not give the player Brimstone;
- does not grant Brimstone's personal effect;
- **cannot** be used as a craft base;
- can install Brimstone once as a craft module.

A second Brimstone prototype is a second independent module resource. Each prototype can serve only one recipe at a time; uninstalling it returns that copy to prototype stock.

Natural spawns only happen while someone holds {{Item:blue-print}}. Shared module allocation and mirror-slot rules live on {{System:blueprint-air-flight}}.

## How they appear

### Cleared rooms

In ordinary cleared rooms where Blueprint is held and the room had clearable enemies, the base chance is:

**2% + 0.3% × Luck**, clamped to **0.5%–6%**.

Misses that meet the conditions build pity:

- from the **15th** miss the chance rises;
- the **25th** qualifying clear guarantees a spawn.

A successful spawn resets pity. With no Blueprint held, nothing drops and pity does not advance.

### Shops

- first shop visit: **12.5%**
- after Restock opportunities: **6.25%**

Shop price follows the displayed item's quality, then Restock markup and {{Collectible:64}}:

| Quality | Base price |
| ---: | ---: |
| 0–1 | 7¢ |
| 2 | 10¢ |
| 3 | 15¢ |
| 4 | 25¢ |

### Angel / Devil rooms

Prototypes in Angel and Devil rooms roll only from the matching pool's eligible modules; they do not fall back to a generic Treasure-room list.

Devil-room prototypes keep Devil tech; Angel-room prototypes keep Angel tech.

Devil-room prototypes use a separate spike price: picking one up deals a **fixed half-heart** spike hit that does not scale with quality.

## Three resource types

| Resource | Must own the real item? | Consumes allocation | Can be a base | Reuse |
| --- | --- | --- | --- | --- |
| Real item | Yes | Yes | Yes | Once per copy |
| Prototype | No | — | No | Once per copy |
| {{Collectible:619}} mirror slot | Yes | No | No | One slot per craft |

Mirror slots project tech you already hold; prototypes are independently allocatable install rights. Full mirror rules are on {{System:blueprint-air-flight}}.

## Tips

- Save strong weapon prototypes for craft that already have a solid base but lack a key attack mode.
- Deal-room prototypes keep pool theme; do not expect arbitrary Treasure-room modules in a Devil room.
- Track pity when clears keep missing; long dry streaks with Blueprint held often mean you have not reached the guarantee yet.

## Related

- {{Item:blue-print}} — required for natural prototype spawns
- {{System:blueprint-air-flight}} — bases, modules and mirror slots
- {{Character:sp-w-qing}} — the Blueprint combat character
