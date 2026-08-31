---
title: Golden Slot
description: "Insert coin to win!"
slug: golden-slot
kind: collectible
internalKey: Golden_Slot
status: featured
---
<p class="wiki-search-index" v-pre>黄金抽奖机 Golden Slot Golden_Slot golden-slot Golden Slot 投币赢大奖！ Insert coin to win! 硬币 每次使用消耗1枚金币进行抽奖 可能获得各种黄金奖励 连续落空会逐渐提高中奖机会 极小概率获得超大金箱或金奖杯 Coin Costs 1 coin per use May grant various golden rewards Consecutive misses gradually improve win chance Tiny chance for a mega golden chest or trophy</p>

<PublicEntry slug="golden-slot" lang="en" />

## Mechanics

## Effects

**Each use of Golden Slot spends 1 coin on a draw.**

A miss grants nothing but raises the chance of later draws; a win clears the losing streak and returns the next draw to its minimum chance.

Every reward is golden-themed, with a very small chance to produce a Mega Chest or Trophy.

## How it works

- Each use costs 1 coin.
- The initial win chance is 10%.
- Each consecutive miss adds 4 percentage points to the next draw.
- Win chance is capped at 40%.
- A win clears the streak and resets the next draw to 10%.

The streak persists across rooms and floors for the entire run until a win. As it rises, the active-item icon gains a stronger golden halo and shake.

## Win chance

| Consecutive misses | Next draw |
| ---: | ---: |
| 0 | 10% |
| 1 | 14% |
| 2 | 18% |
| 3 | 22% |
| 4 | 26% |
| 5 | 30% |
| 6 | 34% |
| 7 | 38% |
| 8+ | 40% |

After 8 misses the cap has been reached; further misses do not increase the chance.

## Rewards

After a win, the reward is selected with the following probabilities:

| Reward | Chance after winning |
| --- | ---: |
| Midas fly | 24% |
| Golden coin | 18% |
| Golden troll bomb | 15% |
| Golden heart | 11% |
| Golden pill | 8% |
| Golden battery | 6% |
| Golden bomb | 5% |
| Golden key | 5% |
| Golden trinket | 4% |
| Giant golden pill | 3% |
| Special jackpot | 1% |

## Special jackpot

The special jackpot is 1% of winning rewards. It produces a Mega Chest 95% of the time and a Trophy 5% of the time; within a winning draw, those outcomes therefore represent 0.95% and 0.05%.

| Current win chance | Mega Chest | Trophy |
| ---: | ---: | ---: |
| 10% | 0.095% | 0.005% (about 1 in 20,000) |
| 40% | 0.38% | 0.02% (about 1 in 5,000) |

These are final probabilities for the current use, not cumulative run-wide odds after earlier misses.

## Special interactions

#### {{Collectible:34}}

Each draw costs 2 coins. Win chance is unchanged; after a win, two candidate rewards are rolled and only the higher predefined tier is spawned—better reward quality, not an easier win, and not two rewards.

#### {{Collectible:584}}

A miss creates a golden wisp, up to 3; a new one replaces the oldest. A wisp or its tear has a 12% chance to turn an enemy to gold for 90 frames. Wisps become larger and brighter with the losing streak, and a win removes all of them.

#### {{Collectible:356}}

The extra activation does not perform a second draw or spend another coin.

## Details and edge cases

- With insufficient coins, no draw occurs, no money is spent, and the streak does not change.
- In multiplayer, every Golden Slot shares the same run-wide losing streak. Any player's miss advances it and any player's win clears it.

<details>
<summary>Technical details</summary>

Book of Belial compares its two candidates with the following tiers. These values rank rewards and are not appearance weights.

| Reward | Tier |
| --- | ---: |
| Midas fly | 10 |
| Golden coin | 20 |
| Golden heart | 30 |
| Golden pill | 40 |
| Golden battery | 50 |
| Golden bomb / Golden key | 60 |
| Golden troll bomb | 70 |
| Giant golden pill | 80 |
| Golden trinket | 90 |
| Special jackpot | 100 |

</details>
