# 格式参考（可拷贝）

本页给人和本地编辑器对照用。左边抄 Markdown，右边是真实渲染。更完整的图标墙在 [图标清单](/icons)，语法说明在 [标注](/markup)。

本地 `npm --prefix wiki run docs:dev` 时，条目页底部会出现**编辑机制说明**：可切换源码 / 渲染 / 分栏，按类别插入图标，并保存到当前 Markdown。正式站和生产构建没有这个面板。

## 机制说明模板

````md
### 效果

{{Damage}} 简要说明会改什么。

### 触发与消耗

怎么用、何时生效、消耗什么。

### 数值

- {{Tears}} 射速：具体数字或公式 `$x$`
- {{Luck}} 幸运：阈值

### 联动

与 {{Item:gospel}} 叠加时……

### 注意

{{Warning}} 不可逆或容易误判的点。

### 版本

哪次改动改了什么。
````

渲染：

### 效果

{{Damage}} 简要说明会改什么。

### 触发与消耗

怎么用、何时生效、消耗什么。

### 数值

- {{Tears}} 射速：具体数字或公式 `$x$`
- {{Luck}} 幸运：阈值

### 联动

与 {{Item:gospel}} 叠加时……

### 注意

{{Warning}} 不可逆或容易误判的点。

### 版本

哪次改动改了什么。

## 常用图标

| 类别 | 拷贝 |
| --- | --- |
| 属性 | `{{Damage}}` `{{Tears}}` `{{Speed}}` `{{Range}}` `{{Shotspeed}}` `{{Luck}}` |
| 心 | `{{Heart}}` `{{SoulHeart}}` `{{BlackHeart}}` `{{BoneHeart}}` `{{BrokenHeart}}` `{{EternalHeart}}` |
| 资源 | `{{Coin}}` `{{Bomb}}` `{{Key}}` `{{Battery}}` `{{Card}}` `{{Pill}}` `{{Rune}}` |
| 房间 | `{{TreasureRoom}}` `{{Shop}}` `{{BossRoom}}` `{{DevilRoom}}` `{{AngelRoom}}` `{{SecretRoom}}` |
| 状态 | `{{Warning}}` `{{Timer}}` `{{Poison}}` `{{Burning}}` `{{Fear}}` `{{Charm}}` `{{ArrowUp}}` `{{ArrowDown}}` |
| 品质 | `{{Quality0}}` `{{Quality1}}` `{{Quality2}}` `{{Quality3}}` `{{Quality4}}` |
| 本模组 | `{{Item:gospel}}` `{{Trinket:pacification-mark}}` `{{Card:0-the-fool}}` `{{Character:zeis}}` `{{Challenge:cookie-clicker}}` `{{Seija}}` `{{ThothCard}}` |

行内效果：{{Damage}} {{Tears}} {{SoulHeart}} {{Battery}} {{Warning}} {{ArrowUp}} {{Quality3}} {{Item:gospel}} {{Card:0-the-fool}} {{Seija}}

## 文本格式

```md
**粗体** *斜体*

- 无序列表
- 第二项

{{Timer}} 房间内效果。
{{Warning}} 危险或不可逆。

行内公式 `$a^2+b^2$`：
```

$$
\mathrm{DPS} = \mathrm{Damage} \times \mathrm{Tears}
$$

## 拾取副标题

`Desc` 会显示在条目标题下的 metadata 里，不要在机制正文再重复成单独一节。
