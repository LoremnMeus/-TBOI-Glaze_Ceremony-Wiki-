# 标注与图标（给人和 AI）

机制正文写在各条目 Markdown 的 `## 机制说明` 之后。本页是可用标记的说明书；完整图标墙在 [图标清单](/icons)。

生成器**不会覆盖**机制正文。改 EID 基线请改 `translate.lua` 再跑导出，不要手改 `entries.json`。

## 改哪一个文件

| 语言 | 路径 |
| --- | --- |
| 中文 | `wiki/docs/items\|trinkets\|cards\|characters\|challenges/<slug>.md` |
| 英文 | `wiki/docs/en/...` |

`slug` 在条目页的灰色代码块里，搜索栏也能搜到中文名。只改 `## 机制说明` / `## Mechanics` **下面**的内容。

建议小标题：

```md
## 机制说明

### 效果
### 触发与消耗
### 数值
### 联动
### 注意
### 版本
```

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
{{QingPlayer:wq}}
{{QingCollectible:Gospel}}
{{Dullize}} {{ThothCard}} {{Seija}}
```

`{{Wiki:gospel}}` 也可以。代码块里的 `{{...}}` 只显示原文，不会当 Vue 解析。

行内示例：{{Item:gospel}} {{Item:blue-print}} {{Damage}} {{SoulHeart}} {{Warning}} {{QingPlayer:wq}}

拷贝模板：[格式参考](/markup-cheatsheet)。

## EID 状态图标

写法与游戏内 EID 相同。行首图标后面留一个空格：`{{Damage}} 伤害 +1`。

常用：

- 属性：`{{Damage}}` `{{Tears}}` `{{Speed}}` `{{Range}}` `{{Shotspeed}}` `{{Luck}}`
- 心：`{{Heart}}` `{{SoulHeart}}` `{{BlackHeart}}` `{{BoneHeart}}` `{{BrokenHeart}}` `{{EternalHeart}}` `{{RottenHeart}}` `{{EmptyHeart}}`
- 资源：`{{Coin}}` `{{Bomb}}` `{{Key}}` `{{Battery}}` `{{Card}}` `{{Pill}}` `{{Rune}}` `{{Trinket}}`
- 房间：`{{TreasureRoom}}` `{{Shop}}` `{{BossRoom}}` `{{DevilRoom}}` `{{AngelRoom}}` `{{SecretRoom}}` `{{Planetarium}}` `{{SacrificeRoom}}`
- 状态：`{{Warning}}` `{{Timer}}` `{{Poison}}` `{{Burning}}` `{{Fear}}` `{{Slow}}` `{{Charm}}` `{{Confusion}}` `{{HolyMantle}}` `{{ArrowUp}}` `{{ArrowDown}}`
- 正邪：`{{Seija}}` `{{SeijaB}}`
- 品质：`{{Quality0}}` `{{Quality1}}` `{{Quality2}}` `{{Quality3}}` `{{Quality4}}`

原版道具/饰品（数字是原版 XML ID）：`{{Collectible1}}` `{{Trinket1}}`。

行首的 `↑` / `↓` 与 `{{ArrowUp}}` / `{{ArrowDown}}` 一样会渲染成箭头图标，不要混用文字三角符号。

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
请给 Qing Remaster Wiki 写机制说明。
先读 wiki/docs/editing.md 和 wiki/docs/markup.md。
只改指定 Markdown 里「## 机制说明」之后的正文，不要改 frontmatter，不要改 translate.lua。
根据 Lua/XML 实装写效果、触发、数值、联动、注意；不要编造。
用 {{Damage}} 等 EID 图标，本模组条目用 {{Item:slug}}。
不确定的写成「待核实」。中文。
目标文件：wiki/docs/items/<slug>.md
```
