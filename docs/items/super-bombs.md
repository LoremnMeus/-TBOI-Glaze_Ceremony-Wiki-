---
title: 超级炸弹
description: "口袋里的末日"
slug: super-bombs
kind: collectible
internalKey: Super_Bombs
status: stub
---
<p class="wiki-search-index" v-pre>超级炸弹 Super Bombs Super_Bombs super-bombs Super Bombs 口袋里的末日 My pocket doomsday +5超大炸弹 没有超大炸弹时，20秒未使用炸弹会使1枚炸弹成长为超大炸弹 主动槽为空时，超大炸弹闲置2分钟后会成长为妈咪炸弹 +5 Giga Bombs With no Giga Bombs, leave bombs unused for 20 seconds to grow 1 into a Giga Bomb With no active item, leave a Giga Bomb unused for 2 minutes to grow it into Mama Mega</p>

<PublicEntry slug="super-bombs" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

超级炸弹会让没有被使用的爆炸物继续“长大”。拾取时立即获得 **5 枚超大炸弹**。

### 普通炸弹 → 超大炸弹

玩家仍有普通炸弹、但当前没有超大炸弹时，HUD 会开始 **20 秒**倒计时。持续不使用炸弹后，1 枚普通炸弹会成长为超大炸弹。只要库存中已有超大炸弹，这一阶段就不会继续，因此不会自动升级整个库存。

### 超大炸弹 → 妈咪炸弹

拥有超大炸弹且主主动槽为空时，会开始 **2 分钟**倒计时。持续满足条件后，消耗 1 枚超大炸弹与对应的普通炸弹计数，并在主主动槽生成 {{Collectible:483}}。主动槽被占用时不会计时。

### HUD

炸弹 HUD 附近会显示成长目标与剩余时间：短阶段显示秒数，长阶段显示分钟与秒数。成长完成时，图标会播放变形动画；生成妈咪炸弹时，图标还会移向主动道具栏。

### 注意

- 使用炸弹会重置当前成长计时。
- 失去必要资源或不再满足主动槽条件，会停止当前成长流程。
- 暂停游戏不会推进计时。
- 成长针对玩家持有的炸弹资源，而不是房间中已经放置的炸弹实体。

### 使用技巧

接近成长完成时，可以权衡是否稍晚再消耗炸弹；真正需要炸弹时，不必为了保住计时承担额外风险。妈咪炸弹阶段要求长期空着主主动槽，更适合不依赖主动道具的构筑。

<details><summary>技术细节</summary>

- 两段默认时间分别为 600 帧与 3600 帧，按 30 FPS 即 20 秒与 120 秒。
- 完成普通阶段时调用 `AddGigaBombs(1)`；完成妈咪炸弹阶段时分别扣除 Giga Bomb 与普通炸弹计数，再把 Mama Mega 放入主主动槽。
- `MC_POST_PLAYER_USE_BOMB` 重置成长；暂停时成长更新不会执行。
- 两段时间均可在 ImGui 调试配置中调整。

</details>
