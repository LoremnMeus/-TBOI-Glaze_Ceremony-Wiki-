---
title: Book of The Law
description: "Left is Right.Right is Lefted."
slug: book-of-the-law
kind: collectible
internalKey: Book_of_The_Law
status: reviewed
---
<p class="wiki-search-index" v-pre>法之书 Book of The Law Book_of_The_Law book-of-the-law Book of The Law 它为你而扭曲 Left is Right.Right is Lefted. 记录当前房间的道具池 下一件来自其他道具池的道具改从记录池生成 Records this room&#x27;s item pool The next item from a different pool is drawn from the recorded pool instead</p>

<PublicEntry slug="book-of-the-law" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

Using Book of The Law **records the item pool for the current room**.

Later, when the game tries to spawn a collectible from **a different** pool, that roll is replaced with a draw from the recorded pool instead, and one record is consumed.

For example, after using it in a Devil Room and leaving:

> Record the Devil Room pool  
> → Enter a Treasure Room later  
> → The Treasure Room item is drawn from the Devil Room pool instead

Book of The Law only changes **which pool the spawned item comes from**. It does not turn the destination room into the recorded room type.

## Notes

- If the next spawn already comes from the **recorded pool**, Book of The Law does nothing and the record is not consumed.
- Records have no floor limit. Unused records carry to later rooms and floors.
- You can use Book of The Law multiple times to queue records; they resolve in the order they were saved.
- A record is removed only when it actually replaces one spawn from a different pool.

So “the next item” is not strictly the next pickup you see—it is the **next collectible that would be rolled from a different pool**.

## Tips

Book of The Law works best for carrying **hard-to-revisit premium pools** elsewhere.

Use it in a Devil or Angel Room, then redirect Treasure Rooms, shops, and other locations toward that pool.

If the current room's pool is not worth saving, there is little reason to record it early. Its value comes mainly from **where you use it**, not from firing it the moment it charges.

Because same-pool spawns do not waste records, you do not need to rush out of a recorded room type. The first later spawn from **another pool** is what consumes the record.

## Special interactions

### {{Collectible:356}}

Car Battery makes one use record the current room's pool **twice**.

Both entries queue in order, so the next two cross-pool spawns can be redirected to that pool.

### {{Collectible:34}}

Using Book of The Law in a Devil Room records the Devil Room pool **3 times** per use instead of 1.

The next three cross-pool spawns can therefore be redirected to the Devil Room pool.

### {{Collectible:584}}

When Book of The Law's wisp dies, it triggers an extra use of Book of The Law in **the room where the wisp died**.

That records the pool for that room, not necessarily the room where you originally used the book.

<details>
<summary>Technical details</summary>

- On use, the pool comes from `GetPoolForRoom` for the current room.
- Unused records are stored FIFO.
- Replacement runs only when the original spawn pool differs from the queued record.
- A record is removed only on pool-consuming requests (`decrease = true`); preview rolls that do not consume the pool leave records intact.
- Records clear on a fresh run; they persist on continue.
- Book of Belial adds 2 extra Devil Room entries per use when recording pool 3, for 3 total per use.
- Book of Virtues wisp death simulates an extra Book of The Law use.
- Car Battery and Book of Belial stack their extra entries (e.g. 6 Devil Room records from one Devil Room use with both).

</details>
