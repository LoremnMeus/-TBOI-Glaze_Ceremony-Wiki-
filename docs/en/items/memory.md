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
- After using Memory, you usually cannot gain new collectible types through normal generation; use it when you already own worth repeating.
- Quest items are excluded from the Memory candidate pool.
- In co-op, candidates come from **all players'** inventories.

## Tips

Memory's value depends heavily on **what you already own when you use it**.

If you already hold strong items worth duplicating, Memory concentrates future rolls on those payoffs; if your build is still incomplete, early use means giving up most chances at new components.

Because held count increases roll weight, once an item starts duplicating it becomes even easier to duplicate again.

**{{Item:hypermnesia}} is not affected by Memory's replacement**, and scales stats with duplicate copies. Even after Memory activates, there is still a growth path built for that kind of run.

## Related items

### {{Item:hypermnesia}}

Hypermnesia is the deliberate follow-up to Memory.

While Memory is active, almost every new collectible roll is replaced with something you already hold—**Hypermnesia is the exception**. It can still spawn normally and is never swapped for an owned duplicate.

Hypermnesia grants Speed, Tears, Damage, Range, and Luck based on **extra duplicate copies** across your inventory, turning Memory's repeated rolls into steady stat growth.

So Memory does not completely block new items forever: if Hypermnesia appears later, it can supercharge the duplicate-heavy route.

## Special interactions

### {{Collectible:34}}

If you hold Book of Belial when using Memory, the synergy arms for the rest of the run.

Each time Memory would roll an owned item, there is a **50%** chance to spawn from the Devil Room pool instead—reopening a path to new items inside a closed Memory run.

### {{Collectible:584}}

Using Memory spawns its matching item wisp.

While any such wisp lives, Memory stays active; **when all wisps die, Memory ends early**.

During Memory, gaining another copy of an item you already hold strengthens wisps: more max HP and current HP, gradually larger size. Wisps refill to full HP on entering a new room.

## Trivia

Memory is not about duplicating one chosen item—it makes later rolls keep returning to choices you already made, so the run's build keeps collapsing toward what you already hold.

<details>
<summary>Technical details</summary>

- Use sets global Memory state (`save.elses.Item_Memory_effect`) and removes Memory (`Remove = true`).
- Normally lasts until run end; cleared on fresh run start (non-continue).
- Candidates: all players' non-quest held collectibles; weight = held count per item.
- {{Item:hypermnesia}} is in `ignorers` and bypasses replacement.
- Book of Belial devil roll: **50%** when armed at use time.
- All Memory wisps dead → effect cleared; duplicate gains buff wisp HP/scale; new room refills wisp HP.

</details>
