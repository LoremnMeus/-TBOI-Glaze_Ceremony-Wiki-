---
title: Suture Needle
description: "Death is only a broken thread"
slug: suture-needle
kind: collectible
internalKey: Suture_Needle
status: featured
---
<p class="wiki-search-index" v-pre>缝合针 Suture Needle Suture_Needle suture-needle Suture Needle 死亡只是线断了 Death is only a broken thread 自动充能 使用时缝合附近的敌人，持续数秒 期间死亡的敌人会被强行维持活动一段时间 继续攻击会拆开缝线 缝线断裂时撕裂身体并伤害附近敌人 Recharges over time Sutures nearby enemies for a few seconds Enemies that die during this window continue moving briefly Further damage causes their sutures to break faster When the sutures completely break, their bodies rupture and damage nearby enemies</p>

<PublicEntry slug="suture-needle" lang="en" />

## Mechanics

<!-- Manual body: the generator will not overwrite this file. -->

## Effects

Suture Needle turns enemies that should already be dead into short-lived, still-moving bombs you can keep damaging.

It is a timed active that fully recharges in about **5** seconds. On use it releases an expanding suture wave that marks legal enemies for about **3** seconds.

| State | Effect |
| --- | --- |
| Suture | Enemies gain a suture mark for about 3 seconds |
| Sutured corpse | A normal enemy that takes lethal damage keeps moving briefly and can still be hit |
| Rupture | When the suture runs out or further hits snap it, nearby enemies take damage |

Keep hitting a sutured corpse: it ruptures sooner **and** stores part of that follow-up damage into the final blast—especially worth it next to a pack of enemies.

Bosses can be marked, but they never enter a full sutured-corpse state. If they die while marked, they rupture immediately.

## Notes

- A few special enemies and bosses cannot be sutured.
- {{Collectible:356}}’s extra fire is ignored—you do not get a second suture wave.

## Special interactions

- {{Collectible:34}}: each sutured corpse grants **+0.2** Damage for the room, up to **+2**; resets when you leave.
- {{Collectible:584}}: spawns a dedicated wisp; sutured corpses strengthen it, and it attacks the rupture point when they burst.
- {{Seija}}: sutured corpses last longer, but further hits break the thread faster.

<details>
<summary>Technical details</summary>

- Wave radius ≈ 180; rupture radius ≈ 90.
- Normal rupture: about `1.5×` player damage plus `20%` of stored follow-up hits, capped at `6×` player damage.
- Boss death while marked: `5×` player damage blast, no corpse phase.
- Charge: `300` frames (~5 seconds).
- Seija: corpse duration ≈ 2 seconds (normally ≈ 1), break rate doubled.

</details>
