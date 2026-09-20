---
title: Control Hub
description: Zeiz's administrator, Folly, and Proposal system
status: featured
---

# Control Hub

The **Control Hub** is {{Character:zeiz}}'s private room for appointing administrators. Each administrator’s **Folly** continuously rewrites specific rules for the rest of the run.

> Appoint an administrator → Folly takes effect → actions build Interest → Proposal ready

## Administrators

Whenever a new appointment is needed, the system randomly picks up to three candidates from administrators who are not yet appointed and are allowed to appear as candidates.

Appointed administrators stay on the run list and no longer enter ordinary candidate draws. Follies from multiple appointed administrators can be active at once.

## Folly

A **Folly** is not a buff or debuff the administrator designed on purpose—it is a one-sided explanation they believe is true. After appointment, that explanation becomes an actual rule.

For example, the currently implemented Cain links keys to free resources: when Zeiz’s side holds at least {{Key}} 3 keys, some eligible free drops have a 40% chance to become locked, and taking them costs 1 more key.

## Interest

Each administrator watches different kinds of events. Related events build **Interest**, meaning the administrator thinks the world is proving their judgment. Repeating the same kind of event in one room halves the gain each time, so you cannot fill Interest by spamming one action forever.

| Interest | State |
| ---: | --- |
| 0–2 | Normal |
| 3–4 | Interested |
| 5 | Proposal ready |

Each administrator can gain at most 8 Interest from events per floor. Once Proposal-ready, Interest no longer grows from ordinary events until that Proposal state is handled.

## Proposal

At 5 Interest, the administrator enters Proposal-ready state and stops gaining Interest from ordinary events. A Proposal means they try to push their Folly further into other rules. In the current version, Proposal decisions are not yet open to the player.

## Meta-administrators

A **meta-administrator** is a special administrator whose Folly targets administrators, Follies, or the Control Hub itself—not a single game resource. Meta-administrators never appear in ordinary candidate pools; how to appoint them is not open yet.

Ordinary candidates include Cain, the Shopkeeper, ???, Bethany, and Eden. Only administrators whose pages show a concrete Folly provide matching rule effects.

## Related

- {{Character:zeiz}} — the character who uses the Control Hub
