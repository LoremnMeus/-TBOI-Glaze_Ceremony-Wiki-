---
title: 吟游乞丐
description: "赠予一份资源，换取下层祝福 靠近后左右切换馈赠，走进确认 按 取消"
slug: bard-beggar
kind: slot
internalKey: Bard_beggar
status: stub
---
<p class="wiki-search-index" v-pre>吟游乞丐 Bard beggar Bard_beggar bard-beggar Bard_beggar 赠予一份资源，换取下层祝福 靠近后左右切换馈赠，走进确认 按 取消 Offer a resource for a blessing on the next floor Switch gifts with left/right, walk in to confirm Press to cancel</p>

<PublicEntry slug="bard-beggar" lang="zh" />

## 机制说明

### 效果
靠近后举起当前可选馈赠。左右切换，走进确认。按 Drop/RT 取消。

付得起的资源才会出现在候选里。

- {{Coin}} **富饶之歌**：支付 5¢。下层首次购物返还 8–12¢。
- {{Key}} **旅途之歌**：支付 1 钥匙。下层揭示 {{TreasureRoom}}。
- {{Bomb}} **战歌**：支付 1 炸弹。下层前 3 个战斗房 {{Damage}} +1。
- {{Heart}} **安魂曲**：支付 1 颗心。下层第一次受伤抵挡。

祝福只在下一层生效，再下一层消失。通道房有概率生成。

### 注意
EID 静态只写操作；举起后动态只描述当前馈赠。
