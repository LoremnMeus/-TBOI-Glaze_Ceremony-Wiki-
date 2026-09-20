---
title: 悲欢之凶剧
description: "丑角登场"
slug: drama-of-sorrow-and-joy
kind: collectible
internalKey: Drama_of_sorrow_and_joy
status: reviewed
---
<p class="wiki-search-index" v-pre>悲欢之凶剧 Drama of sorrow and joy Drama_of_sorrow_and_joy drama-of-sorrow-and-joy Drama of sorrow and joy 丑角登场 Leader To Despia 概率发射交替出现的悲剧与喜剧面具泪 悲剧：戴面具的敌人死亡时引发冲击，并将悲剧传给另一名敌人 喜剧：戴面具的敌人受到致命伤害时拒绝死亡，并成为友军 两种面具相遇时化为 凶剧 ：悲剧传遍舞台，而喜剧拒绝谢幕 Chance to fire alternating tragedy and comedy mask tears Tragedy: masked foes unleash a shockwave on death and pass Tragedy onward Comedy: masked foes refuse death when taking lethal damage and become friendly When both masks meet, they become Tragicomedy : tragedy spreads across the stage, while comedy refuses the curtain call</p>

<PublicEntry slug="drama-of-sorrow-and-joy" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

悲欢之凶剧会让部分泪弹变成悲剧或喜剧面具。面具命中敌人后会真正戴在敌人的脸上，并在敌人死亡或受到致命伤害时改变其结局。

面具泪约有 15% 概率出现，并在悲剧与喜剧之间交替。

## 悲剧

悲剧面具会改变敌人的死亡方式。

戴着悲剧面具的敌人死亡时：

- 以死亡位置为中心发动一次冲击，对附近敌人造成伤害；
- 冲击结束后，悲剧会传递给附近另一名尚未拥有悲剧面具的敌人。

如果没有合适的目标，冲击仍然会发生，但悲剧不会继续传播。

## 喜剧

喜剧面具会拒绝敌人的退场。

戴着喜剧面具的敌人受到致命伤害时：

- 死亡会被取消；
- 敌人恢复生命；
- 能够成为友军的敌人会加入玩家一方，协助当前房间的战斗。

无法被转化的特殊敌人不会成为友军，但仍会受到喜剧的影响，并在之后无法再次获得喜剧面具。

## 凶剧

当同一个敌人同时拥有悲剧与喜剧面具时，两种情绪会融合为凶剧。

凶剧会让敌人在死亡与退场之间产生矛盾：

1. 它会先释放更强的悲剧冲击，并尝试将悲剧传递给其他敌人；
2. 随后喜剧会阻止它离开舞台；
3. 最终根据敌人的类型决定是否成为友军。

凶剧会同时消除原本的两种面具。

悲剧扩散到其他敌人，而喜剧让自己继续留下。

## 注意

- 同一种面具不能重复附着。
- 已成为友军的敌人不会再次获得面具。
- 喜剧免疫只影响喜剧面具，不影响悲剧。
- 悲剧冲击可以击杀另一名拥有悲剧面具的敌人，并继续触发传播。
- 敌人在潜地、离场或隐藏期间，面具不会显示，但状态仍然存在。

## 使用技巧

- 喜剧适合用于普通敌人，可以在战斗中获得额外的友军。
- 悲剧适合放在敌人密集的区域，利用死亡后的冲击和传播扩大影响。
- 想要触发凶剧，需要让同一个敌人先后获得两种不同面具。
- 凶剧适合在人群中触发，可以同时利用扩散与生存效果。

## 轶事

- 名称与视觉设计取材自《游戏王》的「死狱乡」系列。

<details>
<summary>技术细节</summary>

| 效果 | 数值 |
| --- | --- |
| 面具泪概率 | 15%，悲剧与喜剧交替 |
| 普通悲剧冲击 | 半径 150；`1.5 × 攻击` + 宿主最大生命 4% |
| 凶剧冲击 | 半径 200；`2.5 × 攻击` + 宿主最大生命 7% |
| Boss 生命加成上限 | 不超过 `3 × 攻击` |
| 喜剧回复（可转化） | 最大生命 20%；凶剧为 30% |
| 喜剧回复（不可转化） | 最大生命 8%；凶剧为 12%，并获得喜剧免疫 |

冲击只伤害附近的存活敌对目标，不会对友军生效。面具使用敌人的头部动画锚点进行定位，并根据头部大小调整尺寸。位置与尺寸会经过平滑处理，使面具保持贴合脸部而不是作为普通状态图标显示。

</details>
