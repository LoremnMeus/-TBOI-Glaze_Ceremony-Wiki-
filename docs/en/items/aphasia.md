---
title: Aphasia
description: "Hardly can I ever read"
slug: aphasia
kind: collectible
internalKey: Aphasia
status: reviewed
---
<p class="wiki-search-index" v-pre>失语症 Aphasia Aphasia aphasia Aphasia 名可名，非常名 Hardly can I ever read 大部分普通道具文字会被打乱，并从描述中掉落 拾取文字会暂时提高攻击，并保存为文字弹药 发射泪弹时消耗一个文字，使该泪弹获得额外伤害 不会打乱EID Most normal item text is scrambled, and some characters fall to the floor Picked-up words briefly raise damage and are stored as word ammo Firing a tear spends one word and boosts that tear Does not scramble EID</p>

<PublicEntry slug="aphasia" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Aphasia breaks language apart: item names and descriptions lose their original order, and some characters even fall out of the description onto the floor.**

When you view item text, the name and description are scrambled. Several characters drop from above; touch them to collect.

## Collecting words

Picking up a word does two things:

1. **Temporary damage state** — overall damage rises. More words mean a higher total, with diminishing returns, and the bonus slowly decays.
2. **Word ammo** — the character is stored for later tears.

The temporary damage state and the ammo inventory are separate: damage decays on its own, while stored words remain until spent.

## Word tears

When you fire a tear and the buffer is not empty, one random word is spent: it appears on that tear and multiplies that tear’s damage (CJK characters hit harder than Latin ones). With an empty buffer, tears behave normally.

## Notes

- {{EID}} is not scrambled.
- Vanilla item popups and some Fortune or Tips text can still be altered.
- Each tear spends at most one word.
- Non-tear attacks do not consume word ammo.

## Tips

- Checking new pedestals or item text can farm more falling words for the buffer.
- Stockpile words first, then fire them in a burst when you need a damage spike.
