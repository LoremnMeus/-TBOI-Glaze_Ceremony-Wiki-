---
title: Fate's Draw
description: "My Drawwww!!!!"
slug: fates-draw
kind: collectible
internalKey: Fate_s_Draw
status: drafted
---
<p class="wiki-search-index" v-pre>注定一抽 Fate&#x27;s Draw Fate_s_Draw fates-draw Fate&#x27;s Draw 只要我牌组里还有卡，我始终相信我的牌组！！ My Drawwww!!!! 持有的卡牌会不断变为同种类的另一张牌 按住 可以暂时锁定当前牌 锁定过久会蓄满并再次洗牌，需松开后再锁定 Held cards keep changing into another card of the same type Hold to briefly lock your current cards Holding too long fills a charge and reshuffles; release before locking again</p>

<PublicEntry slug="fates-draw" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Fate's Draw keeps cycling held cards within the same card type until the drop button locks them.**

While held, each occupied card slot rerolls among candidates that share its **CardType**. The first copy cycles about every **24** frames; each extra copy adds **+8**, up to **56**. Slots roll independently.

Hold the **drop button** (Ctrl / {{ButtonRT}}) to freeze every current card. A charge bar fills while you hold; when it fills, the lock breaks, the cards reshuffle once, and you must release. After release the bar drains slowly and disappears before you can lock again for a full hold.

Opening the pause menu forces an immediate reroll. In Greed Mode, only same-type cards allowed in Greed pools are used.

## Notes

- The lock cannot be held forever; past full charge, keeping Drop pressed no longer freezes cards.
- Empty slots stay empty—only already-held cards are replaced.
