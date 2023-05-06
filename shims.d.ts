
declare module "vue"
declare module "ant-design-vue"
declare module "element-ui"
declare module "element-plus"
declare module "vant"
declare module "html2canvas"
declare module "@/utils/interface"
declare module "@/utils/request"
declare module "@/utils/config"
declare module "process"
declare module "App"
declare module "uni"
declare module "axios"
declare module "vite/client"
declare module "vite"
declare module "@vitejs/plugin-vue"
declare module "vconsole"
declare module "pinia"
declare module "file-utils-plus"
declare module "mitt" {
  interface Emitter<Events> {
    on<K extends keyof Events>(type: K, handler: (event: Events[K]) => void): void
    off<K extends keyof Events>(type: K, handler: (event: Events[K]) => void): void
    emit<K extends keyof Events>(type: K, event: Events[K]): void
  }
  function mitt<Events>(): Emitter<Events>
  export {
    type Emitter
  }
  export default mitt
}








