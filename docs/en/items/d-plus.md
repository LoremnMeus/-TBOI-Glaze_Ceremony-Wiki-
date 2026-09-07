---
title: D++
description: "Stitching to death"
slug: d-plus
kind: collectible
internalKey: D_Plus
status: reviewed
---
<p class="wiki-search-index" v-pre>D++ D++ D_Plus d-plus D Plus 缝合致死 Stitching to death 至少1格充能即可使用，并消耗当前全部充能 消耗几格充能，就将当前D编号向前推进几格 到达新编号后，触发所有与该编号匹配的骰子效果 D1始终触发 Usable with at least 1 charge; spends all current charges Spending N charges advances the current D number by N On the new number, triggers every matching die effect D1 always fires</p>

<PublicEntry slug="d-plus" lang="en" />

## Mechanics


<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**D++ treats charges as steps: spending N charges advances the current D number by N and fires the dice that match the new number.**

{{Battery}} Max **6** charges; usable with at least **1**, spending all current charges at once.

For example, from **D3**:

- Use with 1 charge → advance to **D4**
- Use with 2 charges → advance to **D5**
- Use with 6 charges → advance to **D9**

On the new number, every die whose number divides that value fires together; {{Collectible:476}} **D1 always fires.**

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
- There is no way to choose how many charges to spend; use spends all current charges at once.
