---
title: "I - The Sage?"
description: "Light the fire on the edge of all enemies and pickups in the room Re-ignite all other fires The fire will be automatically extinguished when you are close to it in the current room"
slug: i-the-sage-reversed
kind: card
internalKey: Sage_r
status: drafted
---
<p class="wiki-search-index" v-pre>I - 贤者? I - The Sage? Sage_r i-the-sage-reversed I - The Sage? 我将绝火 在房间中所有实体边上点燃火堆 复燃所有其他火堆 当前房间内靠近火堆会将其自动熄灭 Light the fire on the edge of all enemies and pickups in the room Re-ignite all other fires The fire will be automatically extinguished when you are close to it in the current room</p>

<PublicEntry slug="i-the-sage-reversed" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->


## Effects

After use, extinguished ordinary fires in the current room are rekindled, and new fires spawn on empty tiles near enemies, pickups, and similar entities.

Spawns avoid positions near the player.

## Extinguish

Marked fires extinguish automatically when the player approaches. No attack is required.

## Fire variant weights

New fires pick a variant by weight (normal / {{Collectible:451}}):

| Variant | Normal | {{Collectible:451}} |
| --- | ---: | ---: |
| Normal fire | 200 | 100 |
| Red fire | 75 | 45 |
| Blue fire | 30 | 50 |
| Purple fire | 15 | 25 |
| White fire | 1 | 1 |

## Synergies

### {{Collectible:451}}

Raises blue / purple fire weight relative to normal and red fires (see table above).
