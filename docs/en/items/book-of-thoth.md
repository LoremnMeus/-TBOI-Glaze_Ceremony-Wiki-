---
title: Book of Thoth
description: "Fate is merely a book yet to be put in order."
slug: book-of-thoth
kind: collectible
internalKey: Book_of_Thoth
status: featured
---
<p class="wiki-search-index" v-pre>透特之书 Book of Thoth Book_of_Thoth book-of-thoth Book of Thoth 命运只是尚未整理的书页 Fate is merely a book yet to be put in order. 记录获得过的透特牌面 登记新牌面+1启示，使用透特牌+2启示，最多12格 消耗3格启示，选择至多3张记录牌面进行占卜 进入新战斗房时随机发动一张；每个牌面每层限一次 Records obtained Thoth faces Registering a new face +1 Revelation, using a Thoth card +2, up to 12 Spend 3 Revelation to read up to 3 recorded faces Entering a new combat room plays one at random; each face once per floor</p>

<PublicEntry slug="book-of-thoth" lang="en" />

## Mechanics

## Effects

**Book of Thoth is a codex that fills out over the run and turns faces already seen into reusable spells.**

It records Thoth cards encountered during the run. New faces build Revelation, which can be spent to arrange recorded cards into a spread that plays itself across later combat rooms.

<WikiScreenshot src="/images/screenshots/items/book-of-thoth/codex.jpg" :ready="true" alt="The Book of Thoth codex screen" caption="The codex records upright and reversed Thoth faces separately. Faces not yet recorded remain hidden." />

## How to use

### 1. Record faces

While holding the book, acquiring and holding a Thoth card for the first time records that face for the run. Upright and reversed versions are separate entries. Recording does not consume the card, and the entry remains after the card is used or discarded.

::: tip Completing the codex
While the book is held, card-pool rolls favor Thoth faces that have not been recorded yet. Some ordinary tarot rolls may also be replaced with Thoth cards, so the collection naturally expands over a run.
:::

### 2. Gain Revelation

Revelation is the book's reading resource. The first copy of the book, newly recorded faces, and Thoth cards used directly by the player provide it. Room clears and ordinary batteries do not.

### 3. Perform a reading

Using the book opens its own interface. The Codex tab shows recorded faces; the Reading tab lets the player select faces that are still available this floor.

A reading always costs 3 Revelation and may contain 1–3 distinct faces. Choosing fewer cards does not reduce the cost, and selection order does not determine play order.

### 4. Resolve the spread

After a spread is formed, entering each new uncleared combat room randomly plays one face that has not resolved yet. Once every face has played, the spread ends and another reading can be made.

The codex can still be browsed while a spread is active, but that spread cannot be replaced. Each face can be played by the book only once per floor.

## Interface

<WikiScreenshot src="/images/screenshots/items/book-of-thoth/reading.jpg" :ready="true" alt="The Book of Thoth reading screen with Revelation and selected cards visible" caption="A reading costs 3 Revelation and can contain up to 3 currently available faces." />

### Codex

- A visible face has been recorded and can be used in future readings.
- `???` or “Unregistered” marks a face that has not entered the codex.
- “Read this floor” marks a face already played by the book this floor.

### Reading and active spread

The Reading tab shows current Revelation, eligible faces, and the current selection. Once a spread begins, the interface and active-item HUD distinguish resolved cards from those still waiting, without revealing the order in which the remaining cards will play.

## Revelation

| Event | Revelation |
| --- | ---: |
| First acquisition of the book | Set to 3 |
| Record a new face for the first time | +1 |
| Use a Thoth card directly | +2 |
| Form a spread | −3 |
| Maximum | 12 |

Cards played for free by the spread do not generate Revelation. Losing and later reacquiring the book preserves the codex and its Revelation instead of granting the initial 3 again.

## Spread rules

- A reading always costs 3 Revelation.
- The normal capacity is 3 distinct available faces.
- Each new uncleared combat room randomly resolves one remaining face.
- A face can resolve through the book once per floor; upright and reversed count separately.
- A new spread cannot replace one that is still active.
- Unfinished spreads persist between floors.
- Entering a new floor resets per-floor face restrictions and room-trigger records.

## Special interactions

- {{Collectible34}} **Book of Belial:** spread capacity increases from 3 to 4 while the cost remains 3 Revelation. All four faces follow the normal random and once-per-floor rules.
- {{Seija}}: Thoth pickups conceal their identity. Newly recorded faces first enter the codex unrevealed; they still grant Revelation and may be selected, but are revealed together only when the first spread is successfully formed. Leaving the Seija state also reveals pending entries.
- {{Collectible584}} **Book of Virtues:** wisps created by Book of Thoth drop a tarot card when extinguished.
- {{Collectible:706}} **Abyss:** the matching locust may spawn a card on hit.

## Details and edge cases

- Boss, miniboss, challenge and Boss Rush rooms can advance a spread. Secret, curse and sacrifice rooms do not qualify merely because enemies are present.
- Forming a spread after entering an uncleared combat room does not immediately play a card there.
- A room advances the spread only once; leaving and returning cannot play another face.
- Automatic plays still use the normal card-use path, but suppress the announcement animation and do not award Revelation.
- Codexes and Revelation are stored per player. The unseen-face calculation used for card-pool bias considers the records of every current book owner in the run.

## Tips

- **Put only 1 card when timing must be controlled.** A one-card spread forces that face in the next eligible combat room.
- **Fill the spread when order does not matter.** Spreads of 1–3 cards all cost 3 Revelation, so more cards buy more casts for the same price.
- **An unfinished spread can carry to the next floor.** You do not need to hunt combat rooms at the end of a floor just to empty it.

## Trivia

The name refers to Aleister Crowley's [*The Book of Thoth*](https://academic.oup.com/book/58979), first published in 1944 as an account of the Thoth Tarot developed with artist Lady Frieda Harris. [Oxford University Press's study of their partnership](https://academic.oup.com/book/58979/chapter-abstract/494473299) discusses Harris's contribution to the card designs.

The mod turns that relationship between book and deck into a run-long collection: rather than opening a finished reference work, the player gradually writes encountered upright and reversed faces back into the book, then reads from those records.

## Gallery

<WikiScreenshot src="/images/screenshots/items/book-of-thoth/spread-cast.jpg" :ready="true" alt="A Book of Thoth spread revealing and playing a card in combat" caption="Entering a new combat room reveals and plays one unresolved face at random." />

<details>
<summary>Technical details</summary>

### Card-pool bias

Recorded Thoth faces have base weight **1**, while unrecorded faces have weight **3**. These are selection weights, not a fixed 75% appearance chance.

When the card pool first rolls an ordinary tarot card, the replacement chance equals “unrecorded eligible Thoth faces ÷ all eligible Thoth faces”, capped at **50%**. The replacement face is then chosen with the weights above. Cards spawned directly as entities, including cards dropped by the player, do not pass through this pool replacement.

### Data boundary

The codex, Revelation, spread, per-floor plays, and room-trigger records are stored per player. A face is recorded when the card enters a player's card slot, not when a pickup entity appears in the room.

</details>
