---
title: Memory
description: "I fall into a loop..."
slug: memory
kind: collectible
internalKey: Memory
status: reviewed
---
<p class="wiki-search-index" v-pre>回忆 Memory Memory memory Memory 我好像掉进了一个怪圈... I fall into a loop... !!! 一次性 本局后续道具只会从角色已拥有的道具中生成 重复持有会提高再次出现的概率 !!! SINGLE USE For this run, new collectibles only come from items you already hold More copies of an item make it more likely to appear again</p>

<PublicEntry slug="memory" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

On use, **Memory vanishes immediately** and makes the rest of the run keep spawning duplicates of what you already hold.

From that moment, you largely stop gaining new build pieces and instead keep copying choices you already made. Whenever the game tries to roll a collectible from a pool, the result is replaced with something every player currently holds. This lasts until the run ends.

It is not uniform random among owned items:

- an item held **once** has weight **1**;
- extra copies add weight, so duplicates are more likely to appear again.

Memory therefore pushes your build to collapse further toward items you have already repeated.

## Notes

- **Memory is a single-use active.** The item itself is removed on use, but its effect persists.
- It affects later pool rolls globally, not only the pool of the room where you used it.
- After use, normal collectible generation usually stops offering new item types.
- Quest items are excluded from the Memory candidate pool.
- In co-op, candidates come from **all players'** inventories.

## Tips

Use it after you already hold core items worth duplicating for the best payoff.

Items you already hold multiple copies of gain even higher roll weight; once duplication starts, it tends to snowball.

## Related items

{{Item:hypermnesia}} is not replaced by Memory and grants stats from extra duplicate copies, turning Memory's repeats into growth. See {{Item:hypermnesia}}.

## Special interactions

### {{Collectible:34}}

If you hold Book of Belial when using Memory, the synergy arms for the rest of the run.

Each time Memory would roll an owned item, there is a **50%** chance to spawn from the Devil Room pool instead—reopening a path to new items while **Memory's replacement is active**.

### {{Collectible:584}}

Using Memory spawns its matching item wisp.

While any such wisp lives, Memory stays active; **when all wisps die, Memory ends early**.

During Memory, gaining another copy of an item you already hold strengthens wisps: more max HP and current HP, gradually larger size. Wisps refill to full HP on entering a new room.

## Trivia

Memory is not about duplicating one chosen item—it makes later rolls keep returning to choices you already made, so the run's build keeps collapsing toward what you already hold.

Memory is a [Rainbow](/en/systems/rainbow) item.

It has no vanilla collectible icon basis.

<details>
<summary>Technical details</summary>

- Use sets global Memory state (`save.elses.Item_Memory_effect`) and removes Memory (`Remove = true`).
- Normally lasts until run end; cleared on fresh run start (non-continue).
- Candidates: all players' non-quest held collectibles; weight = held count per item.
- {{Item:hypermnesia}} is in `ignorers` and bypasses replacement.
- Book of Belial devil roll: **50%** when armed at use time.
- All Memory wisps dead → effect cleared; duplicate gains buff wisp HP/scale; new room refills wisp HP.

</details>
