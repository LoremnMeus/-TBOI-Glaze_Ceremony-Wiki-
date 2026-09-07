---
title: Ritual Sting
description: "Color with blood"
slug: ritual-sting
kind: collectible
internalKey: Ritual_Sting
status: reviewed
---
<p class="wiki-search-index" v-pre>血仪刺刃 Ritual Sting Ritual_Sting ritual-sting Ritual Sting 以血调色 Color with blood 献祭持有道具，为所选颜色充能 达到100%时点亮该颜色能力 击杀精英也会少量补充对应颜色 点亮的颜色会随清理房间逐渐消耗 Sacrifice a held collectible to charge the selected color Its ability activates at 100% Defeating champions slightly charges matching colors Lit colors gradually drain after clearing rooms</p>

<PublicEntry slug="ritual-sting" lang="en" />

## Mechanics


<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Ritual Sting permanently sacrifices a held collectible to charge a chosen color. Its ability lights up at 100%.**

On use:

1. Choose which color to charge;
2. Select one held collectible to sacrifice;
3. Confirm to permanently remove it and spend all of Ritual Sting's charge.

Opening or cancelling the selector costs no charge. The interface previews the exact percentage the sacrifice will add.

All six colors begin at **0%** and cap at **200%**. Unlit colors do not drain. Each lit color loses **10%** after clearing a combat room and switches off after falling below 100%.

## Color abilities

| Color | At 100% or more |
| --- | --- |
| Red | +3 Damage |
| Orange | 50% chance to duplicate ordinary room-clear pickups; never duplicates collectibles |
| Yellow | Future sacrifice progress ×1.5 |
| Green | Flight and +0.15 Speed |
| Blue | +1.5 Tears; attacks leave short-lived creep on hit |
| Purple | 25% chance to block damage; raises the chance for normal enemies to become champions |

Extra champions created by Purple can also grant color progress, so they can help sustain other colors that are already lit.

All six abilities can be active together. Progress above 100% only extends how long the ability remains lit.

## Colors and sacrifices

**Sacrifice quality decides how much “paint” is available; color match decides how much of it can go into the chosen color.**

Qualities 0/1/2/3/4 grant **35% / 50% / 70% / 100% / 140%** respectively.

An item's primary color has full efficiency for its matching bar and 50% efficiency for adjacent colors. Secondary associations usually grant 25%; unrelated colors grant nothing. White, grey, black, and other special labels use internal mappings.

Final progress is “quality base gain × color efficiency,” then ×1.5 if Yellow is lit.

## Champions

Killing champions grants a small amount of progress matching their appearance; rainbow and white champions spread that gain across multiple colors.

<details>
<summary>Champion gain amounts</summary>

- Normal single-color champions usually grant **10%**
- Compound colors split about **12%**
- Rainbow: **+3%** to all six colors
- White: **+2%** to all six colors

</details>

## Notes

- Ritual Sting itself, quest items, hidden items, and collectibles not truly owned cannot be sacrificed.
- Each extra Ritual Sting reduces lit-color drain by 2% per room, to a minimum of 4%.

## Trivia

Originally a Tecrorun character mechanic; later removed as unclear and unfun, then reworked into the standalone Ritual Sting.
