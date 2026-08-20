# Black screen after launch

On some GPU/driver combinations the game goes black after this mod's shaders load. This is a hardware/driver issue, not a guaranteed save wipe.

This page replaces the old Word document.

## 1. Switch to the passthrough shader

1. Open this mod's `content` folder (often named `Qing_remaster` after install).
2. Rename `Replace_for_shaders.xml` to `shaders.xml`, replacing the original `shaders.xml`.
3. Show file extensions in Windows. Do **not** end up with `shaders.xml.xml`.

Some visual effects will be reduced; most gameplay still works.

Before (both shader files present):

![content folder before the rename](/images/troubleshooting/shaders-before.png)

After (only `shaders.xml` remains):

![content folder after the rename](/images/troubleshooting/shaders-after.png)

The screenshots come from the older `Qing` folder. Use the folder you actually installed.

## 2. If the run still cannot start: delete mod saves

A black-screen session may have corrupted this mod's save data.

1. Open `data/qing_re` under the game install directory (legacy Glaze Ceremony used `data/qing`).
2. Delete the save files there and let the mod recreate them.

![mod save folder](/images/troubleshooting/save-folder.png)

The screenshot shows the old `data/qing` path. This remaster uses `qing_re` from `metadata.xml`.

## 3. Re-apply after mod updates

Updating the mod restores `shaders.xml`. If the black screen returns, repeat step 1.

If that still fails, contact the author on Steam.
