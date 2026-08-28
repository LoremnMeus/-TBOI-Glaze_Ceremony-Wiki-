---
title: 暗之六面
description: "灭于未知"
slug: darkness
kind: collectible
internalKey: Darkness
status: featured
---
<p class="wiki-search-index" v-pre>暗之六面 Darkness Darkness darkness Darkness 灭于未知 Buried in the past. +1黑心 !!! 变为魂心角色 按黑心数量增加攻击 击杀敌人逐渐将魂心染成黑心，或填满半黑心 黑心可以等价代替 红心进行恶魔交易 +1 Black Heart !!! Changes your health type to soul hearts Damage up based on black hearts Kills gradually stain soul hearts into black hearts, or fill half black heart Black hearts can replace red-heart devil deal costs</p>

<PublicEntry slug="darkness" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

拿到暗之六面以后，黑心就成了你整局最重要的资源：既是血，也是攻击力，也是恶魔交易的筹码。

持有后，角色的生命体系变为魂心，并获得 **1** 颗黑心。攻击力随黑心数量增长：每个黑心大约提供 **+0.8** 攻击，并额外附带每个黑心约 **0.3%** 的乘算；重复持有会进一步提高加算部分。

### 击杀染黑

每累计 **6** 次击杀推进一次：

- 优先把一颗完整普通魂心染成黑心（总生命量不增加）；
- 若没有完整普通魂心，但生命栏末端有半颗黑心，则把它补成完整黑心。

### 恶魔交易

| 原恶魔价格 | 暗之六面可支付方式 |
| --- | --- |
| 1 红心 | 1 黑心 |
| 2 红心 | 优先 2 黑心 |
| 2 红心但黑心不足 | 1 黑心 + 2 魂心 |

这套支付会真正消耗对应黑心 / 魂心。

## 注意

- 「逐渐」染黑按击杀次数推进，不是随机慢慢变色。

## 使用技巧

- 普通魂心可以通过击杀逐渐染成黑心，因此魂心奖励也是未来攻击储备。
- 进恶魔房前不要只看总魂心数；黑心既提供攻击又付交易价，花掉黑心会同步削弱攻击。

<details>
<summary>技术细节</summary>

- 单份时加算大致为「每个黑心 +0.8」，并乘上 `(1 + 黑心数 × 0.003)`；多份会提高加算系数。
- 没有可染对象时，进度不会整段清零，而会停在接近下一次触发的位置。

</details>
