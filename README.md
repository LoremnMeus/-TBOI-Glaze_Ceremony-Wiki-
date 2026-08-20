# Glaze Ceremony Wiki

VitePress 站点，源码放在私有开发仓库的 `wiki/`。公开 Wiki 仓库只接收同步后的站点源码，不含 `codex_work` 或模组运行时。

## 在哪里改

私有仓库是唯一源：

- 玩法正文：`wiki/docs/**/*.md`（英文在 `wiki/docs/en/`）
- 名称/slug/是否公开：`public_metadata/entries/*.json`，然后跑 `export_wiki_data.py`
- 图标素材：`wiki/docs/public/icons/`（用 `export_wiki_icons.py` 从原版/EID 拷贝）
- 不要手改 `wiki/docs/public/generated/`

详细编辑位点见 [编辑说明](docs/editing.md)。

## 本地预览

双击 `html/open_wiki_preview.cmd`，或在模组仓库根目录：

```text
python scripts/publication/export_wiki_data.py
npm --prefix wiki install
npm --prefix wiki run docs:dev
```

然后打开 `http://localhost:5173/`。不需要打 Release 包，也不需要 push。

进入后黑屏：`http://localhost:5173/troubleshooting/black-screen`

图标清单：`http://localhost:5173/icons`
