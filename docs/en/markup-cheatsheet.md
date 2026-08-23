# Markup cheatsheet

Copy from the fences; the live render follows each block. Icon wall: [icons](/en/icons). Spec: [markup](/en/markup).

Local `npm --prefix wiki run docs:dev` adds an **Edit mechanics** dock on entry pages (source / render / split, categorized icon insert). Production builds do not include it.

## Mechanics template

````md
### Effect

{{Damage}} What it changes.

### Triggers and cost

When it fires and what it costs.

### Numbers

- {{Tears}} tears: number or `$x$`
- {{Luck}} luck thresholds

### Synergies

With {{Item:gospel}}...

### Notes

{{Warning}} Irreversible or easy-to-miss points.

### Version

What changed.
````

### Effect

{{Damage}} What it changes.

### Triggers and cost

When it fires and what it costs.

### Numbers

- {{Tears}} tears: number or `$x$`
- {{Luck}} luck thresholds

### Synergies

With {{Item:gospel}}...

### Notes

{{Warning}} Irreversible or easy-to-miss points.

### Version

What changed.

## Common icons

Stats `{{Damage}}` `{{Tears}}` `{{Speed}}`. Hearts `{{SoulHeart}}`. Rooms `{{TreasureRoom}}`. Arrows `{{ArrowUp}}` `{{ArrowDown}}` (or a leading `↑` / `↓`). Qing entries `{{Item:gospel}}` `{{Card:0-the-fool}}` `{{Challenge:cookie-clicker}}` `{{Seija}}`.

Live: {{Damage}} {{Tears}} {{SoulHeart}} {{Battery}} {{Warning}} {{ArrowUp}} {{Quality3}} {{Item:gospel}} {{Seija}}

Pickup `Desc` belongs in the header metadata, not a separate section.
