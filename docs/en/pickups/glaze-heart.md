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

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**A Glaze Heart is an adaptive catch-all heart that fits the current health bar.**

Under the vanilla health system, pickup first repairs special health:

- If a {{BrokenHeart}} Broken Heart is present, it removes 1 Broken Heart first; a **full** Glaze Heart also grants half a {{SoulHeart}} Soul Heart;
- Otherwise, if a {{RottenHeart}} Rotten Heart is present, it removes 1 Rotten Heart first;
- Only when neither is present does it choose from heart types the player already has and can still gain.

It is not an equal roll across every heart type—it tries to become the life reward that makes the most sense to pick up right now.

## What can it become?

With no Broken or Rotten Hearts to clear, it first tries to copy special hearts you already own, including:

- {{EternalHeart}} Eternal Hearts;
- {{BlackHeart}} Black Hearts;
- {{BoneHeart}} Bone Hearts;
- {{GoldenHeart}} Golden Hearts;
- {{SoulHeart}} Soul Hearts.

If none of those special attempts succeed and you can heal red hearts, it heals as a normal red heart.

If red healing is unavailable, it falls back through Soul, Black, Golden, Bone, or Eternal Hearts that you can still gain.

It will not usually give you a heart unrelated to your current health structure.

## Broken and Rotten Hearts

Under vanilla health, Broken and Rotten Hearts are not ordinary random outcomes. They have the highest priority.

While any Broken Hearts remain, a full or half Glaze Heart clears Broken Hearts before restoring normal health. A **full** Glaze Heart also grants half a Soul Heart after removing one Broken Heart; a half Glaze Heart only removes the Broken Heart.

Only after Broken Hearts are gone does Rotten Heart become the next priority. A full Glaze Heart removes 1 Rotten Heart; a half Glaze Heart removes 1 Rotten Heart and also loses half a red heart.

The more abnormal your health bar is, the more a Glaze Heart tends to "repair" it rather than simply add more health.

## Appearance

After unlock, these ordinary heart drops can glaze on spawn:

- Full red heart;
- Half red heart;
- Soul heart;
- Half soul heart;
- Scared heart;
- Blended heart.

The base conversion chance is **4%**.

Players with Broken Hearts sharply reduce glaze conversion chance. Broken Hearts therefore make existing Glaze Hearts more precious, while also making new ones harder to spawn naturally.

## With {{Item:crown-of-the-glaze}}

{{Item:crown-of-the-glaze}} strengthens the Glaze Heart loop.

Holding the crown raises the chance that ordinary hearts convert into Glaze Hearts; more copies increase that bonus further.

Each successful Glaze Heart pickup also adds 1 Crown shard to the holder.

When the crown reaches full shards, a {{Pickup:glaze-heart-half}} that would spawn is upgraded into a full Glaze Heart.

## Notes

- A Glaze Heart is only consumed after it successfully applies a health effect.
- Shop Glaze Hearts still follow normal purchase rules; they are not eaten when payment fails or no effect is available.
- With a supported custom health system installed, if you currently own a recognized custom heart type, a Glaze Heart may imitate that custom heart **before** Broken/Rotten handling. This changes priority; it is not merely an extra fallback option.

<details>
<summary>Technical details</summary>

- A full Glaze Heart heals for 2 half-heart units internally; a half heals for 1.
- Order: CustomHealthAPI custom hearts (when available) → Broken → Rotten → special-heart chance checks → red → remaining obtainable special hearts.
- Full hearts removing Broken Hearts also `AddSoulHearts(1)`; half hearts removing Rotten Hearts also `AddHearts(-1)`.
- Special-heart attempts are sequential, not an equal-weight lottery.
- Base glaze conversion is 1/25; each player with Broken Hearts adds a further 1/5 keep-check after a successful conversion roll.
- Successful pickup triggers related glaze-curse pickup effects and notifies {{Item:crown-of-the-glaze}} to add a shard.
- Crown spawn multipliers are roughly: none 1.0× (4%), 1 copy 1.5× (6%), 2 copies 1.75× (7%), 3+ copies 2.0× (8%); Seija-style weakening caps the multiplier near 1.2×.

</details>
