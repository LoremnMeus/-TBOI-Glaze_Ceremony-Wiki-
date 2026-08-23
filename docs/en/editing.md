# Editing hooks for people and agents

The private development repo is the only source. Do not edit the public Wiki repo and expect those edits to sync back.

```text
python -m pip install -r scripts/publication/requirements.txt
python scripts/publication/export_wiki_data.py
python scripts/publication/export_wiki_icons.py
npm --prefix wiki install
npm --prefix wiki run docs:dev
```

Open `http://localhost:5173/en/`. Markup spec: [markup](/en/markup). Icon wall: [icons](/en/icons). Cheatsheet: [cheatsheet](/en/markup-cheatsheet).

`docs:dev` shows a local-only **Edit mechanics** dock on entry pages (source / render / split). Production builds omit it.

Visible entries are registered by `generate_public_metadata.py` (hidden XML rows stay out). Re-run `export_wiki_data.py` after translation or icon changes. Mechanic bodies are never overwritten; the exporter only refreshes frontmatter and the hidden search index.

Write mechanics below `## Mechanics` in `wiki/docs/en/<kind>/<slug>.md`. Example: `wiki/docs/en/items/gospel.md`.

Agent skill: `.cursor/skills/qing-wiki-mechanics/SKILL.md`.
