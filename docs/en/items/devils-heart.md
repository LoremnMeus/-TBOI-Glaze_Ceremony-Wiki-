---
title: Devil's Heart
description: "They volunteered to die for me"
slug: devils-heart
kind: collectible
internalKey: Devil_s_Heart
status: drafted
---
<p class="wiki-search-index" v-pre>恶魔的心智 Devil&#x27;s Heart Devil_s_Heart devils-heart Devil&#x27;s Heart 他们自愿为我而死 They volunteered to die for me 可向多个敌人植入恶魔种子，与其缔结替死契约 受到致死伤害时，优先由签约敌人替死 签约敌人濒死时会变为永久友军，最多保留3名 每次借命后，恶魔开始反复索命；每次借命使伤害+1整心 Plant devil seeds to bind multiple enemies into death pacts On lethal damage, contracted enemies are sacrificed first Contracted enemies that would die become permanent friendly servants; keep up to 3 Borrowing a life starts recurring claims; each borrowed life adds 1 full heart of damage</p>

<PublicEntry slug="devils-heart" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Devil's Heart can bind several enemies into death pacts and turn dying normal hosts into permanent friendly servants.

Use the item to raise it, then press a fire direction to throw a devil seed. Hitting a vulnerable active enemy binds it into a pact. Friendly enemies can also be contracted directly as servants.

When the player takes lethal damage, one available contracted body is consumed to cancel the death. Contracted enemies are preferred over contracted servants; within the same group, the closest target is chosen.

A normal enemy sacrificed as a host dies. A boss instead loses about 12% of its maximum HP. The player then revives at the host's position.

## Contracted servants

When a contracted non-boss enemy would take lethal damage and fewer than 3 contracted servants currently exist, its death is cancelled and it:

- returns with about 20% maximum HP;
- moves near the player;
- becomes a permanent friendly enemy that follows between rooms;
- keeps its contract and can later die in the player's place.

After becoming a contracted servant, its next lethal hit kills it normally. It cannot repeat the conversion.

Up to 3 contracted servants can be kept at once. Once the limit is reached, other contracted enemies die normally when they take lethal damage.

## The Devil's claim

Every successful revival through a contract adds 1 full heart to the damage of every future claim.

After the first borrowed life, the Devil begins making repeated claims. Each interval is randomized to roughly 24–36 seconds and is weighted toward about 30 seconds. The exact remaining time is not shown.

The inverted crosses on the HUD show how many full hearts the next claim will deal. A warning appears shortly before collection, but it only indicates that the claim is close rather than revealing an exact countdown.

Each claim is resolved as one combined damage event. For example, a value of 3 deals 3 full hearts at once rather than three separate 1-heart hits.

If a claim itself would kill the player, another valid contract can still be consumed to revive them. That revival normally increases future claim damage again and begins a new claim cycle.

Claim damage persists between rooms and floors and remains even if Devil's Heart is later lost.

Saving and continuing clears all active contracts. Permanent friendly servants that still exist remain friendly and can be contracted again. Existing claim damage and the current claim progress are preserved.

## Notes

Bosses can serve as temporary sacrifice hosts but can never become contracted servants. If a contracted boss itself takes lethal damage, the pact ends and its death resolves normally.

Contracted servants are real friendly enemies and participate in combat normally. Their conversion only saves them from the lethal hit that created the servant; they can die normally afterward.

The 3-servant limit applies only to permanent contracted servants. The number of ordinary contracted enemies is not limited by it.

## Synergies

### {{Collectible:584}}

When a normal hostile host is sacrificed for the player, one matching wisp can be consumed to keep it alive. It instead takes about 65% of its current HP as damage.

For boss hosts, the payment is reduced from about 12% maximum HP to about 6%.

This protection does not apply when a contracted servant is consumed as a spare body.

### {{Collectible:34}}

After successfully reviving through a contract, gain +1 damage for the current room.

### {{Seija}}

Successfully reviving through a contract no longer adds 1 full heart to future Devil's claim damage.

Existing claim damage is not reduced. If recurring claims have already begun, the next cycle still proceeds normally.

### {{Collectible:706}}

The corresponding Abyss locust can also bind enemies into contracts on hit.
