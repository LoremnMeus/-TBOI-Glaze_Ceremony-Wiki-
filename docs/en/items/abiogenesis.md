---
title: Abiogenesis
description: "Look, it lives on its own"
slug: abiogenesis
kind: collectible
internalKey: Abiogenesis
status: reviewed
---
<p class="wiki-search-index" v-pre>无生源论 Abiogenesis Abiogenesis abiogenesis Abiogenesis 你看，它自己活了 Look, it lives on its own 每次仅消耗1格充能，但额外消耗 各1个 随后观测剩余充能、硬币、钥匙与炸弹 若任一剩余：实验失败，从剩余最多的资源中掉落1个对应掉落物 金钥匙与金炸弹仍视为持有 若四者同时归零：证明无生源论，将其 活化 为无生源论宝宝 Costs 1 charge per use, but also spends 1 each Then observe remaining charge, coins, keys, and bombs If any remain: the experiment fails and spawns 1 pickup of the most remaining resource Golden Key and Golden Bomb still count as holding If all four are 0: prove Abiogenesis, animate it into an Abiogenesis familiar</p>

<PublicEntry slug="abiogenesis" lang="en" />

## Mechanics

<!-- Manual body. The exporter never overwrites this file once it exists. -->

## Effects

**Abiogenesis is an experiment that gradually exhausts charge, coins, keys, and bombs. The experiment succeeds once all four observations reach zero at the same time.**

* Has a maximum of **12** charges and starts with **3** charges when obtained
* Each use spends **1** charge, **1** {{Coin}}, **1** {{Key}}, and **1** {{Bomb}}
* The four remaining resource amounts are observed after payment
* If any resources remain, the experiment fails and returns 1 pickup corresponding to the resource with the greatest remaining amount; ties are chosen randomly
* {{Warning}} Golden Key and Golden Bomb still count as possessing their respective resources
* If all four resources reach zero at once, the experiment succeeds: Abiogenesis is removed, one proof is recorded, and 1 Abiogenesis familiar is created
* Abiogenesis can be obtained and proven again; each successful proof adds another familiar

## Abiogenesis Familiar

The Abiogenesis familiar creates floating launchers based on the resources the player currently possesses and cycles through them while the player attacks.

A launcher does not appear if its corresponding resource is absent. Holding more of a resource strengthens its matching weapon.

### {{Coin}} Coin

Rapidly fires coin tears.

* Coin tears are fired rapidly with slight spread
* Hits have a chance to drop a coin
* Holding more coins greatly extends each firing burst; at high amounts, the familiar can sustain coin fire for a long time

### {{Key}} Key

Fires fast key tears.

* Key tears pierce enemies and pass through terrain obstacles
* Holding more keys increases their damage and firing speed, and allows more keys to be fired during each attack
* Each key has a **30%** chance to become a bloody key tear; these behave as real keys and can open chests and locked doors

### {{Bomb}} Bomb

Throws powerful bombs.

* Bombs slightly correct their launch direction toward nearby enemies
* Each bomb deals high damage
* Holding more bombs increases the number thrown simultaneously with each attack
* The bomb launcher fires much less often than the other weapons, but each volley is substantially stronger

### {{Battery}} Charge

Releases several electrical arcs forward.

* Each attack releases multiple arcs at once
* Each arc propagates through several successive segments and can form long multi-stage discharges
* Later segments continue from the end of the previous segment and become increasingly unstable in direction
* Nearby enemies can slightly attract some arcs, but the discharge primarily follows its own propagation path
* More available active-item charge increases both the number of arcs and their damage

## Synergies

### {{Collectible:34}}

Whenever an experiment fails, one currently non-zero resource is randomly excluded.

An excluded resource is no longer paid on later uses and no longer needs to reach zero for the experiment to succeed.

### {{Collectible:584}}

Whenever an experiment fails, spawns a wisp corresponding to the resource with the greatest remaining amount.
