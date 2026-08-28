---
title: Blueprint & Fleet
description: Tainted Qing's manufacturing, refitting, formation and fleet-command system
status: featured
---

# Blueprint & Fleet

{{Character:sp-w-qing}} cannot attack directly. Instead, items found during the run can be committed to the Blueprint to manufacture and refit a fleet. The player decides how each craft is assembled, which ones receive bandwidth, and where they fight through the command reticle, formation and fire control.

An item can serve as a base or a module. The base determines the craft's capacity and overall performance; modules turn item abilities into that craft's weapons and support systems.

## The four parts of Blueprint play

- **Build:** commit items to create a new craft.
- **Refit:** the base determines scale, while modules determine attacks and added abilities.
- **Form a fleet:** decide which craft receive limited control bandwidth first.
- **Command:** use formation and fire control to decide where the fleet moves and what it attacks.

## Craft

A craft is an independent combat unit manufactured through the Blueprint. Each one has its own base, module loadout, combat stats and deployment state; it does **not** copy Qing's attack stats.

The Blueprint may store more craft than can fight at once. Control bandwidth determines which ones deploy, while the rest remain near Qing on standby.

## Building a craft

Every Blueprint craft is built on the {{Item:air-flight}} frame. Differences come from the base, modules and formation — not from preset roles.

The Build tab opens **New Design**, then accepts a base and modules. Completed craft enter Stock and Formation, and may later be refitted or dismantled without an additional fee. Finished designs are serialized as **AF01, AF02, …** (with optional model letters).

<WikiScreenshot src="/images/screenshots/systems/blueprint-fleet/build.jpg" :ready="true" alt="The Blueprint Build tab with a base, module slots and item tokens" caption="The base establishes the frame; surrounding module slots determine the craft's actual abilities." />

### The first craft: AF-00 tech

{{Item:air-flight}} (AF-00 Prototype) is the platform's prototype technology. Qing's first formal design requires no base item. It is treated as a quality-2 base with 3 module slots and a 1.00× base multiplier, ensuring that the character can establish a basic attack before acquiring a complete recipe.

While Stock already contains at least one regular craft, manufacturing another requires assigning one real item as its base.

## Assembling a loadout

### Base

The base controls module slots and the craft's overall stat multiplier, but does **not** grant the base item's own special effect.

| Base quality | Module slots | Overall multiplier |
| ---: | ---: | ---: |
| 0 | 1 | 0.80× |
| 1 | 2 | 0.90× |
| 2 | 3 | 1.00× |
| 3 | 4 | 1.15× |
| 4 | 5 | 1.30× |

The multiplier affects damage, fire rate, shot speed, range, luck and movement speed. Using a high-quality item as a base means that copy cannot currently serve as a module; the choice is between more slots and that item's distinctive module behavior.

### Modules

Only items placed in module slots contribute to that craft's combat loadout. Configurations are independent and broadly fall into four groups:

| Module type | Effect |
| --- | --- |
| Weapon | Changes the craft's primary attack, such as lasers, charge attacks or special trajectories |
| Stat | Changes that craft's own damage, fire rate, shot speed, range or related stats |
| Familiar | Assigns a familiar to the craft, including its deployed and standby behavior |
| Special | Adds orbitals, on-hit or on-damage reactions, auras and other custom behavior |

A separate Blueprint compatibility catalogue can eventually cover individual items; this page documents the common rules.

Module behavior follows the Blueprint's implemented compatibility. Some items are translated into an equivalent behavior suitable for a craft rather than reproducing the original effect word for word.

### Item allocation

One real item copy may occupy only one base or module position at a time.

Because Tainted Qing cannot fire normally, attack modifiers in the inventory do not restore a conventional tear attack. Installing them as modules is what translates supported effects into a craft's attack language.

Removing a module or dismantling a craft releases the allocation immediately.

::: tip Items do not actually disappear
The Blueprint records which recipe currently uses each copy. It still belongs to Qing and retains any passive effect that can apply to Qing, but the same copy cannot serve another craft as a base or module at the same time.
:::

### Prototype modules

A prototype is one extra module-install right.

It does not increase how many items you actually own, and it cannot serve as a base. Each prototype can occupy only one craft at a time.

Spawn rates, shop prices and drop rules live on {{Pickup:blueprint-prototype}}.

### {{Collectible:619}} mirror slots

When {{Character:sp-w-qing}} has {{Collectible:619}}, each craft gains **one mirror module slot**.

- It may only reference an item you **currently own** that supports Blueprint compatibility, and it **cannot** be used as a base.
- It **does not consume** that item's Blueprint allocation: the same real item can still be a base or normal module on another craft.
- **Multiple craft may mirror the same item**; each craft still has only this one mirror slot.
- If you lose the referenced item, that mirror breaks until you regain it or change the loadout.

Unlike prototypes, mirrors are not independently allocatable manufacturing resources. They only project tech you already hold.

## Managing the fleet

### Blueprint tabs

| Tab | Purpose |
| --- | --- |
| Formation | Set deployment intent and bandwidth priority |
| Build | Open **New Design** and manufacture a new Air Flight |
| Stock | Inspect, refit or dismantle existing craft |

A short Blueprint press toggles Auto/Force fire control. Holding it until the progress bar completes opens management. See {{Character:sp-w-qing}} for the complete controls.

### Control bandwidth

**Owned craft and deployed craft are not the same count.** Qing normally has 3 control bandwidth, and each ordinary craft currently costs 1, allowing 3 craft to fight at once.

Ordinary modules currently add no extra bandwidth cost. Craft beyond capacity enter standby and stop seeking or attacking; combat familiars assigned to them cease fire as well.

### Formation and standby

More craft may be left enabled than bandwidth can support. Bandwidth is assigned from the front of the formation; later craft wait on standby and automatically fill an opening when capacity becomes available.

<WikiScreenshot src="/images/screenshots/systems/blueprint-fleet/formation.jpg" :ready="true" alt="A four-craft formation with three deployed and one waiting for bandwidth" caption="Bandwidth limits simultaneous deployment; later craft remain stored and ready to fill an opening." />

Manufactured craft may be reconfigured or dismantled in Stock at any time without an additional fee.

## Commanding combat

Fleet control answers two independent questions:

- **Formation — where are the craft?** Cruise lets them range outward; Guard keeps them on Qing's rear flanks.
- **Fire control — what do they attack?** Auto selects legal targets; Force concentrates fire on the reticle.

| Formation | Fire control | Behavior |
| --- | --- | --- |
| Cruise | Auto | Spread out and seek legal targets |
| Guard | Auto | Remain on Qing's flanks and make defensive attacks |
| Cruise | Force | Stay deployed and focus on the reticle |
| Guard | Force | Hold the flank formation and fire at the reticle |

Force does not change formation, and Guard does not remove the reticle.

<WikiScreenshot src="/images/screenshots/systems/blueprint-fleet/combat.jpg" :ready="true" alt="Tainted Qing commanding several craft with the reticle" caption="The reticle guides the fleet, while formation and fire control independently determine position and target selection." />

## Manufacturing Air Flight

You are not picking different craft roles from a menu. You are designing different loadouts of {{Item:air-flight}}.

The same chassis can become a Brimstone gunship, a Mom's Knife striker, a Tech X controller, a familiar carrier, a bomber, a high-rate status craft, an orbital defence craft, or almost any TearFlag build. Those differences come from bases and modules — not a second chassis.

## Tips

- A high-quality base provides more slots but not its own effect. Compare that frame value with what the item would provide as a module.
- A complete craft at the back of Formation can still be placed on standby. Move craft that must remain active toward the front.
- Auto suits ordinary rooms; Force is useful for concentrating fire on fires, poop or a chosen position.
- Standby craft are not lost. Alternative loadouts can remain stored until Formation gives them bandwidth.

## Related content

- {{Character:sp-w-qing}} — the character who commands the Blueprint fleet
- {{Item:blue-print}} — the active and its three management tabs
- {{Pickup:blueprint-prototype}} — prototype spawns and prices
- {{Item:air-flight}} — Blueprint's base craft platform

## Gallery

<WikiScreenshot src="/images/screenshots/systems/blueprint-fleet/stock.jpg" :ready="true" alt="The Blueprint Stock tab with Formation, Build and Stock tabs visible" caption="Stock keeps every manufactured craft; the top tabs open Formation, Build and Stock." />

<WikiScreenshot src="/images/screenshots/systems/blueprint-fleet/familiar-escort.jpg" :ready="true" alt="Several familiars following one craft in combat" caption="Familiar modules belong to their assigned craft, follow it, and assist according to that craft's combat state." />

<details>
<summary>Technical details</summary>

- Bandwidth is stored in half-slot units: base capacity is 6 internal units and an ordinary craft costs 2, displayed to players as 3 and 1.
- Formation separately records the craft the player wants enabled and those that actually receive bandwidth.
- If a required real item or prototype is unavailable, the recipe becomes incomplete; restoring that resource restores the current recipe.

</details>
