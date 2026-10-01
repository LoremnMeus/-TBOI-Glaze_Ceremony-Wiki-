---
title: Glaze Chest
description: "A matching key appears in another room on this floor; its room is marked on the map Only that key can open the chest 60%: spawns 4~7 random glazed pickups 40%: duplicates a random"
slug: glaze-chest
kind: pickup
internalKey: Glaze_chest
status: drafted
---
<p class="wiki-search-index" v-pre>琉璃之宝箱 Glaze Chest Glaze_chest glaze-chest Glaze_chest 本层另一个房间会出现对应钥匙，钥匙房会在地图上标记 只有对应钥匙才能打开宝箱 60%：生成4~7个随机琉璃掉落 40%：复制一个当前持有的随机道具 A matching key appears in another room on this floor; its room is marked on the map Only that key can open the chest 60%: spawns 4~7 random glazed pickups 40%: duplicates a random item you currently own</p>

<PublicEntry slug="glaze-chest" lang="en" />

## Mechanics

## Effects

Each Glaze Chest registers a matching key familiar in another valid room on this floor. That room is marked on the map.

After you approach the key, it follows you. Bring it back to its chest to open it; normal keys cannot open a Glaze Chest.

## Rewards

On open:

- **60%**: spawn **4–7** random glazed pickups;
- **40%**: duplicate a random item you currently own.

In **The Chest / Dark Room**, the chest always uses the duplicate-item reward branch.

## Room interaction

Simply touching a Glaze Chest does not start the room's Ambush sequence.

**Once the matching key finishes unlocking the chest, the game attempts to start the room's Ambush sequence.** This mainly matters in Challenge Rooms, Boss Rush, and other rooms that already support Ambush behavior; it does not create an extra combat wave in an ordinary room.

## Multiple chests

Each chest has its own key task. Several Glaze Chests can exist at once; their keys do not create extra copies from room changes or continue.

## Special interactions

### {{Item:crown-of-the-glaze}}

At full Crown shards, if this open rolls the glazed-pickup reward, spawn count gains **+4** (becoming **8–11**).

The duplicate-item branch does not gain those 4 extra glazed pickups.
