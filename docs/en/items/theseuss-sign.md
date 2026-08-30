---
title: Theseus's Sign
description: "Terms under revision"
slug: theseuss-sign
kind: collectible
internalKey: Theseus_s_Sign
status: reviewed
---
<p class="wiki-search-index" v-pre>忒修斯之印 Theseus&#x27;s Sign Theseus_s_Sign theseuss-sign Theseus&#x27;s Sign 条款正在改写 Terms under revision 持有2条会不断改写的条款 完成条款后执行对应结果，并随机改写其中一部分 进入新一层时也会改写1条条款 当前条款与进度显示在下方 Hold 2 clauses that are continuously rewritten Completing a clause performs its result and randomly rewrites part of it Entering a new floor also rewrites 1 clause Current clauses and progress are shown below</p>

<PublicEntry slug="theseuss-sign" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Theseus's Sign consists of two clauses whose parts are gradually replaced over the course of a run.**

Each clause contains a condition, required amount, current progress, and result. Completing a condition performs its result, then randomly rewrites one of the two clauses. Entering a new floor also rewrites one clause. Current clauses and progress are appended dynamically to EID; advancing or rewriting them also displays a notice near the character.

The initial clauses are:

| Condition | Result |
| --- | --- |
| Take damage 4 times | Spawn 1 random item |
| Heal 5 health | Randomly remove 1 held item |

## Clause rewriting

Each rewrite changes one component of a clause. It may:

- Raise or lower the required amount by 1 without producing an invalid requirement.
- Change the condition to taking damage, healing, or gaining/losing coins, keys, or bombs.
- Reverse a resource condition between gaining and losing that resource.

The two results retain their identities: one clause always spawns a random item, while the other always removes a random held item. When a condition changes, existing progress is converted proportionally to the new requirement instead of being reset.

## Notes

- Completing one clause does not guarantee that the same clause will be rewritten.
- The random item loss ignores pocket actives, but it may remove Theseus's Sign itself or another held collectible.
- Resource clauses advance from resources actually gained or lost; merely seeing a pickup does not count.

## Trivia

The name refers to the Ship of Theseus problem: whether an object remains the same after its components are gradually replaced. The item retains the name “Theseus's Sign” while its conditions, amounts, and progress keep changing.
