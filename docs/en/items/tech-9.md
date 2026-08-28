---
title: Tech IX
description: "Skipped, looped, returned."
slug: tech-9
kind: collectible
internalKey: Tech_9
status: featured
---
<p class="wiki-search-index" v-pre>科技IX Tech IX Tech_9 tech-9 Tech 9 被跳过的未来 Skipped, looped, returned. 攻击有概率追加科技激光或科技X激光环 Attacks have a chance to add a Technology laser or Tech X ring</p>

<PublicEntry slug="tech-9" lang="en" />

## Mechanics

<!-- Manual body: the generator will not overwrite this file. -->

## Effects

Tech IX gives every attack a chance to “tack on” one Technology attack. More Luck and more copies make those extras fire more often.

It is not tear-only: other supported attack styles can trigger too. Each trigger adds at most **one** Technology attack—the item tries a Tech X ring and several Technology laser shapes in order, and stops after the first success.

Do not treat the branch chances as independent percentages you can add up. Remember: Luck and stacks raise how often *any* bonus happens.

## Notes

- Do not sum the laser-branch rates into a total fire chance; later branches only run if earlier ones fail.

## Tips

- Stack Luck and extra copies before worrying which laser shape “wins”—they raise the chance that *something* appends.

<details>
<summary>Technical details</summary>

- Ordered short-circuit: Tech X ring → Technology lasers (several LeftEye / OneHit variants).
- Each branch has its own floor rate and Luck weight; extra copies raise the corresponding numerators.
- Non-tear attacks use multi-shot / direction data; damage scaling differs slightly from the tear path.

</details>
