# Boss Golden Page Standard

Boss 页面回答：**玩家如何遭遇并战胜这个 Boss？**

Story 回答「为什么发生」；Character 回答「这个人是谁」。三者可互链，**禁止互相替代或合并成同一 URL**。

## 事实源

| 问题 | 事实源 |
| --- | --- |
| 正式 Boss 有哪些？ | `boss_defs` / `boss_registry` |
| 属于哪个故事？ | `story_defs.related.bosses`（Story → Boss 为 canonical；反向由 exporter 推导） |
| 这个人是谁？ | `character_defs` / `character_registry` |
| 事件怎么跑？ | Thread runtime（不写进 Boss 攻略主体） |

**禁止**仅凭 `bosses/` 目录、文件名含 `Boss`、或 Thread 名推断 Wiki 实体类型。组件（刀、棋子、卫兵等）默认不单独成页。

## 固定结构（中文）

页面可见正文建议从下列章节选用；空章节不写。

1. **摘要** — 名称、遭遇类型、区域、是否剧情/隐藏、相关故事短链
2. **遭遇方式** — 何处、条件、前置章节/事件、是否随机/一次性/可重复
3. **核心机制** — 本场最重要规则（优先于逐招）
4. **阶段** — 仅当代码确有阶段；随机攻击池不要硬编 Phase
5. **攻击** — 可观察现象、危险点、玩家应对（禁止 Lua state/callback 说明）
6. **辅助实体** — 子段落；默认不为 helper 建独立 Boss 页
7. **击败后** — 掉落、Story 节点/Token、解锁、门/场景、下一节点
8. **战斗提示** — 可执行提示；禁止「保持移动、注意弹幕」式空话
9. **故事关联** — 短摘要 + Story 链接；禁止完整复述起因/对白/章节真相
10. **相关** — 由 registry exporter 生成卡片，禁止手写散落 related 字段

## Story 页不得复述 Boss 攻略

Story 写到 Boss 时允许：遭遇 + 击败后剧情结果 + `→ Boss：…` 链接。

禁止：HP、招式表、阶段弹幕、详细打法。

## Character 页（若独立）

简介 → 身份 → 外观/称呼 → 性格 → 人物关系 → 剧情经历（按章节）→ Boss 形态 → 相关角色/道具 → Trivia。

不要把 Story 全文复制进 Character；人物视角概括即可。

## 成熟度

本轮五页（Floraine / Zennith / Bum Emperor / Qing / Glaze Prince）先以 `status: stub` 落盘，**不批量公开发布**。完整攻略核验后再升 `drafted` / `reviewed`。

## URL

稳定 slug：`/bosses/floraine`、`/bosses/qing`、`/bosses/glaze-prince` 等。
禁止按剧情序号命名（如 `chapter1-boss-01`）。
