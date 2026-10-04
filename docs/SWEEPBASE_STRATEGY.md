# U Card Journal × Sweepbase 差异化方案

## 1. 新定位

U Card Journal 不再只定义为“U 卡资讯媒体”，而是升级为：

> 面向中文及国际用户的 U 卡 / 虚拟卡决策平台：卡片数据库 + 对比工具 + 评测 + 资讯更新 + 加密支付生态。

核心原则：

- 产品结构优先参考 Sweepbase
- 视觉继续坚持 U Card Journal 自己的轻量媒体风
- 不复制 Sweepbase UI，不复制文案，不照搬页面
- 中文用户体验、多语言、地区政策、更新速度作为差异化重点

## 2. 参考权重

### 产品结构

- Sweepbase：50%
- Cryptonoshi：10%
- CryptoCardHub：10%

### 视觉

- Wired / Coinbase：30%

## 3. Sweepbase 值得借鉴的模块

### 3.1 Card Database（卡片数据库）

这是整个站的核心资产。

U Card Journal 要把每张卡做成结构化数据，而不是只写文章。

推荐字段：

- name
- slug
- issuer
- cardNetwork
- cardType
- virtualCard
- physicalCard
- activeStatus
- custodyModel
- kyc
- supportedRegions
- excludedRegions
- openingFee
- monthlyFee
- topupFee
- transactionFee
- fxFee
- atmFee
- cashback
- rewards
- supportedAssets
- usdt
- applePay
- googlePay
- topupMethods
- stakingRequired
- minimumBalance
- spendingLimit
- withdrawalLimit
- affiliate
- affiliateDisclosure
- sourceUrls
- lastChecked
- lastChanged
- confidenceLevel
- riskLevel
- editorScore

## 4. 首页 V3

首页目标从“阅读首页”升级成“决策入口 + 资讯入口”。

推荐顺序：

### 01 Hero

主标题：
帮助用户找到适合自己的 U 卡。

副标题：
强调费率、地区、KYC、支付支持和实时变化。

Hero 下方保留：

- 搜索
- Find your card / 找卡
- Compare / 对比

不要出现：

- 大黑 Hero
- 大量交易所 Logo
- 复杂参数表

### 02 Top Picks

精选 3–5 张。

按用户需求拆：

- 最适合中国大陆用户
- 最适合 Apple Pay
- 最适合 USDT
- 最适合低费率
- 最适合免月费

首页只做结论，不把完整参数表塞进去。

### 03 Quick Compare

首页显示 2–3 张卡的小对比入口。

字段只保留：

- 开卡费
- KYC
- Apple Pay
- USDT
- 评分

按钮：
查看完整对比

### 04 Browse by Need

按需求进入卡库：

- No KYC / 低 KYC
- Apple Pay
- Google Pay
- USDT
- Virtual Card
- Physical Card
- Travel
- Low Fee
- No Staking

### 05 Browse by Region

重点区域：

- 中国大陆
- 香港
- 日本
- 新加坡
- 欧洲
- 美国
- 全球

这个模块是 U Card Journal 相比 Sweepbase 的重要差异化。

### 06 Latest Changes

不是普通资讯列表，而是“卡片变化日志”。

例如：

- 某卡充值费调整
- 某地区停止申请
- Apple Pay 支持变化
- KYC 政策变化
- 新卡上线
- 卡片停发

显示：

- 卡名
- 变化
- 日期
- 影响范围

### 07 Reviews & Guides

内容媒体部分。

- 深度评测
- 新手指南
- 风险说明
- 政策变化分析

### 08 Ecosystem

交易所和钱包只做补充：

- 推荐交易所
- 推荐钱包
- 资金路径
- USDT → Wallet → Card

不做导航站式 Logo 墙。

## 5. Cards 页面

Cards 是整个站最重要的页面之一。

### V1

- 搜索
- 状态
- KYC
- Apple Pay
- Google Pay
- USDT
- Virtual / Physical
- 地区
- 评分

### V2

增加：

- 费用区间
- 卡组织
- 托管 / 非托管
- Staking
- Cashback
- ATM
- Travel
- 发行机构

### 展示方式

默认不要电商卡片墙。

优先：

- 紧凑列表
- 清晰表头
- 可切换卡片模式
- 移动端纵向信息卡

## 6. Compare

### V1

最多 3 张卡。

对比：

- 开卡费
- 月费
- 充值费
- 交易费
- FX
- KYC
- 地区
- Apple Pay
- Google Pay
- USDT
- 实体卡
- 虚拟卡
- 评分
- 风险

### V2

- 差异高亮
- 隐藏相同项
- 推荐结论
- 分享对比链接

## 7. Card Match Quiz

不建议第一版就开发复杂问卷。

### V1.5

5 个问题即可：

1. 所在地区
2. 是否接受 KYC
3. Apple Pay / Google Pay 是否必须
4. 主要充值资产
5. 更重视低费率还是便利性

输出 3 张推荐卡。

## 8. Cost Calculator

这是非常有价值的后期功能。

用户输入：

- 每月充值金额
- 每月消费金额
- 消费币种
- ATM 金额
- 跨币种消费比例

输出：

- 每月预计费用
- 年费用
- 3 张卡成本排名

建议 V2 开发。

## 9. 可信度体系

这是必须比普通 Affiliate 站做得更好的一部分。

每条卡片数据增加可信等级：

### Official

来自官方文档。

### Verified

编辑团队已二次核验。

### Hands-on Tested

真实注册 / KYC / 充值 / 消费测试。

### Community Report

用户反馈，尚未完成官方确认。

页面必须显示：

- Last checked
- 数据来源
- 最近变化
- 验证等级

## 10. Rating Methodology

评分不能只凭感觉。

建议评分维度：

- Fees 20%
- Availability 15%
- Payment Support 15%
- Funding Experience 15%
- Transparency 10%
- Ease of Use 10%
- Reliability 10%
- Risk 5%

最终权重后续可以根据数据调整。

## 11. Affiliate 原则

必须单独建立 Affiliate Disclosure。

原则：

- Affiliate 不影响评分
- 有佣金的链接明确标记
- 无佣金的优秀产品一样展示
- 排名公式公开
- Sponsored 与 Editorial 分开

每个卡页显示：

- Partner link / 普通链接
- 是否存在推广关系

## 12. Data Changelog

建议建立：

/changes

记录：

- 日期
- 产品
- 字段
- 旧值
- 新值
- 来源

例如：

2026-10-05
OKX Card
Apple Pay
Unsupported → Supported
来源：官方公告

这个功能长期会成为站点的重要护城河。

## 13. U Card Journal 相比 Sweepbase 的差异化

### 重点 1：中国及亚洲用户

Sweepbase 偏全球。

我们重点增强：

- 中国大陆
- 香港
- 日本
- 新加坡
- 台湾
- 东南亚

### 重点 2：中文内容质量

- 中文深度评测
- 中文政策解读
- 中文风险说明
- 中文教程

### 重点 3：多语言

V1 已有：

- zh-CN
- en
- ja

后续：

- zh-TW

### 重点 4：资讯变化

不仅做静态数据库，还做：

- Fee changes
- KYC changes
- Region changes
- Suspension
- Security events
- Issuer changes

### 重点 5：交易所 + 钱包生态

Sweepbase 更专注 Card。

U Card Journal 可以补充：

- Exchange
- Wallet
- Funding Route
- USDT Path

但一定保持“辅助角色”。

## 14. 开发优先级

### V1

- Home V3
- Cards Database 基础数据模型
- Cards 页面
- Card Detail
- News / Changes
- Review
- 多语言
- SEO

### V1.5

- Compare
- Browse by Need
- Browse by Region
- Rating Methodology
- Affiliate Disclosure
- Data Changelog

### V2

- Card Match Quiz
- Cost Calculator
- 用户提交纠错
- 数据版本历史

### V3

- 自动数据监控
- 官方公告抓取
- 费率变化检测
- 用户收藏 / Watchlist
- 个性化推荐

## 15. 当前首页处理原则

现有 `feature/home-v2-design` 不作为最终首页。

下一轮应在它的视觉基础上重新调整为 Home V3：

- 保留轻量视觉
- 增加 Top Picks
- 增加 Quick Compare
- 增加 Browse by Need
- 增加 Browse by Region
- Latest Updates 改为 Latest Changes
- Reviews / Guides 下沉
- Ecosystem 保持轻量

最终目标：

> 看起来像专业金融媒体，用起来像真正的 U 卡决策工具。
