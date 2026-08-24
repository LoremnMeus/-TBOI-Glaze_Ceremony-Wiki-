---
slug: zeiz
kind: character
internalKey: Zeiz
title: 泽伊兹
description: "灾难之理"
status: featured
---
<p class="wiki-search-index" v-pre>泽伊兹 Zeiz Zeiz zeiz Zeiz 灾难之理 The Reason of Nitimity 每层从控制中枢任命一名管理员，由其愚见改变世界的运行规则 不同管理员会依照自己的错误认知解释并管理游戏机制 引起管理员的兴趣后，可获得其提出的提案 Appoint an administrator in the Control Hub each floor, whose Folly alters how the world operates Each administrator interprets and manages game rules through their own mistaken reasoning Draw their interest to receive a Proposal</p>

<PublicEntry slug="zeiz" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

### 关键词：灾难之理

Zeiz 每层可以进入控制中枢，从候选者中任命一名管理员。已任命管理员的「愚见」会持续改变本局规则。

### 玩法

- 游戏开始及进入新楼层时，起始房会出现通往 {{System:control-hub}} 的入口。
- 中枢从尚未任命且允许出现的管理员中提供至多三名候选。
- 任命后，该管理员不会再次成为普通候选，其愚见会继续影响之后的楼层。
- 触发管理员关注的事件会增加其兴趣。

已经任命的管理员不会再次作为普通候选出现。候选不足三人时，中枢只展示实际可用的人数。

### 愚见

愚见会直接修改特定规则。例如，该隐被任命后，当队伍合计持有至少 {{Key}} 3 把钥匙时，符合条件的免费掉落物有 40% 概率被加锁；拾取被锁定的资源需要支付 {{Key}} 1 把钥匙。

### 兴趣与提案

被任命的管理员会关注各自定义的事件。同一房间里反复触发同一种事件时，兴趣收益会依次减半；每名管理员每层通过事件最多获得 8 点兴趣。

| 兴趣 | 当前状态 |
| ---: | --- |
| 0～2 | 正常 |
| 3～4 | 感兴趣 |
| 5 | 提案准备完成 |

提案准备完成后，该管理员会停止通过普通事件继续增长兴趣。当前版本中，提案决策尚未对玩家开放。

当前可见候选包括该隐、店长、???、伯大尼和伊甸；其中只有已经显示具体愚见的管理员会提供相应规则效果。完整名单与兴趣规则见 {{System:control-hub}}。

### 使用技巧

- 任命前先检查愚见会消耗或限制哪种资源；管理员效果会在后续楼层继续保留。
- 多名管理员的规则可以同时生效，选择新候选时需要考虑已有愚见。
