---
title: Cable Jar
description: "Slightly leaky"
slug: cable-jar
kind: collectible
internalKey: Cable_Jar
status: reviewed
---
<p class="wiki-search-index" v-pre>罐中雷暴 Cable Jar Cable_Jar cable-jar Cable Jar 你感到有点漏电 Slightly leaky 将主主动槽中有充能主动的上限压缩至2格 溢出的充能会泄露为留在房间中的能量球 使用主动时，按当前上限/原始上限的概率正常发动 失败：泄露所有充能并释放雷暴，上限+2 受伤时上限-2，并泄露超出新上限的充能 Compresses the charge cap of charged primary actives to 2 Excess charge leaks into energy orbs that remain in the room On use: current cap/original cap chance to activate normally Failure: leak all charge in a thunderstorm; cap +2 Taking damage lowers the cap by 2 and leaks charge above the new cap</p>

<PublicEntry slug="cable-jar" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Cable Jar turns the primary active's charge cap into a leaky container that grows after failed uses and shrinks after damage.**

Charged actives in the primary slot begin with a **2-charge cap**. Each active tracks its own cap, so returning to a previously held active restores the capacity already developed for that item.

Charge above the current cap leaks into energy orbs that remain in the current room. An orb approaches a character whose active can still receive charge; collecting it restores 1 charge. Uncollected orbs are recorded in the room where they appeared.

The chance for an active to work normally is:

$$
\text{success chance}=\frac{\text{current cap}}{\text{original charge requirement}}
$$

For example, an active that originally requires 6 charges has about a **33%** chance to work at a cap of 2. On failure, the active does not activate; all current charge becomes a thunderstorm and energy orbs, and that active's cap increases by 2, up to a normalized maximum of 12.

Taking damage lowers the current active's cap by 2, to a minimum of 2. Charge above the new cap leaks into energy orbs after a warning.

## Notes

- Only the primary active slot is affected. Pocket actives and other active slots do not use this success roll.
- Zero-charge actives are ignored. Book of Thoth is also excluded because its charge bar represents Revelation rather than an activation cost.
- {{Collectible:63}} still expands total stored charge, but does not change the base cap used by the success chance.
- The current success chance is displayed near the active-item HUD.

## Tips

- Failure develops capacity for that specific active. Keeping one high-charge active becomes more reliable over time, while frequently swapping actives means developing several separate caps.
- Energy orbs remain in their original room, allowing them to be collected later when charge is needed.

## Synergies

### {{Collectible:706}}

The corresponding locust has a low chance to create 1 energy orb when it hits an enemy, with a 15-second cooldown.
