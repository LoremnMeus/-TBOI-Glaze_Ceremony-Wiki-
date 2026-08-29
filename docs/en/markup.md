# Markup and icons (for people and agents)

Write mechanics below `## Mechanics` on each entry page. This page is the markup spec; the full icon wall is [Icon inventory](/en/icons).

The exporter never overwrites mechanic bodies. Change EID baselines in `translate.lua` and re-export; do not edit `entries.json`.

## Which file

| Locale | Path |
| --- | --- |
| Chinese | `wiki/docs/items\|trinkets\|cards\|characters\|challenges/<slug>.md` |
| English | `wiki/docs/en/...` |

Only edit below `## 机制说明` / `## Mechanics`.

Suggested headings: Effect, Triggers/cost, Numbers, Synergies, Notes, Version.

Do not invent mechanics that are not in Lua/XML. Mark unknowns as "needs verification".

## Confirm implementation first

1. `internalKey` on the page (for example `Gospel`)
2. `content/items.xml` / `pocketitems.xml` / `players.xml`
3. Matching script under `Qing_Remaster_scripts/items|cards|trinkets|players`
4. Current EID in `translate.lua` (already rendered on the page)

## Qing entry icons (wiki-only)

Do not use `{{Collectible72}}` for Gospel; that number is a **vanilla** collectible id. Qing entries use slug or internalKey:

```md
{{Item:gospel}} synergizes with {{Item:blue-print}}.
{{Trinket:pacification-mark}}
{{Card:0-the-fool}}
{{Character:zeis}}
{{Pickup:glaze-heart}}
{{Pickup:glaze-heart-half}}
{{System:thoth-cards}}
```

`{{Wiki:gospel}}` works too.

## EID status icons

Same vocabulary as in-game EID. Put a space after a leading icon: `{{Damage}} +1 damage`.

Common marks: `{{Damage}}` `{{Tears}}` `{{Speed}}` `{{Heart}}` `{{SoulHeart}}` `{{Coin}}` `{{Bomb}}` `{{Warning}}` `{{Timer}}` `{{Quality3}}` `{{ArrowUp}}` `{{Seija}}`. Vanilla items: `{{Collectible1}}`. Full wall: [Icon inventory](/en/icons).

A leading `↑` / `↓` is rendered as `{{ArrowUp}}` / `{{ArrowDown}}`, same as in-game EID.

The EID shorthand `!!!` is rendered as `{{Warning}}`, matching in-game External Item Descriptions.

Color tags `{{ColorGold}}...{{CR}}` currently drop styling in the wiki.

## Math

Inline `$a^2+b^2$`. Display:

$$
\mathrm{DPS} = \mathrm{Damage} \times \mathrm{Tears}
$$
