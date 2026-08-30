---
title: D++
description: "缝合致死"
slug: d-plus
kind: collectible
internalKey: D_Plus
status: reviewed
---
<p class="wiki-search-index" v-pre>D++ D++ D_Plus d-plus D Plus 缝合致死 Stitching to death 拥有至少1格充能时即可使用，并消耗当前全部充能 D的数字增加所消耗的充能数 随后触发编号能整除当前D的所有骰子效果 D1始终触发，主动槽会预览本次结果 Usable with at least 1 charge; spends all current charges Increases D by the charges spent Then triggers every listed die whose number divides the new D D1 always fires; the active slot previews the result</p>

<PublicEntry slug="d-plus" lang="zh" />

## 机制说明


<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**D++ 把充能当作数字步长：攒几格再使用，D 就向前增加几格；落到新数字后，触发该数字拥有的全部骰子因数。**

- {{Battery}} 最大 **6** 格充能；只要当前至少 **1** 格即可使用，并一次性消耗当前全部充能
- 使用后：`新 D = 旧 D + 本次消耗的充能`
- 先推进 D，再按新 D 判定因数并同时触发对应骰子
- {{Collectible476}} **D1 始终触发**（1 能整除任何正整数），作为固定基础骰子
- 主动槽会预览「当前 D + 当前充能 → 使用后 D」，并显示本次会触发的骰子图标

### 如何增加 D

| 当前充能 | D 增加 |
| ---: | --: |
| 1 | +1 |
| 2 | +2 |
| 3 | +3 |
| 4 | +4 |
| 5 | +5 |
| 6 | +6 |

### 哪些骰子会触发

除 D1 外，当新 D 能被下列编号整除时追加触发：

| 条件 | 触发 |
| --- | --- |
| 4 的倍数 | {{Collectible284}} D4 |
| 6 的倍数 | {{Collectible105}} D6 |
| 7 的倍数 | {{Collectible437}} D7 |
| 8 的倍数 | {{Collectible406}} D8 |
| 10 的倍数 | {{Collectible285}} D10 |
| 12 的倍数 | {{Collectible386}} D12 |
| 20 的倍数 | {{Collectible166}} D20 |
| 100 的倍数 | {{Collectible283}} D100 |

多个条件可同时满足。例如落到 **D12** 时触发 D1、D4、D6 与 D12。

### 预览示例

假设当前显示 **D10**，主动槽有 **2** 格充能：使用后会变成 **D12**，并预览触发 D1、D4、D6、D12。若改等 **4** 格再用，则落到 **D14**，只触发 D1 与 D7。

## 注意

- 开局 D 从 **0** 开始；第一次用 1–6 格充能会分别落到 D1–D6
- 不需要额外选消耗几格的菜单：想要 +N，就在恰好 N 格充能时使用

## 使用技巧

不想触发 D4 时，可以主动跳数。例如当前为 **D3**：1 格会落到 D4（D1+D4），等 **2** 格再用不落到倍数 4 的 D5，就只有 D1。

主动槽预览与实际触发一致，优先看图标再决定是否继续攒充能。
