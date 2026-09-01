---
title: Book of Voice
description: "Destroy me. Quickly."
slug: book-of-voice
kind: collectible
internalKey: Book_of_Voice
status: reviewed
---
<p class="wiki-search-index" v-pre>假象之书 Book of Voice Book_of_Voice book-of-voice Book of Voice 快，毁灭我 Destroy me. Quickly. 以0充能获得；充满后可主动呼唤低语 低语也会自然响起，并使此书暂时可用 使用后选择接受或拒绝，接受则立即完成交易 每次接受都会让声音更加清晰，并缩短充能 不断接受后，它会发生变化 Obtained at 0 charge; when full, can call a whisper Whispers also start on their own and temporarily make this book usable Use to accept or refuse; accepting completes the deal immediately Each accept makes the voice clearer and shortens charge Keep accepting, and it will change</p>

<PublicEntry slug="book-of-voice" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Book of Voice keeps making demands; the more that are accepted, the more often it speaks, and the closer it comes to becoming The Voice.**

It starts at **0** charge with a base max of **6**. When full, you can call a whisper. Whispers also begin on their own and temporarily make the book answerable.

When a whisper is up, use the book and choose Accept or Refuse. Accept pays the demand and grants the reward immediately; Refuse skips the deal.

## Compliance

Each accept makes the voice clearer. As compliance deepens:

- Normally **+1** compliance per accept; doubled accepts grant **+2**
- At **9** compliance, release-ready begins
- Max charge falls with compliance to a minimum of **1**: `max(1, 6 − ⌊compliance/2⌋)`
- Deep enough compliance unlocks “Destroy me”—accepting removes the book and leaves {{Item:the-voice}}.

## Refusal

You can refuse. Refusal does not raise compliance and does not wipe progress; the book reacts, then cools down.

## Possible deals

Whispers escalate by phase. This table is by **type**, not a full state list:

| Type | It may ask for | Typical reward |
| --- | --- | --- |
| Resource trade | Coins / keys / bombs, or discard a card/pill | Chests, opposite pickups, soul hearts |
| Room purge | Clear red hearts, chests, shop stock, or forfeit a pedestal | Hearts, locked chests, items, or higher-quality choices |
| Body cost | Take a hit, sacrifice a trinket, lose a container or a low-quality item | Soul hearts, high-quality items, permanent damage |
| Final offer | “Destroy the Book of Voice” | Release the voice → {{Item:the-voice}} |

Early deals are light trades; mid/late favor abandoning shops/pedestals, pain-for-hearts, and item removal for strong choices. When max charge is already 1, “Destroy me” is heavily weighted.

## The Voice

After release, the book is no longer the only door. Whispers still happen; answering may briefly leave a phantom in the active slot. See {{Item:the-voice}}.

## Synergies

### {{Collectible:59}}

Under Belial, you can **double-accept**: pay more, get more (extra choices, devil-pool picks, brief damage, etc.).

### {{Collectible:584}}

With matching wisps, some demands soften (fewer resources, drop a trinket instead of deleting it, etc.).

### {{Seija}}

Refusing still grants a small reward and advances clarity—defiance pushes compliance.

## Trivia

- The flavor line “Destroy me. Quickly.” is the same final offer; release dialogue leads into {{Item:the-voice}}.

<details>
<summary>Technical details</summary>

- Release removes the book and grants The Voice; some accepts permanently raise a damage multiplier.

</details>
