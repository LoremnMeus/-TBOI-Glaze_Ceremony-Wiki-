---
title: Ingestion to Night
description: "The night has teeth"
slug: ingestion-to-night
kind: collectible
internalKey: Ingestion_to_Night
status: drafted
---
<p class="wiki-search-index" v-pre>夜之摄取 Ingestion to Night Ingestion_to_Night ingestion-to-night Ingestion to Night 长夜生牙 The night has teeth 33%概率使黑暗笼罩房间 蓄力潜入黑暗，发动斩击并反击弹幕 ↑ 在黑暗中30%概率免疫攻击 ↑ 飞行 +1攻击 33% chance for rooms to become pitch black Charge in darkness to unleash slashes and counter projectiles ↑ 30% chance to ignore damage in darkness ↑ Flight +1 damage</p>

<PublicEntry slug="ingestion-to-night" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Ingestion to Night lets you dive into a room's darkness, charge there, and release what you took in.**

While held, gain flight and **+1** damage. About **33%** of new rooms become pitch black; picking up the item also blacks out the current room.

Hold fire in darkness to build Ingestion:

| Depth | Roughly |
| --- | --- |
| Shallow | Thin edge fog |
| Mid | Darkness pushes inward |
| Deep (~130+) | About **30%** chance to ignore enemy damage; tooth-like forms become readable |
| Extreme (~180+) | Release fire to slash and swallow nearby enemy shots, then spit them back |

The Sun clears this darkness for the run; Reverse Sun reintroduces and strengthens night. Tarot draws can bias toward those cards.

## Notes

- Slash waves and projectile counters scale with Ingestion.
- Edge/tooth visuals are still being tuned; thresholds above are the gameplay source of truth.

## Synergies

### {{Collectible:706}}

The matching locust can fear enemies.

<details>
<summary>Technical details</summary>

- Damage ignore around counter &gt; 130 (~30%).
- Slash window around counter &gt; 180; waves ≈ `floor((counter-180)/90)+1`.
- Noise sheets from `codex_work/tools/generate_ingestion_noise.py`.

</details>
