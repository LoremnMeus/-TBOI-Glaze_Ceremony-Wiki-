---
title: Book of Vision
description: "See twice"
slug: book-of-vision
kind: collectible
internalKey: Book_of_Vision
status: reviewed
---
<p class="wiki-search-index" v-pre>觅之书 Book of Vision Book_of_Vision book-of-vision Book of Vision 看见两次 See twice 本房间内基础资源的获得与消耗都会重复一次 获得时额外转化为3个对应基础资源 Basic resource gains and spends in this room are applied again also grant 3 matching basic resources</p>

<PublicEntry slug="book-of-vision" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Book of Vision does not clone floor pickups. It applies your basic resource changes a second time for the rest of this room.**

After use, a “double vision” state lasts until you leave the room. Whenever a tracked basic resource goes up or down, that same delta is applied again:

- Pick up 1 coin → +2 total
- Spend 1 coin → −2 total
- Place 1 bomb → spend 2
- Pick up 1 key → +2 total

Gains and costs both scale. Shop payments, door unlocks, chests, donation machines, and beggars that change those resources are included.

## Special resources

Gaining a {{GoldenBomb}} or {{GoldenKey}} does not simply clone the infinite flag. It also grants **3** matching normal bombs / keys per vision stack.

## Notes

- Room-only; cleared on room change.
- Does not clone pedestals, cards, pills, or chests themselves—only tracked basic resource deltas.
- Tracked kinds: bombs, keys, coins, red / gold / soul / eternal / rotten / bone hearts, plus golden bomb / key conversion.

## Synergies

### {{Collectible:356}}

Car Battery adds another vision stack. A normal use plus Car Battery makes basic resource changes about **triple** (original + two vision layers).

### {{Collectible:584}}

Each Vision wisp, on the next **resource gain**, duplicates that gain once more and then extinguishes. Wisps can fire even without an active vision stack.

### {{Collectible:59}}

Under Belial, each **gain** of a heart-type resource also grants half a black heart. Losing hearts does not grant black hearts this way.

## Tips

- Avoid expensive spends while vision is active; unlocks and bomb placements cost double.
- Golden Bomb / Key conversion is a strong burst window under vision.
- Save Virtue wisps for large gains instead of tiny pickups.

<details>
<summary>Technical details</summary>

- Charge 5; quality 2.
- Vision stacks can stack and clear when you leave the room.
- Extra resource changes caused by this item do not retrigger itself.
- Belial black hearts only on heart-type gains, not on losses.

</details>
