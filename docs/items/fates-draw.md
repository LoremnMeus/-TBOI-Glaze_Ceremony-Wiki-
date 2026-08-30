---
title: 注定一抽
description: "只要我牌组里还有卡，我始终相信我的牌组！！"
slug: fates-draw
kind: collectible
internalKey: Fate_s_Draw
status: drafted
---
<p class="wiki-search-index" v-pre>注定一抽 Fate&#x27;s Draw Fate_s_Draw fates-draw Fate&#x27;s Draw 只要我牌组里还有卡，我始终相信我的牌组！！ My Drawwww!!!! 持有的卡牌会不断变为同种类的另一张牌 按住 可以暂时锁定当前牌 Held cards keep changing into another card of the same type Hold to briefly lock your current cards</p>

<PublicEntry slug="fates-draw" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

## 效果

**注定一抽让手牌在同种类卡之间不断洗换，直到按住 Drop 锁住。**

持有期间，每个卡槽里的牌会按自身 **CardType** 在同类型候选中循环替换。第一份的周期约 **24** 帧；每多持有一份再 **+8** 帧，上限 **56** 帧。多个卡槽各自独立滚动。

按住 **Drop** 时，当前手牌全部冻结，周期不计时。打开暂停菜单会强制立刻重抽一轮。

贪婪模式只使用允许出现在贪婪中的同类型卡池。

## 注意

- 锁定只在按住期间生效；松手后从下一轮周期继续滚动。
- 空槽不会被填入新牌，只替换已经持有的卡。
