---
title: Pareidolia
description: "Moonlight Domain"
slug: pareidolia
kind: collectible
internalKey: Pareidolia
status: reviewed
---
<p class="wiki-search-index" v-pre>妖心·盈月 Pareidolia Pareidolia pareidolia Pareidolia 物皆有情 Moonlight Domain 对敌人造成伤害会开始注视目标，并逐渐积累月相 切换目标或目标死亡不会失去已有月相 攻击 月相盈满时，对当前注视目标发动妖眼共鸣 Damaging foes begins a gaze and builds moon phase Changing targets or killing the target keeps current moon phase Damage At full moon, unleash Yokai Eye resonance on the gaze target</p>

<PublicEntry slug="pareidolia" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Pareidolia begins gazing after dealing damage and builds moon phase on the current target; at full moon it unleashes Yokai Eye resonance.

## Gaze

Dealing damage selects a gaze target. Gaze fades after a while without hitting that target. Changing targets or killing the target does **not** wipe current moon phase.

## Moon phase

Phase builds from **effective damage dealt**, not a fixed hit count. Full moon needs roughly `16 × Damage`.

## Full moon resonance

At full moon, resonate on the current gaze target. Base damage is about `1.5 × Damage + 2`.

## Synergies

Several eye items modify resonance:

| Item | Resonance change |
| --- | --- |
| {{Collectible:245}} / {{Collectible:379}} | Adds a pupil, then adds holy-light damage or a wider strike |
| {{Collectible:2}} / {{Collectible:55}} / {{Collectible:558}} | Adds side-moon attacks, rear holy light, or random-direction attacks |
| {{Collectible:169}} | Enlarges the main pupil and adds thin holy-light strikes |
| {{Collectible:572}} | Turns holy light purple and strikes the crosshair |
| {{Collectible:261}} | Holy light deals more damage closer to the moon |
| {{Collectible:410}} / {{Collectible:329}} | Evil Eyes join the attack; the Ludovico tear is also struck |
| {{Collectible:68}} / {{Collectible:152}} | Adds a brief or sustained Technology laser at full moon |
| {{Collectible:395}} | Creates a shrinking Technology ring on the target when gaze begins |
