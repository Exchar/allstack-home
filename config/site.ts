import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'
const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://allstack.online'
const baseSiteConfig = {
  name: "AllStack",
  description:
    "AllStack AI Chat - 一个集合国内外大模型的AI聊天工具，便宜好用，面向普通用户和程序开发者。",
  url: "https://allstack.online",
  ogImage: "https://allstack.online/og.png",
  metadataBase: new URL(baseUrl),
  keywords: ["AI Chat", "大模型聊天", "国内外AI模型", "便宜AI工具", "AI聊天机器人"],
  authors: [
    {
      name: "AllStack",
      url: "https://allstack.online",
      // twitter: 'https://twitter.com/weijunext',
    }
  ],
  creator: '@AllStack',
  openSourceURL: '',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/my.png",
  },
  headerLinks: [
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    // { name: 'email', href: "mailto:allstack@allstack.online", icon: MdEmail },
    // { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    // { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    // { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    // { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    // { url: 'https://nexty.dev/', name: 'SaaS Starter' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
