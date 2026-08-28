---
title: Darkness
description: "Buried in the past."
slug: darkness
kind: collectible
internalKey: Darkness
status: featured
---
<p class="wiki-search-index" v-pre>暗之六面 Darkness Darkness darkness Darkness 灭于未知 Buried in the past. +1黑心 !!! 变为魂心角色 按黑心数量增加攻击 击杀敌人逐渐将魂心染成黑心，或填满半黑心 黑心可以等价代替 红心进行恶魔交易 +1 Black Heart !!! Changes your health type to soul hearts Damage up based on black hearts Kills gradually stain soul hearts into black hearts, or fill half black heart Black hearts can replace red-heart devil deal costs</p>

<PublicEntry slug="darkness" lang="en" />

## Mechanics

<!-- Manual body: the generator will not overwrite this file. -->

## Effects

Darkness switches you onto a soul-heart life type, then makes black hearts serve as health, damage, a growth goal, and devil-deal currency at once.

While held, your health becomes a soul-heart system and you gain **1** Black Heart.

Damage scales with black hearts: about **+0.8** Damage per black heart, plus roughly **0.3%** multiplicative growth per black heart. Extra copies raise the additive part further.

### Kill staining

Every **6** kills advances one step:

- Prefer staining one full normal soul heart into a black heart (total health amount unchanged);
- If no full soul heart remains but a half black heart sits at the end of the bar, fill it to a full black heart.

### Devil deals

| Listed red-heart price | What Darkness can pay |
| --- | --- |
| 1 red heart | 1 black heart |
| 2 red hearts | Prefer 2 black hearts |
| 2 red hearts, not enough black | 1 black heart + 2 soul hearts |

These payments truly spend the matching black / soul hearts.

## Notes

- “Gradually” means kill-count progress, not a random slow recolor.

## Tips

- Soul hearts can be stained into black hearts over kills, so soul rewards are also future damage stock.
- Before a Devil Room, don’t only count total soul health—black hearts fund both damage and deal prices, so spending them also softens your hits.

<details>
<summary>Technical details</summary>

- With one copy, additive damage is about `+0.8` per black heart, then multiplied by `(1 + blackHearts × 0.003)`; more copies raise the additive factor.
- If nothing can be stained, progress is not fully wiped—it stays near the next trigger.

</details>
