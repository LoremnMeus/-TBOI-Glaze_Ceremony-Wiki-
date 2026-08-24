---
title: 来日债主
description: "从来日预支资源，再用未来偿还 靠近后左右切换契约，走进确认 按 取消"
slug: time-beggar
kind: slot
internalKey: Tomorrows_creditor
status: stub
---
<p class="wiki-search-index" v-pre>来日债主 Tomorrow&#x27;s Creditor Tomorrows_creditor time-beggar Tomorrows_creditor 从来日预支资源，再用未来偿还 靠近后左右切换契约，走进确认 按 取消 Borrow resources from tomorrow and repay them later Switch contracts with left/right, walk in to confirm Press to cancel</p>

<PublicEntry slug="time-beggar" lang="zh" />

## 机制说明

### 效果
靠近后举起当前契约，头顶显示「立刻获得的数量 + 代表物虚影 → 将被收走的数量 + 虚影」。左右切换，走进确认。

每只会随机给出 3 种契约，且只交易一次。

- {{Coin}} **来日的钱**：立刻 +10¢，之后按面额收走 12¢（镍币 5、一角 10，超额视为利息）。
- {{Key}} **来日的钥匙**：立刻 +3 钥匙，之后收走 4 把（双钥匙算 2）。
- {{Bomb}} **来日的炸弹**：立刻 +3 炸弹，之后收走 4 个。
- {{SoulHeart}} **来日的生命**：立刻 +2 魂心，之后收走 3 颗普通红心掉落。

债务从签约当下开始、跨房跨层持续，直到收满。不扣背包里已有资源。新开局 / R 重开清空。

自然生成：第 1/2/3 章替换原版乞丐的概率为 12% / 10% / 6%；第 4 章及以后不自然生成。

### 注意
「来日」不是「下一层」，而是从现在起的未来掉落。
