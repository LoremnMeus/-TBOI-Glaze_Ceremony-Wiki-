---
title: 琉璃之心
description: "根据当前生命模仿一种可获得的心 优先抵消 碎心与 腐心"
slug: glaze-heart
kind: pickup
internalKey: Glaze_heart
status: featured
---
<p class="wiki-search-index" v-pre>琉璃之心 Glaze Heart Glaze_heart glaze-heart Glaze_heart 根据当前生命模仿一种可获得的心 优先抵消 碎心与 腐心 Imitates an obtainable heart based on your health Priority: remove Broken Hearts and Rotten Hearts</p>

<PublicEntry slug="glaze-heart" lang="zh" />

## 机制说明

## 效果

**琉璃之心是一颗会适应当前生命栏的万能心。**

拾取时优先修复异常生命，再按当前生命结构选择最合适的奖励：

1. 有 {{BrokenHeart}} 碎心：移除 1 碎心；完整心还会额外给予半颗 {{SoulHeart}} 魂心；
2. 否则有 {{RottenHeart}} 腐心：移除 1 腐心；
3. 否则优先尝试复制角色已经拥有、且仍能继续获得的特殊心（永恒 / 黑 / 骨 / 金 / 魂）；
4. 再否则，可恢复红心时作为红心治疗；仍不行则从当前还能获得的特殊心中兜底。

它不是从所有心中完全随机抽取一种，而是尽量变成此时最适合拾取的一种生命奖励。

半心变体的治疗量与碎心/腐心附带差异见 {{Pickup:glaze-heart-half}}。

## 出现

解锁后，整/半红心、魂心、半魂心、害怕的心、混合心生成时有机会琉璃化，基础概率约 **4%**。

若有玩家持有碎心，新的琉璃之心会更难自然生成。

## 与 {{Item:crown-of-the-glaze}}

持有冠冕提高转化概率；每次成功拾取为持有者积累 1 层辉片。满层后，本该生成的 {{Pickup:glaze-heart-half}} 会直接升级为完整琉璃之心。

## 注意

- 只有成功提供生命效果时才会被消耗。
- 商店货仍须正常购买。
- 受支持的自定义生命系统若识别到可用自定义生命，可能排在碎心/腐心之前结算，从而改变优先级。
