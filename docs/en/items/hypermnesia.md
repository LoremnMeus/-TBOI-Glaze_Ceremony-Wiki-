---
title: Hypermnesia
description: "Foreverevereverevereverever"
slug: hypermnesia
kind: collectible
internalKey: Hypermnesia
status: reviewed
---
<p class="wiki-search-index" v-pre>超忆症 Hypermnesia Hypermnesia hypermnesia Hypermnesia 未来来来来来来来来来来 Foreverevereverevereverever 你身上每个重复的道具为你提供额外属性加成 +0.5攻击 +0.15射速 +1射程 +0.05移速 +1幸运 此道具的生成不受道具回忆影响 Gain bonus for every repetitive item that Isaac has +0.5 Damage up +0.15 Tear up +1 Range up +0.05 Speed up +1 Luck up This item is not affected by memory</p>

<PublicEntry slug="hypermnesia" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Hypermnesia rewards every duplicate copy on your character and is not affected by {{Item:memory}}'s replacement.** It is the growth outlet built for Memory runs.

While held, it totals **extra copies** across your inventory (the first copy of each item does not count; each additional copy adds one) and grants stats from that total:

- Speed, Tears, Damage, Range, and Luck all scale with duplicate count.

When {{Item:memory}} keeps spawning items you already own, Hypermnesia turns those repeats—often weak on their own—into reliable stat growth.

## Notes

- Duplicate count combines **all players** in co-op (same scope as Memory's candidate pool).
- Quest items are excluded from the count.
- Even while Memory is active, Hypermnesia can still spawn normally and is never swapped for an owned duplicate.

## Related items

### {{Item:memory}}

Memory makes later collectible rolls keep returning to what you already hold. Many Isaac items do not scale well when duplicated, so Memory alone can lock you into low-value repeats.

Hypermnesia exists to fix that: **make duplication itself valuable**. Together, Memory manufactures repeats and Hypermnesia converts them into stats.

<details>
<summary>Technical details</summary>

- Duplicate count: `auxi.get_player_s_item_count` (sum of `GetCollectibleNum - 1` per item, quest excluded).
- Per duplicate point: +0.05 Speed, +0.15 Tears, +0.5 Damage, +40 Range, +1 Luck (via `EvaluateCache`).
- {{Item:memory}} lists Hypermnesia in `ignorers`; replacement callbacks skip it.

</details>
