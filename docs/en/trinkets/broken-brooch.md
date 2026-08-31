---
title: Broken Brooch
description: "Time is enough to change everything"
slug: broken-brooch
kind: trinket
internalKey: Broken_Brooch
status: reviewed
---
<p class="wiki-search-index" v-pre>破碎的胸针 Broken Brooch Broken_Brooch broken-brooch Broken Brooch 时间足以改变一切 Time is enough to change everything 清理房间后小概率强化攻击、射速、移速或射程中的较弱项 After clearing a room, small chance to buff the weaker of Damage / Tears / Speed / Range</p>

<PublicEntry slug="broken-brooch" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Broken Brooch occasionally buffs the relatively weakest core stat when a room is cleared.**

Each clear has a small chance to fire. On success it compares:

- {{Damage}} Damage;
- {{Tears}} Tears;
- {{Speed}} Speed;
- {{Range}} Range;

and strengthens the relatively weakest of those four.

Approximate per-proc gains:

| Stat | Gain |
| --- | ---: |
| Damage | +0.25 |
| Tears | +0.25 |
| Speed | +0.05 |
| Range | +0.25 |

"Weakest" is not a raw panel-number comparison—stats are normalized onto one scale first. Do not read "3.5 Damage is larger than 1.0 Speed" as the selection rule.

Luck and Shot Speed are not part of this weakest-stat pick. Each effective copy rolls the clear chance separately.

## Trivia

- Broken Brooch is what remains after {{Item:core-brooch}} spends its 10 choices and shatters.
- Intact Core Brooch redistributes stats by choosing one boost and sacrificing two others; after it breaks, it no longer asks for a choice and instead slowly patches the lagging core stats across later clears.
