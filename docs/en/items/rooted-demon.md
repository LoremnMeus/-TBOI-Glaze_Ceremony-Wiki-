---
title: Rooted Demon
description: "Rooted ever deeper"
slug: rooted-demon
kind: collectible
internalKey: Rooted_Demon
status: drafted
---
<p class="wiki-search-index" v-pre>根植之魔 Rooted Demon Rooted_Demon rooted-demon Rooted Demon 向更深处扎根 Rooted ever deeper 进入新房间后，抛出顺位的上一件道具以向下扎根 抛出的道具将视为全新生成 到底后，向上蔓延根系，靠近根系节点的敌人会被穿刺 完成蔓延后，依节点数量沿屏幕边缘发动大规模穿刺攻击 On entering a new room, ejects the preceding item in pickup order to dig deeper Ejected items are treated as newly spawned At the bottom, roots spread upward; enemies near root nodes are pierced Once fully grown, launches a large-scale piercing attack along the screen edges, scaling with the number of nodes</p>

<PublicEntry slug="rooted-demon" lang="en" />

## Mechanics

<!-- Player-facing wiki body. The exporter never overwrites it. Ordinary entries start with effects; add notes, interactions, synergies, tips, numbers, trivia, or history only when useful. -->

## Effects

Rooted Demon gradually digs through the player's item pickup history, ejecting older items as it descends. Once it reaches the bottom, it grows roots upward through the history, forming a network that attacks enemies.

**Digging downward**

- Upon first entering a new room, it ejects the nearest eligible item acquired before it, removing that item from the player's inventory and creating a corresponding pedestal in the room.
- The ejected item is treated as newly spawned. Picking it up again can retrigger its pickup effects.
- Once picked up, the item moves to the end of the pickup history, allowing Rooted Demon to descend deeper.
- Each copy can eject at most one item per new room. Multiple copies can excavate different items simultaneously.

**Growing upward**

When no eligible items remain beneath Rooted Demon, it begins growing roots upward.

- Roots spread from Rooted Demon's history icon, connecting other item icons and turning them into root nodes.
- Enemies approaching grown nodes are pierced by roots, which can strike multiple enemies along their paths.
- Once the network covers all connectable item-history nodes, remaining enemies trigger a large-scale attack. Roots rapidly spread along the screen edges, launching piercing spikes inward.
- After the attack, the roots retract, briefly recover, and begin another growth cycle.

## Notes

- Only currently held passive items and familiars are eligible for extraction. Active items, quest items, hidden items, and trinkets are excluded.
- If no eligible earlier item exists, Rooted Demon begins growing upward without ejecting an item.
- Ejected items must be picked up again to retrigger their pickup effects.
- Multiple copies contribute to a shared root network.
- Root growth and attacks depend on the item-history HUD being visible. Hiding it prevents normal root growth and attacks.
- Root growth progress is not automatically cleared when changing rooms. Changes to the item-history layout or network connections cause the roots to regrow.

<details>
<summary>Technical details</summary>

| Property | Value |
| --- | --- |
| Local node attack range | 65 game units |
| Local attack damage | 0.3× player damage |
| Per-node cooldown | 60 game frames, approximately 2 seconds |
| Perimeter attack damage | 0.66× player damage |
| Perimeter spike count | 2–17, scaling with network size |
| Additional spike hit radius | 22 game units |

Both attacks can pierce multiple enemies. Each individual spike can damage the same enemy only once.

The perimeter attack's coverage and spike count increase with the number of connected root nodes. The spike count reaches its maximum of 17 at approximately 40 connected nodes.

</details>
