---
title: Spectral Sword
description: "Out of its sheath"
slug: spectralsword
kind: collectible
internalKey: Spectralsword
status: reviewed
---
<p class="wiki-search-index" v-pre>妖刀·逢魔 Spectral Sword Spectralsword spectralsword Spectralsword 物皆有灵 Out of its sheath 使用后唤出妖鬼，可调整属性、基础资源及其上限、房间概率 降低数值获得对应灵质；消耗同类灵质提高其他数值 属性、资源与概率灵质彼此独立 天使房概率改分配且不消耗概率灵质 Use to summon the oni and adjust stats, basic resources and their caps, and room chances Lower values to gain matching essence; spend matching essence to raise other values Stat, resource, and chance essence are separate Angel Room chance reshapes the Deal split and costs no Chance Essence</p>

<PublicEntry slug="spectralsword" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Spectral Sword uses three separate kinds of essence to redistribute the character's existing stats, resources, and room chances within their respective categories.

Using the item summons the oni and opens the reshape interface. Extracting from a selected value lowers it and produces matching essence; injecting matching essence into another value raises it. All changes take effect immediately.

Use the arrow keys to move the oni; press Q to extract the selected value, E to inject matching essence, and Ctrl to exit.

The three essence types are:

- **Stat Essence** for the six basic character stats.
- **Resource Essence** for coins, bombs, keys, and their carrying caps.
- **Chance Essence** for Devil Room and Planetarium chances.

Angel Room chance does not spend essence; it only reshapes the Devil / Angel split.

The three types cannot substitute for one another.

### Stats

Each extraction or injection exchanges 1 Stat Essence for the following adjustment:

| Stat | Change per step |
| --- | ---: |
| Speed | 0.05 |
| Tears | 0.15 |
| Damage | 0.25 |
| Range | 0.75 |
| Shot Speed | 0.10 |
| Luck | 1 |

Each stat has a limited total adjustment range.

Speed cannot be extracted below 0.10, and Shot Speed cannot be extracted below 0.60.

### Basic Resources and Caps

Coins, bombs, and keys exchange with Resource Essence at 1:1.

Extracting 1 corresponding resource produces 1 Resource Essence. Spending 1 Resource Essence produces 1 selected resource.

Resource Essence can also modify the carrying cap of the matching resource. Steps always follow the **current visible cap** along a decimal “all-nines” ladder (no intentional design maximum; only the engine's signed 32-bit integer storage bound applies):

| Current cap range | Change per step |
| --- | ---: |
| 0–9 | ±1 |
| 9–99 | ±10 (e.g. 99↔89, 9↔19) |
| 99–999 | ±100 (e.g. 99↔199, 999↔899) |
| 999–9999 | ±1000 (e.g. 999↔1999) |
| Higher | Continue ×10 at the next magnitude |

Legal nodes look like 0…9, 19…99, 199…999, 1999…9999…; raising and lowering are strictly reversible on the ladder. If the next step would exceed the engine integer storage limit, the raise lands on that limit instead of being refused.

Raising a cap costs 1 Resource Essence; lowering a cap produces 1 Resource Essence.

A cap cannot be lowered if the resulting limit would be below the amount of that resource currently held, or below 0.

### Room Chances

Devil Room and Planetarium chances are adjusted against their final HUD display values, normally in steps of 5 percentage points, and use Chance Essence. Near the 0% / 100% boundary, the last step snaps to that boundary (for example 3% extracts to 0%, 96% injects to 100%) while still consuming or producing only 1 Chance Essence. Chance Essence flows only between Devil Room and Planetarium.

Angel Room chance does not use essence: it reshapes how the current total Deal is split between Devil and Angel, without changing that total. Raising Angel by 5 percentage points therefore lowers Devil by 5 percentage points. Steps are normally 5pp; if less than one step remains, the last press fills to a full Angel share (or down to 0% the other way). Where vanilla rules create a discrete jump (for example 0% ↔ 50% / 100%), Spectral Sword may cross that step in one press. If no conversion change can alter the Angel display in the current state, the node is temporarily inoperable.

The Planetarium row shows the cached chance aligned with the vanilla Stat HUD, plus a signed live delta against that cache (for example `21.0% +5.0%`). A zero delta hides the suffix. Q/E still uses the live Planetarium chance for bounds while editing a permanent modifier; the delta includes every source such as Telescope Lens, not only Spectral Sword. When the vanilla HUD refreshes on a new floor or continue, the cache realigns and the suffix clears.

The Planetarium node is available only when the vanilla Stat HUD would show Planetarium chance (the corresponding option must be enabled and Planetariums must be unlocked).

On floors where the vanilla Found HUD does not provide Devil or Angel Room chances, those two values cannot be adjusted.

With {{Collectible:498}}, Devil and Angel chances merge into one total Deal chance: the separate Angel node is hidden, and the Devil node instead adjusts that total Deal directly (still using Chance Essence). The Planetarium row is unchanged and shifts up to fill the gap.

## Notes

- Spectral Sword grants no starting essence; all essence must first be obtained through extraction.
- The reshape interface cannot be opened while active enemies are present.
- Completed stat, resource-cap, and room-chance adjustments remain active even after Spectral Sword is lost. Obtaining it again allows further adjustment from the existing state.
- Basic resource gains and losses resolve immediately when adjusted.

## Synergies

### {{Collectible:584}}

Spectral Sword does not spawn wisps.

### {{Seija}}

Under Seija's influence, extraction still lowers the selected value normally, but has a 50% chance to produce no corresponding essence.

## Related

{{Item:squiresaga}} applies a similar form of "cutting" to enemies, pickups, mechanisms, and some grid entities, while Spectral Sword reshapes the character.

## Trivia

- The finalized design was inspired by *Dicey Dungeons*, particularly its use of an interface for directly modifying character stats.
