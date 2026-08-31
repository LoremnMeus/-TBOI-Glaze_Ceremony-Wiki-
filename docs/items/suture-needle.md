---
title: 缝合针
description: "死亡只是线断了"
slug: suture-needle
kind: collectible
internalKey: Suture_Needle
status: featured
---
<p class="wiki-search-index" v-pre>缝合针 Suture Needle Suture_Needle suture-needle Suture Needle 死亡只是线断了 Death is only a broken thread 计时 自动充能 使用时缝合附近的敌人，持续数秒 期间死亡的敌人会被强行维持活动一段时间 继续攻击会拆开缝线 缝线断裂时撕裂身体并伤害附近敌人 Timer Recharges over time Sutures nearby enemies for a few seconds Enemies that die during this window continue moving briefly Further damage causes their sutures to break faster When the sutures completely break, their bodies rupture and damage nearby enemies</p>

<PublicEntry slug="suture-needle" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

缝合针把「本来该死掉的敌人」暂时缝成还能行动、还能继续吃伤害的定时炸弹。

它是自动充能主动（约 **5** 秒充满）。使用后释放一道扩张的缝合波，扫到的合法敌人会留下约 **3** 秒缝线。

| 状态 | 效果 |
| --- | --- |
| 缝合 | 敌人在约 3 秒内获得缝线 |
| 缝尸 | 普通敌人受到致死伤害后仍能短暂行动，并继续受到攻击 |
| 爆裂 | 缝线耗尽或被继续攻击拆断时，对附近敌人造成伤害 |

对缝尸继续输出不仅让它更早爆，还会提高最终爆裂伤害——旁边还有一群敌人时尤其值得打完。

Boss 可以被缝合，但**不会**进入完整缝尸：标记期间正常死亡时直接爆裂。

## 注意

- 少量特殊敌人与特殊 Boss 无法被缝合。
- {{Collectible:356}} 的重复触发会被忽略，不会额外放出第二道缝合波。

## 特殊联动

- {{Collectible:34}}：每产生一具缝尸，本房 **+0.2** 攻击，最多 **+2**；离开房间重置。
- {{Collectible:584}}：生成专属魂火；缝尸会强化它，爆裂时魂火会向爆裂位置追加攻击。
- {{Seija}}：缝尸持续更久，但继续攻击时拆线更快。

<details>
<summary>技术细节</summary>

- 缝合波最大覆盖半径约 180；爆裂伤害半径约 90。
- 普通缝尸爆裂：约 `1.5×` 玩家攻击 + 后续伤害的 `20%`，上限 `6×` 玩家攻击。
- Boss 在缝合标记下死亡：直接 `5×` 玩家攻击的爆裂，不进入缝尸。
- 充能：`300` 帧自动充满（约 5 秒）。
- Seija：缝尸约 2 秒（通常约 1 秒），拆线效率翻倍。

</details>
