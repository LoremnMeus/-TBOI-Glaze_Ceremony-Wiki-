---
title: Qing (Boss)
description: Chapter 1 midboss. Same identity as the playable/story character, different knowledge object.
slug: qing
kind: boss
bossId: qing
status: stub
relatedStory: chapter1.qing_midboss
---

## Mechanics

## Summary

- **Kind**: story boss (`story_boss`)
- **Status**: implemented
- **Encounter**: Chapter 1 midboss (Story `chapter1.qing_midboss`)
- **Entity**: Type 996 / Variant 24037 (Boss Qing)

## Encounter

Pending verification: Ending2 / `ending2_display` spawn path, and whether the fight is repeatable.

→ Story: `chapter1.qing_midboss` (post-fight truth in `chapter1.revelation`)

## Core mechanics

Separate Boss Qing’s own AI from knife / flying-blade components (`qing_knife`, etc.). Components are **not** standalone Boss pages.

## Phases / attacks

Pending cross-check against `Boss_Qing.lua`; distinguish story callbacks from combat AI. Do not put implementation details into player-facing guide prose.

## Helper entities

- QingKnife — weapon
- QingHelper / QingHelper2 — helper / phase_entity

## Aftermath

Advances the midboss node and revelation-related flags (authoritative via StoryProgress).

## Combat tips

To be written.

## Story link

Short link only. Character identity is on the Character “Qing” page; the playable character has its own page. Do not retell Prologue / Chapter 1 here.
