---
title: Nazca
description: "Earthbound Deity"
slug: nazca
kind: collectible
internalKey: Nazca
status: drafted
---
<p class="wiki-search-index" v-pre>纳兹卡巨画 Nazca Nazca nazca Nazca 神明立于尘埃之上 Earthbound Deity 在房间中不断绘制地缚图线 敌人站在线上会持续受到伤害 站在线上时，根据图线浓度提高 攻击与 移速 Keeps drawing earthbound lines across the room Enemies standing on the lines take damage over time Standing on denser lines raises and</p>

<PublicEntry slug="nazca" lang="en" />

## Mechanics

<!-- Manual body. -->

## Effects

**Nazca gradually paints earthbound lines across the floor. Those lines are part of the fight, not just VFX.**

Invisible painters start near you. Re-tracing the same cells raises density, and the look matches gameplay strength.

## Drawing

- About **3** painters for the first copy; each extra copy adds +1.
- Higher floors draw faster instead of spawning more entities.
- Each room starts fresh; lines clear on leave.

## Standing on lines

Denser lines underfoot:

- multiplicative {{Damage}} (capped);
- a small {{Speed}} bonus.

## Enemies on lines

Enemies on heated cells take periodic damage; denser lines hurt more. Damage is attributed to the owning player.

## Notes

- Don’t only chase foes—stand on thick paint to use it as your own ground.
- Extra copies add a painter and raise the per-cell density cap.
- Lines do not persist across rooms.

## Synergies

### {{Seija}}

Only **1** painter, with a lower density cap.

### {{Collectible:706}}

Abyss spawns three matching locusts.

## Tips

- Thicken a safe zone first, then pull enemies into the painted ground.
- Duplicates are for a larger field, not an instant room clear.

<details>
<summary>Technical details</summary>

- First copy: 3 painters; +1 painter and heat cap `10 + 2×(copies−1)` per extra.
- Player damage ≈ +3% mul per heat (cap +50%); speed ≈ +0.015 per heat.
- Enemy damage ≈ every 10 frames `0.15 × Damage × heat`.
- Seija: 1 painter, heat cap ≤ 5.
- Logic painters + per-player heat map + floor visuals; no controllable familiars.

</details>
