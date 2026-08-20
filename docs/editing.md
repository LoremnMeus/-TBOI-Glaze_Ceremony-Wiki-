# 给人和 AI 的编辑位点

私有开发仓库是唯一源。不要在公开 Wiki 仓库里手改后再指望同步回来。

本地预览：双击 `html/open_wiki_preview.cmd`，或仓库根目录：

```text
python scripts/publication/export_wiki_data.py
npm --prefix wiki install
npm --prefix wiki run docs:dev
```

浏览器打开 `http://localhost:5173/`。

## 1. 自动数据（不要手改生成文件）

源数据在私有仓库：

- `public_metadata/entries/items.json`
- `public_metadata/entries/trinkets.json`
- `public_metadata/entries/cards.json`
- `public_metadata/entries/characters.json`

改名称、slug、图标路径、`wiki.enabled`、aliases。然后运行：

```text
python scripts/publication/export_wiki_data.py
```

它会更新 `wiki/docs/public/generated/`，并**只在 Markdown 不存在时**创建 stub。已有 `.md` 永远不会被覆盖。

不要手改 `wiki/docs/public/generated/` 或 `wiki/docs/generated/entries.json`。

## 2. 人工机制说明（改 Markdown）

- 中文：`wiki/docs/items/<slug>.md`、`wiki/docs/characters/<slug>.md`
- 英文：`wiki/docs/en/items/<slug>.md`、`wiki/docs/en/characters/<slug>.md`

组件 `<PublicEntry>` 负责 ID、图标、名称、Desc/EID 占位和版本。`## 机制说明` 之后才写玩法、联动、Neta、版本历史。

英文页缺正文时保留 `MissingTranslation`，不要把中文长文粘过去充数。

排障类页面没有自动组件，整页都是人工 Markdown：

- 中文：`wiki/docs/troubleshooting/<slug>.md`
- 英文：`wiki/docs/en/troubleshooting/<slug>.md`
- 配图：`wiki/docs/public/images/troubleshooting/`（不要放进 `generated/`）

## 3. 图标与公式

- 正文可写 EID 标记：`{{Damage}}` `{{SoulHeart}}` `{{Collectible1}}`。VitePress 会在编译前换成图标，避免 `{{ }}` 被当成 Vue 插值。
- 公式：行内 `$a^2+b^2$`，独立行 `$$\frac{1}{2}$$`（MathJax）。
- 图标清单页：`/icons`。素材在 `wiki/docs/public/icons/`，目录 JSON 在 `wiki/docs/generated/icon-catalog.json`。
- 从原版/EID 重新拷贝（本机需要 `extracted_resources` 和 EID 模组）：

```text
python scripts/publication/export_wiki_icons.py
```

不要手改 `wiki/docs/public/generated/`。图标 PNG 可以提交；公开 Release ZIP 不含这批 Wiki 素材。

## 4. 版式组件

- `wiki/docs/.vitepress/theme/components/PublicEntry.vue`
- `wiki/docs/.vitepress/theme/components/EntryGrid.vue`
- `wiki/docs/.vitepress/theme/components/MissingTranslation.vue`
- `wiki/docs/.vitepress/theme/components/EidIcon.vue`
- `wiki/docs/.vitepress/theme/components/IconInventory.vue`

侧栏条目在 `wiki/docs/.vitepress/config.ts`。新增公开页后记得补 sidebar。
