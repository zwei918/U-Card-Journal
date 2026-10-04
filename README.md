# U Card Journal

U Card Journal 是一个面向 U 卡、虚拟信用卡与加密支付生态的中文资讯媒体项目。

## 产品定位

- 核心：U 卡资讯 + 评测 + 对比
- 扩展：交易所、钱包、跨境支付工具
- 风格：AstroPaper 基线，极简、专业、可信、阅读优先
- 终端：Mobile First（手机端优先）
- 部署：GitHub → Cloudflare Pages

## V1 范围

1. 首页 Home
2. Cards 卡片目录（轻量版）
3. Reviews 评测入口
4. News 最新动态
5. Exchanges 交易所推荐（轻量）
6. Wallets 钱包推荐（轻量）
7. GitHub / Cloudflare Pages 自动部署

高级 Compare、复杂筛选、评分体系、风险数据库、Affiliate 与自动采集等功能按项目实际情况逐步增加。

## 目录来源

模板原件：

`/Users/chen/Templates/Web/Astro/AstroPaper`

正式项目：

`/Users/chen/Projects/04_Web-App（网站与APP）/Project_01_U-Card-Journal`

模板原件保持不修改。

## 本地开发

```bash
pnpm install
pnpm dev
```

构建：

```bash
pnpm build
```

## 发布流程

```text
mac01 本地开发
→ Git commit
→ GitHub main
→ Cloudflare Pages
→ 自动构建并上线
```
