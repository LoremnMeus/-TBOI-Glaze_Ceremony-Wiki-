---
title: Tiny Update
description: "Fixed some known issues"
slug: tiny-update
kind: collectible
internalKey: Tiny_Update
status: drafted
---
<p class="wiki-search-index" v-pre>微型更新 Tiny Update Tiny_Update tiny-update Tiny Update 修复了一些已知问题 Fixed some known issues 有概率发布一次微型更新 随机增强或削弱其他道具的属性、生命奖励与充能需求 也可能改变道具池中的道具分布 Chance to publish a Tiny Update Randomly buffs or nerfs other items&#x27; stats, heart rewards, and charge requirements May also change item pool contents</p>

<PublicEntry slug="tiny-update" lang="en" />

## Mechanics

## Effect

**Tiny Update** occasionally publishes a balance patch that changes other items at random. Each publication pauses the game and opens a notice listing that patch's buffs, nerfs, and item-pool changes.

The changes last for the current run and can stack with later patches. An item can be changed before the player ever picks it up.

## Publication

While Tiny Update is held, clearing a normal combat room, boss room, or mini-boss room has a **15%** chance to publish one update. Each floor can publish at most one update this way.

Entering a new floor also has a separate **50%** chance to publish one extra update. That extra update does not use up the floor's room-clear publication, and a room-clear publication does not cancel the floor-entry chance.

Each update changes **4–20** different items. Every extra copy of Tiny Update adds 2 items to that count, up to 32. Extra copies do not raise the publication chance, and they do not add more publications on the same floor.

## Patch contents

A selected item may receive any of these changes:

- **Stats:** damage, tears, range, shot speed, speed, or luck, by 0.1 in either direction. Only an item that already has that stat effect can be changed in that stat.
- **Heart rewards:** the red heart containers, soul hearts, or black hearts granted the next time the item is picked up, by one full heart. Hearts already gained stay as they are.
- **Active charges:** a normal active's charge requirement may rise or fall by 1. A charged active is not reduced to no charge. A timed recharge may rise or fall by 1 second. Special charge behavior is left alone. An active that already needs no charge does not gain a charge requirement.
- **Item pools:** an item may be added to another pool, or removed from a pool that Tiny Update previously added it to. This affects later rolls only, not items that have already spawned.

The notice groups buffs, nerfs, and pool changes. An item that has been patched shows its accumulated stat and pool changes in EID.
