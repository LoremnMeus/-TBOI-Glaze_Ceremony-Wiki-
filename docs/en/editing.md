# Editing hooks for people and agents

The private development repo is the only source. Do not edit the public Wiki repo and expect those edits to sync back.

Local preview: `html/open_wiki_preview.cmd`, or:

```text
python scripts/publication/export_wiki_data.py
npm --prefix wiki install
npm --prefix wiki run docs:dev
```

Open `http://localhost:5173/en/`.

## 1. Automatic data

Edit the private-repo registry, then export:

- `public_metadata/entries/*.json`
- `python scripts/publication/export_wiki_data.py`

The exporter updates `wiki/docs/public/generated/` and creates Markdown stubs only when they do not exist.

Do not hand-edit `entries.json`.

## 2. Manual mechanics

- Chinese: `wiki/docs/items/<slug>.md`
- English: `wiki/docs/en/items/<slug>.md`

`<PublicEntry>` owns names, IDs, icons, and version. Write mechanics below `## Mechanics`.

If English copy is missing, leave `MissingTranslation` in place. Do not paste the Chinese article.

Troubleshooting pages are fully manual Markdown (no auto header component):

- Chinese: `wiki/docs/troubleshooting/<slug>.md`
- English: `wiki/docs/en/troubleshooting/<slug>.md`
- Images: `wiki/docs/public/images/troubleshooting/` (not `generated/`)

## 3. Icons and math

- EID marks in Markdown: `{{Damage}}`, `{{SoulHeart}}`, `{{Collectible1}}`.
- Math: inline `$a^2+b^2$`, display `$$\frac{1}{2}$$`.
- Inventory: `/en/icons`. Refresh copies with `python scripts/publication/export_wiki_icons.py`.
