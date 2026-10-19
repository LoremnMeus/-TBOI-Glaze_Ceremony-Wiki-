---
title: 琉璃之福袋
description: "消耗硬币、钥匙或炸弹，将其转化为对应的琉璃掉落物 没有可转换的资源时生成琉璃之便便"
slug: glaze-grabbag
kind: pickup
internalKey: Glaze_grabbag
status: featured
---
<p class="wiki-search-index" v-pre>琉璃之福袋 Glaze Grabbag Glaze_grabbag glaze-grabbag Glaze_grabbag 消耗硬币、钥匙或炸弹，将其转化为对应的琉璃掉落物 没有可转换的资源时生成琉璃之便便 Consumes coins, keys, or bombs and converts them into matching glazed pickups Spawns a Glaze Poop if nothing can be converted</p>

<PublicEntry slug="glaze-grabbag" lang="zh" />

## 机制说明

## 效果

琉璃之福袋消费当前持有的基础资源，并把它们转换成对应的琉璃掉落。

| 资源 | 可参与条件 | 每份转化 |
| --- | ---: | --- |
| 硬币 | 至少 1 枚 | {{Pickup:glaze-coin}} |
| 钥匙 | 至少 1 把 | {{Pickup:glaze-key}} |
| 炸弹 | 至少 1 个 | {{Pickup:glaze-bomb}} |

每次拾取随机转化 **2 或 3** 份；持有 {{Item:crown-of-the-glaze}} 且冠冕满层时固定为 3 份。

每次转化后都会重新检查库存，因此最后一份资源可以被消耗，但不会被重复计入。若完全没有可转化资源，改为生成 {{Pickup:glaze-big-poop}}。

局里有便便角色时：若某份随机结果本来是炸弹，则**必定**改为生成琉璃之便便，但仍按炸弹扣除库存（不额外扣便便法力）。
