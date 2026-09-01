---
title: 假象之书
description: "快，毁灭我"
slug: book-of-voice
kind: collectible
internalKey: Book_of_Voice
status: reviewed
---
<p class="wiki-search-index" v-pre>假象之书 Book of Voice Book_of_Voice book-of-voice Book of Voice 快，毁灭我 Destroy me. Quickly. 以0充能获得；充满后可主动呼唤低语 低语也会自然响起，并使此书暂时可用 使用后选择接受或拒绝，接受则立即完成交易 每次接受都会让声音更加清晰，并缩短充能 不断接受后，它会发生变化 Obtained at 0 charge; when full, can call a whisper Whispers also start on their own and temporarily make this book usable Use to accept or refuse; accepting completes the deal immediately Each accept makes the voice clearer and shortens charge Keep accepting, and it will change</p>

<PublicEntry slug="book-of-voice" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**假象之书会反复提出要求；接受得越多，耳语越频繁，也越接近成为真正的「声音」。**

以 **0** 充能入手，基础最大充能 **6**。充满后可以主动呼唤一次低语；低语也会自己响起，并让这本书暂时进入可回应状态。

低语出现后使用书本，在选项里选择接受或拒绝。接受会立即支付要求并兑现报酬；拒绝则不做交易。

## 顺从

每次接受都会让声音更清晰。顺从加深后：

- 通常每接受一次邀约获得 **1** 点顺从；加倍接受获得 **2** 点
- 顺从达到 **9** 后进入释放准备阶段
- 最大充能随顺从下降，最低为 **1**：`max(1, 6 − ⌊顺从/2⌋)`
- 顺从足够深时，会出现「毁灭我」——接受后假象之书消失，并留下 {{Item:the-voice}}

## 拒绝

可以拒绝。拒绝不会增加顺从，也不会清空已有进度；书会给出专属反应，然后进入冷却。

## 可能的交易

低语按阶段逐渐加重。下表按**类型**概括，不是完整状态机：

| 类型 | 它可能要求什么 | 接受后常见回报 |
| --- | --- | --- |
| 资源交换 | 交硬币 / 钥匙 / 炸弹，或丢弃卡牌、药丸 | 箱子、对立资源、魂心等 |
| 房间清理 | 清掉红心、箱子、商店货架，或放弃底座 | 立刻生成心、锁箱、道具或更高品质多选一 |
| 身体代价 | 立即受伤、献祭饰品、失去心之容器或低品质道具 | 魂心、高品质道具、永久攻击提升 |
| 最终邀约 | 「毁灭假象之书」 | 释放其中的声音，道具变为 {{Item:the-voice}} |

按顺从阶段，低语的倾向与充能上限大致如下：

| 顺从阶段 | 低语倾向 | 最大充能 |
| --- | --- | --- |
| 较低 | 多为轻量资源交换 | 较高（接近基础 **6**） |
| 较高 | 更常出现放弃商店 / 底座、受伤换心、删道具换高品质候选 | 已明显下降 |
| 最大充能最低 | 「毁灭我」权重极高 | **1** |

## 声音

释放之后，书不再是唯一入口。低语仍会响起；需要回应时，主动栏可能短暂留下声音的虚影，用虚影确认交易。详见 {{Item:the-voice}}。

## 特殊联动

### {{Collectible:59}}

彼列书效果下，可以**加倍接受**：付更高代价，换更高报酬（例如更多候选、恶魔池多选、额外暂时攻击等）。

### {{Collectible:584}}

回应低语时若持有对应魂火，部分要求会降一级（更少资源、改为丢下饰品而非删除等）。

### {{Seija}}

拒绝低语时仍会获得小型报酬，并让声音更清晰——「违逆」反而推进顺从。

## 轶事

- 道具副标题「快，毁灭我」与最终邀约同一句话；释放后的对白会接到 {{Item:the-voice}} 的「现在，只剩我们两个了」。

<details>
<summary>技术细节</summary>

- 释放后移除假象之书并给予声音；部分接受路径会永久提高攻击倍率。

</details>
