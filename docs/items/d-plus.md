---
title: D++
description: "缝合致死"
slug: d-plus
kind: collectible
internalKey: D_Plus
status: reviewed
---
<p class="wiki-search-index" v-pre>D++ D++ D_Plus d-plus D Plus 缝合致死 Stitching to death 至少1格充能即可使用，并消耗全部充能 消耗几格充能，就将骰子编号向上推进几格 到达新编号后，同时触发对应的骰子效果 D1始终触发 Usable with at least 1 charge; spends all charges Advances the die number by the charges spent On the new number, triggers every matching die at once D1 always fires</p>

<PublicEntry slug="d-plus" lang="zh" />

## 机制说明


<!-- 人工正文：生成器不会覆盖本文件。 -->

## 效果

**D++ 会根据使用时消耗的充能推进当前骰子编号，再同时触发与新编号匹配的骰子效果。**

- {{Battery}} 最大 **6 格充能**；至少有 **1 格**即可使用，并会一次性消耗当前全部充能。
- 消耗几格充能，当前骰子编号就增加几。
- 到达新编号后，新编号能被哪个骰子的编号整除，就会同时触发哪个骰子。
- {{Collectible:476}} **D1 始终触发。**

### 会触发哪些骰子

| 新编号满足 | 触发 |
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

- 每局开始时，骰子编号从 **0** 开始。
- 不需要另外选择消耗多少充能；使用时会消耗当前已有的全部充能。

## 规划示例

当前骰子编号为 **3** 时：

- 使用 1 格充能，会到达 D4，触发 D1 与 D4；
- 等到 2 格充能再使用，会到达 D5，只触发 D1。

因此可以通过选择使用时机，主动命中或避开特定骰子编号。
