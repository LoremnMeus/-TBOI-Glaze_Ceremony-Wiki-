---
title: Nazca
description: "Earthbound Deity"
slug: nazca
kind: collectible
internalKey: Nazca
status: reviewed
---
<p class="wiki-search-index" v-pre>纳兹卡巨画 Nazca Nazca nazca Nazca 神明立于尘埃之上 Earthbound Deity 在房间中不断绘制地缚图线 敌人站在线上会持续受到伤害 站在线上时，根据图线浓度提高 攻击与 移速 Keeps drawing earthbound lines across the room Enemies standing on the lines take damage over time Standing on denser lines raises Damage and Speed</p>

<PublicEntry slug="nazca" lang="en" />

## Mechanics

<!-- Manual body. -->

## Effects

**Nazca sends several visible brushes wandering through the room, continually painting lines across the floor. Repeated passes make the lines denser.**

Standing on painted lines raises damage and speed, while enemies standing on them take continuous damage. Denser lines strengthen both effects.

## Drawing

- Brushes begin drawing near the character in each new room.
- They avoid obstacles and prefer areas that have not been painted yet.
- Repeated passes increase line density.
- The room's drawing disappears when you leave.

## Line effects

Denser lines underfoot:

- {{Damage}} up;
- {{Speed}} up.

Enemies on heated cells take periodic damage; denser lines hurt more.

## Extra copies

Each extra copy adds 2 brushes and raises the maximum density an area can accumulate. Brush count also rises slightly with floor progress.

## Synergies

### {{Seija}}

Only **1** painter, with a lower density cap.

### {{Collectible:706}}

Abyss spawns three matching locusts.

## Tips

- Thicken a safe zone first, then pull enemies into the painted ground.
- Fighting around repeatedly painted areas lets you use both the stat bonuses and the line damage at once.

<details>
<summary>Technical details</summary>

- Brush count: `copies × 2 + 4 + floor(stage / 2)` (usually 6+ from the first copy); density cap `10 + 2×(copies−1)`.
- Player damage ≈ +3% mul per heat (cap +50%); speed ≈ +0.015 per heat.
- Enemy damage ≈ every 10 frames `0.15 × Damage × heat`.
- Seija: 1 painter, heat cap ≤ 5.

</details>
