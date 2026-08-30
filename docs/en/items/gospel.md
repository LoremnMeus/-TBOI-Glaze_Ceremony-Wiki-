---
slug: gospel
kind: collectible
internalKey: Gospel
title: Gospel
description: "Dogmatical Judgement"
status: featured
---
<p class="wiki-search-index" v-pre>福音 Gospel Gospel gospel Gospel 神的国度带着主权临到 Dogmatical Judgement 每4次攻击产生 福音攻击 命中使敌人接受福音，并可向附近敌人传播 击杀受福音影响的敌人，或持续伤害受影响的Boss，会降下启示 本房间累计6次启示后发动最终审判 Every 4th attack produces a Gospel attack Hits make enemies receive the Gospel, which can spread to nearby foes Killing affected enemies or repeatedly damaging affected Bosses invokes Revelation After 6 Revelations in the room, invoke final Judgement</p>

<PublicEntry slug="gospel" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Gospel gradually spreads an attack between enemies and ultimately calls down Judgement.**

Every 4th valid attack produces a Gospel attack. Hits make enemies receive the Gospel; further damage or kills spread it and invoke Revelation. Enough Revelations in the current room trigger final Judgement.

Gospel attack → receive Gospel → spread → Revelation → final Judgement

## Spreading Gospel

Every 4th valid attack triggers a Gospel attack. With ordinary tears, the fourth tear is converted into a Gospel tear. Lasers, Brimstone, and other attack forms instead fire an additional Gospel tear.

An enemy hit by a Gospel tear receives the Gospel and displays a halo above its head. The mark does not deal damage over time by itself.

Further damage to an affected enemy builds spread progress and passes Gospel to nearby enemies that have not yet received it. When an affected ordinary enemy dies, Gospel also spreads to additional nearby targets.

## Revelation and final Judgement

When an affected ordinary enemy dies, Revelation calls down a holy beam. Bosses do not need to die; sustained damage to an affected Boss can also invoke Revelation.

After **6 Revelations** in the current room, final Judgement begins. It only strikes enemies that have received Gospel and does not attack every enemy in the room unconditionally. Revelation progress does not persist between rooms, and final Judgement can occur only once per room.

## Notes

- Revelation progress resets on entering a new room.
- Final Judgement only affects targets that have received Gospel.
- Receiving Gospel is not a damage-over-time effect.
- Spreading only selects targets that have not yet received Gospel.
- Gospel tears and affected enemies display a golden halo; Revelation and final Judgement call down holy beams.

## Tips

- **Spread Gospel before Judgement.** Final Judgement attacks every affected enemy, so a wider spread increases its total value.
- **Quickly dying enemies still advance the sequence.** Their deaths contribute Revelation and continue spreading Gospel.

## Special interactions

### {{Seija}}

Under Seija, Gospel no longer spreads to nearby enemies. Reaching a spread threshold instead invokes a weaker dark Revelation on the original target, and affected enemies no longer spread Gospel upon death.

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
| Gospel attack interval | Every 4 valid attacks |
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
| Seija dark Revelation damage | 75% |

</details>
