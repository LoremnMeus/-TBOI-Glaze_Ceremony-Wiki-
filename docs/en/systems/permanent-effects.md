---
title: Permanent Effects
description: Cross-run save data written by select items and mechanics
status: reviewed
---

# Permanent Effects

In this mod, **permanent** means an effect stored in the player's **profile save** (`PermanentData`): it survives new runs, character swaps, and quitting the game until gameplay consumes it or you clear it manually.

This is not the same as "permanent for this run only." Examples like Procrastination's floor damage growth or Book of 6 Sin's sin-mini-boss memory live in run state and reset on a fresh run.

## Why this page exists

Permanent effects are easy to miss on the HUD, yet they quietly change later shop prices, item pools, teleport links, or item text. Without knowing they persist across runs, a deliberate trade can feel like it ended when the run did.

## Current entries

| Item | What persists | Wiki |
| --- | --- | --- |
| {{Item:spectralsword}} | Rewritten collectible names and pickup subtitles (bound affixes) | [Spectral Sword](/en/items/spectralsword) |
| {{Item:remaster}} | Established floor teleport channels | [Remaster!](/en/items/remaster) |
| {{Item:colorblindness}} | Next-run pool bans from dislikes | [Colorblindness](/en/items/colorblindness) |
| {{Item:qings-faceted-market-diamond}} | Cross-run shop price and last sale price | [Qing's Faceted Market Diamond](/en/items/qings-faceted-market-diamond) |
| {{Item:book-of-future}} | Accumulated quality after an escape (resume progress) | [Book of Future](/en/items/book-of-future) |

See each item page for triggers, consumption, and edge cases. This page only groups them as **shared profile-level effects**.

## ImGui console

In dev builds, open **RGON ImGui → Debug → Permanent data** to inspect and edit these fields (Spectral rewrites, Remaster channels, Colorblindness bans, Diamond prices, Book of Future progress, etc.). Most sections include restore/clear buttons.

::: info Where to look
- **Settings**: player-facing options (e.g. Thoth card rates) in `ModConfigSettings`, not PermanentData.
- **Debug → Permanent data**: cross-run profile fields; changes here affect future runs.
- **Debug → Debug tools**: run-local layout, HUD offsets, probes—**not** PermanentData.
:::

Release builds omit ImGui. To undo mistaken permanent edits without dev tools, rely on in-game consumption or manual profile recovery.

## "Next run" effects

Some permanent data applies on **the next run start** (e.g. Colorblindness bans) but still lives in PermanentData, not run `elses`. Wiki/EID wording like "next run…" still belongs under this page.

<details>
<summary>Technical details</summary>

- Storage: `Qing_Remaster_scripts/core/savedata.lua` (`PROFILE.PERMANENT_DATA`).
- Run-local state: `save.elses` / `RUN.ELSES`; rebuilt on fresh runs—do not store cross-run progress here.
- ImGui panel: `rgon_imgui_options_holder.lua` → `create_permanent_data_panel`.
- Unloaded legacy scripts such as `Item_Book_of_Future_post.lua` are **not** current permanent-data sources.

</details>
