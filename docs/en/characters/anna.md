---
title: Anna
description: "The Horn of Nitimity"
slug: anna
kind: character
internalKey: Anna
status: featured
---
<p class="wiki-search-index" v-pre>安娜 Anna Anna anna Anna 灾难之角 The Horn of Nitimity 操控掌中黑洞吸收敌人与掉落物，并将捕获物重新发射 敌人被吸入后不会立即死亡 捕获物的种类、重量与蓄力会影响释放攻击 Control a handheld black hole to capture enemies and pickups, then launch them as projectiles Captured enemies remain alive inside the black hole A capture&#x27;s type, mass, and charge affect the released attack</p>

<PublicEntry slug="anna" lang="en" />

## Mechanics

{{Character:anna}} uses a handheld black hole instead of normal tears.

Hold the fire button to pull nearby enemies, pickups, and some other objects into the hole; release to launch whatever is ready in your aim direction.

**Sucked-in enemies do not die from being captured.** Anna's basic loop is to swallow one foe, then throw it at another as ammunition.

Pickups can be stored too, so the black hole is both a weapon and a pocket you can carry across rooms—and occasionally, her personal collection bag.

## Core combat loop

Anna's ordinary room loop is:

> **Pull in → store → aim → launch**

Hold fire to open the hole and gradually suck enemies in.

Release fire to launch the current capture. The enemy itself, the capture's type, and your charge all affect how the attack plays out.

To keep everything stored instead:

> **Hold {{ButtonRT}}, then release fire**

That cancels the launch and leaves the hole's contents saved.

You do not have to spit out everything the moment you catch it.

After clearing the room, if you just spat resources across the floor, **hold fire and double-tap {{ButtonRT}}** to pull recallable content back into the hole.

## Capturing enemies

Normal enemies stay alive after a full suck-in and remain stored in the hole.

When launched, they become Anna's main ammunition and can collide with other enemies for damage.

Different enemy sizes and types behave differently as captures, so not every foe has the same attack value.

The key question is not "kill it now," but:

> **Throw it now, or keep it as later ammo?**

## Capturing pickups

Floor pickups can be sucked into the hole as well.

While stored, they are not picked up normally. Later you can:

- spit them back onto the floor and pick them up;
- carry them across rooms;
- launch them directly as projectiles.

Anna can stash hearts, coins, bombs, and other pickups she does not need right now instead of leaving them behind.

Pickups are not all equal as ammunition. Rarer or more valuable pickups usually hit harder, so Anna constantly chooses between **keeping a resource** and **spending it as premium ammo**.

### Shop items

Swallowing a priced shop item does not make it free.

Released shop items keep their price, and priced goods do not turn into normal damage-dealing ammo when thrown.

## Rift beggar

Anna has access to her own {{Wiki:rift-beggar}}. See that page for the full rules.

Anna can hoard basic pickups across rooms, so she can **pay the Rift beggar in bulk** more easily than most characters—but stored black-hole inventory is **not** read directly; release it onto the floor first.

Low-value pickups that are weak as ammo are good candidates to save for a concentrated payment here.

## Exclusive item text

Anna has custom names or descriptions for some collectibles.

These usually fall into three groups:

- items that strongly change how Anna attacks;
- items tied to her black hole or disaster theme;
- items with a special in-universe link to Anna herself.

The list below is **exclusive display text only**.

It is not Anna's full compatibility list:

- items without custom text may still work or have hidden compatibility;
- exclusive text only means Anna shows different wording—it does not guarantee an extra mechanic. Check the matching item page for the real effect.

<AnnaSpecialInteractions />

## Tips

Near the Rift beggar's payment threshold, dump a hoard of low-value basic pickups from the hole next to it to turn long-term storage into a stronger payoff.

Before leaving a cleared room with resources still on the floor, recall them into the hole instead of sucking everything in one by one.

<details>
<summary>Technical details</summary>

- Anna's black hole saves state for many entity types and reconstructs them on release.
- Different entity categories use different capture weights, release paths, and special rules; do not read this as one simple universal "mass formula."
- Pickups restore type, subtype, price, charge, shop state, and related fields when possible.
- Some entities, effects, and room objects cannot be captured.
- Many attack-style items have Anna-specific compatibility; the list above covers only part of them as exclusive display text.

</details>
