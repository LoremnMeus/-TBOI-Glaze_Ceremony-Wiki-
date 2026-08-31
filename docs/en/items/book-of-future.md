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

**Book of Future spends items that might have appeared later in exchange for one choice right now.**

On use, it keeps pulling from the **item pool that matches the current room** until the combined quality of those pulls reaches **50**. Drawn items appear as colored afterimages orbiting the player; then **4** mutually exclusive candidates spawn nearby.

Those candidates also come from the **same current-room pool**, rolled fresh by the engine—they are **not** the specific items just drawn as afterimages. Taking one removes the rest.

These pulls **actually consume** the corresponding pool. Book of Future therefore changes not only what appears immediately, but also what that pool can still offer later.

## Future escape

If a single use reaches the **50**-pull cap without reaching **50** total quality, Book of Future escapes the current run and saves its accumulated quality.

The next time you obtain Book of Future, drawing resumes from that saved progress; the progress clears only after you successfully complete the 4-choice. That progress persists across runs as a [permanent](/en/systems/permanent-effects) profile edit. Escape still consumes the full **8** charge for that use; drawn pool entries are not refunded. When you find the book again, the in-game description shows how much quality remains.

## Notes

- **The room you use it in decides both which pool pays the cost and which pool supplies the 4-choice candidates.** Treasure, Shop, Devil, Angel, and other room types each bind cost and reward to that room's pool.
- Drawn items are shown only as afterimages; they are not part of the selection.
- A single use attempts at most **50** pulls; it usually stops earlier once total quality reaches 50.

## Tips

- **Where you open the book sets both the cost and the reward.** If you still need a rare pool later, do not burn it for an immediate 4-choice; a pool you no longer value is a better place to pay.
- The fewer floors remain in a run, the fewer later routes can be affected by pool contents drawn early.

## Special interactions

### {{Collectible:356}}

The Car Battery extra proc does not draw another batch worth 50 quality. It adds **2** more candidates to the same selection.

This usually turns a 4-choice into a 6-choice while the pool draw still happens only once.

### {{Collectible:584}}

On use, one randomly chosen drawn item spawns as its matching item wisp.

### {{Collectible:34}}

Adds **2** candidates from the Devil Room item pool to the selection. They belong to the same choice group; picking any one removes the rest.

### {{Seija}}

Only **1** candidate spawns instead of a 4-choice.

## Trivia

One design prototype for Book of Future is Yu-Gi-Oh!'s *Pot of Greed and Avarice*, which banishes 10 cards from the top of the deck face-down to draw 2—trading a large chunk of future resources for an immediate pick. Book of Future adapts that idea to Isaac item pools: remove items that have not appeared yet, and gain a multi-choice reward now.

If a use fails to finish writing enough "future," the book escapes with its partial progress until you meet it again—a better fit for overdrawing the future than a flat "nothing happens" failure.

<details>
<summary>Technical details</summary>

- Target total quality: **50**; maximum pulls per use: **50** items.
- Both the "future" draws and the 4-choice candidates bind to the current room's item pool and consume it normally.
- The 4-choice pedestals are assigned fresh IDs from that pool by the engine—not the afterimage items that were pulled away.
- Afterimage color follows item quality.
- Normal use spawns **4** mutually exclusive candidates; taking one removes the rest.
- Car Battery only adds 2 candidates to that group; it does not repeat the pool draw.
- Book of Belial adds 2 Devil Room pool candidates to the same group.
- Escape progress keeps accumulated quality across runs and clears after a successful 4-choice. On escape the book is removed; the next pickup resumes from saved progress.

</details>
