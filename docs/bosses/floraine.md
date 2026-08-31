---
title: Floraine
description: 棋盘异变终局 Boss。stub — 待对照 HEAD 核验后扩写。
slug: floraine
kind: boss
bossId: floraine
status: stub
relatedStory: chapter1.stone
---

## 机制说明

## 摘要

- **种类**：支线 Boss（`side_boss`）
- **状态**：implemented
- **遭遇**：第一章「棋盘异变」终局（Story `chapter1.stone` / Thread `stone`）
- **实体**：Type 996 / Variant 23755（Floraine）

## 遭遇方式

待核验：房间生成条件、是否可重复、前置委托。

→ 故事：[棋盘异变](/story/)（Story id: `chapter1.stone`）

## 核心机制

棋盘场地、棋子、法杖与场地控制（组件：Chess Board / Pawn / Staff）。细节待对照 `Enemy_Floraine.lua` 等重写。

## 阶段

待核验是否存在明确阶段。

## 攻击

待撰写（面向玩家可观察现象，禁止 callback 说明）。

## 辅助实体

- Chess Board — arena_mechanic
- Chess Pawn — summon
- Chess Staff — weapon

## 击败后

待核验：素材 token `chapter1.material.stone`、掉落、门/场景。

## 战斗提示

待撰写。

## 故事关联

Floraine 是第一章棋盘异变事件的最终遭遇。完整起因与调查过程见对应 Story 页，本页不复述。
