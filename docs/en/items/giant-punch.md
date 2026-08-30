---
title: Giant Punch
description: "God-o-hand-o-Crash!"
slug: giant-punch
kind: collectible
internalKey: Giant_Punch
status: reviewed
---
<p class="wiki-search-index" v-pre>巨大化 Giant Punch Giant_Punch giant-punch Giant Punch 神※拳※粉※碎 God-o-hand-o-Crash! ↑ 生命未满时，角色巨大化，攻击翻倍 ↓ 满血后拥有额外生命时，角色缩小，攻击减半 ↑ While below normal full health, grow larger and deal double damage ↓ While holding health beyond normal capacity, shrink and deal half damage</p>

<PublicEntry slug="giant-punch" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Giant Punch turns a health disadvantage into an attack advantage, and reverses into a penalty when health exceeds a normal full value.

| Current health | Effect |
| --- | --- |
| Below normal capacity | Size ×1.25 and {{Damage}} damage ×2 |
| Equal to normal capacity | No change |
| Above normal capacity | Size ×0.75 and {{Damage}} damage ×0.5 |

For ordinary characters, “normal capacity” is red-heart containers plus bone-heart capacity. Soul, black, and eternal hearts raise current health without raising that baseline.

For example, with 6 red-heart containers of normal capacity:

- 5 hearts of current health: grow;
- heal back to 6: return to normal;
- fill red hearts and then pick up a soul heart so total health exceeds 6: shrink.

## Special characters

Keeper characters with Coin Hearts compare current Coin Hearts to Coin Heart capacity: unfilled capacity grows them, a full fill returns them to normal.

Characters with no red-heart capacity that still use another health resource (such as soul hearts) lock a baseline from their current health the first time they obtain Giant Punch. Falling below that baseline grows them; exceeding it shrinks them.

Characters with no comparable health resource stay neutral.

## Trivia

Giant Punch references the Yu-Gi-Oh! Equip Spell of the same Chinese name (Megamorph). The original card doubles or halves a monster's original ATK according to relative Life Points; this mod expresses that reversal through current health versus normal capacity.
