---
title: Alchemy Pot
description: "Handle with transmutation"
slug: alchemy-pot
kind: collectible
internalKey: Alchemy_Pot
status: reviewed
---
<p class="wiki-search-index" v-pre>炼金术的掌中锅 Alchemy Pot Alchemy_Pot alchemy-pot Alchemy Pot 愿你必有所得 Handle with transmutation 从持有道具中选择并消耗3个道具，制作1个道具 结果编号依次取第1个道具的百位、第2个的十位、第3个的个位 Select and consume 3 held collectibles to craft 1 collectible The result ID uses the 1st item&#x27;s hundreds, 2nd item&#x27;s tens, and 3rd item&#x27;s ones</p>

<PublicEntry slug="alchemy-pot" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Alchemy Pot splits three owned collectible IDs apart and stitches them into one new collectible ID.**

Using it opens a selection interface. After choosing three inputs in order:

- the **1st** collectible sets the result ID's **hundreds** digit
- the **2nd** sets the **tens** digit
- the **3rd** sets the **ones** digit.

Slot order directly changes the outcome.

For example:

- 1st input ID 121 → hundreds digit **1**
- 2nd input ID 122 → tens digit **2**
- 3rd input ID 113 → ones digit **3**

This crafts collectible ID **123** ({{Collectible:123}}).

Once all three slots are filled, the interface previews the resulting ID. **Crafting can be confirmed only if that ID matches an existing collectible**; otherwise the craft fails and the inputs are not consumed.

After confirming, the three inputs are permanently removed from the player and the result spawns as a nearby pickup.

## Notes

- Only collectibles the player currently holds can be selected; room pickups are not used.
- Hidden collectibles, quest items, and Alchemy Pot itself are excluded from the normal input list.
- Selections can be changed before final confirmation, and using Alchemy Pot again exits crafting; nothing is consumed until confirmation.
- A result is valid as long as its collectible ID exists. Being locked, hidden, or outside the normal item pool does not by itself block crafting.

## Special interactions

### {{Collectible:584}}

After crafting completes, a wisp is spawned for each of the three invested collectibles.

### {{Collectible:34}}

The crafting interface adds a free "6" candidate that can fill any one slot.

For example, placing it in the second slot fixes the tens digit of the result at 6.

### {{Seija}}

There is a **50%** chance to craft a wrong item instead of the intended result. The inputs are still consumed.

## Tips

- **Only the digit needed for the current slot matters.** If several items can supply the same digit, spend the one you would rather lose.

<details>
<summary>Technical details</summary>

The result ID reads specific digits from each input ID's last three places:

| Slot | Digit read | Contribution |
| --- | --- | ---: |
| 1st | hundreds | hundreds × 100 |
| 2nd | tens | tens × 10 |
| 3rd | ones | ones |

Final ID = 1st hundreds × 100 + 2nd tens × 10 + 3rd ones.

Shorter IDs treat missing higher digits as 0; IDs with four or more digits ignore the thousands place and above.

Input candidates must be visible collectibles, not quest items, and not Alchemy Pot itself.

The result side only checks that the target collectible ID exists; Alchemy Pot does not re-filter by Hidden, Quest, unlock state, or normal pool eligibility.

Book of Belial's free digit uses internal ID 666, so placing it in any slot provides digit 6 without consuming a real held collectible.

</details>
