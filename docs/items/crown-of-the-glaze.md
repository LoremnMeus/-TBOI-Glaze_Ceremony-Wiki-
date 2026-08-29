---
title: 琉璃的冠冕
description: "破碎之前，你即为王"
slug: crown-of-the-glaze
kind: collectible
internalKey: Crown_of_the_glaze
status: featured
---
<p class="wiki-search-index" v-pre>琉璃的冠冕 Crown of the glaze Crown_of_the_glaze crown-of-the-glaze Crown of the Glaze 破碎之前，你即为王 A king, until it shatters 提高琉璃化掉落物的生成概率 拾取琉璃化掉落物会为冠冕增加1层辉片，最多5层 1层：+0.6攻击 2层：攻击命中时有概率产生琉璃折射 3层：+1幸运，并提高折射与敌人琉璃化的触发率 4层：攻击有概率使敌人琉璃化 5层：完成冠冕，强化琉璃化掉落物，并免疫琉璃化敌人的碰撞伤害 受伤时冠冕破碎并失去全部辉片 根据失去的辉片数量向四周释放琉璃碎片 Increases the chance of glazed pickups Picking up glazed pickups adds 1 Crown shard, up to 5 1 shard: +0.6 Damage 2 shards: Hits may split into glazed refraction tears 3 shards: +1 Luck, and higher chance for refraction / enemy glazing 4 shards: Attacks may glaze normal enemies 5 shards: Completes the crown, empowers glazed pickups, and blocks glazed enemy contact damage Taking damage shatters the crown and removes all shards Fires glaze fragments based on lost shards</p>

<PublicEntry slug="crown-of-the-glaze" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

琉璃的冠冕越完整，力量越强；受伤则会让辛苦积攒的辉片全部碎裂。

拾取任意受支持的琉璃掉落会获得 **1** 辉片，最多 **5** 层。层数越高，冠冕逐步解锁攻击与琉璃相关能力。真正受到有效伤害时，全部辉片一次性破碎，并按失去的层数向四周释放碎片。

| 辉片 | 解锁 |
| --- | --- |
| 1 | {{Damage}} +0.6 攻击 |
| 2 | 攻击命中后有概率产生琉璃折射 |
| 3 | {{Luck}} +1 幸运，并提高琉璃折射与敌人琉璃化的触发率 |
| 4 | 攻击有概率使普通敌人琉璃化 |
| 5 | 完成冠冕；强化特定琉璃掉落，并免疫琉璃化敌人的接触伤害 |

### 满层强化

满 5 层时，冠冕只改变这些掉落的**额外收益**（各自完整机制见对应页面）：

| 琉璃掉落 | 满层额外效果 |
| --- | --- |
| {{Pickup:glaze-heart}} | 原本会生成半心的琉璃化结果升级为整颗琉璃心 |
| {{Pickup:glaze-coin}} | 10% 高奖由 5 枚提高为 15 枚 |
| {{Pickup:glaze-bomb}} | 脉冲阶段也会清除房间弹幕 |
| {{Pickup:glaze-grabbag}} | 固定生成 3 份，而非 2–3 份 |
| {{Pickup:glaze-chest}} | 开箱额外生成 4 个琉璃掉落 |

### 碎冠

只有真正穿过防护并造成有效生命损失的伤害才会碎冠；恶魔交易、献血机、诅咒门等特殊扣血不会。

碎冠本身也是一次反击：按原层数向外射出碎片，并有机会额外掉落一份随机琉璃资源（同一次碎冠最多一份）。

## 注意

- 3 层的触发率加成只作用于冠冕自身的折射与敌人琉璃化。
- 圣盾实际挡住的伤害不会碎冠。

## 特殊联动

- {{Seija}}：削弱冠冕提高琉璃掉落出现率的效果；碎冠伤害减半；3 层不再提高琉璃折射和敌人琉璃化的触发率。

## 使用技巧

- 接近满层时，先想清楚下一份琉璃掉落值不值得冒碎冠风险去保。
- 碎冠时可能掉落一份琉璃资源，因此低层时主动承担风险的代价相对较小。

<details>
<summary>技术细节</summary>

- 2 层折射基础约 22%；每次折射生成两发侧向碎泪，各约 `30%` 玩家攻击。
- 3 层起，折射 / 敌人琉璃化的基础触发系数约 `1.25×`（正邪下为 `1×`）。
- 4 层敌人琉璃化基础约 6%，幸运可提高，最终封顶约 12%。
- 碎冠碎片数按原层：6 / 8 / 10 / 12 / 16；每片基础约 `40%` 玩家攻击。满 5 层碎冠另有一次较弱的全屏伤害与额外碎片。
- 同一次碎冠事件中，碎片命中敌人时有一次 25% 机会额外生成随机琉璃掉落，且最多一份。

</details>
