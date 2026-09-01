---
title: Hyper Velocity
description: "Next stop: impact"
slug: hyper-velocity
kind: collectible
internalKey: Hyper_Velocity
status: reviewed
---
<p class="wiki-search-index" v-pre>和谐号 Hyper Velocity Hyper_Velocity hyper-velocity Hyper Velocity 下一站，创死你 Next stop: impact 举起后按方向召唤一列动车 动车撞击敌人并破坏地形 攻击 撞击敌人造成250+5倍角色伤害 动车会对角色造成5点伤害 Hold up the item, then choose a direction to call a train The train runs through enemies and terrain Damage Deals 250 + 5x Isaac&#x27;s damage to enemies Deals 5 damage to Isaac on collision</p>

<PublicEntry slug="hyper-velocity" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Hyper Velocity summons a real train that runs straight through the room on the chosen line.**

Use the item to lift it, then press a firing direction to launch. Using it again while still holding cancels without spending charge. Launching spends charge and summons a train on that cardinal axis (up / down / left / right). The train enters from outside the room, accelerates in a straight line, and despawns once fully outside. The path is locked at summon and will not swerve. Leaving the room also clears active trains.

Against enemies it deals **250 + 5×** Isaac's damage with knockback. Against players it deals **5** damage (same half-heart units as the EID) and knocks them along the track. Solid, destroyable grids along the path are destroyed.

If two trains' hitboxes overlap, they crash: a **1000**-damage explosion at the meeting point, a heavy screen shake, and both trains are removed.

## Notes

- The train hits Isaac too; standing on the planned track will get him hit repeatedly. Knockback follows the track, so “grazing” the nose is unsafe.
- Direction is fixed at the moment of launch; the train never turns afterward.

## Synergies

### {{Collectible:584}}

When a wisp should spawn on launch, **2** Peace wisps are created. While any Peace wisp remains, one hit dealing damage amount ≥ **2** is fully blocked, then all Peace wisps vanish.

(The EID says “2 hearts or more”; in practice, one hit dealing at least a full heart in the same units as this item’s “5 damage” is blocked.)

### {{Collectible:706}}

The matching Abyss locust is extremely fast.

## Tips

- For rock-clearing or hallway wipes, step off that orthogonal lane before launching.
- With one train already running, launching a crossing train can force a crash explosion for a burst payoff.

## Trivia

- The Chinese name references China’s CRH “Harmony” high-speed trains. Challenge {{Challenge:safe-driving}} reuses the same train summon.

<details>
<summary>Technical details</summary>

- Charge: 3.

| Target | Damage |
| --- | --- |
| Enemies | `250 + 5 × Damage` |
| Players | 5 |
| Train crash | 1000-damage explosion at the meeting point with heavy screen shake |

</details>
