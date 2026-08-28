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

**A Glaze Heart looks at your current health layout, then tries to become something that layout actually needs.**

On pickup, it first checks for health that needs repair:

- If you have a {{BrokenHeart}} Broken Heart, it removes 1 Broken Heart first;
- Otherwise, if you have a {{RottenHeart}} Rotten Heart, it processes 1 Rotten Heart first;
- Only when neither is present does it choose an effect from heart types you already have and can still gain.

So it is not an equal roll across every heart type. It behaves more like an adaptive catch-all heart.

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

Broken and Rotten Hearts are not ordinary random outcomes. They have the highest priority.

While any Broken Hearts remain, a Glaze Heart will clear Broken Hearts instead of restoring normal health.

Only after Broken Hearts are gone does Rotten Heart become the next priority.

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

When the crown reaches full shards, a {{Pickup:glaze-heart-half}} Half Glaze Heart that would spawn is upgraded into a full Glaze Heart.

## Tips

- **Pick it up first while you have Broken Hearts.** Clearing Broken Hearts is usually more valuable than treating it as normal healing.
- **It is reliable when you are missing red health.** If special-heart attempts fail and you can heal red, it becomes red healing.
- **To copy a special heart, own it first.** Black, Bone, Golden, and Eternal results all require that type to already exist on your health bar.
- **The crown makes it more common.** In a {{Item:crown-of-the-glaze}} build, Glaze Hearts are both a reward and fuel for more shards.
- **It will not waste itself.** If no acceptable outcome exists, it cannot be picked up.

## Notes

- A Glaze Heart is only consumed after it successfully applies a health effect.
- Shop Glaze Hearts still follow normal purchase rules; they are not eaten when payment fails or no effect is available.
- With a supported custom health system installed, it can also imitate some custom hearts you already have.

<details>
<summary>Technical details</summary>

- A full Glaze Heart heals for 2 half-heart units internally.
- Vanilla health priority is: Broken → Rotten → special-heart chance checks → red → remaining obtainable special hearts.
- Special-heart attempts are sequential, not an equal-weight lottery; do not treat each check rate as a final result chance.
- Base glaze conversion is 1/25.
- Each player with Broken Hearts adds a further 1/5 keep-check after a successful conversion roll.
- CustomHealthAPI custom hearts that are not banned and currently owned are tried before Broken/Rotten handling.
- Successful pickup triggers related glaze-curse pickup effects and notifies {{Item:crown-of-the-glaze}} to add a shard.
- Crown spawn multipliers are roughly: none 1.0× (4%), 1 copy 1.5× (6%), 2 copies 1.75× (7%), 3+ copies 2.0× (8%); Seija-style weakening caps the multiplier near 1.2×.

</details>
