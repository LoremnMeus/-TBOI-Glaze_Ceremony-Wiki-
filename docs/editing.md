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

本地开发服务器（`npm --prefix wiki run docs:dev`）会在条目页底部显示**编辑机制说明**：只有本机可写盘，可切换源码 / 渲染 / 分栏，按类别插入图标。这里的“机制说明”是历史编辑位点名称，实际代表整个玩家百科正文区，并不要求写成技术报告。Markdown 中的 `## 机制说明 / ## Mechanics` 标题会继续作为**源码兼容锚点**保留，但公开页面不显示该标题，目录直接从 `## 效果 / ## Effects` 等正文栏目开始；**不要**删除该锚点。生产构建和公开 Wiki 没有编辑面板。不要用它改 `generated/`。

`export_wiki_icons.py` 需要本机 `extracted_resources` 和 EID 模组；CI 只跑 `export_wiki_data.py`。全量条目由 `generate_public_metadata.py` 从 XML 登记（跳过 hidden）；之后新道具再补登记或重跑该脚本。

## 人机协作（完整回路）

1. **登记**：可见条目已在 `public_metadata/entries/*.json`。新内容才需要补 `internalKey` / `slug` / `names` / `images` / `wiki.enabled` / `releaseState=public`。
2. **自动基线**：跑 `export_wiki_data.py`。灌 Desc/EID、拷图标、写搜索用 title。Markdown 的机制正文**永不覆盖**；只更新 frontmatter 和隐藏的搜索索引块。
3. **人工/AI 玩家正文**：改 `wiki/docs/<kind>/<slug>.md` 里 `## 机制说明` **之后**。普通词条优先直接写“效果”，再按需写注意、交互、协同、技巧与轶事；大型角色/系统才使用简介、操作和流程。资料卡、技术 ID、EID 由 `<PublicEntry>` 负责。标注见 [markup.md](./markup.md)。
4. **状态**：`wiki/docs/generated/page-status.json` 使用 `stub / drafted / reviewed / featured`。前两项由正文自动判断；完整核验后才在页面 frontmatter 手动提升为 `reviewed` 或 `featured`。不要手改 `entries.json` 或生成的状态 JSON。
5. **发布**：私有仓是唯一源。提交消息包含 `[publish-wiki]` 时只同步公开 Wiki；`[publish-release]` 只同步公开 Release；`[publish-both]` 同步两者。正式版本仍使用与 `main.lua` 版本一致的 `v*` tag，并创建 GitHub Release。普通 commit/push 不更新公共仓库。

## 日常维护与发布验收

Cursor、Codex 或人工编辑一次 Wiki 时，按下面的最短闭环执行；不要直接改公共 Wiki 仓库或 `wiki/docs/generated/`：

1. **确定事实来源**：先读目标 Lua/XML；角色、大型系统与固定术语再定向读取 `ai_context/README.md` 指向的相关文件。实现与长期语义冲突时先报告，不静默选择一方。
2. **编辑正确层级**：EID/搜索摘要改 `Qing_Remaster_scripts/translations/translate.lua`；玩家正文改对应 Markdown 的人工区；自动资料卡字段改 `public_metadata` 或导出器。生成 JSON 和 `public/generated` 图片不得手改。
3. **重新导出**：运行 `python scripts/publication/export_wiki_data.py`。角色肖像、道具图等源资源变化也必须重跑，确认对应 `wiki/docs/public/generated/images/` 文件产生实际 diff。
4. **校验元数据**：运行 `python scripts/publication/validate_public_metadata.py`，要求 `errors=0`。若修改原版/EID 图标源，再按需要运行 `export_wiki_icons.py`。
5. **完整构建**：运行 `npm --prefix wiki run docs:build`。构建失败时先修复链接、Vue 组件或 Markdown，不得只提交生成数据绕过错误。
6. **检查差异**：运行 `git diff --check` 和 `git status --short`；确认没有探针日志、`dist/`、密钥或临时文件。已有用户修改不是清理目标，不得为了工作区变干净而恢复或删除。
7. **提交发布**：只发布 Wiki 时，提交消息加入 `[publish-wiki]`，随后推送私有仓 `main`。这会触发公共 Wiki 同步；不要额外制造版本 tag。

推荐验收命令（项目声明的 Python 环境优先；下列使用通用写法）：

```text
python scripts/publication/export_wiki_data.py
python scripts/publication/validate_public_metadata.py
npm --prefix wiki run docs:build
git diff --check
git status --short
```

完成后至少报告：修改了哪些人工正文/组件、导出条目数与缺失数、元数据错误数、构建结果、私有分支和提交哈希。若没有安装 GitHub CLI，不影响通过提交标记触发发布，但应明确说明未从本机继续查询 Actions 状态。

## 2. 玩家百科正文（改 Markdown）

- 中文：`wiki/docs/items|trinkets|cards|characters|challenges/<slug>.md`
- 英文：`wiki/docs/en/...`

例如福音：`wiki/docs/items/gospel.md`，从「待撰写。」开始写。英文缺 EID 时保留 `MissingTranslation`。

### 两条资料通道

**运行时事实（必读）**按以下顺序核验：当前 Lua/XML → public metadata → EID。它回答“游戏现在实际发生什么”。

涉及角色、大型系统、固定术语或复杂机制时，再读取 `ai_context/README.md` 并定向读取相关 Context。它回答“这个内容应该怎样被理解和解释”，不能覆盖当前代码行为，也不能被自动复制进 Wiki。

若二者冲突，Wiki 暂按玩家当前实际体验撰写，并向用户报告实现与长期意图不一致。

### 正文结构

普通词条默认从玩家可查询的事实开始，按实际内容选用，空章节不生成：

```text
效果
注意
协同效应
交互
使用技巧
数值 / 算法
轶事
版本历史
```

简单内容可以只有“效果”。角色与大型系统可以使用一句话介绍、核心玩法、操作、流程、示例和详细规则，但仍须先回答玩家如何使用。避免“本质上”“核心在于”“这意味着”等设计总结腔；效果写事实，技巧写由事实推导出的决策。

页面顶部的玩家资料卡只读取导出产物。它显示可核验的道具池、统一解锁关系、角色初始生命/资源/口袋主动等事实，并将 internalKey、slug、XML ID 等技术信息折叠。开发者 HTML 只负责维护权威源，不作为公开页面运行依赖。

### 页面类型

- 道具、饰品、卡牌：直接写效果，再按需补注意、交互、协同、技巧和轶事。
- 掉落物：通常是 S 页面，只写效果、可核验的出现来源、注意和轶事；系列共同规则下沉到系统页。
- Slot / 可互动实体：使用方式、结果或奖励、注意、概率表和轶事。不要套用掉落物模板。
- 角色：角色称号由资料卡副标题显示，正文不要再建“关键词”章节。正文直接写玩法；特殊按键必须单列“操作”。再按需写专属机制、`{{Collectible:619}}`、注意、技巧、解锁内容与轶事。禁止公开“当前代码登记了什么/底层框架完成到哪里”；共享系统细节下沉到系统页。
- 挑战：导语只说明它改变了什么；正文按需使用规则、注意、攻略、轶事。角色、初始内容、终点、解锁与奖励由资料卡负责，不在正文机械复述。
- 大型系统：人工页面放在 `wiki/docs/systems/`（英文在 `wiki/docs/en/systems/`），集中解释共享概念；具体道具/角色页面链接过去，不重复承担整个系统说明。

### 页面成熟度

- `stub`：只有自动数据或待撰写占位。
- `drafted`：已有玩家正文，但尚未完整核对当前 Lua/XML。
- `reviewed`：正文已与当前实现核对，没有已知事实缺口，并已通过下述 Editorial Pass。
- `featured`：已 reviewed，且概览、玩法和真正有用的示例/链接/技巧/轶事足够完整，可作为同类页面范例。

### Editorial Pass：drafted → reviewed 的强制二审

机制审计完成不等于玩家文案完成。页面从 `drafted` 提升为 `reviewed` 前，必须单独做一次编辑二审；这一轮不重新核机制，只检查表达与信息取舍：

1. 页面第一屏的前三句话，能否让第一次拿到该内容的玩家知道它是什么、怎样使用或核心循环如何运转？
2. 主正文是否出现开发者或设计辩护视角（API、callback、文件名/仓库路径、内部字段、当前实现、不是漏洞、这是成本等）？
3. 是否为了显得完整，把不影响首次理解或玩家决策的低价值边界规则放进主正文？
4. 简单内容是否被强行拆成五六个章节，而不是只保留真正有独立查询价值的结构？（H2 数量只是提醒，不是自动失败条件；每个标题应对应一个独立的玩家查询意图。）
5. 复杂内容的精确规则是在回答玩家会问的问题，还是只在复述实现？

**主正文**对第 2 项命中原则上必须返工：改写为玩家可观察结果，或删除。

**`<details><summary>技术细节</summary>` 折叠区**允许精确数值、公式、隐藏规则，以及玩家可观察的算法结果；**禁止**写成源码结构说明。概括：

> 技术细节可以解释隐藏规则，但不应成为源码结构说明。

技术区应清理：文件路径、未加载旧脚本、Lua helper / callback / save 字段名、「当前实现 / 仓库中的」开发语境、仅为防 bug 或防递归而存在的架构描述。本模组公开文档默认面向 **REPENTOGON** 正式环境；不要把「需要 RGON」当作技术区实现句——除非真要写兼容性说明，否则删除。

其他任一项不通过时也应继续保持 `drafted`。Editorial Pass 不能替代 Lua/XML 事实核验；两项都通过，才可标记 `reviewed`。

`featured` 只表示 Wiki 页面本身经过核验并达到范例质量，不表示其对应角色、系统、管理员名单、奖励或其他游戏内容已经全部开发完成。

不要为了提高状态而填充空洞章节。优先把以下类型各做出一个 featured 范例后，再批量扩写：复杂主动系统、简单被动、复杂 Slot、角色、挑战。

`featured` 与页面压缩验收见 `.cursor/skills/qing-wiki-mechanics/REVIEW_RUBRIC.md`；长期原则见 `ai_context/WIKI_EID_WRITING_STANDARD.md`；执行工作流见 `.cursor/skills/qing-wiki-mechanics/SKILL.md`。成熟页面的长度由信息价值决定，不由模板决定。

排障页没有自动组件，整页都是人工 Markdown：

- 中文：`wiki/docs/troubleshooting/<slug>.md`
- 英文：`wiki/docs/en/troubleshooting/<slug>.md`
- 配图：`wiki/docs/public/images/troubleshooting/`

## 给 AI 的最短指令

```text
请给 Qing Remaster Wiki 写玩家百科正文。
先读 wiki/docs/editing.md、wiki/docs/markup.md 和 .cursor/skills/qing-wiki-mechanics/SKILL.md。
只改指定文件里「## 机制说明 / ## Mechanics」之后；保留该锚点本身，可见正文从 ## 效果 开始。
先根据当前 Lua/XML 核验实际行为。
若涉及角色、大型系统、固定术语或复杂机制，再按需读取 ai_context，但不得用它覆盖当前实现。
featured 候选页完成后再对照 REVIEW_RUBRIC.md。
目标：wiki/docs/items/<slug>.md
```

项目内技能：`.cursor/skills/qing-wiki-mechanics/SKILL.md`。

### 原版实体引用

原版内容统一使用带类型的数字 ID：`{{Collectible:619}}`、`{{Trinket:1}}`、`{{Card:1}}`、`{{Pill:1}}`。构建时由 `generated/vanilla-entities.json` 同时解析正式名称与图标。禁止让 AI 临时翻译原版名称、按中文名查找实体或手写图片路径。

## 3. 图标与公式

见 [markup.md](./markup.md) 与 [/icons](/icons)。条目图由 `export_wiki_data.py` 采集；原版/EID 小图标用 `export_wiki_icons.py`。不要手改 `wiki/docs/public/generated/`。

### 游戏截图

- 截图统一放在 `wiki/docs/public/images/screenshots/<页面类型>/<slug>/`，例如 `screenshots/items/book-of-thoth/`、`screenshots/systems/blueprint-fleet/`。角色使用 `characters`，挑战使用 `challenges`。
- 文件名描述画面用途，例如 `overview.jpg`、`build.jpg`、`formation.jpg`、`combat.jpg`；禁止把 `01.jpg`、`new.png` 等无语义文件长期留在 `wiki/` 根目录。
- 中英文页面共用同一份截图，分别维护玩家可读的 `alt` 与 `caption`。
- 正文统一使用 `<WikiScreenshot src="/images/screenshots/...">`。组件会自动适配 GitHub Pages 的仓库 base path；不要在 Markdown 中手写部署仓库名，也不要直接用 HTML `<img>` 绕过组件。
- 新截图接入后必须用生产 base 执行一次构建，确认公开路径不是错误的站点根路径：`$env:GITHUB_PAGES_BASE='/-TBOI-Glaze_Ceremony-Wiki-/'; npm --prefix wiki run docs:build`。
