# U Card Journal Design System

## 1. 设计定位

U Card Journal 是一个以 U 卡 / 虚拟卡 / 加密支付为主题的专业资讯媒体，而不是交易所首页、工具导航站或产品商城。

设计目标：

- 专业、可信、安静
- 资讯优先，阅读舒适
- Mobile First（手机端优先）
- 中低信息密度
- 大量留白
- 黑白灰为主，少量蓝色点缀
- 卡片感弱，边框与层级克制
- 推荐内容“少而精”，不堆参数

## 2. 参考体系

本项目不直接复制任何单一品牌，采用以下参考权重：

- Wired（科技杂志）45%：资讯排版、编辑层级、弱营销 UI
- Coinbase（加密货币交易）30%：金融可信感、白色画布、轻蓝色、宽松留白
- Mastercard（万事达）15%：支付品牌的温和质感、柔和中性色
- Wise（跨境汇款）10%：费用、比较、移动端信息组织

参考文件：

- /Users/chen/Codex/Codex总工作台/design-md (设计规范合集)/wired (科技杂志).md
- /Users/chen/Codex/Codex总工作台/design-md (设计规范合集)/coinbase (加密货币交易).md
- /Users/chen/Codex/Codex总工作台/design-md (设计规范合集)/mastercard (万事达).md
- /Users/chen/Codex/Codex总工作台/design-md (设计规范合集)/wise (跨境汇款).md

## 3. 色彩

### Light

- Canvas: #FCFBF8
- Surface: #FFFFFF
- Surface Soft: #F5F4F1
- Ink: #171717
- Body: #555B63
- Muted: #858A91
- Hairline: #E7E4DE
- Accent Blue: #315F7D
- Accent Blue Soft: #EAF1F5

### Dark

暗色只作为完整主题，不在首页穿插大面积黑色“视觉大卡”。

- Canvas: #151719
- Surface: #1C1F22
- Ink: #F3F3F1
- Body: #B7BBC0
- Hairline: #31353A
- Accent Blue: #8DB8D0

## 4. 字体与层级

### 字体

- Display / Editorial: Georgia / Songti SC / Noto Serif CJK
- UI / Body: system-ui / PingFang SC / Noto Sans CJK

### Mobile

- H1: 34–38px / 1.18 / 500–600
- H2: 25–28px / 1.25 / 600
- H3: 18–21px / 1.35 / 600
- Body: 15–16px / 1.7 / 400
- Meta: 11–13px / 1.5
- Eyebrow: 10–11px / uppercase / +0.16em

原则：

- Display 不使用 700–900 的极粗字重。
- 首页 H1 不超过手机首屏的 1/3。
- 中文标题允许 2–3 行，不做超大字海报。
- 正文保持长行距，弱化“产品营销感”。

## 5. 间距

基础节奏：4 / 8 / 12 / 16 / 24 / 32 / 40 / 56 / 72

手机：

- 页面左右安全区：16–20px
- 主要 Section：40–48px 上下
- 模块标题与内容：20–24px
- 列表行：18–22px

桌面：

- 内容最大宽度：760px（正文媒体区）
- 宽页面最大宽度：1120–1200px（Cards / Compare）
- 主要 Section：64–88px

## 6. 首页组件

### Header

- 品牌 + 搜索 + 菜单
- 不做悬浮胶囊大导航
- 语言切换放菜单内或桌面右侧
- 高度克制

### Hero

- 纯文字为主
- 一句主标题 + 简短说明
- 搜索框放 Hero 下方
- 不用深色背景、不用产品 Mockup 大图

### Featured

- 白色 / 浅灰背景
- 图片比例约 16:9 或 4:3
- 图片只是“编辑视觉”，不能像交易所 Banner
- 标题 + 摘要 + Meta
- 一次只突出 1 篇

### Latest Updates

- 时间 / 类型 + 标题
- 弱分割线
- 不用卡片墙
- 一屏可看到 2–3 条

### Recommended Cards

- 首页最多 3 张
- 只展示：名称 / 一句话适用人群 / 评分或一个关键费用
- 不展示完整参数矩阵
- 不使用大量 pill 标签

### Ecosystem

- 交易所与钱包只是补充
- 首页最多各 1–2 个
- 采用文章 / 编辑推荐的轻列表，不做 Logo 墙

## 7. Do / Don’t

### Do

- 留白优先
- 一屏只解决一个主要阅读任务
- 使用 1px hairline 而不是阴影
- 蓝色只用于链接、状态、轻量强调
- 让内容标题成为视觉中心
- 复杂参数放二级页面
- 先保证手机端阅读舒适

### Don’t

- 不做 Binance 式黄黑交易所风
- 不做 The Verge 式霓虹和高饱和色块
- 不做 Revolut 式大黑 Hero
- 不做首页 Logo 墙
- 不做大量 Badge / Pill
- 不做 4–6 列参数表塞进首页
- 不做超大字体占满手机首屏
- 不使用多层阴影和玻璃拟态

## 8. 页面扩展

- Home：资讯发现
- Cards：找卡
- Compare：比卡
- Review：深入了解单卡
- News：追踪变化
- Guides：解释概念
- Risks：合规 / 风险
- Ecosystem：交易所 / 钱包 / 支付配套

所有页面必须使用同一套颜色、排版、间距与层级规则。
