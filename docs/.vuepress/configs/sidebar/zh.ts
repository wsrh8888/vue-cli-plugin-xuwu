import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/getting-started.md',
        '/zh/guide/configuration.md',
        '/zh/guide/page.md',
        '/zh/guide/markdown.md',
        '/zh/guide/assets.md',
        '/zh/guide/deployment.md',
        '/zh/guide/theme.md',
        '/zh/guide/plugin.md',
        '/zh/guide/bundler.md',
        '/zh/guide/migration.md',
      ],
    },
  ],
  
}
