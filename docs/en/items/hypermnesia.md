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

**Hypermnesia rewards every duplicate copy on your character and is not affected by {{Item:memory}}'s replacement.**

While held, it totals **extra copies** across your inventory (the first copy of each item does not count; each additional copy adds one) and grants stats from that total. Each extra duplicate copy grants:

| Stat | Bonus |
| --- | --- |
| Speed | +0.05 |
| Tears | +0.15 |
| Damage | +0.5 |
| Range | +1 |
| Luck | +1 |

{{Item:memory}} does not replace Hypermnesia, so the two combine naturally: Memory manufactures repeats, Hypermnesia converts them into stats. See {{Item:memory}}.

## Notes

- Duplicate count combines **all players** in co-op (same scope as Memory's candidate pool).
- Quest items are excluded from the count.
- Hypermnesia is a [Rainbow](/en/systems/rainbow) item with no vanilla icon basis.

<details>
<summary>Technical details</summary>

- Duplicate count: `auxi.get_player_s_item_count` (sum of `GetCollectibleNum - 1` per item, quest excluded).
- Per duplicate point: +0.05 Speed, +0.15 Tears, +0.5 Damage, +40 internal Range (displayed as +1), +1 Luck (via `EvaluateCache`).
- {{Item:memory}} lists Hypermnesia in `ignorers`; replacement callbacks skip it.

</details>
