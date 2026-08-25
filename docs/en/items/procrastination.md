---
title: Procrastination
description: "I'll do it soon..."
slug: procrastination
kind: collectible
internalKey: Procrastination
status: featured
---
<p class="wiki-search-index" v-pre>拖延症 Procrastination Procrastination procrastination Procrastination 马上就做…… I&#x27;ll do it soon... 持有后每经过30秒，永久获得 +0.1攻击 每层最多累计 +1攻击 击杀任意Boss后，立即停止本层的攻击增长 包含Boss敌人的房间门始终保持开启 While held, permanently gain +0.1 every 30 seconds Accumulate up to +1 per floor Killing any boss immediately stops this floor&#x27;s damage growth Doors in rooms with living bosses stay open</p>

<PublicEntry slug="procrastination" lang="en" />

## Mechanics

Procrastination rewards exploring before killing a boss. While held, it permanently grants damage every 30 seconds until the floor's cap is reached or any boss dies. As long as the current room contains a living boss, combat cannot lock its doors, allowing the fight to be left and resumed later.

## Effects

| Rule | Value |
| --- | ---: |
| Growth interval | 30 seconds |
| Damage per interval | {{Damage}} +0.1 |
| Maximum per floor | {{Damage}} +1 |

On a new floor, the timer restarts and the amount gained toward the current floor is cleared, reopening up to +1 of growth. Previously earned permanent damage remains, and the boss-stop state is cleared.

## Details

- Killing any enemy marked as a boss immediately stops growth for the current floor.
- Multiple copies increase the damage gained every 30 seconds, but the combined floor cap remains +1. With 2 copies, for example, each interval grants +0.2 and the cap is reached in about 150 seconds.

## Tips

- If shops, treasure rooms or side paths remain, explore them before fighting the boss.
- Normal room clearing, shopping and exploration all count; there is no need to stand still and wait.

<details>
<summary>Technical details</summary>

Permanent damage and per-floor gain are tracked per player, while the boss-stop state is shared by the floor. In multiplayer, any boss death therefore stops growth for every player holding Procrastination that floor.

</details>
