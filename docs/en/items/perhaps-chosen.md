---
title: Perhaps Chosen
description: "Please, look again."
slug: perhaps-chosen
kind: collectible
internalKey: Perhaps_Chosen
status: reviewed
---
<p class="wiki-search-index" v-pre>似有所选 Perhaps Chosen Perhaps_Chosen perhaps-chosen Perhaps Chosen 请再看看罢 Please, look again. 持有时没有效果 没有选择它时，会加入之后的道具选择 重置不会将其从选择中移除 Has no effect while held If not chosen, it joins a later item choice Rerolls do not remove it from that choice</p>

<PublicEntry slug="perhaps-chosen" lang="en" />

## Mechanics

<!-- Player-facing wiki body. The exporter never overwrites it. -->

## Effects

Perhaps Chosen represents an item choice that can be rejected repeatedly. Until its choice slot is actually taken, the choice remains unresolved and waits to appear at a later item opportunity.

Taking another item from the same choice group or leaving the room without taking anything both count as rejecting it. It rejoins the next suitable item choice, including a new opportunity that appears later in the same room.

For example:

**A + Perhaps Chosen**

After taking A, a later choice containing B may become:

**B + Perhaps Chosen**

Taking B rejects it again. Only taking the choice slot occupied by Perhaps Chosen ends that unresolved choice.

Perhaps Chosen itself has no additional effect once collected.

## Rerolls and cycles

Rerolls do not remove an unresolved Perhaps Chosen.

For example:

**A + Perhaps Chosen**

Using {{Collectible:105}} may turn it into:

**B + (C / Perhaps Chosen)**

Perhaps Chosen is bound to the right-hand choice slot, not to the collectible currently displayed on that pedestal.

- Taking B rejects Perhaps Chosen, so it keeps waiting.
- Taking the right-hand pedestal grants its currently displayed item and ends that unresolved choice.

Other effects that make one pedestal cycle between several items follow the same rule. Even while its slot displays something other than Perhaps Chosen, taking that slot ends the matching unresolved choice.

## Shop items

When a shop copy of Perhaps Chosen is rejected, it retains its actual price. The price follows that unresolved choice rather than the ordinary pedestal that later carries it.

For example, a Perhaps Chosen rejected at **7¢** still costs **7¢** when it rejoins another choice. Rerolling its slot into another item does not change that price.

An ordinary item that already has a price cannot receive a waiting Perhaps Chosen. The unresolved choice waits for a later suitable free item opportunity instead.

## Synergies

### {{Seija}}

With the Seija enhancement, whenever Perhaps Chosen rejoins an item choice, its pedestal also gains one random item from the current item pool as an additional cycling option.

**A + Perhaps Chosen**

becomes:

**A + (B / Perhaps Chosen)**

Taking A keeps Perhaps Chosen waiting. Taking the cycling pedestal grants its currently displayed item and ends that unresolved choice.

## Notes

- Multiple unresolved Perhaps Chosen instances remain independent and may join the same item choice at once.
- A waiting Perhaps Chosen may join a choice that already contains Perhaps Chosen; separate instances do not merge.
- There is no once-per-room limit. A rejected instance can reappear as soon as another suitable item opportunity occurs in the same room.
- Naturally appearing and returning Perhaps Chosen instances follow the same choice rules.

## Trivia

The flavor description "Please, look again." quotes related dialogue from *The Fifth Republic*.

Aside from that flavor line, the item's name and mechanics are not based on that work.
