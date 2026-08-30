---
title: Pendulum Star
description: "Scale set"
slug: pendulum-star
kind: collectible
internalKey: Pendulum_Star
status: drafted
---
<p class="wiki-search-index" v-pre>回荡之星 Pendulum Star Pendulum_Star pendulum-star Pendulum Star 刻度设置完毕 Scale set 生成一对摆动的灵摆星 穿过两星之间的泪弹会被记录 灵摆摆至最低点时，从另一侧再次召唤这些泪弹 Spawns a pair of swinging pendulum stars Tears that cross between them are recorded At the next bottom of the swing, those tears are resummoned from the opposite star</p>

<PublicEntry slug="pendulum-star" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Pendulum Star is not a normal attacking familiar. Two stars hang like a mirrored pendulum pair; tears that cross the scale between them are remembered, then resummoned from the opposite star at the next lowest swing.**

While held, there is always exactly **one pair** of mirrored pendulum stars (left and right). Extra copies do not spawn more stars. A visible scale line runs between them. The pair swings in sync; the stars themselves do not collide, do not auto-aim, and do not deal contact damage.

Only Isaac’s own **tears** count. A tear that crosses the scale line once while flying is registered (echo tears and already-marked tears are not registered again). The snapshot keeps velocity, damage, flags, and similar tear data.

At the next **lowest point** of the swing, stored tears are fired again from the **opposite** star: tears registered nearer the left star come from the right, and vice versa. Echo damage is about **75%** of the original tear; with {{Collectible:247}} it becomes **100%**. Memory capacity is **12**, plus **+4** per extra copy of this item.

## Notes

- Non-tear attacks (lasers, bombs, knives, and so on) are not recorded by the scale.
- The stars do not aim for Isaac; tears must cross the scale line between them.
- Each tear is registered once; echo tears are marked so they do not refill memory.

## Tips

- Shooting across the scale between the stars fills memory more reliably than aiming at a single star.
- For a burst, bank several crossings first, then take the echo volley at the next bottom.

<details>
<summary>Technical details</summary>

- `CheckFamiliar` count is fixed at 2; extra copies only change the memory cap `12 + 4×(copies−1)` and a small echo damage bonus (with {{Collectible:247}}, damage multiplier is at least 1.0).
- Firing echoes clears the current memory; phase advances on the left star and triggers when sine crosses zero at the bottom.

</details>
