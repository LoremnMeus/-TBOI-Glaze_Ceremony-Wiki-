---
title: Glaze Heart
description: "Imitates an obtainable heart based on your health Priority: remove Broken Hearts and Rotten Hearts"
slug: glaze-heart
kind: pickup
internalKey: Glaze_heart
status: featured
---
<p class="wiki-search-index" v-pre>琉璃之心 Glaze Heart Glaze_heart glaze-heart Glaze_heart 根据当前生命模仿一种可获得的心 优先抵消 碎心与 腐心 Imitates an obtainable heart based on your health Priority: remove Broken Hearts and Rotten Hearts</p>

<PublicEntry slug="glaze-heart" lang="en" />

## Mechanics

## Effects

**A Glaze Heart is an adaptive heart that fits the current health bar.**

On pickup it repairs abnormal health first, then picks the best available reward for the current layout:

1. {{BrokenHeart}} Broken Hearts: remove 1; a full Glaze Heart also grants half a {{SoulHeart}};
2. Else {{RottenHeart}} Rotten Hearts: remove 1;
3. Else try to copy a special heart the player already has and can still gain (Eternal / Black / Bone / Gold / Soul);
4. Else heal red hearts when possible; otherwise fall back among still-gainable special hearts.

It is not a flat random draw among every heart type.

Half-heart differences: {{Pickup:glaze-heart-half}}.

## Appearance

After unlock, full/half red, soul, half-soul, scared, and blended hearts can glaze at about **4%**.

Broken Hearts on any player make new Glaze Hearts harder to spawn.

## With {{Item:crown-of-the-glaze}}

Crowns raise convert chance; each successful pickup adds 1 shard. At full shards, a would-be {{Pickup:glaze-heart-half}} upgrades into a full Glaze Heart.

## Notes

- Consumed only when a health effect succeeds.
- Shop stock still requires a normal purchase.
- Supported custom health may settle before Broken/Rotten Hearts and change priority.
