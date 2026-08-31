---
title: 破碎的胸针
description: "时间足以改变一切"
slug: broken-brooch
kind: trinket
internalKey: Broken_Brooch
status: reviewed
---
<p class="wiki-search-index" v-pre>破碎的胸针 Broken Brooch Broken_Brooch broken-brooch Broken Brooch 时间足以改变一切 Time is enough to change everything 清理房间后小概率强化攻击、射速、移速或射程中的较弱项 After clearing a room, small chance to buff the weaker of Damage / Tears / Speed / Range</p>

<PublicEntry slug="broken-brooch" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**破碎的胸针会在清理房间时，偶尔替角色补强当前相对落后的一项核心属性。**

每次清房有小概率触发。成功后，会在：

- {{Damage}} 攻击；
- {{Tears}} 射速；
- {{Speed}} 移速；
- {{Range}} 射程

中比较当前状态，并强化相对较弱的一项。

当前单次强化量大致为：

| 属性 | 单次提升 |
| --- | ---: |
| 攻击 | +0.25 |
| 射速 | +0.25 |
| 移速 | +0.05 |
| 射程 | +0.25 |

这里的“较弱”不是简单比较面板数字大小，而是把不同属性换算到同一评价尺度后再判断。因此不要用“3.5 攻击比 1.0 移速数字大”这种方式理解。

幸运与弹速目前不参与这次最低项选择。多份有效饰品会分别进行清房触发判定。

## 轶事

- 「破碎的胸针」是 {{Item:core-brooch}} 魔法胸针用尽 10 次选择后留下的饰品。
- 完整的魔法胸针通过主动选择“强化一项、牺牲另外两项”重新分配属性；碎裂以后，它不再要求做选择，而是在之后的清房过程中缓慢修补相对落后的属性。
