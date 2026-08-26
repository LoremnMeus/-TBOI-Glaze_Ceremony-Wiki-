---
slug: gospel
kind: collectible
internalKey: Gospel
title: Gospel
description: "Dogmatical Judgement"
status: featured
---
<p class="wiki-search-index" v-pre>福音 Gospel Gospel gospel Gospel 神的国度带着主权临到 Dogmatical Judgement 每4次攻击产生 福音攻击 命中使敌人接受福音，并可向附近敌人传播 击杀目标或持续伤害Boss时降下启示 多次启示后发动最终审判 Every 4th attack produces a Gospel attack Hits make enemies receive the Gospel, which can spread to nearby foes Killing affected enemies or repeatedly damaging affected Bosses invokes Revelation Repeated Revelations invoke a final Judgement</p>

<PublicEntry slug="gospel" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

**Gospel gradually spreads an attack between enemies and ultimately calls down Judgement.**

Every 4th attack produces a Gospel attack. When a Gospel tear hits an enemy, that target receives the Gospel and gains a halo above its head.

Further damage can spread Gospel to nearby targets. An affected enemy's death also invokes Revelation and continues the spread. Accumulating enough Revelations in the current room triggers final Judgement.

## Spreading Gospel

### Gospel attacks

Every 4th valid attack triggers a Gospel attack.

With ordinary tears, the fourth tear is converted into a Gospel tear and gains bonus damage. Lasers, Brimstone, and other attack forms instead fire an additional Gospel tear in the attack direction.

| Source | Damage |
| --- | ---: |
| Converted ordinary tear | 175% of the original tear |
| Additional Gospel tear | 75% of the character's damage |

### Receiving Gospel

An enemy hit by a Gospel tear receives the Gospel and displays a halo above its head.

The mark does not deal damage over time by itself. It makes that enemy part of Gospel's spreading, Revelation, and Judgement sequence.

### Spreading

Further damage to an affected enemy builds progress toward another spread.

For every accumulated **2.5× character damage**, Gospel spreads to the nearest unaffected enemy within 200 units and deals damage equal to **100% of the character's damage** to that target.

When an affected ordinary enemy dies, Gospel spreads directly to up to 2 nearby new targets.

## Revelation

When an affected ordinary enemy dies, Revelation calls down a holy beam at its position and continues spreading Gospel.

Bosses do not need to die. Every accumulated **8× character damage** dealt to an affected Boss invokes another Revelation.

An ordinary Revelation deals approximately **150% of the character's damage**.

## Final Judgement

After **6 Revelations** in the current room, final Judgement begins.

Every enemy still affected by Gospel is marked. After a short delay, a stronger holy beam strikes each marked position for approximately **200% of the character's damage**.

Final Judgement only targets enemies that have received Gospel; it does not attack every enemy in the room unconditionally.

Revelation progress resets on leaving the room, and final Judgement can occur only once per room.

## Visual cues

Gospel tears carry a prominent golden halo, and enemies that have received Gospel display a halo above their heads.

Revelation immediately calls down a holy beam. Final Judgement first places a brief target marker over every affected enemy, then calls down its stronger beams together.

## Tips

- **Spread Gospel before Judgement.** Final Judgement attacks every affected enemy, so a wider spread increases its total value.
- **Quickly dying enemies still advance the sequence.** Their deaths contribute Revelation and continue spreading Gospel.
- **Boss fights do not require a kill to progress.** Sustained damage to an affected Boss can repeatedly invoke Revelation and still reach Judgement.
- **Watch progress within the room.** Revelation count does not persist between rooms.

## Special interactions

### {{Seija}} Seija

Under Seija, Gospel no longer spreads to nearby enemies. Reaching a spread threshold instead invokes a dark Revelation on the original target for **75% of the character's damage**, and affected enemies no longer spread Gospel upon death.

Final Judgement can still occur and uses a dark visual treatment.

### {{Collectible:706}} Abyss

Gospel's locust also makes enemies receive Gospel when it hits them.

## Trivia

Gospel was influenced by the “Lightsworn” archetype from *Yu-Gi-Oh!*

Rather than merely adding another holy attack, the current design emphasizes Gospel being passed onward: sustained damage and death spread its influence to other enemies until Revelation accumulates into Judgement.

<details>
<summary>Technical details</summary>

### Core values

| Parameter | Value |
| --- | ---: |
| Gospel attack interval | Every 4 attacks |
| Converted tear damage | 175% |
| Additional Gospel tear damage | 75% |
| Damage needed to spread | 2.5× character damage |
| Spread radius | 200 |
| Spread hit damage | 100% |
| Death spread targets | Up to 2 |
| Boss damage needed for Revelation | 8× character damage |
| Revelation damage | 150% |
| Revelations needed for Judgement | 6 |
| Final Judgement damage | 200% |

### Other rules

Spreading only selects targets that have not yet received Gospel.

Entering a new room resets the Revelation count and Judgement state.

</details>
