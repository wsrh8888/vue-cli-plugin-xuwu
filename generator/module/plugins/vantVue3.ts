/*
 * @Author: your name
 * @Date: 2021-06-10 11:17:13
 * @LastEditTime: 2021-06-10 11:36:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/module/plugins/vantVue3.js
 */
/*
 * @Author: your name
 * @Date: 2021-06-08 11:12:15
 * @LastEditTime: 2021-06-10 10:29:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xuwu/generator/module/plugins/elementPlus.js
 */
import 'vant/lib/index.css'
import type { App } from 'vue'

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
  Image,
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
const components = [
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
  Image,
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
]
const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}

export default {
  install
}
