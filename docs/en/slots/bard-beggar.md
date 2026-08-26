---
title: Bard Beggar
description: "Offer a resource for a blessing on the next floor Switch gifts with left/right, walk in to confirm Press to cancel"
slug: bard-beggar
kind: slot
internalKey: Bard_beggar
status: reviewed
---
<p class="wiki-search-index" v-pre>吟游乞丐 Bard Beggar Bard_beggar bard-beggar Bard_beggar 赠予一份资源，换取下层祝福 靠近后左右切换馈赠，走进确认 按 取消 Offer a resource for a blessing on the next floor Switch gifts with left/right, walk in to confirm Press to cancel</p>

<PublicEntry slug="bard-beggar" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effect

The Bard Beggar takes a gift you can afford and writes it into a **song** that only works on the **next floor**. Paying is immediate; the blessing covers that entire floor and clears on the floor after. You can only take one song per encounter.

You are trading resources on this floor for a **full-floor advantage on the next one**.

| Gift | Song | Next-floor effect |
| --- | --- | --- |
| {{Coin}} 5 coins | **Song of Plenty** | First shop buy refunds 8–12¢, up to what you paid |
| {{Key}} 1 key | **Song of the Road** | Reveals the {{TreasureRoom}} |
| {{Bomb}} 1 bomb | **War Song** | {{Damage}} +1 in the first 3 combat rooms |
| {{Heart}} 1 heart | **Requiem** | Blocks the first hit you take |

## Trading

Near the Bard Beggar, your character lifts the currently selected gift.

- Move left/right to switch gifts;
- Walk into the Bard Beggar to confirm;
- Press Drop / RT to cancel;
- Gifts you cannot afford are omitted from the list.

Resources are spent immediately and the next-floor blessing is locked in. The bard sings and leaves.

## Rule details

### {{Coin}} Song of Plenty

The first shop buy on the next floor refunds 8–12¢, but **not more than you actually paid**.

### {{Bomb}} War Song

The first **three rooms you enter that still have living enemies** grant {{Damage}} +1; boss rooms can count. Leaving a boosted fight spends one charge (three total).

### {{Heart}} Requiem

The first **real hit** on the next floor is fully blocked, regardless of source. Payment spends 1 red heart first, or 1 soul heart if you have no red hearts.

## Tips

For Song of Plenty, save your first shop purchase for something expensive—a cheap item cannot refund more than its price.

War Song charges are spent in boss rooms and other enemy rooms; plan your route if you want all three boosts for specific fights.

## Where it appears

The Bard Beggar can appear on the first visit to certain secret-exit rooms.

After one gift, the bard sings and leaves.

<details>
<summary>Technical details</summary>

- The Bard Beggar uses a fixed four-offer system; legacy random payment logic is not part of current gameplay.
- Only affordable offers appear in the selection list.
- Confirming stores a `pending` blessing.
- Entering the next floor promotes `pending` to `active`.
- Entering the floor after that clears the blessing, so it covers exactly one full floor.
- Song of Plenty rolls 8–12¢ refund; the actual refund is the minimum of that roll and the purchase price.
- War Song checks for living enemies on room entry, not a fixed room type.
- Requiem ignores Fake Damage.
- On first entry to `ROOM_SECRET_EXIT`, current implementation spawns the Bard Beggar about 49% of the time.

</details>
