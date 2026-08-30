---
title: Multiknife
description: "Ten years I honed this sword"
slug: multiknife
kind: collectible
internalKey: Multiknife
status: reviewed
---
<p class="wiki-search-index" v-pre>倍增重刃 Multiknife Multiknife multiknife Multiknife 十年磨一剑 Ten years I honed this sword 拥有至少1格充能时即可使用 消耗当前全部充能，向瞄准方向挥出重刃 攻击 1格充能造成100%角色攻击伤害 每多1格充能，伤害与攻击范围翻倍 Usable with at least 1 charge Spends all current charges to swing a heavy blade toward your aim Damage 1 charge deals 100% of your damage Each extra charge doubles damage and swing size</p>

<PublicEntry slug="multiknife" lang="en" />

## Mechanics


<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Multiknife turns charges into exponential power: spend more charges to double the swing again and again.**

- {{Battery}} Usable with at least **1** charge; spends all current charges
- {{Damage}} **1** charge = **100%** of your damage; each extra charge doubles it (`2^(charges-1)`)
- Blade size grows with charge; about **7–12** charges use soft visual/collision caps so the HUD/hitbox do not explode with pure powers of two

### Damage multipliers (early tiers)

| Charges | Multiplier |
| -: | ---: |
| 1 | 1× |
| 2 | 2× |
| 3 | 4× |
| 4 | 8× |
| 5 | 16× |
| 6 | 32× |

Higher charges keep doubling; Book of Belial can raise the cap to **12**.

## Synergies

### {{Collectible:34}}

+2 max charges (up to 12); blade turns blood-red.

### {{Collectible:584}}

1 wisp (1 HP / 1 damage) per charge spent.
