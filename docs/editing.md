# 给人和 AI 的编辑位点

私有开发仓库是唯一源。不要在公开 Wiki 仓库里手改后再指望同步回来。

本地预览：双击 `html/open_wiki_preview.cmd`，或仓库根目录：

```text
python -m pip install -r scripts/publication/requirements.txt
python scripts/publication/export_wiki_data.py
python scripts/publication/export_wiki_icons.py
npm --prefix wiki install
npm --prefix wiki run docs:dev
```

浏览器打开 `http://localhost:5173/`。图标墙：[/icons](/icons)。标注说明书：[/markup](/markup)。格式拷贝：[格式参考](/markup-cheatsheet)。

本地开发服务器（`npm --prefix wiki run docs:dev`）会在条目页底部显示**编辑机制说明**：只有本机可写盘，可切换源码 / 渲染 / 分栏，按类别插入图标。这里的“机制说明”是历史编辑位点名称，实际代表整个玩家百科正文区，并不要求写成技术报告。生产构建和公开 Wiki 没有这个面板。不要用它改 `generated/`。

`export_wiki_icons.py` 需要本机 `extracted_resources` 和 EID 模组；CI 只跑 `export_wiki_data.py`。全量条目由 `generate_public_metadata.py` 从 XML 登记（跳过 hidden）；之后新道具再补登记或重跑该脚本。

## 人机协作（完整回路）

1. **登记**：可见条目已在 `public_metadata/entries/*.json`。新内容才需要补 `internalKey` / `slug` / `names` / `images` / `wiki.enabled` / `releaseState=public`。
2. **自动基线**：跑 `export_wiki_data.py`。灌 Desc/EID、拷图标、写搜索用 title。Markdown 的机制正文**永不覆盖**；只更新 frontmatter 和隐藏的搜索索引块。
3. **人工/AI 玩家正文**：改 `wiki/docs/<kind>/<slug>.md` 里 `## 机制说明` **之后**。优先解释“它是什么、怎么玩、实际局面怎样”，必要的规则与数值放后面。版式、ID、EID 由 `<PublicEntry>` 负责。标注见 [markup.md](./markup.md)。
4. **状态**：`wiki/docs/generated/page-status.json` 使用 `stub / drafted / reviewed / featured`。前两项由正文自动判断；完整核验后才在页面 frontmatter 手动提升为 `reviewed` 或 `featured`。不要手改 `entries.json` 或生成的状态 JSON。
5. **发布**：私有仓 commit/push；打 `v*` tag 才同步公开 Wiki。

## 2. 玩家百科正文（改 Markdown）

- 中文：`wiki/docs/items|trinkets|cards|characters|challenges/<slug>.md`
- 英文：`wiki/docs/en/...`

例如福音：`wiki/docs/items/gospel.md`，从「待撰写。」开始写。英文缺 EID 时保留 `MissingTranslation`。

### 两条资料通道

**运行时事实（必读）**按以下顺序核验：当前 Lua/XML → public metadata → EID。它回答“游戏现在实际发生什么”。

涉及角色、大型系统、固定术语或复杂机制时，再读取 `ai_context/README.md` 并定向读取相关 Context。它回答“这个内容应该怎样被理解和解释”，不能覆盖当前代码行为，也不能被自动复制进 Wiki。

若二者冲突，Wiki 暂按玩家当前实际体验撰写，并向用户报告实现与长期意图不一致。

### 正文结构

不再强制所有页面使用“效果 / 触发与消耗 / 数值 / 联动 / 注意 / 版本”。按实际内容选用，空章节不生成：

```text
概览
玩法（核心机制 / 操作流程）
示例
详细规则
数值
联动
使用技巧
出典与轶事
版本历史
```

简单内容可以只有概览与必要效果/数值；复杂机制应先给概览、玩法和具体局面，再列规则。不要让精确但次要的技术细节淹没玩家首先需要理解的内容。

### 页面类型

- 道具、饰品、卡牌、拾取物、可互动实体：身份与实际使用优先，再按需补规则、数值、联动、技巧和轶事。
- 角色：先用 1～3 句解释已确认的角色关键词，再按需写角色概览、核心玩法、操作、专属机制、战斗流程、示例、使用技巧、初始配置、解锁内容、出典与设定。角色页负责说明“这个角色是谁、怎么玩、为什么这样决策”；共享注册表、完整兼容清单和子系统例外应下沉到对应大型系统页。
- 挑战：挑战目标、核心规则、与普通角色的区别、初始配置、攻略提示、解锁奖励，按需出现。
- 大型系统：人工页面放在 `wiki/docs/systems/`（英文在 `wiki/docs/en/systems/`），集中解释共享概念；具体道具/角色页面链接过去，不重复承担整个系统说明。

### 页面成熟度

- `stub`：只有自动数据或待撰写占位。
- `drafted`：已有玩家正文，但尚未完整核对当前 Lua/XML。
- `reviewed`：正文已与当前实现核对，没有已知事实缺口。
- `featured`：已 reviewed，且概览、玩法和真正有用的示例/链接/技巧/轶事足够完整，可作为同类页面范例。

`featured` 只表示 Wiki 页面本身经过核验并达到范例质量，不表示其对应角色、系统、管理员名单、奖励或其他游戏内容已经全部开发完成。

不要为了提高状态而填充空洞章节。优先把以下类型各做出一个 featured 范例后，再批量扩写：复杂主动系统、简单被动、复杂 Slot、角色、挑战。

`featured` 与 Golden Page 的正式评判标准位于 `.cursor/skills/qing-wiki-mechanics/references/golden-page-standard-v1.md`。它规定“理解 → 游玩 → 查询”的信息顺序，以及 S / M / L 三种页面尺度；成熟页面的长度由信息价值决定，不由模板决定。

排障页没有自动组件，整页都是人工 Markdown：

- 中文：`wiki/docs/troubleshooting/<slug>.md`
- 英文：`wiki/docs/en/troubleshooting/<slug>.md`
- 配图：`wiki/docs/public/images/troubleshooting/`

## 给 AI 的最短指令

```text
请给 Qing Remaster Wiki 写玩家百科正文。
先读 wiki/docs/editing.md、wiki/docs/markup.md 和本地 qing-wiki-mechanics skill。
只改指定文件里「## 机制说明」之后；先根据当前 Lua/XML 核验实际行为。
若涉及角色、大型系统、固定术语或复杂机制，再按需读取 ai_context，但不得用它覆盖当前实现。
先解释它是什么、怎么玩；示例和详细规则按需要出现，不要强制生成空章节。
本模组条目用 {{Item:slug}}，状态用 {{Damage}} 等。
目标：wiki/docs/items/<slug>.md
```

项目内技能：`.cursor/skills/qing-wiki-mechanics/SKILL.md`。

## 3. 图标与公式

见 [markup.md](./markup.md) 与 [/icons](/icons)。条目图由 `export_wiki_data.py` 采集；原版/EID 小图标用 `export_wiki_icons.py`。不要手改 `wiki/docs/public/generated/`。
