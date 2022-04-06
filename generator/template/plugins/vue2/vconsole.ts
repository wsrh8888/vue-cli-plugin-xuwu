import VConsole from 'vconsole'
import Vue from 'vue'

if (process.env.API_ENV !== 'prod') {
  // @ts-ignore
  Vue.use(new VConsole())
}
