import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/getting-started.html',
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入Xuwu',
        children: [
          '/zh/advanced/architecture.md'
        ],
      }
    ],
  },
]
