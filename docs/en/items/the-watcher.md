---
title: The Watcher
description: "Big Brother is watching"
slug: the-watcher
kind: collectible
internalKey: The_Watcher
status: reviewed
---
<p class="wiki-search-index" v-pre>监视 The Watcher The_Watcher the-watcher The Watcher 观察者 observer watcher 老大哥在看着你 Big Brother is watching 移速不会低于1.5 低速时展开逐渐扩大的监视域，锁定自身与附近敌人 锁定完成后爆炸，伤害为 攻击力 ×4 +20 地上的监视也会锁定附近目标并开火 Move speed cannot fall below 1.5 Moving slowly expands a watch zone that locks onto you and nearby enemies Full locks explode for Damage ×4 +20 While on the ground, The Watcher also locks onto nearby targets and fires</p>

<PublicEntry slug="the-watcher" lang="en" />

## Mechanics

## Effects

**Staying slow powers the camera above your head and gradually expands its watch range. It locks onto enemies in range and onto you at the same time.**

The point is not standing perfectly still. You choose between keeping the watch alive and moving soon enough to clear your own lock.

- {{Speed}} Move speed cannot fall below **1.5**.
- While you stay slow, self-lock builds; the deeper it goes, the wider the camera's watch range.
- At most **4** enemies can be locked at once inside that range.
- Closer enemies lock faster; distant targets can still be watched, but take longer.
- Fully locked enemies are bombed for {{Damage}} **Damage ×4 +20**.
- When self-lock completes, the camera fires on you for the same blast damage.

## On the pedestal

While uncollected, The Watcher already works as a neutral device: it shows a watch halo only (no camera), periodically locks the nearest player or enemy in range, fires a weaker blast, then cools down. Picking it up stops that behavior immediately.

It takes no side—you can bait enemies into the blast, but standing too close puts you under the same lock.

## Keeping the watch

A brief burst of speed does not wipe locks immediately.

The camera holds the current watch for a short time first: it will not acquire new enemy locks, but established locks do not vanish at once. Slow down again and you can continue from where you left off.

Only sustained high-speed movement starts draining lock progress quickly. Once it falls low enough, the camera closes and the watch ends.

That means short dodges can keep surveillance alive instead of forcing a full restart every time.

## Watch range

The halo around the camera shows the range where new targets can be acquired.

As self-lock deepens, the halo grows:

- Early on, only nearby enemies can lock;
- The longer you stay slow, the farther targets you can reach;
- At the same time, you yourself get closer to being locked.

Already locked enemies keep a looser retention range, so briefly slipping past the halo edge does not immediately erase their progress.

## Tips

The Watcher rewards converting short safe windows into damage, not total stillness.

Stay slow while enemies are close to finish locks faster. When your own reticle tightens hard, burst away briefly, then settle back into the watch.

If you keep moving too long, unfinished locks fade—so choose between locking more enemies and pulling out in time.

## Notes

- Only a few enemies are actively locked at once; existing locks, bosses, and nearer enemies take priority.
- Enemies that already entered the blast sequence still explode even if the camera closes afterward.
- Bombed enemies cool down before they can lock again.
- {{Seija}}: watch range covers the whole room, and Watcher explosions cannot hurt you.

<details>
<summary>Technical details</summary>

- Minimum move speed: **1.5**
- Slow check: Velocity length **≤ 4**
- Eye-open grace: about **16** frames
- Self-lock threshold: **240**
- Initial watch radius: **110**
- Max watch radius: **195**
- Watch range grows with self-lock progress
- Retention range for existing locks: about **1.35×** current acquisition range
- Active lock cap: **4** enemies
- Normal enemy lock threshold: **75**
- Distance **≤90**: about **1.25×** lock speed
- Distance **90–130**: about **1×**
- Distance **130–165**: about **0.7×**
- Farther valid watch area: about **0.45×**
- Lock freeze after going fast: about **24** frames
- After freeze, self-lock drains **3** per frame
- Enemy cooldown: **150** frames
- Boss cooldown: **210** frames
- Blast damage: player damage **×4 +20**
- Pedestal watch radius: **130**
- Pedestal targets: **1** (nearest)
- Pedestal lock: about **90** frames; flat blast damage **30**; cooldown about **150** frames

</details>
