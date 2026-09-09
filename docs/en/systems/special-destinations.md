---
title: Special Destinations
description: Shared rules for destinations outside the normal floor layout
status: reviewed
---

# Special Destinations

Some effects can create entrances to areas outside the floor's normal room layout. These areas are collectively treated as **special destinations**.

The effect that creates the entrance determines when destinations can appear and how many can be generated. Entry restrictions, return routes, and special rewards belong to the destination itself.

## Rare Special Destinations

| Destination | Weight | Rules |
| --- | ---: | --- |
| {{ErrorRoom}} Error Room | 40 | Enters an Error Room |
| {{BossRushRoom}} Boss Rush | 25 | Enters Boss Rush |
| Black Market | 20 | Provides a return route after entering |
| {{MegaSatan}} Mega Satan | 5 | After victory, opens a return route and spawns 1 Devil Room item and 1 Angel Room item |

Weights describe the relative chance of each destination when they are drawn from the same candidate pool. They are not the final chance for that destination to appear. Each individual effect determines when special destinations are enabled and how many destination rolls are made.

## Related Effects

* {{Card:i-the-wizard}}
* {{Card:iv-the-emperor}}
