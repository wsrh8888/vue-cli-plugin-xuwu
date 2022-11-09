import { defineUserConfig } from 'vuepress'
import {
  head
} from './configs/index'
export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'xuwu',
      description: 'Xuwu',
    }
  },
})