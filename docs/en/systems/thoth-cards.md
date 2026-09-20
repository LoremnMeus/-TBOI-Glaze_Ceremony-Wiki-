---
title: Thoth Cards
description: A custom card system distinct from ordinary Tarot cards
status: featured
---

# Thoth Cards

**Thoth cards** are Glaze Ceremony’s custom Tarot-style deck. They share the single-use card form with vanilla Tarot, but have their own faces, effects, and related items—they are not another skin for ordinary Tarot.

## Upright and reversed

The same Thoth card can have upright and reversed faces. These are not a pure visual flip: effects and collection progress are independent.

Gaining an upright face does not also register its reverse. In systems that track faces such as {{Item:book-of-thoth}}, the two are counted separately.

## Relation to ordinary Tarot

Thoth cards are their own card family, but some mechanics open acquisition paths between ordinary Tarot and Thoth cards.

While holding {{Item:book-of-thoth}}, ordinary Tarot spawns can be replaced with Thoth cards; the rate scales with how many faces are still unregistered in the book. That replacement is triggered by related mechanics—it is not a fixed drop rate shared by every character.

## Book of Thoth and face collection

{{Item:book-of-thoth}} is currently the system item most tightly tied to Thoth cards. It records faces the player meets, registers upright and reversed separately, and can recall recorded results through **Revelation**.

Card book, Revelation, and spread controls are covered on the Book of Thoth page; this page only explains how it affects Thoth card appearance.

### Bias toward unregistered faces

When the Book of Thoth is held and the system must pick a Thoth card to spawn:

| Face state | Base weight |
| --- | ---: |
| Not yet registered | 3 |
| Already registered | 1 |

Unregistered faces have 3× the base weight of registered ones.

### Ordinary Tarot replacement

With Book of Thoth held, the chance that ordinary Tarot is replaced by a Thoth card equals the share of still-unregistered Thoth faces among all Thoth faces, capped at 50%.

An empty book opens Thoth acquisition more often; as faces fill in, replacement naturally falls. This is a Book of Thoth spawn rule, not a global Thoth drop rate for every player.

## Related

- {{Item:book-of-thoth}} — records and recalls Thoth cards
- [Thoth card catalog](/en/cards/) — individual face effects
