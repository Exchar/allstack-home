
import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free Plan",
    price: "Free",
    href: "#",
    description:
      "Access to basic AI chat features with limited usage.",
    features: [
      "Basic AI models",
      "Limited daily usage",
      "Standard response speed",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  // {
  //   key: TiersEnum.Customize,
  //   title: "Pro Plan",
  //   href: "#",
  //   description: "Unlimited access to all AI models and features.",
  //   price: "$9.99",
  //   features: [
  //     "All AI models",
  //     "Unlimited usage",
  //     "Priority response",
  //     "API access",
  //     "Advanced features",
  //   ],
  //   buttonText: "Upgrade Now",
  //   buttonColor: "default",
  //   buttonVariant: "flat",
  // },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免费计划",
    price: "免费",
    href: "#",
    description: "访问基础AI聊天功能，使用量有限。",
    features: [
      "基础AI模型",
      "每日使用量限制",
      "标准响应速度",
      "邮件支持",
    ],
    buttonText: "开始使用",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  // {
  //   key: TiersEnum.Customize,
  //   title: "专业计划",
  //   href: "#",
  //   description: "无限制访问所有AI模型和功能。",
  //   price: "￥69",
  //   features: [
  //     "所有AI模型",
  //     "无限制使用",
  //     "优先响应",
  //     "API访问",
  //     "高级功能",
  //   ],
  //   buttonText: "立即升级",
  //   buttonColor: "default",
  //   buttonVariant: "flat",
  // },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "オープンソース / 無料",
    price: "無料",
    href: siteConfig.openSourceURL || "#",
    description: "GitHubリポジトリからランディングページのボイラープレートを自由にクローンできます。",
    features: [
      "無料",
      "全コードへのアクセス",
      "二次開発",
      "MITライセンス",
    ],
    buttonText: "始める",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  // {
  //   key: TiersEnum.Customize,
  //   title: "カスタマイズ",
  //   href: siteConfig.authors[0]?.twitter || "#",
  //   description: "専用のランディングページをカスタマイズするために支払います。",
  //   price: "$188",
  //   features: [
  //     "全コードへのアクセス",
  //     "二次開発",
  //     "独占スタイル",
  //     "1対1のサービス",
  //     "より精巧なページ",
  //   ],
  //   buttonText: "お問い合わせ",
  //   buttonColor: "default",
  //   buttonVariant: "flat",
  // },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "مفتوح المصدر / مجاني",
    price: "مجاناً",
    href: siteConfig.openSourceURL || "#",
    description: "يمكنك نسخ قالب صفحة الهبوط من مستودع GitHub بحرية.",
    features: [
      "مجاني",
      "الوصول إلى كامل الكود",
      "التطوير الثانوي",
      "رخصة MIT",
    ],
    buttonText: "ابدأ الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  // {
  //   key: TiersEnum.Customize,
  //   title: "تخصيص",
  //   href: siteConfig.authors[0]?.twitter || "#",
  //   description: "ادفع لتخصيص صفحة هبوط حصرية.",
  //   price: "$188",
  //   features: [
  //     "الوصول إلى كامل الكود",
  //     "التطوير الثانوي",
  //     "أسلوب حصري",
  //     "خدمة فردية",
  //     "صفحات أكثر دقة",
  //   ],
  //   buttonText: "اتصل بنا",
  //   buttonColor: "default",
  //   buttonVariant: "flat",
  // },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Código Abierto / Gratuito",
    price: "Gratis",
    href: siteConfig.openSourceURL || "#",
    description:
      "Clona libremente la plantilla de página de aterrizaje desde el repositorio de GitHub.",
    features: [
      "Gratis",
      "Acceso a todo el código",
      "Desarrollo secundario",
      "Licencia MIT",
    ],
    buttonText: "Comenzar",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  // {
  //   key: TiersEnum.Customize,
  //   title: "Personalizar",
  //   href: siteConfig.authors[0]?.twitter || "#",
  //   description: "Paga para personalizar una página de aterrizaje exclusiva.",
  //   price: "$188",
  //   features: [
  //     "Acceso a todo el código",
  //     "Desarrollo secundario",
  //     "Estilo exclusivo",
  //     "Servicio personalizado",
  //     "Páginas más exquisitas",
  //   ],
  //   buttonText: "Contáctanos",
  //   buttonColor: "default",
  //   buttonVariant: "flat",
  // },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Открытый Источник / Бесплатно",
    price: "Бесплатно",
    href: siteConfig.openSourceURL || "#",
    description:
      "Свободно клонируйте шаблон лендинга из репозитория на GitHub.",
    features: [
      "Бесплатно",
      "Доступ ко всему коду",
      "Вторичная разработка",
      "Лицензия MIT",
    ],
    buttonText: "Начать",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Настройка",
    href: siteConfig.authors[0]?.twitter || "#",
    description: "Оплатите персонализацию эксклюзивной лендинг страницы.",
    price: "$188",
    features: [
      "Доступ ко всему коду",
      "Вторичная разработка",
      "Эксклюзивный стиль",
      "Индивидуальное обслуживание",
      "Более изысканные страницы",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
}