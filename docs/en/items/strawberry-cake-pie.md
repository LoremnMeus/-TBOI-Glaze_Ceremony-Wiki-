---
title: Strawberry Cake Pie
description: "One more slice!"
slug: strawberry-cake-pie
kind: collectible
internalKey: Cake_Berry
status: drafted
---
<p class="wiki-search-index" v-pre>草莓蛋糕派 Strawberry Cake Pie Cake_Berry strawberry-cake-pie Strawberry Cake Pie 再来一块！ One more slice! +1心之容器，回复1红心 概率额外发射弹跳蛋糕 蛋糕每次碰撞都会洒落伤害周围敌人的碎屑，并造成减速 +1 heart container and restores 1 red heart Chance to fire an additional bouncing cake Each collision scatters damaging crumbs and slows nearby enemies</p>

<PublicEntry slug="strawberry-cake-pie" lang="en" />

## Mechanics

## Effects

Picking up the item grants one heart container and restores one red heart.

Attacks have a chance to throw an extra strawberry cake. The cake deals normal tear damage and bounces between enemies, walls, and rocks.

Each collision scatters cake crumbs, deals area damage and slowing to nearby enemies, and grants extra flight time so the cake can keep bouncing around the room.

When the cake disappears, it bursts into more crumbs.

## Notes

- Hitting walls and rocks also triggers area damage and slowing.
- Each collision's area damage hits every nearby enemy at most once and does not scale with crumb count.
- Extra flight time from collisions has a cumulative cap.
- The disappearance burst is visual only and does not deal another round of area damage or slowing.

<details>
<summary>Values</summary>

- Trigger chance per attack: 8% + Luck × 2%, from a minimum of 8% to a maximum of 34%.
- Direct cake hits deal 1× the player's damage.
- Each collision deals 0.3× the player's damage to enemies within 80 pixels and applies a 45-frame slow at a 0.7 factor.
- Each collision grants 12 frames of extra flight time, up to 36 frames total.

</details>
