---
title: Seeker's Eye
description: "This path is not the answer"
slug: seekers-eye
kind: collectible
internalKey: Seeker_s_Eye
status: reviewed
---
<p class="wiki-search-index" v-pre>求索者之眼 Seeker&#x27;s Eye Seeker_s_Eye seekers-eye Seeker&#x27;s Eye 这条路不是答案 This path is not the answer 偏离目标的眼泪会短暂停顿并重新求索附近敌人 每枚眼泪最多重新寻找3次 攻击 每次求索都会增强该眼泪，最高造成150%伤害 Off-course tears briefly pause and reseek nearby enemies Each tear can reseek up to 3 times Damage Each seek strengthens that tear, up to 150% damage</p>

<PublicEntry slug="seekers-eye" lang="en" />


## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Seeker's Eye makes tears pause and re-path when they miss, glance, or stall on walls—stronger than plain homing.**

Normal homing curves toward a target. Seeking can briefly stop, reacquire a nearby enemy, and path around obstacles when needed.

Each tear re-seeks at most **3** times. Damage scales after successful re-seeks:

| Seeks so far | Damage mult |
| ---: | ---: |
| 0 | ×1.00 |
| 1 | ×1.15 |
| 2 | ×1.30 |
| 3 | ×1.50 |

Clear line flies straight; otherwise it may path around. Spectral tears still ignore walls. If blocked with no path, it may slide along walls; failing that, seeking ends.

## Notes

Some special tears do not participate, such as Ludovico-style tears.
