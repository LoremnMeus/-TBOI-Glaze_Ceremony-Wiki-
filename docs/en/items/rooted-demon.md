---
title: Rooted Demon
description: "Rooted ever deeper"
slug: rooted-demon
kind: collectible
internalKey: Rooted_Demon
status: drafted
---
<p class="wiki-search-index" v-pre>根植之魔 Rooted Demon Rooted_Demon rooted-demon Rooted Demon 向更深处扎根 Rooted ever deeper 每进入新房间，根植之魔向道具历史的更深处扎根，并抛出紧邻它的上一件道具 被抛出的道具视为全新生成，重新拾取可再次触发拾取效果 抵达道具历史底部后，向上蔓延根系，以沿途道具为节点，靠近节点的敌人会被穿刺 根系覆盖整个道具历史后，会沿屏幕边缘向敌人发起大规模穿刺攻击 Upon entering each new room, Rooted Demon digs deeper into item history, ejecting the item immediately before it Ejected items are treated as newly spawned; picking them up again retriggers their pickup effects After reaching the bottom of item history, it grows roots upward through item icons, forming nodes that pierce nearby enemies Once the roots cover the entire item history, they unleash a large-scale piercing attack from the screen edges</p>

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
