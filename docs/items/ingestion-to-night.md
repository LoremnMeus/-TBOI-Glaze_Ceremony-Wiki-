---
title: 夜之摄取
description: "长夜生牙"
slug: ingestion-to-night
kind: collectible
internalKey: Ingestion_to_Night
status: drafted
---
<p class="wiki-search-index" v-pre>夜之摄取 Ingestion to Night Ingestion_to_Night ingestion-to-night Ingestion to Night 长夜生牙 The night has teeth 33%概率使黑暗笼罩房间 蓄力潜入黑暗，发动斩击并反击弹幕 ↑ 在黑暗中30%概率免疫攻击 ↑ 飞行 +1攻击 33% chance for rooms to become pitch black Charge in darkness to unleash slashes and counter projectiles ↑ 30% chance to ignore damage in darkness ↑ Flight +1 damage</p>

<PublicEntry slug="ingestion-to-night" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**夜之摄取让角色潜入房间的黑暗：在黑暗里蓄力，再把蓄积的摄取一次吐出来。**

持有后获得飞行与 **+1** 攻击。约 **33%** 的新房间会变成全黑房间；拾取本道具时当前房间也会立刻变黑。

在黑暗中按住射击可积累摄取值：

| 摄取深度 | 大致表现 |
| --- | --- |
| 浅 | 边缘暗雾，几乎不挡视野 |
| 中 | 黑暗向中央伸展 |
| 深（约 130 以上） | 约 **30%** 概率免疫敌人伤害；牙形结构逐渐可辨 |
| 极深（约 180 以上） | 松开射击发动暗影斩击，并吞噬附近敌弹再反向射出 |

太阳牌会驱散本局的夜之摄取黑暗；逆太阳会重新引入并强化夜晚。塔罗抽取有机会偏向这两张牌。

## 注意

- 斩击与弹幕反击的精确半径、波数随摄取值升高。
- 视觉层（边缘侵蚀与牙）仍在迭代；玩法阈值以上表为准。

## 特殊联动

### {{Collectible:706}}

对应蝗虫有概率使敌人恐惧。

<details>
<summary>技术细节</summary>

- 伤害免疫阈值约 counter &gt; 130，判定约 30%。
- 斩击启动约 counter &gt; 180；波数约 `floor((counter-180)/90)+1`。
- 噪声贴图由 `codex_work/tools/generate_ingestion_noise.py` 生成。

</details>
