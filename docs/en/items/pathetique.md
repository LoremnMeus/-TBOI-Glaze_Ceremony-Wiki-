---
title: Pathetique
description: "They die for me"
slug: pathetique
kind: collectible
internalKey: Pathetique
status: featured
---
<p class="wiki-search-index" v-pre>悲悯 Pathetique Pathetique pathetique Pathetique 它们被迫为我而死 They die for me 受到敌人伤害时，失去一个被动道具并抵消伤害 每个因此失去的道具使射速+0.5 优先失去低品质道具 失去悲悯时，返还所有因此失去的道具 Taking enemy damage removes a passive item and negates the hit +0.5 tears for each item lost this way Prioritizes low-quality items Losing Pathetique returns all items lost this way</p>

<PublicEntry slug="pathetique" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

**Pathetique lets a passive item take enemy damage in the player's place.**

When the player would take damage from an enemy, Pathetique temporarily removes one owned passive item and completely negates that hit. Lower-quality items are more likely to be chosen.

Each item held this way grants **+0.5 tears**. When Pathetique itself leaves the player, all items it removed are returned and their corresponding tears bonus ends.

## Taking the hit

Pathetique responds only to damage caused by enemies. Blood donation machines, Sacrifice Rooms, and other non-enemy damage sources do not trigger it.

Whenever it successfully prevents a hit, it:

- completely negates that damage;
- temporarily removes one passive item;
- grants {{Tears}} +0.5 tears;
- releases an attack around the player.

As long as another item can be sacrificed, Pathetique favours lower-quality items but does not remove them in strict quality order.

## Sacrificed items

Items removed by Pathetique are not permanently lost. They are recorded until the return sequence begins.

Lower quality gives an item a greater chance of being chosen. Low-quality passives therefore tend to absorb more hits, but high-quality items can still be selected.

::: warning No item is completely safe
“Prioritizes low quality” does not mean high-quality items are protected. Repeatedly relying on Pathetique may still temporarily remove an important item.
:::

If no other item can be sacrificed, Pathetique can sacrifice **itself** as the final item.

## Returning the items

As soon as the player no longer holds Pathetique, every item it previously sacrificed begins to return.

This happens whether Pathetique sacrificed itself or was removed by another effect.

A short recovery sequence plays before the sacrificed items are returned to the player one by one.

As those items return, the tears bonus provided by their absence also disappears.

## Tips

- **Low-quality passives provide a buffer.** A collection containing several of them makes Pathetique more likely to choose one before a valuable item.
- **The tears bonus comes from temporary loss.** More withheld items mean more tears now, but returning them ends that bonus.
- **Do not consider high-quality items completely safe.** Quality changes the selection weight; it is not a strict protection threshold.
- **Pathetique is the last reserve.** When nothing else can be sacrificed, it can remove itself and begin returning everything held back.

## Special interactions

### Seija

Under Seija, Pathetique still sacrifices items to negate enemy damage, but sacrificed items no longer grant tears up.

## Trivia

Pathetique's original Chinese name was “悲怆”. It was later changed to “悲悯” because the font used by EID could not display one of its characters correctly.

Its design was influenced by the “Tearlaments” archetype from *Yu-Gi-Oh!* In that context, items removed by Pathetique are temporarily “sent to the Graveyard”, trading their absence for damage protection and tears.

When Pathetique becomes the final item sent away, the effect reverses and returns everything it previously took. This follows the idea of sending a card to the Graveyard as the condition that activates another effect, with Pathetique itself beginning the recovery sequence.

<details>
<summary>Technical details</summary>

### Quality selection weights

Pathetique does not strictly select the lowest-quality item. It uses weighted random selection:

| Item quality | Relative weight |
| --- | ---: |
| 0 | 100 |
| 1 | 60 |
| 2 | 20 |
| 3 | 5 |
| 4 | 1 |

Lower-quality items are therefore much more likely to be chosen, but no eligible quality is absolutely safe.

### Damage condition

Only valid damage classified as coming from an enemy can trigger Pathetique.

### Return rules

Pathetique tracks sacrificed items separately for each player. Once that player no longer holds Pathetique, the return sequence adds the other recorded items back and clears the associated tears bonus.

</details>
