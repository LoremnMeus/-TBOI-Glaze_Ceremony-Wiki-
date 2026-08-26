---
title: Book of Future
description: "Rewrite what has yet to happen"
slug: book-of-future
kind: collectible
internalKey: Book_of_Future
status: reviewed
---
<p class="wiki-search-index" v-pre>未来之书 Book of Future Book_of_Future book-of-future Book of Future 未来写入，现在删改 Rewrite what has yet to happen 从当前房间道具池中抽走道具，直到总品质达到50 生成一个四选一道具 Draws from the current room&#x27;s item pool until total quality reaches 50 Spawns a 4-choice item selection</p>

<PublicEntry slug="book-of-future" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Book of Future draws a batch of "future items" from the current room's item pool and trades them for a 4-choice selection right now.**

On use, it keeps pulling from the **item pool that matches the current room** until the combined quality of those pulls reaches **50**. Drawn items appear as colored afterimages orbiting the player; then **4** mutually exclusive collectibles spawn nearby. Taking one removes the rest.

These pulls **actually consume** the corresponding pool. Book of Future therefore changes not only what you get immediately, but also what that pool can still offer later.

## Notes

- **The room you use it in decides which pool pays the cost.** Treasure, Shop, Devil, Angel, and other room types each commit a different pool.
- Drawn items are shown only as afterimages; they are not part of the 4-choice selection, which is generated separately.
- A single use attempts at most **50** pulls. It usually stops earlier once total quality reaches 50.
- **Escape:** If 50 pulls are reached without reaching 50 total quality, Book of Future vanishes from the current run but keeps its accumulated quality ([permanent](/en/systems/permanent-effects) profile progress). If you obtain it again in a later run, the next use continues from that saved progress until the future is completed and the 4-choice spawns.
- Escape still consumes the full **8** charge for that use; drawn pool entries are not refunded. When you find the book again, the in-game description shows how much quality remains.

## Special interactions

### {{Collectible:356}}

The Car Battery extra proc does not draw another batch worth 50 quality. It adds **2** more candidates to the same selection.

This usually turns a 4-choice into a 6-choice while the pool draw still happens only once.

### {{Collectible:584}}

On use, one randomly chosen drawn item spawns as its matching item wisp.

### {{Collectible:34}}

Adds **2** candidates from the Devil Room item pool to the selection. They belong to the same choice group; picking any one removes the rest.

### {{Seija}} Seija

Only **1** candidate spawns instead of a 4-choice.

## Tips

- **Decide which pool you are willing to sacrifice before choosing where to open the book.** If you still care about a rare pool's future contents, do not burn it for a immediate 4-choice; conversely, a pool you no longer value is a good way to pay the cost.
- Using Book of Future earlier removes more future options from your route; near the end of a run, the long-term cost of pre-consuming a pool is usually smaller.
- If a prior run ended in escape, the next copy you find may need only a small quality top-up to finish—but the book does not carry over for free; you must find it again.

## Trivia

Book of Future once used a different implementation that directly rewrote pool futures (`Item_Book_of_Future_post.lua` in the repo, no longer loaded). After Isaac updates made direct pool manipulation unsafe and crash-prone, the item was permanently reworked to consume the current room's pool through normal draw calls, then grant a 4-choice selection.

<details>
<summary>Technical details</summary>

- Target total quality: **50**.
- Maximum pulls per use: **50** items.
- Each pull uses the current room's pool (`GetPoolForRoom`) with `decrease=true`.
- Afterimage color follows item quality.
- Normal use spawns **4** pickups sharing one `OptionsPickupIndex`.
- Car Battery only adds 2 candidates to that group; it does not repeat the pool draw.
- Book of Belial adds 2 Devil Room pool (pool 3) candidates to the same group.
- **Escape progress** persists across runs in `Book_of_Future_progress` (accumulated quality; cleared after a successful 4-choice). On failure the book is removed from the player; the next pickup resumes from saved progress instead of zero.

</details>
