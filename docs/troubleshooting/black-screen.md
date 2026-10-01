# 进入后黑屏

个别显卡/驱动组合会在加载本模组着色器后进入黑屏。这是电脑配置问题，不是存档一开始就坏了。

完整图文以本页为准，不需要再打开 Word 文档。

## 1. 换成直通着色器

1. 打开本模组文件夹（安装后常见名为 `Qing_remaster`）里的 `content`。
2. 把 `Replace_for_shaders.xml` **重命名为** `shaders.xml`，覆盖原来的 `shaders.xml`。
3. 替换时请打开 Windows 的文件扩展名显示，**不要**弄成 `shaders.xml.xml`。

这样会关掉部分画面特效，但多数玩法仍可使用。

## 2. 若仍无法正常游玩：清模组存档

黑屏过程中，模组存档可能被写坏。

1. 打开游戏安装目录下的 `data/qing_re`（旧版琉璃可能是 `data/qing`）。
2. 删掉其中的存档文件，让模组重新生成。

本重制版对应 `metadata.xml` 里的 `qing_re`。

## 3. 模组更新后可能要再做一次

每次本模组更新 `shaders.xml` 后，工坊/Release 会把该文件还原。若黑屏再次出现，请重新执行第 1 步。

如果仍无法解决，请在公开仓库的 GitHub Issues 中提交问题，并尽量附上日志和 `.dmp` 文件：

https://github.com/LoremnMeus/-TBOI-Glaze_Ceremony-RGON-/issues
