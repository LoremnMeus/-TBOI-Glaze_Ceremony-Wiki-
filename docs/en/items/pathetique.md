---
title: Pathetique
description: "They die for me"
slug: pathetique
kind: collectible
internalKey: Pathetique
status: featured
---
<p class="wiki-search-index" v-pre>悲悯 Pathetique Pathetique pathetique Pathetique 它们被迫为我而死 They die for me 受到敌人伤害时，失去一个被动道具并抵消伤害 射速 每个因此失去的道具使射速+0.5 优先失去低品质道具 失去悲悯时，返还所有因此失去的道具 Taking enemy damage removes a passive item and negates the hit Tears +0.5 tears for each item lost this way Prioritizes low-quality items Losing Pathetique returns all items lost this way</p>

<PublicEntry slug="pathetique" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Pathetique lets a passive item take enemy damage in the player's place.**

When the player would take damage from an enemy, Pathetique randomly removes one owned passive item temporarily and completely negates that hit. Lower-quality items are more likely to be chosen; each item held this way grants {{Tears}} **+0.5 tears**. Each successful block also releases an attack around the player.

If no other passive item remains eligible for sacrifice, Pathetique sacrifices itself as the last resort. When Pathetique leaves the player, all items it removed are returned and their corresponding tears bonus ends.

## Notes

- Pathetique responds only to damage caused by enemies. Blood donation machines, Sacrifice Rooms, and other non-enemy damage sources do not trigger it.
- “Prioritizes low quality” uses weighted random selection, not strict lowest-quality order; high-quality items can still be chosen.
- Losing Pathetique through another effect also begins the return sequence, which plays a short recovery animation.

## Tips

- **Several low-quality passives make cheaper sacrifices.** When you hold many of them, Pathetique is more likely to remove one of those first.
- **The tears bonus is tied to withheld items.** If Pathetique is removed by another effect, the withheld items return early, but the tears bonus they provided also ends.

## Special interactions

### {{Seija}}

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
