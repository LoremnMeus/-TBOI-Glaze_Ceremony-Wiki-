---
title: Book of Thoth
description: "Fate is merely a book yet to be put in order."
slug: book-of-thoth
kind: collectible
internalKey: Book_of_Thoth
status: stub
---
<p class="wiki-search-index" v-pre>透特之书 Book of Thoth Book_of_Thoth book-of-thoth Book of Thoth 命运只是尚未整理的书页 Fate is merely a book yet to be put in order. 记录获得过的透特牌面 登记新牌面+1启示，使用透特牌+2启示，最多12格 消耗3格启示，选择至多3张记录牌面进行占卜 进入新战斗房时随机发动一张；每个牌面每层限一次 Records obtained Thoth faces Registering a new face +1 Revelation, using a Thoth card +2, up to 12 Spend 3 Revelation to read up to 3 recorded faces Entering a new combat room plays one at random; each face once per floor</p>

<PublicEntry slug="book-of-thoth" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

### Effect

{{Item:book-of-thoth}} opens a fullscreen codex. Picking up a {{ThothCard}} Thoth card registers that face; upright and reversed are tracked separately.

The book starts with 3 Revelation. Registering a new face grants +1; using a Thoth card yourself grants +2. It is shown as a special 12-bar active charge. Clearing rooms does not refill it, and faces played by the book do not grant Revelation.

Spend 3 Revelation to form a spread of 1–3 registered faces that have not been read this floor. The spread is an unordered set: you choose which faces enter it, not the order they play.

### Triggers and costs

- Opening the book does not spend Revelation, and it can be used before the bar is full.
- Forming a spread always costs 3, whether you pick 1, 2, or 3 faces.
- While any face remains in the spread, the codex can still be opened and browsed, but the spread cannot be replaced.
- Forming a spread in an uncleared combat room does not play a face in that room.
- After that, entering a new uncleared combat room (including {{BossRoom}} boss rooms) plays one unrevealed face at random. Played faces stay in the spread face-up; the others share one generic back, so upright vs reversed cannot be read from the back. Slot order after the shuffle is placement only, not play order.
- Each combat room advances the spread only once. Leaving and returning does not play another face.
- After the book successfully plays a face, that face is marked read for the floor and cannot be chosen again until the next floor. Upright and reversed count separately.
- When every face in the spread has played, the spread clears and you can form another.
- Entering a new floor clears read-this-floor marks and room trigger records. The codex, current Revelation, and any unfinished spread are kept and can continue across floors.

### Numbers

- Revelation cap: 12. First pickup: 3. Registering a new face: +1. Using a Thoth card yourself: +2.
- Form a spread: −3.
- Spread size: 1–3 faces.
- While held, generated Thoth pickups bias toward unregistered faces (weight 3 if unseen, 1 if registered).
- Ordinary tarot cards may be replaced with Thoth cards. The chance scales with how many faces are still unregistered, up to $1/2$.

### Synergies

- {{Collectible34}} Book of Belial: using a Thoth card grants a temporary damage up.
- {{Collectible584}} Book of Virtues: wisps spawn a tarot card when extinguished.
- {{Collectible706}} Abyss: locusts have a chance to spawn a card on hit.
- {{Seija}} Seija nerf: all Thoth cards appear face-down.

### Notes

- A 1-card spread is fully determined but still costs 3 Revelation. A 3-card spread is the most efficient, but you will not know which remaining face plays when you enter a fight. The active-item HUD follows the same slot order, not play order.
- Ordinary batteries do not restore Revelation.
- Read-this-floor is recorded only after a face actually plays. Faces still waiting in the spread are not marked yet.

### Version

Compared with the first version: Revelation is a 12-bar special charge that does not refill on room clear; forming a spread always costs 3 and may use 1–3 faces; the preset order is gone, and remaining faces play at random when entering an uncleared combat room; faces the book plays cannot be chosen again this floor.
