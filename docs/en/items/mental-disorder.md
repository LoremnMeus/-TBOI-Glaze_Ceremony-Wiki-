---
title: Mental Disorder
description: "There used to be two."
slug: mental-disorder
kind: collectible
internalKey: Mental_Disorder
status: featured
---
<p class="wiki-search-index" v-pre>精神失序 Mental Disorder Mental_Disorder mental-disorder Mental Disorder 这里原本有两个 There used to be two. 进入房间时概率产生一个 错误事实 将一个敌人、掉落物或已有道具效果错认为存在第二份 离开房间时，未被利用的错误会被纠正 同时只能存在一个错误事实 Entering a room may create a false fact Mistakes an enemy, pickup, or existing item effect as having a second copy Unused errors are corrected when leaving the room Only one false fact may exist at a time</p>

<PublicEntry slug="mental-disorder" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

**Mental Disorder occasionally makes the player perceive a second copy of something that should exist only once.**

Upon entering a new room, it may create a “false fact”: an extra pickup or enemy may appear, or one of the player's existing items may temporarily behave as though another copy were held.

These errors function much like real objects while they exist, but last only for the current room. When the player leaves, reality corrects whatever has not yet been made real.

An error is not necessarily worthless. If the player uses it before reality catches up, the result will usually remain.

## False facts

| Mistaken object | What happens | How it is corrected |
| --- | --- | --- |
| Pickup | An apparently real copy of an ordinary pickup appears | Any unused virtual resources are reclaimed on leaving the room |
| Enemy | An extra ordinary enemy can move and attack normally | It disappears upon taking its first real hit |
| Existing item | An existing passive or familiar item temporarily gains one extra copy of its effect | The extra effect is removed on leaving the room |

### Mistaken pickups

A false pickup can be collected normally, and its resources can be spent immediately.

When leaving the room, only the virtual portion still held by the player is reclaimed. If it has already been spent, the result of that expenditure is not undone.

::: tip Spend the fake to buy something real
If a false fact grants 3 coins and 2 are spent before leaving, the completed purchase is not reversed. Reality only attempts to reclaim the virtual amount that remains.
:::

Ordinary coins, keys, bombs, hearts, charges, cards, and pills may become false facts. Special pickups with lasting properties or unsafe rewards are excluded.

Cards and pills keep any effect already activated before leaving the room. If the false card or pill is still being held, it may disappear when the error is corrected.

### Mistaken enemies

A false enemy moves and attacks like a normal enemy, so it remains dangerous until exposed. Being imaginary does not make its attacks harmless.

It cannot hold the room's doors shut and grants no normal kill reward. Its first instance of real damage tears the error apart and removes it immediately.

Bosses and champions cannot become this kind of false fact.

### Mistaken existing items

Sometimes the error occurs on the player rather than in the room: one passive or familiar item already held temporarily gains the effect of an additional copy.

This never grants a random item the player did not have. The extra effect is removed upon leaving the current room.

Special items that cannot be copied safely for a single room are excluded.

## Creation and correction

Entering a new room has a **25%** chance to attempt to create one false fact. A category can only be selected when the current room or player provides a valid candidate.

Only one false fact can exist at a time. The previous room's error is corrected when the player leaves.

For virtual resources, correction only reclaims what has not yet been made real. Completed purchases, used cards, and other results that have already occurred are not rolled back.

## Visual anomalies

When a false fact appears, the whole screen briefly shifts and separates in colour, signalling that reality has developed an error.

While the error exists, objects in the room may occasionally shift, leave afterimages, or distort in colour. These signs do not reliably identify the false object: a few real objects may briefly show similar interference.

If virtual resources must be reclaimed on leaving, the HUD briefly distorts again and displays what was corrected.

## Tips

- **Use virtual resources quickly.** Converting temporary coins, bombs, keys, or cards into an outcome that has already happened is usually better than trying to carry them away.
- **Do not treat a visual glitch as proof.** Real objects may also be disturbed briefly.
- **A false enemy needs only one hit to expose.** Test suspicious enemies with a cheap attack instead of committing full damage.
- **Make use of the temporary second item.** Its extra effect lasts only for the current room.

## Trivia

Mental Disorder belongs to the [Rainbow](/en/systems/rainbow) classification, and its sprite was redrawn from {{Collectible:402}}.

Chaos disrupts the normal order of item pools; Mental Disorder instead disrupts the player's perception of the room's “facts”. Both revolve around disorder.

<details>
<summary>Technical details</summary>

### Trigger and category weights

The base trigger chance upon entering a room is **25%**.

When all three categories have valid candidates, their base selection weights are:

| Category | Weight |
| --- | ---: |
| Pickup | 50 |
| Enemy | 35 |
| Existing item | 15 |

A category with no valid candidate is removed before selection, so these weights are not fixed 50% / 35% / 15% appearance rates.

### Candidate restrictions

False pickups are selected only from eligible free ordinary pickups in the current room; shop goods and certain special pickups are excluded.

False enemies exclude bosses, champions, and certain special entities.

False item effects are selected only from passive or familiar items the player already owns and which can be copied safely. Revivals, inventory extensions, quest items, and some special state-based items are excluded.

</details>
