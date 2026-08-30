---
title: Squiresaga
description: "My blade burns"
slug: squiresaga
kind: collectible
internalKey: Squiresaga
status: reviewed
---
<p class="wiki-search-index" v-pre>妖刻·白隙 Squiresaga Squiresaga squiresaga Squiresaga 物皆有间 My blade burns 使用后挥刀选择附近的对象，斩开它的“间隙” 在间隙中查看并修改该对象支持的属性 可作用于敌人、掉落物、机关与部分地形 不同对象可修改的内容不同 Use to swing the blade and select a nearby object, cutting open its &quot;gap&quot; Inspect and modify attributes supported by that object Works on enemies, pickups, mechanisms, and some grid entities Available attributes depend on the target</p>

<PublicEntry slug="squiresaga" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Squiresaga cuts open the “gap” within room objects and changes the properties exposed inside.**

Use it to choose a swing direction. When the blade hits an editable target, the game pauses and opens that object's “gap.” The panel only lists attributes supported by the current target; navigate between entries, adjust values or switch available states, then exit to apply the changes immediately.

Editable targets broadly include:

- Enemies and ordinary entities: health, size, movement, collision, status, and other target-specific properties.
- Pickups and item pedestals: type, price, charge, touched state, and some display states.
- Bombs, machines, and familiars: damage, collision, state, or properties specific to that category.
- Room mechanisms and grid entities: doors, poop, pits, pressure plates, TNT, locks, trapdoors, crawlspace entrances, webs, and spikes.

## Notes

- Not every object can be selected. Players, tears, lasers, knives, enemy projectiles, and most purely visual effects are excluded as targets.
- Available entries depend on the exact target. One object lacking an option does not imply that every object in its broader category lacks it.
- Changes affect only the current target and do not transfer when it disappears, resets, or is replaced.

## Related

{{Item:spectralsword}} modifies its holder; Squiresaga applies the same idea of “cutting” to objects in the room.
