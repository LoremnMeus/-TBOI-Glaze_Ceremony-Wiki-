---
title: Crown of the glaze
description: "A king, until it shatters"
slug: crown-of-the-glaze
kind: collectible
internalKey: Crown_of_the_glaze
status: featured
---
<p class="wiki-search-index" v-pre>琉璃的冠冕 Crown of the glaze Crown_of_the_glaze crown-of-the-glaze Crown of the Glaze 破碎之前，你即为王 A king, until it shatters 提高琉璃化掉落物的生成概率 拾取琉璃化掉落物会为冠冕增加1层辉片，最多5层 1层：+0.6攻击 2层：攻击命中时有概率产生琉璃折射 3层：+1幸运，并提高折射与敌人琉璃化的触发率 4层：攻击有概率使敌人琉璃化 5层：完成冠冕，强化琉璃化掉落物，并免疫琉璃化敌人的碰撞伤害 受伤时冠冕破碎并失去全部辉片 根据失去的辉片数量向四周释放琉璃碎片 Increases the chance of glazed pickups Picking up glazed pickups adds 1 Crown shard, up to 5 1 shard: +0.6 Damage 2 shards: Hits may split into glazed refraction tears 3 shards: +1 Luck, and higher chance for refraction / enemy glazing 4 shards: Attacks may glaze normal enemies 5 shards: Completes the crown, empowers glazed pickups, and blocks glazed enemy contact damage Taking damage shatters the crown and removes all shards Fires glaze fragments based on lost shards</p>

<PublicEntry slug="crown-of-the-glaze" lang="en" />

## Mechanics

<!-- Manual body: the generator will not overwrite this file. -->

## Effects

Crown of the Glaze grows by picking up glazed drops, then asks you to keep high tiers despite the risk of a full shatter on real damage.

Any supported glazed pickup → **+1** shard, up to **5**. Higher tiers unlock attack and glaze-related powers. On real effective damage, every shard shatters at once and sprays fragments based on the lost tier.

| Shards | Unlock |
| --- | --- |
| 1 | {{Damage}} +0.6 Damage |
| 2 | Hits may create glazed refraction |
| 3 | {{Luck}} +1 Luck, and higher chance for refraction / enemy glazing |
| 4 | Attacks may glaze normal enemies |
| 5 | Completes the crown; empowers certain glazed pickups; blocks glazed enemy contact damage |

### Full-crown bonuses

At 5 shards, the crown only changes these pickups’ **extra** rewards (full pickup rules stay on their own pages):

| Glazed pickup | Extra at full crown |
| --- | --- |
| {{Pickup:glaze-heart}} | Glaze outcomes that would spawn a half heart upgrade to a full Glaze Heart |
| {{Pickup:glaze-coin}} | The 10% jackpot rises from 5 coins to 15 |
| {{Pickup:glaze-bomb}} | Pulse phase also clears room projectiles |
| {{Pickup:glaze-grabbag}} | Always drops 3 packs instead of 2–3 |
| {{Pickup:glaze-chest}} | Opening also spawns 4 glazed pickups |

### Shatter

Only damage that actually gets through defenses and costs real health shatters the crown. Devil deals, blood donation machines, curse doors, and similar special drains do not.

A shatter is also a counterattack: it fires fragments by former tier and may drop one extra random glazed pickup (at most one per shatter). Losing the crown is not pure waste.

## Notes

- The tier-3 chance bonus only boosts the crown’s own refraction and enemy-glazing rolls—not every glaze-family effect in the run.
- Damage fully blocked by Holy Mantle does not shatter the crown.

## Special synergies

### {{Seija}} Seija

Weaker glazed-pickup spawn bonus; half shatter damage; no tier-3 chance multiplier.

## Tips

- Near full crown, decide whether the next glazed pickup is worth risking a shatter to keep.
- Shatter can refund a glazed resource—so hits are not pure loss—but you still drop every tier effect.

<details>
<summary>Technical details</summary>

- Tier 2 refraction base ≈ 22%; each refraction fires two side tears at about `30%` player damage.
- From tier 3, refraction / enemy-glaze base multiplier ≈ `1.25×` (`1×` under Seija).
- Tier 4 enemy glaze base ≈ 6%, luck can raise it, hard cap ≈ 12%.
- Shatter fragment counts by former tier: 6 / 8 / 10 / 12 / 16; each about `40%` player damage. Full 5-tier shatter also adds a weaker room-wide hit and extra fragments.
- Per shatter event, fragment hits have one 25% chance to spawn a random glazed pickup (max one).

</details>
