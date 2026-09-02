---
slug: gospel
kind: collectible
internalKey: Gospel
title: Gospel
description: "Dogmatical Judgement"
status: reviewed
---
<p class="wiki-search-index" v-pre>福音 Gospel Gospel gospel Gospel 神的国度带着主权临到 Dogmatical Judgement 每4次攻击，该次攻击成为 福音攻击 命中使敌人接受福音，并可向附近敌人传播 击杀受福音影响的敌人，或持续伤害受影响的Boss，会降下启示 本房间累计6次启示后发动最终启示 Every 4th attack becomes a Gospel attack Hits make enemies receive the Gospel, which can spread to nearby foes Killing affected enemies or repeatedly damaging affected Bosses invokes Revelation After 6 Revelations in the room, invoke final Revelation</p>

<PublicEntry slug="gospel" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Every fourth attack carries the Gospel; it spreads between enemies until a room-wide revelation network closes.**

Every 4th valid attack, **that original attack itself** becomes a Gospel attack: its look and trajectory stay the same, with only a golden overlay. Hits make enemies receive the Gospel; further damage spreads it; kills or sustained Boss damage invoke Revelation. After **6 Revelations** in the room, **final Revelation** begins.

Gospel attack → receive → spread → Revelation → final Revelation

## Gospel attacks and receiving

The 4th valid attack marks the projectile or beam being fired (tears, lasers, Brimstone, and so on). It does not spawn an extra special tear, and it does not reskin the original tear into a Gospel orb.

Hit enemies receive the Gospel and show a halo. The mark itself is not damage over time.

## Spreading

Further damage to an affected enemy builds progress. At the threshold, a thin gold line runs **halo to halo**, instantly marking a nearby unmarked foe and dealing one hit of character damage. Spread is an instant link—no flying projectile.

When an affected ordinary enemy dies, a lingering halo can still spread to up to 2 nearby targets.

## Revelation and final Revelation

Killing an affected ordinary enemy, or dealing enough damage to an affected Boss, calls down Revelation.

After **6 Revelations** in the current room, final Revelation starts (once per room):

1. Remaining living unmarked enemies join the network;
2. Existing nodes form a simple tree rooted at the earliest convert;
3. Everyone in the network takes the final holy strike (stronger than a normal Revelation).

Revelation progress does not carry between rooms.

## Notes

- Gospel attacks keep the original sprite, size, and synergy look; only a golden overlay is added.
- Lasers / Brimstone no longer fire a separate Gospel tear; whoever the real attack hits can receive Gospel.
- Spread only targets unmarked foes inside range.
- Final Revelation happens once per room; it will not run a second time in that room.
- Receiving Gospel is not a damage-over-time effect.

## Special interactions

### {{Seija}}

Under Seija, Gospel no longer spreads. Reaching a spread threshold instead drops a weaker dark Revelation on the original target, and death no longer spreads further.

Final Revelation can still occur, but it **does not** fill unmarked enemies into the network—it only judges those already marked, with dark visuals.

### {{Collectible:706}} Abyss

Gospel's locust also makes enemies receive Gospel on hit.

## Trivia

Gospel was influenced by the “Lightsworn” archetype from *Yu-Gi-Oh!*

The current design is not “an extra yellow tear every fourth shot,” but an attack that carries Gospel until spread and final Revelation close the room into one network.

<details>
<summary>Technical details</summary>

### Core values

| Parameter | Value |
| --- | ---: |
| Gospel attack interval | Every 4 valid attacks |
| Damage needed to spread | 2.5× character damage |
| Spread radius | 200 |
| Spread hit damage | 100% |
| Death spread targets | Up to 2 |
| Boss damage needed for Revelation | 8× character damage |
| Revelation damage | 150% |
| Revelations needed for final Revelation | 6 |
| Final Revelation damage | 300% |
| Seija dark Revelation damage | 75% |

</details>
