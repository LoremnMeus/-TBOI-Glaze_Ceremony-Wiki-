---
title: 缝合针
description: "死亡只是线断了"
slug: suture-needle
kind: collectible
internalKey: Suture_Needle
status: featured
---
<p class="wiki-search-index" v-pre>缝合针 Suture Needle Suture_Needle suture-needle Suture Needle 死亡只是线断了 Death is only a broken thread 自动充能 使用时缝合附近的敌人，持续数秒 期间死亡的敌人会被强行维持活动一段时间 继续攻击会拆开缝线 缝线断裂时撕裂身体并伤害附近敌人 Recharges over time Sutures nearby enemies for a few seconds Enemies that die during this window continue moving briefly Further damage causes their sutures to break faster When the sutures completely break, their bodies rupture and damage nearby enemies</p>

<PublicEntry slug="suture-needle" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

缝合针把「本来该死掉的敌人」暂时缝成还能行动、还能继续吃伤害的定时炸弹。

它是自动充能主动（约 **5** 秒充满）。使用后释放一道扩张的缝合波，扫到的合法敌人会留下约 **3** 秒缝线。

| 阶段 | 玩家看到什么 | 应该怎么理解 |
| --- | --- | --- |
| 缝合 | 扩散波扫过敌人 | 约 3 秒内为其留下缝线 |
| 缝尸 | 普通敌人受到致死伤害却继续活动 | 它已经「死了」，只是暂时被缝住 |
| 爆裂 | 时间耗尽，或继续攻击拆断缝线 | 对附近敌人造成范围伤害 |

对缝尸继续输出不仅让它更早爆，还会提高最终爆裂伤害——旁边还有一群敌人时尤其值得打完。

Boss 可以被缝合，但**不会**进入完整缝尸：标记期间正常死亡时直接爆裂，不会多留一段「已死却还能走」的窗口。

## 注意

- 少量特殊敌人与特殊 Boss 无法被缝合；遇到明显无效时换目标即可。
- {{Collectible:356}} 车载电池的重复触发会被忽略，不会额外放出第二道缝合波。

## 特殊联动

### {{Collectible:34}} 彼列之书

每产生一个缝尸，本房间获得 **+0.2** 攻击，最多累计 **+2**；离开房间重置。

### {{Collectible:584}} 美德之书

最多维持一个专属缝合魂火。每产生一具缝尸，魂火成长并变强；缝尸爆裂时，魂火会向爆裂位置发射攻击。

### {{Seija}} Seija

缝尸存在时间由约 **1** 秒延长到约 **2** 秒，但后续攻击拆线的效率也翻倍。

## 使用技巧

- 把缝尸留在密集敌群里再拆线，爆裂更容易打满周围目标。
- 敌人已经进入缝尸后仍值得继续输出：既加速拆线，也抬高爆裂伤害。

<details>
<summary>技术细节</summary>

- 缝合波最大覆盖半径约 180；爆裂伤害半径约 90。
- 普通缝尸爆裂：基础约 `1.5×` 玩家攻击，再加上缝尸期间后续伤害的 `20%`，上限为玩家攻击的 `6×`。
- Boss 在缝合标记下死亡：直接 `5×` 玩家攻击的爆裂，不进入缝尸。
- 充能：`300` 帧自动充满（约 5 秒）。

</details>
