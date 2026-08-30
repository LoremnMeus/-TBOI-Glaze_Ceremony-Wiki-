---
title: Mental Hypnosis
description: "Would you kindly?"
slug: mental-hypnosis
kind: collectible
internalKey: Mental_Hypnosis
status: reviewed
---
<p class="wiki-search-index" v-pre>精神控制 Mental Hypnosis Mental_Hypnosis mental-hypnosis Mental Hypnosis 劳驾你，照做吧 Would you kindly? 每层生成一串特殊房间指令 依次进入对应特殊房间，每次成功获得奖励 提前进入其他特殊房间会受到惩罚 Each floor creates an ordered list of special rooms Enter matching special rooms in order; each success grants a reward Entering other special rooms early causes a punishment</p>

<PublicEntry slug="mental-hypnosis" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effect

Mental Hypnosis turns each floor’s special rooms into a visit route that must be completed in order.

At the start of each floor, it builds a random **room order** from the special room types that exist on that floor and shows the remaining sequence in the HUD.

Whenever a counted special room is **entered for the first time**:

- If its room type matches the current instruction, a random reward is granted immediately.
- If a different special room is entered instead, a random punishment is applied immediately.

Whether the step succeeds or fails, that instruction is consumed and the next one becomes active.

**Normal rooms do not count. Only the first visit to a counted special room is checked.**

For example, if the order is Treasure Room → Shop → Boss Room, passing through normal rooms does not affect progress. If the second step wants a Shop but a Curse Room is entered first, that step fails and a punishment is applied, then the next instruction continues—the whole list is not reset.

## Rewards

Each correct step grants one random reward.

A successful step may grant a stat bonus that lasts **until this run ends**, spawn coins, bombs, keys, batteries, hearts, cards, pills, or allies, or—rarely—a collectible pedestal. Multiple successes stack.

## Punishments

Entering the wrong special room grants one random punishment.

A failed step may lower stats, drain resources, or spawn Troll Bombs and similar hazards. These changes also last until this run ends. One mistake only resolves that step; it does not wipe progress from earlier steps on the floor.

## Notes

- Only the **first visit** to a counted room is checked. Re-entering a room you already cleared does nothing.
- Matching is by **room type**, not a specific map slot. If a floor has multiple rooms of the same type, any valid one completes that step.
- Stat changes from rewards and punishments last until this run ends and can stack.
- A new order is generated on every new floor.

## Trivia

Mental Hypnosis is built around following external instructions: special rooms on a floor are organized into an ordered route that must be completed in sequence.

Its sprite is redrawn from Spun-set collectibles such as {{Collectible:13}}; the syringe imagery of injection and imposed compliance echoes that “follow the order” play pattern.

<details>
<summary>Technical details</summary>

- On each new floor, special rooms present on the floor are shuffled into an ordered type list.
- Normal rooms and several unsuitable room types are excluded.
- Matching uses room type; any room of the required type completes that step.
- Each counted room resolves only on first entry; success or failure advances to the next instruction.
- Stat rewards and penalties last for the rest of the run and are not cleared on new floors.
- Some awkwardly placed secret rooms are ordered so the route stays reasonably completable.
- Greed Mode has additional ordering rules for some special room types.

### Reward and punishment tables

**Reward stats (stacking)**

| Stat | Bonus |
| --- | --- |
| Damage | +0.5 |
| Tears | +0.35 |
| Shot Speed | +0.15 |
| Range | +1 |
| Speed | +0.15 |
| Luck | +1 |
| Size | ×0.9 |

**Reward pickups**

- 1–5 coins, 1–2 bombs or keys, 1–2 batteries, 2–4 hearts;
- cards or pills;
- blue spiders or blue flies;
- Pretty Fly or friendly Dips;
- rarely, a collectible pedestal.

**Punishment stats (stacking)**

| Stat | Penalty |
| --- | --- |
| Damage | −0.2 |
| Tears | −0.2 |
| Shot Speed | −0.1 |
| Range | −0.5 |
| Speed | −0.1 |
| Luck | −0.5 |
| Size | ×1.12 |

**Punishment effects**

- Lose 10 coins, 3 bombs or keys, or your golden key or golden bomb;
- lose 1 coin and an extra −1 Luck;
- spawn Troll Bombs, Mega Troll Bombs, Golden Troll Bombs, and similar hazards.

</details>
