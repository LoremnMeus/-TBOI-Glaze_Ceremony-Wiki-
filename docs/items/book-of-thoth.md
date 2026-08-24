---
title: 透特之书
description: "命运只是尚未整理的书页"
slug: book-of-thoth
kind: collectible
internalKey: Book_of_Thoth
status: featured
---
<p class="wiki-search-index" v-pre>透特之书 Book of Thoth Book_of_Thoth book-of-thoth Book of Thoth 命运只是尚未整理的书页 Fate is merely a book yet to be put in order. 记录获得过的透特牌面 登记新牌面+1启示，使用透特牌+2启示，最多12格 消耗3格启示，选择至多3张记录牌面进行占卜 进入新战斗房时随机发动一张；每个牌面每层限一次 Records obtained Thoth faces Registering a new face +1 Revelation, using a Thoth card +2, up to 12 Spend 3 Revelation to read up to 3 recorded faces Entering a new combat room plays one at random; each face once per floor</p>

<PublicEntry slug="book-of-thoth" lang="zh" />

## 机制说明

<!-- 人工正文：生成器不会覆盖本文件。把玩法、联动、Neta、版本历史写在这里。 -->

### 效果

- 持有 {{Item:book-of-thoth}} 时，首次获得某个 {{System:thoth-cards}} 牌面会将其登记进卡册。
  - 正位和逆位分别登记。
  - 登记新牌面获得 1 点启示。
- 玩家亲自使用透特牌时获得 2 点启示。
- 启示最多储存 12 点，不会通过清理房间或普通电池恢复。
- 使用透特之书可以消耗 3 点启示，从本层仍可使用的已登记牌面中选择 1～3 张组成牌阵。
- 进入新的未清理战斗房时，随机发动牌阵中的一张牌。
  - 发动后的牌从当前牌阵中移除。
  - 同一牌面每层只能通过透特之书成功发动一次。

首次获得透特之书时拥有 3 点启示。

| 行为 | 启示 |
| --- | ---: |
| 首次登记一个牌面 | +1 |
| 玩家亲自使用一张透特牌 | +2 |
| 组成一次牌阵 | −3 |
| 上限 | 12 |

### 注意

- 已登记牌面不会因对应卡牌被使用或丢弃而消失。
- 选择 1～3 张牌均消耗 3 点启示。
- 当前牌阵还没有全部发动时，可以查看卡册，但不能用新的牌阵覆盖它。
- 在未清理的战斗房中组成牌阵时，不会立即触发当前房间。
- {{BossRoom}} Boss 房、小 Boss 房、挑战房和 Boss Rush 均可推进牌阵。
- 未完成的牌阵可以跨层保留；进入新楼层后，本层的牌面使用限制与房间触发记录会重新计算。
- 由透特之书免费发动的牌不会再次提供启示。
- 持有本书时，会提高尚未登记透特牌面的出现机会，并使普通塔罗牌有机会替换为透特牌。具体生成规则见 {{System:thoth-cards}}。

### 使用技巧

- 只选择 1 张牌时，可以确定下一个战斗房发动的牌。
- 不要求发动顺序时，一次选择 3 张可以用相同的 3 点启示获得最多发动次数。
