---
title: Regenesis
description: "Not one will be lost"
slug: regenesis
kind: collectible
internalKey: Regenesis
status: drafted
flavorSource: "John 6:39"
---
<p class="wiki-search-index" v-pre>再世纪 Regenesis Regenesis regenesis Regenesis 一个也不失落 Not one will be lost 生成一个记住近期失物的宝宝 每项失物需要记录1-4个战斗房，完成后由宝宝吐回 Spawns a familiar that remembers things you recently lost Each loss takes 1-4 cleared combat rooms to recover, then the familiar spits it back out</p>

<PublicEntry slug="regenesis" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Regenesis** spawns a familiar that remembers things you lose.

After combat rooms are cleared, the familiar gradually spits the remembered losses back out. Each loss tracks its own recovery progress, and new losses do not affect earlier recovery.

| Loss | Combat rooms |
| --- | ---: |
| Ordinary resources, health, and charge | 1 |
| Pills | 2 |
| Cards | 3 |
| Quality 0–2 items | 3 |
| Quality 3–4 items | 4 |

The most recently remembered loss is restored first. Multiple Regenesis familiars can recover different losses at the same time, but they do not speed up recovery of the same loss.

Regenesis remembers at most 12 losses at once.

## What it remembers

The familiar can remember lost:

- coins, bombs, and keys;
- health;
- active-item charge;
- cards and pills that were actually used;
- passive items.

Trinkets are not recorded.

If several units of the same resource are lost in one event, they are restored together rather than each requiring a separate waiting period.

## How losses return

Different losses return in forms appropriate to them:

- coins are recombined into equivalent 10-, 5-, 2-, and 1-cent pickups;
- bombs and keys return in the amount lost;
- lost active charge becomes an appropriate battery pickup;
- health returns as matching heart pickups;
- cards and pills return as their original type;
- passive items return on item pedestals.

## Losing Regenesis

Losses already remembered by the familiar are not erased if Regenesis itself is later lost.

Some recent losses can also remain temporarily remembered on the current floor while Regenesis is absent, allowing them to be picked up by the familiar if Regenesis is obtained again.

## Trivia

- The name comes from the Yu-Gi-Oh! Regenesis archetype and its Normal Spell Card 「再世记」 (Regenesis).
- The flavor text “Not one will be lost” is taken from John 6:39, echoing the verse’s wording about not losing what was entrusted.

<details>
<summary>Technical details</summary>

Once 12 losses are remembered, the oldest loss that has not started recovering is forgotten first. Losses that already have progress are kept when possible.

</details>
