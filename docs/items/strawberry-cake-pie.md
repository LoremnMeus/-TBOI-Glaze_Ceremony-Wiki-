---
title: 草莓蛋糕派
description: "再来一块！"
slug: strawberry-cake-pie
kind: collectible
internalKey: Cake_Berry
status: drafted
---
<p class="wiki-search-index" v-pre>草莓蛋糕派 Strawberry Cake Pie Cake_Berry strawberry-cake-pie Strawberry Cake Pie 再来一块！ One more slice! +1心之容器，回复1红心 概率额外发射弹跳蛋糕 蛋糕每次碰撞都会洒落伤害周围敌人的碎屑，并造成减速 +1 heart container and restores 1 red heart Chance to fire an additional bouncing cake Each collision scatters damaging crumbs and slows nearby enemies</p>

<PublicEntry slug="strawberry-cake-pie" lang="zh" />

## 机制说明

## 效果

获得时增加 1 个心之容器，并回复 1 红心。

攻击时有概率额外掷出一块草莓蛋糕。蛋糕具有普通泪弹的伤害，并能在敌人、墙壁和岩石之间反弹。

每次碰撞都会洒落蛋糕碎屑，对附近的敌人造成范围伤害和减速，同时获得额外飞行时间，使蛋糕能够继续在房间中弹跳。

蛋糕消失时会彻底碎裂，散落更多碎屑。

## 注意

- 碰撞墙壁和岩石同样可以触发范围伤害与减速。
- 每次碰撞的范围伤害只会对每个敌人结算一次，不受碎屑数量影响。
- 碰撞获得的额外飞行时间存在累计上限。
- 蛋糕消失时的碎裂仅为视觉效果，不会再次造成范围伤害或减速。

<details>
<summary>数值</summary>

- 每次攻击的触发概率为 8% + Luck × 2%，最低 8%，最高 34%。
- 蛋糕直接命中造成 1 倍玩家伤害。
- 每次碰撞对 80 像素范围内的敌人造成 0.3 倍玩家伤害，并施加持续 45 帧、系数为 0.7 的减速。
- 每次碰撞额外获得 12 帧飞行时间，累计最多获得 36 帧。

</details>
