---
title: D++
description: "缝合致死"
slug: d-plus
kind: collectible
internalKey: D_Plus
status: reviewed
---
<p class="wiki-search-index" v-pre>D++ D++ D_Plus d-plus D Plus 缝合致死 Stitching to death 至少1格充能即可使用，并消耗当前全部充能 消耗几格充能，就将当前D编号向前推进几格 到达新编号后，触发所有与该编号匹配的骰子效果 D1始终触发 Usable with at least 1 charge; spends all current charges Spending N charges advances the current D number by N On the new number, triggers every matching die effect D1 always fires</p>

<PublicEntry slug="d-plus" lang="zh" />

## 机制说明


<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**「D++」把充能当作步数：使用时消耗几格，就把当前 D 编号向前推进几格，并触发新编号对应的骰子。**

{{Battery}} 最大 **6 格充能**；至少有 **1 格**即可使用，并会一次性消耗当前全部充能。

例如当前为 **D3**：

- 1 格充能时使用 → 前进到 **D4**
- 2 格充能时使用 → 前进到 **D5**
- 6 格充能时使用 → 前进到 **D9**

到达新编号后，会同时触发所有编号能够整除该数字的骰子效果；{{Collectible:476}} **D1 始终触发。**

### 会触发哪些骰子

| 新编号是…… | 触发 |
| --- | --- |
| 4 的倍数 | {{Collectible:284}} D4 |
| 6 的倍数 | {{Collectible:105}} D6 |
| 7 的倍数 | {{Collectible:437}} D7 |
| 8 的倍数 | {{Collectible:406}} D8 |
| 10 的倍数 | {{Collectible:285}} D10 |
| 12 的倍数 | {{Collectible:386}} D12 |
| 20 的倍数 | {{Collectible:166}} D20 |
| 100 的倍数 | {{Collectible:283}} D100 |

多个条件可以同时满足。

例如到达 **D12** 时，会同时触发 D1、D4、D6 和 D12。

## 注意

- 每局开始时，当前骰子编号从 **0** 开始。
- 无法手动选择消耗多少充能；使用时会一次性消耗当前已有的全部充能。
