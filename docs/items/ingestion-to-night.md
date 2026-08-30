---
title: 夜之摄取
description: "长夜生牙"
slug: ingestion-to-night
kind: collectible
internalKey: Ingestion_to_Night
status: drafted
---
<p class="wiki-search-index" v-pre>夜之摄取 Ingestion to Night Ingestion_to_Night ingestion-to-night Ingestion to Night 长夜生牙 The night has teeth ↑ 飞行 按住攻击呼唤夜色，松开后发动摄取 夜将你吞下，并重创敌人、吞噬敌弹 新房间有概率陷入黑暗 黑暗房间中摄取更快 ↑ Flight Hold fire to call the night, then release to ingest Night swallows you, then devastates enemies and eats projectiles New rooms may become pitch black Charging is faster in darkness</p>

<PublicEntry slug="ingestion-to-night" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**夜之摄取会让部分新房间真正陷入黑暗，但这种夜色也是你的武器。持续按住攻击后，黑暗会从房间四周向角色聚拢，并逐渐显露出牙形；松开后，长夜会将角色整个吞下。短暂失去视野后重新睁眼，房间中的敌人已经遭到夜袭，敌方弹幕也会被一并吞没。**

持有后获得飞行。约 **25%** 的首次进入的新房间会变成 Pitch Black（自然黑夜会一直保持到你离开）。

## 摄取

- **任意有战斗意义的房间**都可以按住射击开始摄取，不必先处于 Pitch Black。
- 约 **90** 帧起可松开释放；**180** 帧为满摄取。
- 自然 Pitch Black 房间中蓄力更快（约 ×1.5）。

## 夜之吞噬

黑暗从屏幕四周侵入，噪声边缘逐渐拉出尖形；接近满蓄时才明确读成牙。松开后四周合拢，短暂黑屏，再睁眼时夜袭已经结算。

## 伤害

- 普通敌人随蓄力加深受到更高伤害，弱残敌常在睁眼时已被处决。
- Boss 吃固定倍率伤害加有上限的百分比伤害，不会被异常秒杀。
- 结算时清除当前房间敌弹（不反射）。

## 黑暗

- **自然 Pitch Black** 是房间负面状态。
- **摄取视觉**（噪声幕与牙）是技能演出，不依赖房间是否已黑。

## 太阳 / 逆太阳

- **太阳**：驱散当前自然黑夜，并阻止本层继续随机生成 Pitch Black；摄取能力仍可用。
- **逆太阳**：本层新战斗房进入 Pitch Black，摄取使用黑暗房蓄力速度；满蓄对 Boss 的百分比伤害略强化。仍需自己按住完成摄取。
