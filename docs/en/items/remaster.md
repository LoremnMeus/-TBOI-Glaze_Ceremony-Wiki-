---
title: "Remaster!"
description: "Pressing on the bloody blinking button"
slug: remaster
kind: collectible
internalKey: Remaster
status: featured
---
<p class="wiki-search-index" v-pre>重制版！ Remaster! Remaster remaster Remaster! 正在按下闪烁的红色按钮 Pressing on the bloody blinking button 选择一个楼层，打开时空隧道并前往 记录这次穿越，跨越之后的游戏保留 未来有角色进入目标楼层时，强制将其送回你的出发楼层 Choose a floor, open a time rift, and travel there This crossing is saved across future games When a character later enters the target floor, they are forced back to your origin floor</p>

<PublicEntry slug="remaster" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effect

**Remaster!** lets two characters in different timelines swap the journeys ahead of them.

Using it opens a floor selector. After choosing another floor and confirming, a time rift opens in front of the character and sends them there.

That crossing is not over yet.

Suppose character A uses Remaster! on **Basement I** and chooses **Cathedral**:

1. A opens the rift, enters Cathedral, and continues this run from there.
2. The crossing leaves a timeline record: **Cathedral → Basement I**.
3. In some later run, when character B **first enters** Cathedral, that record **triggers automatically**.
4. The rift opens again in front of B and pulls them in.
5. B is sent to the Basement I A originally left, taking over the other end of that journey.
6. At the same time, the A who once crossed here emerges from the other side of the rift, completing a timeline swap that can span two separate runs.

The first use of Remaster! therefore shows only the first half of the event. The other half may not appear until much later, with a completely different character. The route A skipped does not vanish—it may eventually be taken over by a later B.

## Timeline swap

Each crossing leaves a timeline record that persists across runs as a [permanent](/en/systems/permanent-effects) edit. It remains until the matching return completes. When a character later enters the recorded target floor, the return **triggers automatically**—holding Remaster! again is not required.

## Synergies

### {{Collectible584}} Book of Virtues

If you hold Book of Virtues when the crossing starts, your current wisps are saved into the timeline record. The character who later completes the return receives those wisps.

### {{Collectible34}} Book of Belial

If you hold Book of Belial when the crossing starts, key combat stats from the departing character are recorded. After return, that floor inherits the **stronger** value for each tracked stat between the two travelers.

## Choosing a floor

After using the item:

- **Up / Down**: move 1 floor option
- **Left / Right**: move 5 floor options
- **Confirm**: begin the crossing
- **Ctrl**: close the menu

Most major floors and their variants are available, including late-game routes. You cannot choose the floor you are already on—only an error sound plays, and the use is not consumed.

## Notes

- **Future returns are mandatory.** If a qualifying character enters a recorded target floor, the timeline event begins whether or not they hold Remaster!.
- **It swaps future progress, not two saved room states.** Crossings re-enter the target stage with a fresh layout rather than restoring the exact rooms you left behind.
- **A timeline event does not loop forever.** Once its other half completes and no related crossing remains pending, the record ends.
- **Arriving on a crossed floor does not instantly trigger another automatic return.** You must leave that floor before a new timeline event can fire.

## Tips

**Common floors make later triggers more likely.** Leaving a crossing on a route most runs must pass feels very different from leaving one on a rare branch.

## Trivia

**Development self-reference.** The mod's current release is Qing Remaster, and Remaster! was the first item added during the remaster period—the name points at the project version itself and serves as an in-game memorial to that era.

***Curshed in Time* neta.** That game revolves around time travel between development versions; "Remaster" corresponds to its fifth-chapter timeline, and the A/B fate-swap design comes from there. When a future character is pulled into the rift while the character who once used Remaster! emerges from the other side, the player is seeing the same crossing from two moments in time.

<details>
<summary>Technical details</summary>

- Opening the floor selector does not consume charges; confirming a valid target and starting the crossing clears the active charge
- Timeline records are stored in cross-run save data
- On entering a new floor, the game checks whether the current floor matches an armed target record; if so, the return cinematic begins immediately
- Both outbound and return crossings re-enter the corresponding stage and reseed that floor
- To show the two timelines crossing, Remaster! saves the crossing character's appearance and recreates that character during later rift cinematics
- After a return completes, if no related crossing remains pending for that record, it ends and is removed
- Available floors include each chapter's main routes and variants (Basement, Cellar, Burning Basement, Downpour, Dross; Caves, Catacombs, Flooded Caves, Mines, Ashpit; Depths, Necropolis, Dank Depths, Mausoleum, Gehenna; Womb, Utero, Scarred Womb, Corpse), plus ???, Sheol, Cathedral, Dark Room, Chest, Void, and Home

</details>
