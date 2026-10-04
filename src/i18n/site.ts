export const supportedLocales = ["zh-CN", "en", "ja"] as const;
export type SiteLocale = (typeof supportedLocales)[number];

export const defaultLocale: SiteLocale = "zh-CN";

export function normalizeLocale(locale?: string): SiteLocale {
  if (locale === "en" || locale === "ja") return locale;
  return "zh-CN";
}

export function localePrefix(locale: SiteLocale) {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function localizedPath(path: string, locale: SiteLocale) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const prefix = localePrefix(locale);
  if (clean === "/") return prefix || "/";
  return `${prefix}${clean}`;
}

export const siteCopy = {
  "zh-CN": {
    tagline: "U 卡 · 虚拟卡 · 跨境支付资讯",
    nav: { cards: "U 卡", compare: "对比", news: "资讯", topics: "专题" },
    search: "搜索",
    theme: "切换主题",
    menu: "打开菜单",
    footer: "U 卡 · 虚拟卡 · 交易所 · 钱包 · 跨境支付资讯",
    home: {
      eyebrow: "U 卡 · 虚拟卡 · 跨境支付资讯",
      title: "了解、比较、选择适合你的 U 卡",
      intro: "独立整理 U 卡评测、费率变化、KYC、地区支持、Apple Pay、Google Pay、USDT 充值与风险信息。",
      searchPlaceholder: "搜索 U 卡、费率、KYC、Apple Pay…",
      featured: "精选文章",
      latest: "最新动态",
      cards: "热门 U 卡",
      ecosystem: "交易所与钱包",
      allNews: "全部资讯 →",
      allCards: "查看全部 U 卡 →",
      compare: "卡片对比 →",
      featuredTitle: "2026 年选择 U 卡，真正需要关注的不是“免 KYC”三个字",
      featuredDesc: "从发卡机构、地区、费用透明度、资金路径与停卡风险几个维度，建立一套更长期的判断方法。",
    },
    cards: {
      title: "U 卡目录",
      intro: "先做少而精的卡片目录。地区、KYC、Apple Pay、Google Pay、USDT 与费用筛选将在数据量足够后逐步加入。",
    },
    compare: {
      title: "U 卡对比",
      intro: "对比功能将在卡片数据结构稳定后开发。V1 先保证内容、评测和基础目录可用，不提前堆复杂筛选与参数表。",
      back: "先查看 U 卡目录 →",
    },
  },
  en: {
    tagline: "Crypto cards · Virtual cards · Cross-border payments",
    nav: { cards: "Cards", compare: "Compare", news: "News", topics: "Topics" },
    search: "Search",
    theme: "Toggle theme",
    menu: "Open menu",
    footer: "Crypto cards · Virtual cards · Exchanges · Wallets · Cross-border payments",
    home: {
      eyebrow: "Crypto cards · Virtual cards · Cross-border payments",
      title: "Understand, compare, and choose the right crypto card",
      intro: "Independent coverage of crypto card reviews, fees, KYC, regions, Apple Pay, Google Pay, USDT top-ups, and risk updates.",
      searchPlaceholder: "Search cards, fees, KYC, Apple Pay…",
      featured: "Featured",
      latest: "Latest Updates",
      cards: "Recommended Cards",
      ecosystem: "Exchanges & Wallets",
      allNews: "All news →",
      allCards: "View all cards →",
      compare: "Compare cards →",
      featuredTitle: "Choosing a crypto card in 2026: look beyond the words “no KYC”",
      featuredDesc: "A longer-term framework based on issuer quality, region support, transparent fees, fund flows, and suspension risk.",
    },
    cards: {
      title: "Crypto Card Directory",
      intro: "A curated directory first. Region, KYC, Apple Pay, Google Pay, USDT, and fee filters will be added as the dataset grows.",
    },
    compare: {
      title: "Compare Crypto Cards",
      intro: "Advanced comparison will be added after the card data model stabilizes. V1 focuses on content, reviews, and a clean directory.",
      back: "Browse the card directory →",
    },
  },
  ja: {
    tagline: "暗号資産カード · バーチャルカード · 越境決済情報",
    nav: { cards: "カード", compare: "比較", news: "ニュース", topics: "特集" },
    search: "検索",
    theme: "テーマ切替",
    menu: "メニューを開く",
    footer: "暗号資産カード · バーチャルカード · 取引所 · ウォレット · 越境決済",
    home: {
      eyebrow: "暗号資産カード · バーチャルカード · 越境決済情報",
      title: "自分に合う暗号資産カードを理解し、比較し、選ぶ",
      intro: "カードレビュー、手数料、KYC、対応地域、Apple Pay、Google Pay、USDT 入金、リスク情報を独立して整理します。",
      searchPlaceholder: "カード、手数料、KYC、Apple Pay を検索…",
      featured: "注目記事",
      latest: "最新情報",
      cards: "おすすめカード",
      ecosystem: "取引所とウォレット",
      allNews: "ニュース一覧 →",
      allCards: "カード一覧 →",
      compare: "カード比較 →",
      featuredTitle: "2026 年の暗号資産カード選びで「KYC 不要」以上に見るべきこと",
      featuredDesc: "発行体、対応地域、手数料の透明性、資金経路、停止リスクから長期的に判断します。",
    },
    cards: {
      title: "暗号資産カード一覧",
      intro: "まずは厳選したカードを掲載。地域、KYC、Apple Pay、Google Pay、USDT、手数料の絞り込みはデータ拡充後に追加します。",
    },
    compare: {
      title: "暗号資産カード比較",
      intro: "詳細比較はカードデータ構造が安定してから追加します。V1 はコンテンツ、レビュー、基本ディレクトリを優先します。",
      back: "カード一覧を見る →",
    },
  },
} as const;

export function getSiteCopy(locale?: string) {
  return siteCopy[normalizeLocale(locale)];
}
