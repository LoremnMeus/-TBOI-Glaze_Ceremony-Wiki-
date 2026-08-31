---
title: "I - The Sage?"
description: "Light the fire on the edge of all enemies and pickups in the room Re-ignite all other fires The fire will be automatically extinguished when you are close to it in the current room"
slug: i-the-sage-reversed
kind: card
internalKey: Sage_r
status: reviewed
---
<p class="wiki-search-index" v-pre>I - 贤者? I - The Sage? Sage_r i-the-sage-reversed I - The Sage? 我将绝火 在房间中所有实体边上点燃火堆 复燃所有其他火堆 当前房间内靠近火堆会将其自动熄灭 Light the fire on the edge of all enemies and pickups in the room Re-ignite all other fires The fire will be automatically extinguished when you are close to it in the current room</p>

<PublicEntry slug="i-the-sage-reversed" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

The Sage? turns the current room into a fire layout: it first tries to **rekindle** ordinary fires already in the room and refill their HP, then spawns new fires in neighboring cells around various entities. Spawns avoid cells next to the player's feet, and tears, bombs, effects, and similar are not used as placement anchors.

Approaching a marked fire deals light explosion damage that puts it out—an active way to extinguish fires, not homing flames that seek enemies.

## Rules

- After use, the player first gains **explosion immunity** for this room.
- If the player takes **fire damage** during that window, the state switches: explosion immunity ends, and the player briefly gains fire-related benefits similar to {{Collectible:223}} (Pyromaniac).
- These player states stay in this room and clear on room change.
- Tarot Cloth mainly raises the weight of special fire variants; it does not drop extra item rewards.
- Enemies are not individually “named” by this card; the fires are room layout, not tracking shots.
