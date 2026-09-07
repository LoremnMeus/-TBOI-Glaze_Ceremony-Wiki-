---
title: Perhaps Chosen
description: "Please, look again."
slug: perhaps-chosen
kind: collectible
internalKey: Perhaps_Chosen
status: reviewed
---
<p class="wiki-search-index" v-pre>似有所选 Perhaps Chosen Perhaps_Chosen perhaps-chosen Perhaps Chosen 请再看看罢 Please, look again. 持有时没有效果 没有选择它时，会作为额外选项加入之后的道具选择 重置不会将其从选择中移除 Has no effect while held If not chosen, it returns as an extra option in a later item choice Rerolls do not remove it from that choice</p>

<PublicEntry slug="perhaps-chosen" lang="en" />

## Mechanics

<!-- Player-facing wiki body. The exporter never overwrites it. -->

## Effects

Perhaps Chosen is a special choice-type collectible, except the only option it initially offers is itself.

If it is not chosen, that choice is not discarded. Instead, Perhaps Chosen returns as an extra option in a later item choice until its own choice is finally taken.

Taking another item from the same choice, or leaving without taking it, both count as not choosing Perhaps Chosen. When another suitable item choice appears, it is added as an extra option without replacing the item that would normally appear there. It can also return again within the same room if another valid item opportunity appears.

Picking up Perhaps Chosen itself provides no additional effect.

## Choice Slots and Rerolls

Perhaps Chosen follows a choice slot, not the collectible currently displayed on that pedestal.

For example:

**A + Perhaps Chosen**

After using {{Collectible:105}}, this may become:

**B + (C / Perhaps Chosen)**

At that point:

* Taking B means Perhaps Chosen was still not selected, so it continues waiting.
* Taking the right pedestal grants whichever item is currently displayed there and ends that instance of Perhaps Chosen.

Even if the right pedestal currently shows C instead of Perhaps Chosen, taking it still ends that choice as long as it belongs to the same slot.

Other effects that cycle multiple collectibles on one pedestal follow the same rule.

## Synergies

### {{Seija}}

With Seija's effect, whenever Perhaps Chosen returns to an item choice, its own choice slot also gains one random collectible from the current item pool as a cycling option.

This does not change the choice-slot rule: taking any collectible currently shown on that cycling pedestal ends the corresponding Perhaps Chosen choice.

## Notes

* Multiple unresolved copies of Perhaps Chosen remain independent and may join the same item choice at once.
* Perhaps Chosen may join a choice that already contains another Perhaps Chosen.
* A shop copy keeps its actual price after being rejected; rerolling its slot does not change that stored price.
* Already-priced shop collectibles are not used as targets for a waiting Perhaps Chosen to return.

## Trivia

The flavor description "Please, look again." quotes related dialogue from *The Fifth Republic*.

Beyond that flavor line, the item's name and mechanics are not based on that work.
