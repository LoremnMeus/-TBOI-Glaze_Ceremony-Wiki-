---
title: Qing
description: "The Final Machine of Nitimity"
slug: sp-w-qing
kind: character
internalKey: Spwq
status: featured
---
<p class="wiki-search-index" v-pre>青 Qing Spwq sp-w-qing SP.W.Qing 灾难之终械 The Final Machine of Nitimity 无法直接攻击；使用蓝图制造并改装独立飞行器 将飞行器编入队伍，并用准星指挥它们作战 控制带宽决定当前能够出战的机体 Cannot attack directly; use Blueprint to build and refit independent drones Deploy drones into formation and command them with the targeting reticle Control bandwidth determines which drones can fight</p>

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

## How to think during a run

On a normal character, "Is this pickup strong?" often settles the question.

With Qing, there is another layer:

> **"Which craft should this belong to?"**

A strong offensive pickup might become the core module of a main striker, while another craft can focus on a different weapon type, familiars, or support effects.

The same pool of pickups can become completely different fleets depending on how you split them.

Using a high-quality item as a base also means giving up its chance to become a special module on that craft, in exchange for more slots and better overall performance.

What you are really building is not Qing herself, but the division of labor across the fleet.

## Deployment and standby

Manufacturing a craft does not mean every craft fights at once.

Qing has limited **control bandwidth**. The formation assigns bandwidth from front to back, so:

> **Craft nearer the front deploy first.**

Craft without bandwidth are not lost. They return to Qing's side on **standby**, stop seeking targets, stop firing, and any combat familiars assigned to them stop attacking as well.

Stock answers "Which craft do I own?" Formation answers "Who is fighting right now?"

Default bandwidth and exact allocation rules are on {{System:blueprint-air-flight}}.

## Combat command

In combat, Qing mainly does two things: **decide where the fleet is** and **decide what it attacks**. These are independent.

### Formation: where are they?

- **Cruise**: craft leave Qing and operate on their own.
- **Guard**: craft stay on Qing's flanks in a protective formation.

### Fire control: what do they attack?

- **Auto**: craft seek valid targets on their own.
- **Suppression**: craft stop choosing targets freely and focus fire on the reticle position.

That gives four combinations:

| Formation | Fire control | Best for |
| --- | --- | --- |
| Cruise | Auto | Normal room clearing with free target selection |
| Guard | Auto | Keeping craft near Qing |
| Cruise | Suppression | Staying spread out while focusing one spot |
| Guard | Suppression | Tight formation fire on the reticle |

Guard is not Suppression, and Suppression does not automatically recall craft. **One controls position; the other controls the target.**

## Controls

- **Fire direction / hold LMB**: move the command reticle.
- **Ctrl / MMB**: toggle Cruise / Guard.
- **RMB / tap Blueprint**: toggle Auto / Suppression.
- **Hold Blueprint**: open the Blueprint panel.

The reticle is always present. Switching formation or fire control does not remove it; its color reflects the current command state.

## Building a fleet

You do not need a complete fleet plan from minute one. Getting stable damage on the first basic craft is usually better than leaving yourself helpless while planning for the future.

As pickups accumulate, start assigning roles:

- one main damage craft;
- one with a completely different weapon type;
- one built around familiars or special modules;
- one backup craft you can promote when needed.

Currently available craft types and their traits are on {{System:blueprint-air-flight}}; Blueprint coverage and module compatibility are still expanding.

## Birthright: Redundant Design

With **Birthright**, each real item can also become **one mirror module**:

- Mirrors install only as **modules** on **another** craft, never as a base;
- Each craft can hold at most **1** mirror module;
- Mirror modules keep the full item effect, but a craft carrying one costs **+1 control bandwidth**.

Birthright therefore trades **bandwidth for redundancy**—for example, craft A keeps the real module while craft B carries a mirror of the same item, making B a more expensive deployment.

See {{System:blueprint-air-flight}} for how mirrors differ from prototypes and real modules.

## Tips

- **Make sure something can shoot before you optimize the fleet.** The first basic craft needs no real base and is the fastest way to establish firepower.
- **Check a high-quality pickup's module value before using it as a base.** A high-quality base grants more slots and better overall stats, but it will not grant that item's special ability to the craft.
- **Formation order is your backup plan.** Craft above bandwidth are not wasted; change priority to change who is actually fighting.
- **Auto mode does not need constant babysitting.** Let the fleet clear normal rooms; save Suppression for bosses, dangerous targets, or precise shots.
- **Guard solves positioning; Suppression solves targeting.** When something feels wrong, ask whether you need to change where craft are or what they are shooting.
- **Change your mind freely.** Existing craft can be reconfigured. Qing's building loop is closer to continuously adjusting a fleet than making one irreversible choice per pickup.

## Special interactions

Qing has custom names and remarks for some items tied to herself, her craft, or her past.

For example, {{Item:air-flight}} and {{Item:air-terror}} receive custom names and remarks from her perspective; some items related to regular Qing may also get names that suggest she does not fully recognize them.

These lines express character state. They do not guarantee extra Blueprint behavior. Whether an item can be installed as a module, and what it actually does there, still follows {{System:blueprint-air-flight}} compatibility rules.

## Notes

- **Qing cannot perform normal attacks.** Offensive pickups in the inventory do not restore ordinary tear firing for her.
- **Only pickups installed as modules on a craft** grant that craft Blueprint combat abilities; bases mainly define craft scale and baseline performance.
- **Each craft has its own combat stats and module layout**, not a copy of Qing's current attack panel.
- **Standby craft and their combat familiars do not participate in the current fight.**
- **Blueprint, module compatibility, and available craft types are still expanding**; the system page tracks the precise rules as they grow.
