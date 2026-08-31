---
title: 青（Boss）
description: 第一章道中 Midboss。与可玩角色/剧情人物同身份、不同知识对象。
slug: qing
kind: boss
bossId: qing
status: stub
relatedStory: chapter1.qing_midboss
---

## 机制说明

## 摘要

- **种类**：剧情 Boss（`story_boss`）
- **状态**：implemented
- **遭遇**：第一章 Midboss（Story `chapter1.qing_midboss`）
- **实体**：Type 996 / Variant 24037（Boss Qing）

## 遭遇方式

待核验：Ending2 / `ending2_display` 生成路径、是否可重复。

→ 故事：`chapter1.qing_midboss`（战后真相见 `chapter1.revelation`）

## 核心机制

拆清：青本体 AI vs 刀具/飞刃组件（`qing_knife` 等）。组件**不是**独立 Boss 页。

## 阶段 / 攻击

待对照 `Boss_Qing.lua`；区分剧情 callback 与战斗 AI。禁止把实现细节写进玩家攻略正文。

## 辅助实体

- QingKnife — weapon
- QingHelper / QingHelper2 — helper / phase_entity

## 击败后

推进 Midboss 节点与真相揭露相关 flag（以 StoryProgress 为准）。

## 战斗提示

待撰写。

## 故事关联

短链；人物身份见 Character「青」，可玩角色另页。本页不复述序章/第一章全文。
