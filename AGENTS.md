# U Card Journal 开发约束

1. 手机端优先，桌面端在同一设计系统下响应式扩展。
2. 视觉以 AstroPaper 为基线：大量留白、黑白灰为主、少量蓝色点缀、弱卡片、强排版。
3. 首页是资讯媒体首页，不做交易所风格，不做导航站堆料，不堆大量参数和筛选。
4. 首页重点顺序：Hero → 搜索 → 精选文章 → 最新动态 → 热门 U 卡 → 轻量交易所/钱包入口。
5. U 卡推荐首页最多 3 个；交易所与钱包也只做少量精选，不做 Logo 墙。
6. Cards / Compare / Reviews / News / Guides / Risks / Ecosystem 按项目需要逐步开发，不提前过度工程化。
7. 内容与数据尽量结构化，避免把可复用数据散落硬编码在多个页面。
8. main 分支始终保持可构建、可部署。
9. 模板库 /Users/chen/Templates/Web/Astro/AstroPaper 只读参考，不直接修改。
10. 每次较大修改后执行 pnpm build 验证。
