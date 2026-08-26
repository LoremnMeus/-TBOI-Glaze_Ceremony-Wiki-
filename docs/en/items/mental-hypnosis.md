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

At the start of each floor, Mental Hypnosis builds a random **room order** from the special room types that exist on that floor and shows the remaining sequence in the HUD.

Whenever you **enter a counted special room for the first time**:

- If its room type matches the current instruction, you immediately receive a random reward.
- If you enter a different special room instead, you immediately receive a random punishment.

Whether you succeed or fail, that instruction is consumed and the next one becomes active.

The item is not asking you to “find every listed room.” It asks you to **plan the order in which you visit this floor’s special rooms**.

**Normal rooms do not count. Only the first visit to a counted special room is checked.**

## Following the order

Normal rooms are ignored.

If the current order is:

> Treasure Room → Shop → Boss Room

you may pass through any number of normal combat rooms between them.

As long as your first visits to special rooms follow Treasure Room, then Shop, then Boss Room, you can chain rewards.

If the second step wants a Shop but you enter a Curse Room early:

> Treasure Room ✓
> Curse Room ✗
> next instruction continues

You are punished immediately, but the **whole list is not reset**.

## Rewards

Each correct step grants one random reward.

Possible stat bonuses:

| Stat | Bonus |
| --- | --- |
| Damage | +0.5 |
| Tears | +0.35 |
| Shot Speed | +0.15 |
| Range | +40 |
| Speed | +0.15 |
| Luck | +1 |
| Size | ×0.9 |

You may also receive immediate pickups or allies:

- 1–5 coins, 1–2 bombs or keys, 1–2 batteries, 2–4 hearts;
- cards or pills;
- blue spiders or blue flies;
- Pretty Fly or friendly Dips;
- rarely, a collectible pedestal.

Stat rewards are [run-permanent](/en/systems/permanent-effects) and can stack across multiple successful steps.

## Punishments

Entering the wrong special room grants one random punishment.

Possible stat penalties:

| Stat | Penalty |
| --- | --- |
| Damage | −0.2 |
| Tears | −0.2 |
| Shot Speed | −0.1 |
| Range | −20 |
| Speed | −0.1 |
| Luck | −0.5 |
| Size | ×1.12 |

You may also lose coins, bombs, or keys; lose your golden key or golden bomb; or spawn Troll Bombs, Mega Troll Bombs, Golden Troll Bombs, and similar hazards.

Stat penalties are also run-permanent. After a mistake, the next instruction still matters—one failure does not wipe the rest of the floor.

## Notes

- Only the **first visit** to a counted room is checked. Re-entering a room you already cleared does nothing.
- Normal rooms neither advance the order nor punish you.
- Matching is by **room type**, not a specific map slot. If a floor has multiple rooms of the same type, any valid one completes that step.
- Stat changes from rewards and punishments last for the whole run and can stack.
- A new order is generated on every new floor.

## Tips

Read the first few HUD icons before committing to a route.

You do not have to explore in map order. Detours, skipping discovered rooms, and delaying the Boss Room are often correct.

If a room is not due yet, leave it alone until its icon reaches the front of the queue.

A bad step only costs that one punishment. The remaining instructions can still pay off.

<details>
<summary>Technical details</summary>

- On each new floor, eligible room types are collected and shuffled into an instruction list.
- Normal rooms and several technical room types are excluded.
- Matching uses room type, not a specific RoomDescriptor.
- Each counted room resolves only on first entry.
- Both success and failure advance the instruction index by 1.
- Stat rewards and penalties persist across floors within the same run.
- On REPENTOGON, hidden-room ordering has extra handling to avoid obviously impossible sequences.
- Greed Mode has additional ordering rules for some special room types.

</details>
