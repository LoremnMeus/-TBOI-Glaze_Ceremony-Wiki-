---
title: 和谐号
description: "下一站，创死你"
slug: hyper-velocity
kind: collectible
internalKey: Hyper_Velocity
status: reviewed
---
<p class="wiki-search-index" v-pre>和谐号 Hyper Velocity Hyper_Velocity hyper-velocity Hyper Velocity 下一站，创死你 Next stop: impact 举起后按方向召唤一列动车 动车撞击敌人并破坏地形 攻击 撞击敌人造成250+5倍角色伤害 动车会对角色造成5点伤害 Hold up the item, then choose a direction to call a train The train runs through enemies and terrain Damage Deals 250 + 5x Isaac&#x27;s damage to enemies Deals 5 damage to Isaac on collision</p>

<PublicEntry slug="hyper-velocity" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**和谐号会在指定方向召来一列真正穿过房间的动车。**

使用后先举起道具，再按一次射击方向发车；再次使用可在未发车时收起。发车消耗充能，并沿该方向的正交轴向（上下左右）召唤一列动车：从房间外驶入，沿直线加速穿过房间，离开房间后消失。路线在召唤时锁定，不会转弯。

动车对敌人造成 **250 + 5×** 角色伤害，并带击退；对角色造成 **5** 点伤害（与 EID 相同的半心单位），并沿轨道方向弹开。沿途会破坏可破坏的固体网格。

多列动车的判定区域重叠时会相撞：在交汇处引发 **1000** 伤害的爆炸并剧烈震动，两列同时消失。换房时未离场的动车也会被清除。

## 注意

- 动车会撞到角色自己；站在预定轨道上会被反复碾到。击退沿轨道方向，不能指望“贴着车头蹭过去”。
- 方向只在发车瞬间锁定，之后不会转向。

## 特殊联动

### {{Collectible:584}}

发车时若应生成魂火，会生成 **2** 枚和平魂火。持有和平魂火时，角色受到至少 **1** 整心（伤害量 ≥ 2 半心单位）的一次受伤会被整次抵消，然后全部和平魂火熄灭。

### {{Collectible:706}}

深渊生成的对应蝗虫移速极高。

## 使用技巧

- 需要清石或直线清怪时，先把自己移出那条正交轨道，再发车。
- 房间里已有一列动车时，再发一列与之相交的车，可以主动换相撞爆炸，换取更高爆发。

## 轶事

- 名称与中国高铁「和谐号」相关；挑战 {{Challenge:safe-driving}} 也复用同一套列车召唤。

<details>
<summary>技术细节</summary>

- 充能：3。
- 对敌人：`250 + 5 × 攻击`；对角色：5 点伤害；两车相撞：交汇处 1000 伤害爆炸并剧烈震动。

</details>
