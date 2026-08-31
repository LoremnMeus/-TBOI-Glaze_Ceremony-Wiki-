---
title: 琉璃之福袋
description: "消耗富余的硬币/钥匙/炸弹，生成对应琉璃掉落 硬币>5、钥匙>1、炸弹>1才会计入 最多约3份 没有可消耗资源时生成琉璃便便"
slug: glaze-grabbag
kind: pickup
internalKey: Glaze_grabbag
status: featured
---
<p class="wiki-search-index" v-pre>琉璃之福袋 Glaze Grabbag Glaze_grabbag glaze-grabbag Glaze_grabbag 消耗富余的硬币/钥匙/炸弹，生成对应琉璃掉落 硬币&gt;5、钥匙&gt;1、炸弹&gt;1才会计入 最多约3份 没有可消耗资源时生成琉璃便便 Convert surplus coins/keys/bombs into glazed pickups Only coins&gt;5, keys&gt;1, bombs&gt;1 count Up to about 3 Spawns a glaze poop if nothing to convert</p>

<PublicEntry slug="glaze-grabbag" lang="zh" />

## 机制说明

## 效果

琉璃之福袋只会消费当前**富余**的基础资源，并把它们转换成对应的琉璃掉落；它会为硬币、钥匙和炸弹分别保留最低库存。

| 资源 | 保留 | 每份转化 |
| --- | ---: | --- |
| 硬币 | 5 | {{Pickup:glaze-coin}} |
| 钥匙 | 1 | {{Pickup:glaze-key}} |
| 炸弹 | 1 | {{Pickup:glaze-bomb}} |

每次拾取随机转化 **2 或 3** 份；持有 {{Item:crown-of-the-glaze}} 且冠冕满层时固定为 3 份。

若完全没有可转化的富余资源，改为生成 {{Pickup:glaze-big-poop}}。局里有便便角色时，原本会转化成炸弹的份也可能直接变成琉璃之便便。
