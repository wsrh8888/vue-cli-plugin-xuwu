import { defineUserConfig } from 'vuepress'
import {
  head,
  navbarZh,
  sidebarZh,
} from './configs/index'
import {  path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  // set site base to default value
  base: '/xuuw/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: 'xuwu',
      description: 'Vue 驱动的静态网站生成器',
    },
  },

  // specify bundler via environment variable
  // bundler:
  //   process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'wsrh8888/vue-cli-plugin-xuwu',
    docsDir: 'docs',

    // theme-level locales config
    locales: {

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbarZh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: true,
      // use shiki plugin in production mode instead
      prismjs: false,
    },
  }),
  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
    },
  },

  // use plugins
  plugins: [
   
  ],
})
