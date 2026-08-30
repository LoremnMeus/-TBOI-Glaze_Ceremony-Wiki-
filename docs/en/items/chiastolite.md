---
title: Chiastolite
description: "Sacrifice with blood"
slug: chiastolite
kind: collectible
internalKey: Chiastolite
status: reviewed
---
<p class="wiki-search-index" v-pre>无名刃：心灾 Chiastolite Chiastolite chiastolite Chiastolite 最好以血浇灌 Sacrifice with blood 心剑会自动附身于一名敌人 目标受到伤害时，暂时斩出其当前生命的20% 被斩出的生命会在短暂延迟后飞回目标 Boss仅斩出5%，且额外伤害存在上限 A heart blade automatically possesses an enemy When that foe takes damage, temporarily cut out 20% of its current HP The cut HP flies back to the target after a short delay Bosses lose only 5%, and the bonus cut has a damage cap</p>

<PublicEntry slug="chiastolite" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Chiastolite sends a heart blade that auto-possesses an enemy. When that foe takes damage, the blade **temporarily** cuts out part of its current HP, opening a low-HP window; the cut HP later flies back.

## Cut

Each time the possessed target takes damage, an extra slice of current HP is removed:

- Normal enemies: about 20%
- Bosses: about 5%

Each extra cut counts as **at least 100 damage**, and never more than `Damage × 10`.

## HP return

Cut HP becomes a visible life entity. After a short delay (~30 frames for normals, ~10 for bosses) it returns; on contact the target regains the cut amount.

Full value comes from finishing the foe before the HP returns.

## Tips

Best with burst, execute effects, and anything that rewards a low-HP window. The damage bonus only applies while the target is below the HP threshold.

## Synergies

### {{Collectible:706}}

Abyss locusts cut out a small amount of HP.
