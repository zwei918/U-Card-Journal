# U Card Journal 开发约束

1. 手机端优先，桌面端在同一 Design System（设计系统）下响应式扩展。
2. 视觉以 AstroPaper 的简洁结构为基础，并强制遵循 `docs/DESIGN_SYSTEM.md`。
3. 设计参考权重：Wired 45% + Coinbase 30% + Mastercard 15% + Wise 10%。不得直接复制品牌页面。
4. 首页是专业资讯媒体首页，不做交易所风格，不做导航站堆料，不做产品商城，不堆大量参数和筛选。
5. 首页重点顺序：Hero → Search → Featured → Latest Updates → 热门 U 卡 → 轻量交易所/钱包入口。
6. 首页 U 卡推荐最多 3 个；交易所与钱包也只做少量精选，不做 Logo 墙。
7. 禁止大面积黑色 Featured / Hero、超大海报式标题、霓虹高饱和色块、玻璃拟态、多层阴影、过多 pill。
8. Display 标题使用中等字重，正文使用高可读 sans；蓝色只承担链接与轻量强调。
9. Cards / Compare / Reviews / News / Guides / Risks / Ecosystem 按项目需要逐步开发，不提前过度工程化。
10. 内容与数据尽量结构化，避免把可复用数据散落硬编码在多个页面。
11. main 分支始终保持可构建、可部署。
12. 模板库 `/Users/chen/Templates/Web/Astro/AstroPaper` 只读参考，不直接修改。
13. 设计规范源：`/Users/chen/Codex/Codex总工作台/design-md (设计规范合集)`。
14. 每次较大修改后执行 `pnpm build` 验证，并在手机宽度做视觉预览后再推送生产。
