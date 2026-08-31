---
title: Tomorrow's Creditor
description: "Borrow resources from tomorrow and repay them later Switch contracts with left/right, walk in to confirm Press RT to cancel"
slug: time-beggar
kind: slot
internalKey: Tomorrows_creditor
status: featured
---
<p class="wiki-search-index" v-pre>来日债主 Tomorrow&#x27;s Creditor Tomorrows_creditor time-beggar Tomorrows_creditor 从来日预支资源，再用未来偿还 靠近后左右切换契约，走进确认 按RT取消 Borrow resources from tomorrow and repay them later Switch contracts with left/right, walk in to confirm Press RT to cancel</p>

<PublicEntry slug="time-beggar" lang="en" />

## Mechanics

## Effects

Tomorrow's Creditor lets the run borrow resources now; later matching pickups are seized to repay the debt. Debt starts at signing and persists across rooms and floors until paid.

**Existing inventory is never deducted directly.**

## How to sign

Approach to raise the current contract; the HUD shows “gain now → seize later”.

- Left/right to switch;
- Walk into the creditor to confirm;
- Drop / RT to cancel.

Each beggar offers exactly **3** different random contracts and leaves after one deal.

## Contracts

| Contract | Gain now | Repay later |
| --- | ---: | ---: |
| Tomorrow's Money | +10¢ | 12¢ from future coins |
| Tomorrow's Keys | +3 | 4 from future keys |
| Tomorrow's Bombs | +3 | 4 from future bombs |
| Tomorrow's Life | +2 Soul Hearts | 3 from future red-heart pickups |

## Repayment

Signing immediately scans the room and continues on later natural pickups.

Counted values:

- Coins: 1¢ / Lucky Penny 1 / Double 2 / Nickel 5 / Dime 10;
- Keys: normal 1, charged double 2 (Golden / Charged Keys ignored);
- Bombs: normal 1, double 2 (Golden / Giga / special bombs ignored);
- Hearts: full/scared 1, half 0.5, double 2, blended 1 (soul/black/bone/eternal ignored).

If one pickup's value exceeds remaining debt, the whole pickup is still taken and debt hits zero (excess as interest). Shop items and player-spawned pickups are skipped.

## Appearance

Replaces vanilla beggars on chapters 1 / 2 / 3 at about 12% / 10% / 6%; none from chapter 4 onward. New runs clear debt.
