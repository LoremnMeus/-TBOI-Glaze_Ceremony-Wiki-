---
title: Qing
description: "The Final Machine of Nitimity"
slug: sp-w-qing
kind: character
internalKey: Spwq
status: featured
---
<p class="wiki-search-index" v-pre>青 Qing Spwq sp-w-qing SP.W.Qing 灾难之终械 The Final Machine of Nitimity 空行零号-试做版 无法直接攻击；使用蓝图制造并改装独立飞行器 将飞行器编入队伍，并用准星指挥它们作战 控制带宽决定当前能够出战的机体 AF-00 Prototype Cannot attack directly; use Blueprint to build and refit independent drones Deploy drones into formation and command them with the targeting reticle Control bandwidth determines which drones can fight</p>

<PublicEntry slug="sp-w-qing" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## How to play

**Qing does not fire herself. You pick up items to decide who fires for her.**

{{Character:sp-w-qing}} cannot perform normal attacks. She always controls a command reticle and uses her pocket {{Item:blue-print}} to build, refit, and deploy craft.

On most characters, an offensive pickup strengthens the player directly. Qing instead organizes pickups into different craft, each with its own attack pattern and combat stats.

A run with Qing therefore follows this loop:

> **Pick up items → assemble craft → set deployment order → command the fleet.**

You are not building one ever-growing super-ship. You are running a fleet that can be rearranged again and again.

## First time with Qing

Start by **holding Blueprint** to open the management panel.

The first **AF-00 Prototype** craft does not require a base item, so you can establish basic firepower even at the very start of a run.

When new pickups appear later, return to Blueprint and decide how to use them:

- Want a craft to gain that item's attack behavior? Install it as a **module**.
- Want more module space and stronger overall performance on a new craft? Use an item as the **base**.
- Configurations can be changed later—you do not need to lock in every pickup on first contact.

Build rules, base quality, module occupancy, prototypes, and compatibility details live on {{System:blueprint-air-flight}}.

The first time you open Blueprint, you can also enter an interactive tutorial. It uses simulated craft and materials and does not consume real run resources.

## Deployment and command

Manufacturing a craft does not mean every craft fights at once. Qing has limited **control bandwidth**; the formation assigns it front to back, so **craft nearer the front deploy first**. Craft without bandwidth return to **standby** beside Qing—they stop seeking targets, stop firing, and any combat familiars assigned to them stop attacking as well.

Stock answers "Which craft do I own?" Formation answers "Who is fighting right now?" Default bandwidth and exact allocation rules are on {{System:blueprint-air-flight}}.

In combat, Qing mainly does two things: **decide where the fleet is** and **decide what it attacks**. These are independent.

### Formation: where are they?

- **Cruise**: craft leave Qing and operate on their own.
- **Guard**: craft stay on Qing's flanks in a protective formation.

### Fire control: what do they attack?

- **Auto**: craft seek valid targets on their own.
- **Suppression**: craft stop choosing targets freely and focus fire on the reticle position.

| Formation | Fire control | Best for |
| --- | --- | --- |
| Cruise | Auto | Normal room clearing with free target selection |
| Guard | Auto | Keeping craft near Qing |
| Cruise | Suppression | Staying spread out while focusing one spot |
| Guard | Suppression | Tight formation fire on the reticle |

Guard is not Suppression, and Suppression does not automatically recall craft. **One controls position; the other controls the target.**

- **Fire direction / hold LMB**: move the command reticle.
- **Ctrl / MMB**: toggle Cruise / Guard.
- **RMB / tap Blueprint**: toggle Auto / Suppression.
- **Hold Blueprint**: open the Blueprint panel.

The reticle is always present. Switching formation or fire control does not remove it; its color reflects the current command state.

## Building a fleet

With Qing, picking up an item also asks: **"Which craft should this belong to?"**

You do not need a complete fleet plan from minute one. Getting stable damage on the first basic craft is usually better than leaving yourself helpless while planning for the future.

As pickups accumulate, assign roles—for example one main damage craft, one with a completely different weapon, one built around familiars or special modules, and one backup further back in formation.

Using a high-quality item as a base means giving up its chance to become a special module on that craft, in exchange for more slots and better overall performance. What you are really building is not Qing herself, but the division of labor across the fleet. Compatibility details live on {{System:blueprint-air-flight}}.

## {{Collectible:619}}: Redundant Design

With {{Collectible:619}}, each craft gains one mirror module slot that can copy a compatible item you currently own. Details—allocation, multi-craft mirroring, and what happens if you lose the source item—are on {{System:blueprint-air-flight}}.

## Tips

- **Make sure something can shoot first.** The first basic craft needs no real base and is the fastest way to establish firepower.
- **Formation order is your backup plan.** Craft above bandwidth are not wasted; change priority to change who is fighting.
- **Guard solves positioning; Suppression solves targeting.** When something feels wrong, ask whether you need to change where craft are or what they are shooting.

## Special interactions

Qing has custom names and remarks for some items tied to herself, her craft, or her past—for example custom names for {{Item:air-flight}} and {{Item:air-terror}}.

These lines express character state. They do not guarantee extra Blueprint behavior. Whether an item can be installed as a module, and what it actually does there, still follows {{System:blueprint-air-flight}}.

## Notes

- **Qing cannot perform normal attacks.** Offensive pickups in the inventory do not restore ordinary tear firing for her.
- **Only pickups installed as modules on a craft** grant that craft Blueprint combat abilities; bases mainly define craft scale and baseline performance.
- **Standby craft and their combat familiars do not participate in the current fight.**
- **Not every pickup has a Blueprint module effect**; see {{System:blueprint-air-flight}} for compatibility.
