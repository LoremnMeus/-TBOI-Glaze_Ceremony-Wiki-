---
title: D++
description: "Stitching to death"
slug: d-plus
kind: collectible
internalKey: D_Plus
status: reviewed
---
<p class="wiki-search-index" v-pre>D++ D++ D_Plus d-plus D Plus 缝合致死 Stitching to death 至少1格充能即可使用，并消耗全部充能 消耗几格充能，就将骰子编号向上推进几格 到达新编号后，同时触发对应的骰子效果 D1始终触发 Usable with at least 1 charge; spends all charges Advances the die number by the charges spent On the new number, triggers every matching die at once D1 always fires</p>

<PublicEntry slug="d-plus" lang="en" />

## Mechanics


<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**D++ advances the current die number by the charges spent on use, then triggers every die that matches the new number at once.**

- {{Battery}} Max **6** charges; usable with at least **1**, spending all current charges at once.
- Spending N charges increases the die number by N.
- On the new number, every die whose number divides that value fires together.
- {{Collectible:476}} **D1 always fires.**

### Which dice fire

| New number is… | Triggers |
| --- | --- |
| Multiple of 4 | {{Collectible:284}} D4 |
| Multiple of 6 | {{Collectible:105}} D6 |
| Multiple of 7 | {{Collectible:437}} D7 |
| Multiple of 8 | {{Collectible:406}} D8 |
| Multiple of 10 | {{Collectible:285}} D10 |
| Multiple of 12 | {{Collectible:386}} D12 |
| Multiple of 20 | {{Collectible:166}} D20 |
| Multiple of 100 | {{Collectible:283}} D100 |

Several conditions can apply at once.

For example, reaching **D12** triggers D1, D4, D6, and D12 together.

## Notes

- Each run starts with die number **0**.
- There is no charge-picker; use spends whatever charges you currently have.

## Planning example

When the die number is **3**:

- Using 1 charge reaches D4 and triggers D1 and D4;
- Waiting for 2 charges reaches D5 and triggers only D1.

You can choose when to use the item to hit or avoid specific die numbers.
