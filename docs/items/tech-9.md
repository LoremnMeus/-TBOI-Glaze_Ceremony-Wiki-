---
title: 科技IX
description: "被跳过的未来"
slug: tech-9
kind: collectible
internalKey: Tech_9
status: featured
---
<p class="wiki-search-index" v-pre>科技IX Tech IX Tech_9 tech-9 Tech 9 被跳过的未来 Skipped, looped, returned. 攻击有概率追加科技激光或科技X激光环 Attacks have a chance to add a Technology laser or Tech X ring</p>

<PublicEntry slug="tech-9" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

科技IX让每次攻击都有机会再「接上一发」科技攻击；幸运越高、持有越多，追加越频繁。

触发不限于普通泪弹：其他受支持的攻击方式也会尝试追加。一次触发最多追加**一种**科技攻击——内部按顺序尝试 Tech X 环与多种科技激光形态，前一项成功后就不会继续往下判定。

因此不要把各分支概率当成可以相加的独立表；正文只需记住：幸运与重复持有都会提高追加频率。

## 注意

- 不要把「几种激光概率」加总来估算总触发率；判定是顺序短路的。

## 使用技巧

- 高幸运与多份科技IX比纠结「哪一种激光更赚」更重要——它们提高的是整次追加发生的机会。

<details>
<summary>技术细节</summary>

- 一次成功追加后停止后续分支：Tech X 环 → 科技激光（多种 LeftEye / OneHit 组合）。
- 各分支基础阈值与幸运系数不同；多份持有会提高对应分子。
- 非泪弹攻击按多发 / 方向信息生成追加，伤害缩放与泪弹路径略有不同。

</details>
