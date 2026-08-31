# 标注与图标（给人和 AI）

玩家百科正文写在各条目 Markdown 的 `## 机制说明` 之后。这个标题只是生成器与编辑器识别人工正文的边界，不要求正文写成技术说明书。本页是可用标记的说明书；完整图标墙在 [图标清单](/icons)。

生成器**不会覆盖**机制正文。改 EID 基线请改 `translate.lua` 再跑导出，不要手改 `entries.json`。

## 改哪一个文件

| 语言 | 路径 |
| --- | --- |
| 中文 | `wiki/docs/items\|trinkets\|cards\|characters\|challenges/<slug>.md` |
| 英文 | `wiki/docs/en/...` |

`slug` 在条目页的灰色代码块里，搜索栏也能搜到中文名。只改 `## 机制说明` / `## Mechanics` **下面**的内容。

普通词条按内容选用小标题，空章节不要生成：

```md
## 机制说明

### 效果
### 注意
### 协同效应
### 交互
### 使用技巧
### 数值 / 算法
### 轶事
### 版本历史
```

简单内容可以只有“效果”。复杂角色、挑战和系统页面使用 `editing.md` 中各自的结构；不要把普通词条写成设计报告。

不要编造未在 Lua/XML 里看到的效果。不确定就写「待核实」。

## 查实装再写

按这个顺序读，不要只靠 EID：

1. 页顶 `internalKey`（例如 `Gospel`）
2. `content/items.xml` / `pocketitems.xml` / `players.xml`
3. `Qing_Remaster_scripts/items/`、`cards/`、`trinkets/`、`players/` 里对应脚本
4. `Qing_Remaster_scripts/translations/translate.lua` 的现有 EID（页上已渲染）

## 本模组条目图标（Wiki 专用）

不要用 `{{Collectible72}}` 指福音：那个数字是**原版**道具 ID。本模组条目用 slug 或 internalKey：

```md
{{Item:gospel}} 与 {{Item:blue-print}} 联动。
{{Trinket:pacification-mark}}
{{Card:0-the-fool}}
{{Character:zeis}}
{{Pickup:glaze-heart}}
{{Pickup:glaze-heart-half}}
{{System:thoth-cards}}
{{QingPlayer:wq}}
{{QingCollectible:Gospel}}
{{Dullize}} {{ThothCard}} {{Seija}}
```

`{{Wiki:gospel}}` 也可以。代码块里的 `{{...}}` 只显示原文，不会当 Vue 解析。

行内示例：{{Item:gospel}} {{Item:blue-print}} {{Pickup:glaze-heart-half}} {{Damage}} {{SoulHeart}} {{Warning}} {{QingPlayer:wq}}

“特殊联动”下的具体对象标题也应直接使用对应标记，例如 `### {{Seija}}`、`### {{Collectible:706}}`，使头像或道具图标与名称一起显示（名称由 markup 内联，不要手写重复）。

拷贝模板：[格式参考](/markup-cheatsheet)。

## EID 状态图标

写法与游戏内 EID 相同。行首图标后面留一个空格：`{{Damage}} 伤害 +1`。

常用：

- 属性：`{{Damage}}` `{{Tears}}` `{{Speed}}` `{{Range}}` `{{Shotspeed}}` `{{Luck}}`
- 心：`{{Heart}}` `{{SoulHeart}}` `{{BlackHeart}}` `{{BoneHeart}}` `{{BrokenHeart}}` `{{EternalHeart}}` `{{RottenHeart}}` `{{EmptyHeart}}`
- 资源：`{{Coin}}` `{{Bomb}}` `{{Key}}` `{{Battery}}` `{{Card}}` `{{Pill}}` `{{Rune}}` `{{Trinket}}`
- 房间：`{{TreasureRoom}}` `{{Shop}}` `{{BossRoom}}` `{{DevilRoom}}` `{{AngelRoom}}` `{{SecretRoom}}` `{{SuperSecretRoom}}` `{{Planetarium}}` `{{SacrificeRoom}}` `{{ErrorRoom}}`
- 状态：`{{Warning}}` `{{Timer}}` `{{Poison}}` `{{Burning}}` `{{Fear}}` `{{Slow}}` `{{Charm}}` `{{Confusion}}` `{{HolyMantle}}` `{{ArrowUp}}` `{{ArrowDown}}`
- 正邪：`{{Seija}}` `{{SeijaB}}`（正文会内联「正邪 / Seija」名称；**游戏内说明**区块仅显示图标，与其他 EID 图标一致）
- 品质：`{{Quality0}}` `{{Quality1}}` `{{Quality2}}` `{{Quality3}}` `{{Quality4}}`

原版实体使用类型 + XML ID：`{{Collectible:619}}` `{{Trinket:1}}` `{{Card:1}}` `{{Pill:1}}`。它们会同时渲染正式名称和图标；不要按中文名引用，也不要自行翻译。旧式 `{{Collectible619}}` 仍可作为纯图标使用，但百科正文优先使用带冒号的实体引用。

行首的 `↑` / `↓` 与 `{{ArrowUp}}` / `{{ArrowDown}}` 一样会渲染成箭头图标，不要混用文字三角符号。

EID 简写 `!!!` 与 `{{Warning}}` 一样会渲染成警告图标（与游戏内 EID 一致）。

颜色标记 `{{ColorGold}}...{{CR}}` 在 Wiki 里目前会去掉染色、只留文字。不要把颜色当行首图标。

全表：[图标清单](/icons)。缺图的标记会显示成灰色代码，换一个已收录的名字。

## 公式

行内 `$a^2+b^2$`，独立行：

$$
\mathrm{DPS} = \mathrm{Damage} \times \mathrm{Tears}
$$

## 给 AI 的任务模板

把下面整段连同目标条目的 Markdown 路径发给 AI：

```text
请给 Qing Remaster Wiki 写玩家百科正文。
先读 wiki/docs/editing.md、wiki/docs/markup.md 和本地 qing-wiki-mechanics skill。
只改指定 Markdown 里「## 机制说明」之后的正文，不要改 frontmatter，不要改 translate.lua。
根据当前 Lua/XML 核验实际行为；复杂机制再按需读取相关 ai_context 了解概念身份，但不得覆盖代码事实。
先写清它是什么、怎么玩；示例、规则、数值、联动、技巧和轶事只在有内容时出现。不要编造。
用 {{Damage}} 等 EID 图标，本模组条目用 {{Item:slug}}。
不确定的写成「待核实」。中文。
目标文件：wiki/docs/items/<slug>.md
```
