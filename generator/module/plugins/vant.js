/*
 * @Author: your name
 * @Date: 2021-05-20 19:08:47
 * @LastEditTime: 2021-06-04 20:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/ui/vant.js
 */
import Vue from 'vue'
import 'vant/lib/index.css'

import {
  Popup,
  Cell,
  ActionSheet,
  Icon,
  Dialog,
  Button,
  Field,
  Stepper,
  SwipeCell,
  Toast,
  Loading,
  Overlay,
  Slider,
  Picker,
  CellGroup,
  Col,
  Row,
  Image as VanImage,
  ImagePreview,
  NumberKeyboard,
  Cascader,
  PasswordInput,
  Checkbox,
  CheckboxGroup,
  DatetimePicker,
  Form,
  RadioGroup,
  Radio,
  Rate,
  Search,
  Switch,
  Uploader,
  DropdownMenu,
  DropdownItem,
  Notify,
  PullRefresh,
  ShareSheet,
  Badge,
  Circle,
  Collapse,
  CollapseItem,
  CountDown,
  Divider,
  Empty,
  Lazyload,
  List,
  NoticeBar,
  Popover,
  Progress,
  Skeleton,
  Step,
  Steps,
  Sticky,
  Swipe,
  SwipeItem,
  Tag,
  Grid,
  GridItem,
  IndexBar,
  IndexAnchor,
  NavBar,
  Calendar,
  Pagination,
  Sidebar,
  SidebarItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  TreeSelect
} from 'vant'

Vue.use(TreeSelect)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Pagination)

Vue.use(NavBar)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tag)
Vue.use(Step)
Vue.use(Steps)
Vue.use(Sticky)
Vue.use(Progress)
Vue.use(Skeleton)
Vue.use(Skeleton)
Vue.use(Popover)
Vue.use(NoticeBar)
Vue.use(List)
Vue.use(Lazyload)
Vue.use(Empty)
Vue.use(Divider)
Vue.use(CountDown)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Circle)
Vue.use(Badge)
Vue.use(PullRefresh)
Vue.use(ShareSheet)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Uploader)
Vue.use(Switch)
Vue.use(Search)
Vue.use(Rate)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(PasswordInput)
Vue.use(Form)
Vue.use(DatetimePicker)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Cascader)
Vue.use(Calendar)
Vue.use(Col)
Vue.use(Row)
Vue.use(CellGroup)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(ActionSheet)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Field)
Vue.use(Stepper)
Vue.use(SwipeCell)
Vue.use(NumberKeyboard)
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Slider)
Vue.use(ImagePreview)
Vue.use(Overlay)
Vue.prototype.$dialog = Dialog
Vue.prototype.$toast = Toast
Vue.prototype.$notify = Notify
