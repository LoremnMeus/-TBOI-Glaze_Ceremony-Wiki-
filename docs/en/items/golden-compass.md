---
title: Golden Compass
description: "May your path be bright"
slug: golden-compass
kind: collectible
internalKey: Golden_Compass
status: drafted
---
<p class="wiki-search-index" v-pre>黄金罗盘 Golden Compass Golden_Compass golden-compass Golden Compass 愿你前路光明 May your path be bright 使用后，将下一层的地图替换为一条特殊的直道 On use, replaces the next floor&#x27;s map with a special straight corridor</p>

<PublicEntry slug="golden-compass" lang="en" />

## Mechanics

## Effects

On use, Golden Compass replaces the next floor's map with a special left-to-right corridor linking treasure rooms, shops, combat rooms, a fireplace room, and other special rooms.

Corridor doors stay open with no key, health, or other entry cost. During combat, doors still close until the room is cleared.

Special rooms that normal floor generation would often skip are still guaranteed by the corridor layout. For example, the corridor always provides two treasure rooms and two shops, even on chapters that usually lack them. Interior layouts, rewards, and other rules still follow vanilla.

Golden Compass is a single-use active. Using it consumes the item, and the effect applies the next time you enter a valid floor. If that floor cannot host a corridor, the appointment stays until a later valid floor.

## Corridor layout

The corridor uses 13 consecutive slots in a fixed order. Room kinds are fixed; most layouts still roll randomly.

| Order | Room | Contents |
| --- | --- | --- |
| 1 | Entrance | Fixed corridor start |
| 2 | Treasure Room | First treasure room |
| 3 | Shop | First shop |
| 4 | Special reward | Library, Arcade, Dice Room, or Planetarium |
| 5 | Combat | Normal combat; Secret Room below |
| 6 | Treasure Room | Second treasure room |
| 7 | Fireplace room | Rest or item reward, pick one |
| 8 | Combat | Normal combat; Curse Room fixed below |
| 9 | Shop | Second shop |
| 10 | Challenge or Mini-Boss | One of the two |
| 11 | Combat | Normal combat |
| 12 | Boss Room | Chapter boss; some chapters use fixed layouts |
| 13 | Deal Room | Devil or Angel; not spawned on Void |

Combat, treasure, and shop contents follow vanilla rules. The two treasure rooms and two shops roll separately and do not share one reward set.

If room 10 is a Challenge Room, you can enter without the usual health requirement. Once a challenge starts, doors still close under vanilla rules.

## Fireplace room

Room 7 is always the fireplace room.

A fireplace sits in the center, with a bed on the left and a free Treasure Room-pool item on the right.

Pick only one:

- Bed: rest, and the item disappears.
- Item: take the item, and the bed disappears.

The choice does not reset on leave or re-entry, and it does not change later corridor rewards.

## Curse Room

A Curse Room is fixed directly below room 8. It also borders the Secret Room under the fireplace room.

The Curse Room sits off the main path, so low-health characters are not forced through spike doors on the required route, while the usual entry cost remains.

Layouts and rewards still follow vanilla Curse Room rules.

## Secret Rooms

South of the corridor is a linked secret cluster:

- Room 5 connects down to a Secret Room.
- Room 7 connects down to another Secret Room.
- Those secrets continue south into a Super Secret Room and an Ultra Secret Room.

Each uses its own vanilla layouts. Some secret rooms also link sideways so you can enter from more than one direction.

Extra north-side secrets may appear from specific items; see Synergies.

## Boss and deal rooms

Room 12 is the Boss Room. It usually rolls the chapter boss and can use compatible extended-mod boss layouts.

After the boss, you can continue into room 13, the deal room.

The deal room is a real corridor-end room, not a normal random Devil/Angel door opened by floor chance. Golden Compass also blocks a separate random deal room on that floor.

It chooses Devil or Angel from current leanings. Layouts, rewards, and trade rules stay vanilla.

On Void, room 12 is fixed as Delirium, and room 13 is not spawned.

## Special floors

Golden Compass retunes some chapters so important special entrances and story routes still work.

### Downpour / Dross

On Downpour II and Dross II, the entrance keeps access to the mirror world.

Downpour II uses a dedicated entrance layout with the mirror entrance on the left.

Downpour II's fireplace also becomes a white fire so you can enter the mirror route's soul state.

Combat rooms on these chapters avoid special white-fire layouts that would conflict with the entrance and fireplace setups.

### Mines / Ashpit

Mines and Ashpit combat rooms exclude special button-puzzle layouts so chapter puzzle machines are not randomly placed in corridor combat.

On Mines II and Ashpit II, the entrance keeps the Mineshaft route. With Knife Piece 1, you can continue for Knife Piece 2.

Mines II uses a dedicated entrance layout that keeps the boarded Mineshaft door and its open sequence.

### Depths, Mausoleum, and Gehenna

On Depths I, Necropolis I, and Dank Depths I, combat rooms exclude X-skull special layouts.

On Depths II, Necropolis II, Dank Depths II, Mausoleum II, and Gehenna II, the corridor tries to place one X-skull combat room when a valid layout exists.

Boss Rush timed doors still appear; Mausoleum and Gehenna use their matching timers.

On Depths II, Necropolis II, and Dank Depths II, the Boss Room keeps Mom. After Mom, you can choose Polaroid or Negative.

On normal Mausoleum II / Gehenna II routes, the special entrance into Mom's Heart still works.

### Photo door and Ascent

If you enter Mausoleum II or Gehenna II through the photo door, Golden Compass still builds a corridor.

Room 12 becomes the Dad's Note prep room instead. You can take Dad's Note and start Ascent as usual.

To keep that flow, the Boss Room does not add a next-floor trapdoor or Heaven beam.

After formal Ascent begins, Golden Compass no longer replaces floors along the path.

### Corpse

On Corpse II, room 12 is the gate into Mother's arena.

The final fight still happens in Mother's dedicated arena, not inside a tiny corridor boss room.

### Void

Void corridors mix room layouts from other chapters.

Treasure rooms, shops, combat rooms, and similar slots can draw from different chapters, so one corridor may show several chapter styles at once.

Room 12 is fixed as Delirium's Boss Room.

It is a dedicated 2×2 room that occupies the corridor-end boss and deal slots.

You fight Delirium there. After the fight, a chest appears as usual for Void's finale, and no extra next-floor trapdoor is spawned.

### Floors that are not replaced

Golden Compass does not replace:

- ??? (Blue Womb)
- Home
- Floors already on the formal Ascent path

If the appointed next floor is one of these, the effect stays armed until a valid floor appears.

In Greed / Greedier, Golden Compass does not appear normally. Even if obtained another way, using it only consumes the item and never arms a corridor.

## Synergies

### {{Collectible:584}} Book of Virtues

The fireplace reward becomes an Angel Room item with an angel statue above it.

### {{Collectible:34}} Book of Belial

The fireplace reward becomes a Devil Room item with a devil statue above it.

The Devil item is still free here.

With both books held, the fireplace room spawns one Angel item and one Devil item on the right, each with its statue.

You then choose among the bed, the Angel item, and the Devil item.

### {{Collectible:599}} Voodoo Head

A second Curse Room appears above room 8.

Both Curse Rooms use Voodoo Head's special layouts and try to pick different ones.

### {{Collectible:589}} Luna

Extra Secret Rooms appear north of the corridor, plus a linked Super Secret Room.

They only generate and connect where space allows.

### {{Trinket:102}} Fragmented Card

Adds extra north-side Secret Rooms.

This stacks with Luna for more linked north secrets.

### {{Trinket:112}} Pay to Play

Both treasure rooms prefer restock-machine layouts.

### {{Collectible:498}} Duality

The corridor end still spawns only one deal room; Devil or Angel follows the usual leanings.

### {{Collectible:499}} Eucharist

The corridor end always becomes an Angel Room.

### {{Collectible:215}} Goat Head

The corridor end always becomes a Devil Room.

### {{Trinket:174}} Number Magnet

When the corridor end is a Devil Room, it uses Number Magnet's special layouts.

### {{Seija}}

The corridor floor gains Darkness, Lost, Unknown, Maze, and Blind at once.

Ordinary Golden Compass corridors are not affected by these curses.

## Other rules

- While already on a Golden Compass corridor, using another Golden Compass arms the next floor and does not change the current one.
- Each use rolls its own corridor contents.
- Book of Virtues, Book of Belial, and Seija effects lock at use time and stay with that appointment, even if those items are gained or lost later.
- Book of Virtues does not spawn an extra Golden Compass wisp.
