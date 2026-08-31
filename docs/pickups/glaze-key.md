---
title: 琉璃之匙
description: "优先揭示未探索的 / / 等特殊房（不含隐藏系） 没有则揭示最多3个普通房间"
slug: glaze-key
kind: pickup
internalKey: Glaze_key
status: featured
---
<p class="wiki-search-index" v-pre>琉璃之匙 Glaze Key Glaze_key glaze-key Glaze_key 优先揭示未探索的 / / 等特殊房（不含隐藏系） 没有则揭示最多3个普通房间 Reveal an unexplored special room (Treasure/Shop/Boss; not secret) If none, reveal up to 3 normal rooms</p>

<PublicEntry slug="glaze-key" lang="zh" />

## 机制说明

## 效果

拾取后获得 1 把钥匙，并优先揭示一个尚未探索的重要非隐藏房间。

优先顺序：

1. {{TreasureRoom}} 宝箱房
2. {{Shop}} 商店
3. {{BossRoom}} Boss 房
4. 其他非隐藏特殊房

若本层已没有符合条件的特殊房，改为随机揭示最多 **3** 个尚未探索的普通房间。

{{SecretRoom}} 隐藏房、{{SuperSecretRoom}} 超级隐藏房与超级超级隐藏房不在优先列表中。
