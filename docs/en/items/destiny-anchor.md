---
title: Destiny Anchor
description: "The past still waits ahead"
slug: destiny-anchor
kind: collectible
internalKey: Destiny_Anchor
status: featured
---
<p class="wiki-search-index" v-pre>命运锚点 Destiny Anchor Destiny_Anchor destiny-anchor Destiny Anchor 过去仍在前方等待 The past still waits ahead 使用时锚定当前房间，每层最多3个 下层后在其他房间复现 房型不匹配时，仅复现锚点周围区域 再次使用可收回当前房间的锚点 Anchors the current room on use, up to 3 per floor Reappears elsewhere on the next floor If room shape differs, only the area around the anchor returns Use again in an anchored room to retrieve its anchor</p>

<PublicEntry slug="destiny-anchor" lang="en" />

## Mechanics

## Effects

**Destiny Anchor carries rooms encountered on the current floor into the next one.**

Using it drops an anchor at the player's position and records the room together with nearby enemies and terrain. On the next floor, that piece of the past looks for another room in which to appear.

If the next floor cannot fit the original room shape, only the saved area around the anchor is reproduced instead of losing the anchor entirely.

## How to use

### Dropping and retrieving anchors

Using Destiny Anchor in an eligible room places an anchor beneath the player. Up to 3 rooms can be anchored on a floor.

Using it again in the same anchored room retrieves that anchor and frees one slot.

### Capture range

A normal 1×1 room is effectively captured across its playable area. In large or irregular rooms, only an area around the anchor roughly the size of a normal room is recorded. A border on the floor shows the actual capture area.

### How reproduction works next floor

On the next floor, each anchor searches for a suitable unexplored room. If its shape and doors are compatible, the original room is reproduced as completely as possible. If no shape matches, a normal-sized room carries only the area saved around the anchor.

## Boss rooms

Boss rooms can be anchored, but never replace the next floor's normal Boss Room. They prefer a normal room as their destination and may use another non-Boss room when necessary.

Anchoring a weaker boss therefore does not remove the next floor's boss fight; it may bring the old boss back as an additional encounter.

## Synergies

### {{Collectible:584}}

Successfully setting a **new** anchor spawns a Destiny Wisp to guard it, up to 3 per floor. The wisp attacks automatically near its anchor, returns when the anchored room is revisited, and fully heals after that room is reproduced on the next floor. Retrieving the anchor or extinguishing the wisp prevents it from returning.

### {{Collectible:34}}

While holding Book of Belial, Destiny Anchor can record a Devil Room. If the next floor successfully opens a Devil Room, the anchored room appears there again with as much of its original content and layout as possible.

This synergy does not increase the normal chance for a Devil Room entrance to open. It determines what appears if the room opens rather than guaranteeing the entrance itself.

## What is reproduced

| Content | Treatment |
| --- | --- |
| Enemies and supported room objects | Their initial arrangement inside the captured area is recorded |
| Rocks, pits, poop, spikes and similar terrain | Recorded and rebuilt on reproduction |
| Room backdrop and some grid appearance | Carried with the anchor |
| Damage already done before anchoring | Usually not inherited |
| The next floor's original Boss Room | Never replaced by a boss anchor |

A normal anchor records the room's initial enemy and terrain configuration, not the partially cleared state present when the item is used. Killing enemies, weakening a boss or destroying obstacles first normally does not preserve those changes.

::: tip Fate leaves a path
If reproduced terrain blocks a necessary entrance, a small number of obstacles may be removed or softened so the room remains traversable. The result may therefore differ slightly from the source layout.
:::

## Tips

- **Anchor position matters.** In a large room, only the nearby region is saved. Stand near the enemies, obstacles or layout that should return before using the item.
- **A boss anchor does not skip the next boss.** It creates an additional rematch rather than reducing the next floor's normal boss difficulty.
- **The room does not need to remain untouched.** Normal anchors read the initial configuration, so the room may be cleared before deciding whether to anchor it.

## Trivia

Destiny Anchor belongs to the [Rainbow](/en/systems/rainbow) classification. Its icon was completed years before the mechanic was implemented and was redrawn from the icon of {{Collectible:127}}.

Forget Me Now regenerates the current floor, while Destiny Anchor carries part of the current floor into the next one. Both let a floor's journey continue in another form. The original design records have been lost, so it cannot be confirmed whether that connection motivated the choice of visual basis.

<details>
<summary>Technical details</summary>

- The capture window is 13×7 grid cells, approximately the playable area of a standard 1×1 room.
- Reproduction first seeks an unexplored room with compatible shape and doors; otherwise a 1×1 room carries the local snapshot.
- Path repair preserves the original layout where possible and removes or softens blocking cells instead of cancelling reproduction.
- A boss source never selects a Boss Room as its destination.
- Greed Mode, the Ascent sequence and some late special floors are disabled.
- This mechanic requires REPENTOGON.

</details>
