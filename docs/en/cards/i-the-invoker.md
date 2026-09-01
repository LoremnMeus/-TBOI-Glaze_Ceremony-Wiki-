---
title: I - The Invoker
description: "Foretell the next Thoth card that will be used On a hit, gain a reward and return the Invoker"
slug: i-the-invoker
kind: card
internalKey: Invoker
status: reviewed
---
<p class="wiki-search-index" v-pre>I - 魔启 I - The Invoker Invoker i-the-invoker I - The Invoker 我将启迪 预言下一张会被使用的透特牌 预言命中时获得奖励并返还召唤者 Foretell the next Thoth card that will be used On a hit, gain a reward and return the Invoker</p>

<PublicEntry slug="i-the-invoker" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->




## Effects

After use, predicts **card faces that are truly used later** and immediately shows the current prediction; predictions persist across rooms until they hit.

Candidates come from a full tarot-related set: vanilla upright and reversed tarot, plus this mod's Thoth cards. The same face does not repeat within one prediction display. Using it multiple times can stack hit counts on the same face.

## Prophecy

When a later card use hits a still-valid prediction:

- Spawn that many random {{Card}} rewards (matching the stacked hit count), with a holy-light cue;
- Respawn a {{Card:i-the-invoker}} for the player to pick up so the next round can begin;
- Clear that face's prediction count.

Cards **simulated** by effects such as {{Item:book-of-thoth}} still count as hits if they resolve through normal card-use settlement—it is not limited to cards played by hand from the pocket slot.

Missed predictions are not cleared automatically by leaving rooms or failing.

## Synergies

### {{Collectible:451}}

Forecast **3** different faces at once. Each face tracks hits independently.
