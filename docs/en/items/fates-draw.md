---
title: Fate's Draw
description: "My Drawwww!!!!"
slug: fates-draw
kind: collectible
internalKey: Fate_s_Draw
status: drafted
---
<p class="wiki-search-index" v-pre>注定一抽 Fate&#x27;s Draw Fate_s_Draw fates-draw Fate&#x27;s Draw 只要我牌组里还有卡，我始终相信我的牌组！！ My Drawwww!!!! 持有的卡牌会不断变为同种类的另一张牌 按住 可以暂时锁定当前牌 Held cards keep changing into another card of the same type Hold to briefly lock your current cards</p>

<PublicEntry slug="fates-draw" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Fate's Draw keeps cycling held cards within the same card type until Drop is held to lock them.**

While held, each occupied card slot rerolls among candidates that share its **CardType**. The first copy cycles about every **24** frames; each extra copy adds **+8**, up to **56**. Slots roll independently.

Hold **Drop** to freeze every current card (the timer does not advance). Opening the pause menu forces an immediate reroll.

In Greed Mode, only same-type cards allowed in Greed pools are used.

## Notes

- The lock lasts only while Drop is held; releasing resumes on the next cycle.
- Empty slots stay empty—only already-held cards are replaced.
