---
title: Wavering Eyes
description: "Don't blink, don't miss"
slug: wavering-eyes
kind: collectible
internalKey: Wavering_Eyes
status: reviewed
---
<p class="wiki-search-index" v-pre>摇摆之眼 Wavering Eyes Wavering_Eyes wavering-eyes Wavering Eyes 别眨眼，别偏离 Don&#x27;t blink, don&#x27;t miss 连续用眼泪命中敌人会累计凝视 ↓ 凝视越高，眼泪摇摆越明显 每3层凝视提升射速 5层：眼泪轻微吸附敌人 8层：追踪眼泪 13层：钩虫眼泪 21层：弹性眼泪 !!! 连续失误会清空凝视 Consecutive tear hits build Focus ↓ Higher Focus: tears waver more in a steady sway Every 3 Focus: tears up 5 Focus: tears gently pull toward nearby foes 8 Focus: homing tears 13 Focus: hook worm tears 21 Focus: rubber tears !!! Too many misses clear Focus</p>

<PublicEntry slug="wavering-eyes" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Wavering Eyes makes consecutive hits grow stronger—and tears harder to fire straight.

Landing tears on enemies builds **Focus**.

Focus has no hard cap. Higher Focus makes consecutive tears **sway left and right** in a steady pattern around the aim direction—not independent random scatter per shot. Sway amplitude is capped so high Focus does not become uncontrollable.

| Focus | Effect |
| ---: | --- |
| Higher | Stronger left/right sway (~+3° per 2 Focus, cap ~±25°) |
| Every 3 | Tears up |
| 5 | Tears gently pull toward nearby foes |
| 8 | Homing tears |
| 13 | Hook worm tears |
| 21 | Rubber tears |

Wavering Eyes is not a pure stacking reward: **the higher the Focus, the stronger the shots—and the harder they are to aim straight.**

## Defocus

Tears that vanish without a valid hit build **Defocus**; hits gradually recover it.

| Event | Defocus |
| --- | --- |
| Tear removed without hitting a valid enemy | +1 |
| Hit on a vulnerable enemy | −0.35 |
| Defocus ≥ 4 | Focus and Defocus both reset to 0 |

A single whiff usually will not instantly wipe Focus; long miss streaks fill Defocus and trigger the reset.

On reset, a brief visual flash and quiet fail sound play—no popup text.

## Notes

- Only tears that actually hit vulnerable enemies increase Focus.
- Tears that hit walls, leave range, or vanish without an enemy hit add Defocus.
- Focus does not reset when entering a new room.
- Threshold tear effects stay until Defocus fills and clears Focus.
- **Each tear resolves only once** for Focus or Defocus; piercing the same tear through multiple enemies does not stack Focus again.
- The item is built around **tear** attacks; lasers, brimstone, knives, etc. are out of scope.

## Tips

The core skill is **keeping hits landing**, not simply firing faster.

Low Focus feels almost normal; mid Focus introduces readable sway. Soft pull at **5** helps you adapt; **8** homing tears help steer the sway back onto targets.

High-volume or spread fire changes Focus and Defocus faster; if many extra tears keep missing, holding high Focus becomes much harder.

## Visual feedback

- **Focus:** tear tint deepens with tiers; 5+ purple bias, 8 / 13 / 21 add stronger trail feel and saturation.
- **Defocus:** light player jitter, darker tears, flicker near the cap; brief white flash on reset.

Color shows Focus / Defocus state only—no hidden stat tiers beyond the table above.

<details>
<summary>Technical details</summary>

- Each normally fired player tear gets one Focus / Defocus resolution; one tear only counts once.
- Sway: per-player phase; each shot `phase += 35°`, offset `sin(phase) × amplitude`; `amplitude = min(25, floor(Focus/2) × 3)`.
- Tears up: `0.5 × sqrt(floor(Focus / 3))`.
- 5 Focus: nearest foe within 90, velocity direction lerp ~4% per frame; 8+ uses real homing.
- 8 / 13 / 21 add homing, hook worm, and rubber tear flags.
- Focus and Defocus stored per player in `gaze` / `defocus`; migrated from legacy save keys on continue; fresh run clears both. Phase is not saved.

</details>
