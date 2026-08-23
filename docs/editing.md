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

本地开发服务器（`npm --prefix wiki run docs:dev`）会在条目页底部显示**编辑机制说明**：只有本机可写盘，可切换源码 / 渲染 / 分栏，按类别插入图标。生产构建和公开 Wiki 没有这个面板。不要用它改 `generated/`。

`export_wiki_icons.py` 需要本机 `extracted_resources` 和 EID 模组；CI 只跑 `export_wiki_data.py`。全量条目由 `generate_public_metadata.py` 从 XML 登记（跳过 hidden）；之后新道具再补登记或重跑该脚本。

## 人机协作（完整回路）

1. **登记**：可见条目已在 `public_metadata/entries/*.json`。新内容才需要补 `internalKey` / `slug` / `names` / `images` / `wiki.enabled` / `releaseState=public`。
2. **自动基线**：跑 `export_wiki_data.py`。灌 Desc/EID、拷图标、写搜索用 title。Markdown 的机制正文**永不覆盖**；只更新 frontmatter 和隐藏的搜索索引块。
3. **人工/AI 知识**：改 `wiki/docs/<kind>/<slug>.md` 里 `## 机制说明` **之后**。版式、ID、EID 由 `<PublicEntry>` 负责。标注见 [markup.md](./markup.md)。
4. **状态**：`wiki/docs/generated/page-status.json` 的 `stub` / `drafted`。不要手改 `entries.json`。
5. **发布**：私有仓 commit/push；打 `v*` tag 才同步公开 Wiki。

## 2. 人工机制说明（改 Markdown）

- 中文：`wiki/docs/items|trinkets|cards|characters|challenges/<slug>.md`
- 英文：`wiki/docs/en/...`

例如福音：`wiki/docs/items/gospel.md`，从「待撰写。」开始写。英文缺 EID 时保留 `MissingTranslation`。

排障页没有自动组件，整页都是人工 Markdown：

- 中文：`wiki/docs/troubleshooting/<slug>.md`
- 英文：`wiki/docs/en/troubleshooting/<slug>.md`
- 配图：`wiki/docs/public/images/troubleshooting/`

## 给 AI 的最短指令

```text
请给 Qing Remaster Wiki 写机制说明。
先读 wiki/docs/editing.md 和 wiki/docs/markup.md。
只改指定文件里「## 机制说明」之后；根据 Lua/XML 写，不要编造。
本模组条目用 {{Item:slug}}，状态用 {{Damage}} 等。
目标：wiki/docs/items/<slug>.md
```

项目内技能：`.cursor/skills/qing-wiki-mechanics/SKILL.md`。

## 3. 图标与公式

见 [markup.md](./markup.md) 与 [/icons](/icons)。条目图由 `export_wiki_data.py` 采集；原版/EID 小图标用 `export_wiki_icons.py`。不要手改 `wiki/docs/public/generated/`。
