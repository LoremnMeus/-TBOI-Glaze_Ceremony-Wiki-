---
title: 血红使者
description: "红心 支付一半红心（下取整） 奖励随角色状态变化"
slug: bloody-messenger
kind: slot
internalKey: Bloody_Messenger
status: featured
---
<p class="wiki-search-index" v-pre>血红使者 Bloody Messenger Bloody_Messenger bloody-messenger Bloody_Messenger 红心 支付一半红心（下取整） 奖励随角色状态变化 Heart Pay half your red hearts (floored) Rewards change with the player</p>

<PublicEntry slug="bloody-messenger" lang="zh" />

## 机制说明

## 效果

血红使者用生命换取血红探索相关奖励。普通有红心的角色支付一半红心后走**强档**；魂心系 / 纯魂角色始终走**弱档**。

## 如何支付

靠近碰撞即可交易。

| 角色 | 支付 | 奖励档 |
| --- | --- | --- |
| 普通（有红心） | 当前红心的一半（按半心单位下取整），且至少保留半颗红心；只剩半颗时无法支付 | 强档 |
| 魂心系 / 纯魂（仍有红心） | 同上红心半额 | 弱档 |
| 魂心系 / 纯魂（无红心） | 受到 1 次真实半心级伤害（生命过低则无法支付） | 弱档 |
| 普通且无红心 | 无法交易 | — |

## 奖励

弱档在进入抽奖前另有 **30%** 直接一无所获。

| 结果 | 弱档权重 | 强档权重 | 说明 |
| --- | ---: | ---: | --- |
| 一无所获 | 40 | — | 强档不会抽到空奖 |
| 下层额外红隐藏 | 15 | 30 | 进入下一层时兑现；整局额外授予上限约 2 次，满额后不再出现 |
| {{Card:78}} 红钥匙碎片 | 25 | 40 | 当场掉落 |
| 红隐藏池道具 | 20 | 30 | 当场掉道具后使者离开 |

强档另有 **30%** 概率再抽第二种不同奖励。

抽到红钥匙碎片或额外红隐藏后，使者通常仍可继续交易；只有抽到红隐藏池道具时才会离开。

## 出现

持有 {{Item:bloody-map}} 时，首次进入红隐藏房有概率出现：基础约 **40% × 持有数量**（上限 100%）。
