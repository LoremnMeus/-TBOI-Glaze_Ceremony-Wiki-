---
title: D++
description: "Stitching to death"
slug: d-plus
kind: collectible
internalKey: D_Plus
status: reviewed
---
<p class="wiki-search-index" v-pre>D++ D++ D_Plus d-plus D Plus 缝合致死 Stitching to death 电池 拥有至少1格充能时即可使用，并消耗当前全部充能 D的数字增加所消耗的充能数 随后触发编号能整除当前D的所有骰子效果 D1始终触发，主动槽会预览本次结果 Battery Usable with at least 1 charge; spends all current charges Increases D by the charges spent Then triggers every listed die whose number divides the new D D1 always fires; the active slot previews the result</p>

<PublicEntry slug="d-plus" lang="en" />

## Mechanics


<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**D++ treats charges as step size: hold more charges before use, and D advances by that many; the new number then fires every listed die that divides it.**

- {{Battery}} Max **6** charges; usable with at least **1**, spending all current charges
- On use: `new D = old D + charges spent`
- D advances first, then factor checks run on the new value
- {{Collectible476}} **D1 always fires** (1 divides every positive integer) as the base die
- The active slot previews `current D + charges → result D` and the dice icons for that result

### How D increases

| Charges | D gain |
| ---: | --: |
| 1 | +1 |
| 2 | +2 |
| 3 | +3 |
| 4 | +4 |
| 5 | +5 |
| 6 | +6 |

### Which dice fire

Besides D1, extra dice fire when the new D is divisible by:

| Condition | Die |
| --- | --- |
| Multiple of 4 | {{Collectible284}} D4 |
| Multiple of 6 | {{Collectible105}} D6 |
| Multiple of 7 | {{Collectible437}} D7 |
| Multiple of 8 | {{Collectible406}} D8 |
| Multiple of 10 | {{Collectible285}} D10 |
| Multiple of 12 | {{Collectible386}} D12 |
| Multiple of 20 | {{Collectible166}} D20 |
| Multiple of 100 | {{Collectible283}} D100 |

Several can fire together. Landing on **D12** triggers D1, D4, D6, and D12.

### Preview example

If the slot shows **D10** with **2** charges, use lands on **D12** and previews D1, D4, D6, and D12. Waiting for **4** charges instead lands on **D14** and only D1 + D7.

## Notes

- D starts at **0**; the first use with 1–6 charges lands on D1–D6
- No charge-picker UI: use when you have exactly the step you want

## Planning example

You can skip harsh factors. At **D3**, 1 charge hits D4 (D1+D4); waiting for **2** charges reaches D5 (D1 only). The active-slot preview shows the result—check the icons before committing more charge.
