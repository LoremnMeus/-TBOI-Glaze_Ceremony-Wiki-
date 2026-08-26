---
title: Swallow the Sun
description: "Play as Anna Fully sucked-in normal enemies are devoured !!! Cannot pick up any floor pickups, including items Gain 2 Black Hearts, 1 bomb and 1 key on each new floor Difficulty: E"
slug: swallow-the-sun
kind: challenge
internalKey: Swallow_The_Sun
status: featured
---
<p class="wiki-search-index" v-pre>挑战：食日 Swallow the Sun Swallow_The_Sun swallow-the-sun Swallow The Sun 安娜开局 掌中黑洞完全吸入普通敌人后将其直接消灭 !!! 无法拾取任何地面掉落物，包括道具 进入新层获得2颗黑心、 1炸弹与 1钥匙 难度等级：简单 Play as Anna Fully sucked-in normal enemies are devoured !!! Cannot pick up any floor pickups, including items Gain 2 Black Hearts, 1 bomb and 1 key on each new floor Difficulty: Easy</p>

<PublicEntry slug="swallow-the-sun" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

Swallow the Sun uses {{Character:anna}}, but completely changes how her handheld black hole works.

Normal Anna stores sucked-in enemies inside the black hole and must release them later for most of her damage. In this challenge, normal enemies are **devoured and removed** once they are **fully sucked in**.

In exchange, you cannot pick up any floor pickups or gain new items through normal means.

## Rules

- You play as Anna.
- You start with **1 Black Heart**.
- The handheld black hole remains your main attack.
- Normal enemies are destroyed once fully sucked in; they do not enter Anna's capture stock.
- Bosses cannot be devoured outright, but take repeated damage while captured.
- You cannot pick up any floor pickups, including hearts, coins, keys, bombs, cards, pills, trinkets, or **item pedestals**.
- Each new floor **grants** (not restores to a fixed value):
  - {{BlackHeart}} **2 Black Hearts**
  - {{Key}} **1 key**
  - {{Bomb}} **1 bomb**

This challenge largely removes the usual loop of picking up resources, collecting items, and building power. Progress depends on the empowered black hole and fixed per-floor supplies.

## Handheld black hole

### Normal enemies

Enemies do not die the moment they touch the black hole.

They are destroyed only after being pulled in, compressed, and fully absorbed.

You no longer need to stock enemies and release them later like normal Anna. In most regular rooms, stable black-hole control is enough to clear the fight.

### Bosses

Bosses are never devoured outright.

While a boss is captured, it takes repeated damage equal to the higher of:

- {{Damage}} **6 damage**
- **1.2%** of the boss's maximum HP

High-HP bosses are still worn down steadily.

## No floor pickups

This challenge blocks all Pickup collision with the player.

That means no post-fight coins, hearts, keys, or bombs—and **item pedestals cannot be taken either**.

Treasure rooms, shops, and other rooms that normally fuel your build no longer do.

Your main resources are the fixed grant at the start of each floor:

{{BlackHeart}} 2 Black Hearts · {{Key}} 1 key · {{Bomb}} 1 bomb

## Strategy

Normal enemies are the easy part. Unlike regular Anna, you do not need to ask which foe is worth keeping as ammunition—just finish the suck-in.

Plan around your **limited keys and bombs**.

Extra keys and bombs on the floor are useless; only the per-floor grant is reliable. Spend keys and bombs on doors, rocks, and other route-critical obstacles first.

Hearts on the floor also cannot help you, but each floor grants 2 Black Hearts. Avoid taking heavy damage in a row rather than hunting for healing.

Against bosses, do not wait for a "devour" finish—they never get deleted. Keep the boss inside the capture zone so the percentage damage keeps ticking.

## Difficulty

**Easy**

Losing pickups and items sounds harsh, but instant execution on normal enemies makes most fights much safer, and bosses take steady percentage damage.

This is less a traditional hard challenge and more a special Anna run with a rebuilt resource economy and extreme execution power.

<details>
<summary>Technical details</summary>

- On challenge start, the player is switched to Anna.
- Start removes 6 half-heart units of max red hearts and adds 2 half-heart units of black hearts (1 Black Heart).
- Each new floor calls `AddBlackHearts(4)` (+2 Black Hearts), not a restore to a fixed HP value.
- Each new floor also adds 1 key and 1 bomb.
- Normal player–Pickup collision is blocked for this challenge.
- Non-boss enemies are removed only when Anna's capture exists and capture scale length is below 0.1.
- Bosses take `max(6, MaxHitPoints × 0.012)` damage per tick while captured.
- Challenge XML goal is Mega Satan.

</details>
