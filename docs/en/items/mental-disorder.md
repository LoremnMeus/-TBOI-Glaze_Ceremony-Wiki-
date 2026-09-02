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

## Effects

**Mental Disorder occasionally makes the player perceive a second copy of something that should exist only once.**

Entering a new room has a **25%** chance to create a “false fact” involving a pickup, an enemy, or an existing item effect the player already holds.

| Mistaken object | What happens | How it ends |
| --- | --- | --- |
| Pickup | An extra pickup appears and can be collected normally | Unspent virtual portions disappear when leaving the room |
| Enemy | An extra enemy can move and attack normally | It disappears after taking damage |
| Existing item | A second copy of an owned item effect is gained temporarily | The extra effect is removed when leaving the room |

Resources from false pickups can be spent normally; anything already spent is not lost when leaving the room. Ordinary coins, keys, bombs, hearts, batteries, cards, and pills may become false facts. Special pickups with lasting properties or unsafe rewards are excluded. Cards and pills keep any effect already activated before leaving the room.

::: tip Spend the fake to buy something real
If a false fact grants 3 coins and 2 are spent before leaving, the completed purchase is not reversed. Only unspent virtual resources are removed when leaving the room.
:::

False enemies cannot hold the room's doors shut and grant no normal kill reward; they disappear after taking damage. Bosses and champions cannot become this kind of false fact.

False item effects only duplicate passive or familiar items the player already owns and which can be copied safely for one room. They never grant a random item the player did not have. Special items that cannot be copied safely are excluded.

## Notes

- Only one false fact can exist at a time.
- A category with no valid candidate is not selected.
- On leaving the room, the current false fact ends. Unspent virtual resources disappear with it.
- A false fact is accompanied by brief screen distortion; real objects may also show similar visual interference, so distortion alone cannot prove which object is false.

## Trivia

Mental Disorder belongs to the [Rainbow](/en/systems/rainbow) classification, and its sprite was redrawn from {{Collectible:402}}.

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

A category with no valid candidate is removed before selection, so these weights are not fixed 50% / 35% / 15% selection chances.

### Candidate restrictions

False pickups are selected only from eligible free ordinary pickups in the current room; shop goods and certain special pickups are excluded.

False enemies exclude bosses, champions, and certain special entities.

False item effects are selected only from passive or familiar items the player already owns and which can be copied safely. Revivals, inventory extensions, quest items, and some special state-based items are excluded.

</details>
