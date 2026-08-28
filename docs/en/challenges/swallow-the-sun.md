---
title: Swallow the Sun
description: "Play as Anna Fully sucked-in enemies are devoured !!! Cannot pick up any floor pickups, including items Gain 2 Black Hearts, 1 bomb and 1 key on each new floor Difficulty: Easy"
slug: swallow-the-sun
kind: challenge
internalKey: Swallow_The_Sun
status: featured
---
<p class="wiki-search-index" v-pre>挑战：食日 Swallow the Sun Swallow_The_Sun swallow-the-sun Swallow The Sun 安娜开局 掌中黑洞完全吸入敌人后将其直接消灭 !!! 无法拾取任何地面掉落物，包括道具 进入新层获得2颗黑心、 1炸弹与 1钥匙 难度等级：简单 Play as Anna Fully sucked-in enemies are devoured !!! Cannot pick up any floor pickups, including items Gain 2 Black Hearts, 1 bomb and 1 key on each new floor Difficulty: Easy</p>

<PublicEntry slug="swallow-the-sun" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

Swallow the Sun uses {{Character:anna}}, but completely changes how her handheld black hole works.

Normal Anna stores sucked-in enemies inside the black hole and must release them later for most of her damage. In this challenge, enemies stay in the hole briefly after being fully sucked in, then are **automatically digested and removed**—bosses follow the same flow.

In exchange, you cannot pick up any floor pickups or gain new items through normal means.

## Rules

- You play as Anna.
- You start with **1 Black Heart**.
- The handheld black hole remains your main attack.
- Enemies (including bosses) are digested after a full suck-in; they are not kept as long-term ammunition you can store and spit back out.
- You cannot pick up any floor pickups, including hearts, coins, keys, bombs, cards, pills, trinkets, or **item pedestals**.
- Each new floor **grants** (not restores to a fixed value):
  - {{BlackHeart}} **2 Black Hearts**
  - {{Key}} **1 key**
  - {{Bomb}} **1 bomb**

This challenge largely removes the usual loop of picking up resources, collecting items, and building power. Progress depends on the empowered black hole and fixed per-floor supplies.

## Handheld black hole

### Enemies and bosses

Enemies do not die the moment they touch the black hole. They are pulled in, compressed, and swallowed, linger briefly inside the hole, and are then digested. Bosses can be fully sucked in and digested the same way.

### Terrain

The handheld black hole can also swallow and destroy many room tiles and obstacles.

In Swallow the Sun, the black hole is not only a weapon—it reshapes the room itself.

## No floor pickups

This challenge blocks all Pickup collision with the player.

That means no post-fight coins, hearts, keys, or bombs—and **item pedestals cannot be taken either**.

Treasure rooms, shops, and other rooms that normally fuel your build no longer do; the usual resource loop and item growth are cut off.

## Strategy

Normal enemies are the easy part. Unlike regular Anna, you do not need to ask which foe is worth keeping as ammunition—just finish the suck-in.

Boss fights use the same loop: pull in → compress → swallow → digest.

Plan around your **limited keys and bombs**.

Extra keys and bombs on the floor are useless; only the per-floor grant is reliable. Spend keys and bombs on doors, rocks, and other route-critical obstacles first.

Hearts on the floor also cannot help you, but each floor grants 2 Black Hearts. Avoid taking heavy damage in a row rather than hunting for healing.

## Difficulty

**Easy**

Losing pickups and items sounds harsh, but automatic digestion on enemies (including bosses) makes most fights much safer.

This is less a traditional hard challenge and more a special Anna run with a rebuilt resource economy and extreme swallowing power.

<details>
<summary>Technical details</summary>

- On challenge start, the player is switched to Anna.
- Start removes 6 half-heart units of max red hearts and adds 2 half-heart units of black hearts (1 Black Heart).
- Each new floor calls `AddBlackHearts(4)` (+2 Black Hearts), not a restore to a fixed HP value.
- Each new floor also adds 1 key and 1 bomb.
- Normal player–Pickup collision is blocked for this challenge.
- Captured targets are removed when `Catch.rScale` length is below 0.1, with gulp SFX (bosses included).
- `PRE_ANNAS_PORTAL_COLLISION` allows bosses to be sucked in directly (`col:IsBoss()` returns true); many grid types listed in the challenge `remove_type` table can be handled as well.
- Challenge XML goal is Mega Satan.

</details>
