---
title: 魔法胸针
description: "神择祭品"
slug: core-brooch
kind: collectible
internalKey: Core_Brooch
status: reviewed
---
<p class="wiki-search-index" v-pre>魔法胸针 Core Brooch Core_Brooch core-brooch Core Brooch 神择祭品 Sacrifice of Heavenly Selection !!! 最多选择10次 每次随机展示3项基础属性 选择其中1项强化，同时削弱另外2项 用尽后碎裂为 破碎的胸针 !!! Choose up to 10 times Each use shows 3 random base stats Pick 1 to boost; the other 2 are weakened When spent, shatters into Broken Brooch</p>

<PublicEntry slug="core-brooch" lang="zh" />

## 机制说明


<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**魔法胸针每次给出三个属性方向，让你押一个：选中的属性大幅成长，另外两个则付出小代价。连续完成10次后，胸针会彻底碎掉。**

### 六种候选属性

移速、射速、攻击、射程、弹速、幸运。

### 三选一

每次从六项中随机展示 3 项；选择其中 1 项强化，另外 2 项小幅削弱。计数 +1。

### 10 次之后

用尽后胸针从主动槽移除，碎裂并生成饰品 [破碎的胸针](/trinkets/broken-brooch)。

<details>
<summary>技术细节</summary>

每次内部记账约为：选中 +0.3 单位，未选各 −0.1 单位，再按属性各自倍率写入缓存。正文只需记住「一项强增益，两项小代价」。

</details>
