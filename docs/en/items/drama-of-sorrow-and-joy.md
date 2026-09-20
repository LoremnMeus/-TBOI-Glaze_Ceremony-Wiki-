---
title: Drama of sorrow and joy
description: "Leader To Despia"
slug: drama-of-sorrow-and-joy
kind: collectible
internalKey: Drama_of_sorrow_and_joy
status: reviewed
---
<p class="wiki-search-index" v-pre>悲欢之凶剧 Drama of sorrow and joy Drama_of_sorrow_and_joy drama-of-sorrow-and-joy Drama of sorrow and joy 丑角登场 Leader To Despia 概率发射交替出现的悲剧与喜剧面具泪 悲剧：戴面具的敌人死亡时引发冲击，并将悲剧传给另一名敌人 喜剧：戴面具的敌人受到致命伤害时拒绝死亡，并成为友军 两种面具相遇时化为 凶剧 ：悲剧传遍舞台，而喜剧拒绝谢幕 Chance to fire alternating tragedy and comedy mask tears Tragedy: masked foes unleash a shockwave on death and pass Tragedy onward Comedy: masked foes refuse death when taking lethal damage and become friendly When both masks meet, they become Tragicomedy : tragedy spreads across the stage, while comedy refuses the curtain call</p>

<PublicEntry slug="drama-of-sorrow-and-joy" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Drama of sorrow and joy turns some tears into Tragedy or Comedy masks. When a mask hits an enemy, it is worn on their face and changes how that enemy leaves the stage.

Mask tears appear with about a 15% chance and alternate between Tragedy and Comedy.

## Tragedy

The Tragedy mask changes how an enemy dies.

When a Tragedy-marked enemy dies:

- a shockwave erupts from its death position and damages nearby foes;
- after the blast, Tragedy passes to another nearby enemy that does not already have it.

If there is no valid target, the shockwave still occurs but the Tragedy does not spread further.

## Comedy

The Comedy mask refuses an enemy's departure.

When a Comedy-marked enemy takes lethal damage:

- the death is cancelled;
- the enemy recovers HP;
- enemies that can become allies join the player's side for the current room.

Special enemies that cannot be converted will not become allies, but they are still affected by Comedy and cannot receive the Comedy mask again afterwards.

## Tragicomedy

When the same enemy wears both Tragedy and Comedy, the two emotions merge into Tragicomedy.

Tragicomedy creates a contradiction between death and survival:

1. it first releases an empowered Tragedy shockwave and attempts to spread Tragedy;
2. Comedy then prevents the enemy from leaving the stage;
3. the enemy either becomes an ally or survives with Comedy immunity depending on its type.

Both original masks are removed afterwards.

Tragedy spreads to others, while Comedy keeps itself standing.

## Notes

- The same mask cannot be applied twice.
- Friendly enemies cannot receive new masks.
- Comedy immunity only affects Comedy; Tragedy can still be applied.
- A Tragedy shockwave can kill another Tragedy-marked enemy and continue the chain.
- Masks are hidden while enemies are burrowed, off-stage, or otherwise invisible, but the effect remains active.

## Tips

- Comedy works well on ordinary enemies, allowing them to assist you during the current fight.
- Tragedy is strongest among groups of enemies, where its shockwave and propagation can continue.
- Tragicomedy requires one enemy to receive both different masks.
- Triggering Tragicomedy in a crowd lets both its spread and survival effects shine.

## Trivia

- Named after Yu-Gi-Oh! Abyss Playhouse (死狱乡).

<details>
<summary>Technical details</summary>

| Effect | Value |
| --- | --- |
| Mask tear chance | 15%, alternating tragedy and comedy |
| Normal tragedy blast | radius 150; `1.5 × Damage` + 4% of the dying foe's max HP |
| Tragicomedy blast | radius 200; `2.5 × Damage` + 7% of the actor's max HP |
| Boss HP bonus cap | no more than `3 × Damage` |
| Comedy recover (convertible) | 20% max HP; 30% for Tragicomedy |
| Comedy recover (not convertible) | 8% max HP; 12% for Tragicomedy, plus permanent comedy immunity |

The blast damages nearby hostile enemies only, not friendlies. Masks use the enemy's head animation anchor and scale according to the current head size. Position and size are smoothed so the masks stay attached to the face instead of appearing as ordinary status icons.

</details>
