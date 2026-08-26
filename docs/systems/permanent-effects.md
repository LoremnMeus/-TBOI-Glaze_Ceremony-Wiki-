---
title: 永久
description: 跨局保留、写入存档档案的道具与机制
status: reviewed
---

# 永久

本模组中，**永久修改**指写入玩家**存档档案**（`PermanentData`）、跨局保留的长期状态：新开一局、换角色、甚至退出游戏后仍会保留，直到被游戏机制消费或玩家手动清除。

这与「本局内永久」不同——例如拖延症在本层内累积的攻击加成，或六罪论在本局内记住的七罪小 Boss，都不会写入档案，新开局时会清空。

**永久**是本模组正式机制分类，不是开发内部标签。Wiki 首次提到时，应先说明玩家能观察到的跨局行为，再链接本页；详见 Skill 中的正式机制术语规则。

## 为什么需要单独说明

永久效果往往不会在 HUD 上长期提示，但会 quietly 改变之后的商店价格、道具池、传送渠道或道具说明。若不知道它们跨局存在，很容易把一次有意的取舍误当成「这局结束了就没事」。

## 当前条目

| 道具 | 永久记录什么 | 玩家 Wiki |
| --- | --- | --- |
| {{Item:spectralsword}} | 被改写的道具名称与拾取副标题（词缀绑定） | [妖刀·逢魔](/items/spectralsword) |
| {{Item:remaster}} | 已建立的楼层传送渠道 | [重制版！](/items/remaster) |
| {{Item:colorblindness}} | 下局开局时从道具池移除的「点踩」列表 | [色盲](/items/colorblindness) |
| {{Item:qings-faceted-market-diamond}} | 跨局商店售价与上次成交价 | [小青的切面集市·钻石](/items/qings-faceted-market-diamond) |
| {{Item:book-of-future}} | 逃逸后尚未写完的累计品质（续写进度） | [未来之书](/items/book-of-future) |

各条目的具体触发、消费与边界以对应页面为准；本页只说明**它们属于同一类跨局档案效果**。

## 调试密钥（计划中）

设计中的道具**调试密钥**将开放所有永久修改项的统一编辑权限（包括其自身状态），从而支撑 Q4 级定位——玩家在游戏内管理长期档案，而不只是打开 ImGui。该道具尚未实装；实装前，开发包仍通过 ImGui **调试 → 永久数据** 编辑下列字段。

## ImGui 控制台（开发包）

开发包中可通过 **RGON ImGui → 调试 → 永久数据** 查看并编辑上述档案字段（妖刀改写、Remaster 通道、色盲下局点踩、钻石永久售价、未来之书逃逸进度等），多数分组都提供「恢复默认 / 清空」按钮。

::: info 入口区分
- **设置**：玩家向选项（如托特卡出现率），写入 `ModConfigSettings`，不是 PermanentData。
- **调试 → 永久数据**：跨局档案；改这里才会影响下一局乃至之后所有新开局。
- **调试 → 调试工具**：本局布局、HUD 偏移、概率探针等，**不会**写入 PermanentData。
:::

正式 Release 包不含 ImGui；若需重置误改的永久数据，只能依靠游戏内机制消费，或换用开发包手动恢复。

## 与「下局生效」

部分永久数据在**下一局开局**时才应用（例如色盲的点踩列表），但存储位置仍是 PermanentData，而不是本局 `elses`。Wiki 与 EID 若写「下局…」，通常仍属于本页的「永久」范畴。

<details>
<summary>技术细节</summary>

- 读写入口：`Qing_Remaster_scripts/core/savedata.lua`（`PROFILE.PERMANENT_DATA`）。
- 本局临时状态：`save.elses` / `RUN.ELSES`；新开局（非 continue）会重建，**不得**把跨局进度写进这里。
- ImGui 面板：`rgon_imgui_options_holder.lua` → `create_permanent_data_panel`。
- 旧版 `Item_Book_of_Future_post.lua` 等未加载脚本**不是**现行永久数据来源。

</details>
