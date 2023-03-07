import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/web/': [
    {
      text: 'web',
      children: [
        '/zh/web/index.md',
        '/zh/web/vite2-web-vue3.md',
        '/zh/web/vite3-web-vue3.md',
        '/zh/web/vite4-web-vue3.md',
        '/zh/web/webpack-web-vue2.md',
        '/zh/web/webpack-web-vue3.md',
      ],
    },
  ],
  '/zh/uniapp/': [
    {
      text: 'uniapp',
      children: [
        '/zh/uniapp/index.md',
        '/zh/uniapp/vite2-uniapp-vue3.md',
        '/zh/uniapp/vite3-uniapp-vue3.md',
        '/zh/uniapp/vite4-uniapp-vue3.md',
        '/zh/uniapp/webpack-uniapp-vue2.md',
      ],
    },
  ]
}
