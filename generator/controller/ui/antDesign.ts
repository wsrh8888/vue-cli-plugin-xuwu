/*
 * @Author: your name
 * @Date: 2021-05-20 19:09:30
 * @LastEditTime: 2021-05-20 20:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-cli-plugin-init-structure/generator/controller/ui/antDesign.ts
 */
import Vue from 'vue';
import {
  Message,
  Base,
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  // ColorPicker,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  PageHeader,
  Space,
  Notification
} from 'ant-design-vue';
Vue.use(Base);
Vue.use(Affix);
Vue.use(Anchor);
Vue.use(AutoComplete);
Vue.use(Alert);
Vue.use(Avatar);
Vue.use(BackTop);
Vue.use(Badge);
Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(Carousel);
Vue.use(Cascader);

Vue.use(Checkbox);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Divider);
Vue.use(Dropdown);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Icon);
Vue.use(Input);


Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(LocaleProvider);
Vue.use(Menu);
Vue.use(Mentions);
Vue.use(Modal);
Vue.use(Pagination);
Vue.use(Popconfirm);

Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Rate);
Vue.use(Row);
Vue.use(Select);
Vue.use(Slider);
Vue.use(Spin);

Vue.use(Statistic);
Vue.use(Steps);
Vue.use(Switch);
Vue.use(Table);
Vue.use(Transfer);
Vue.use(Tree);
Vue.use(TreeSelect);
Vue.use(Tabs);

Vue.use(Tag);
Vue.use(TimePicker);
Vue.use(Timeline);
Vue.use(Tooltip);
Vue.use(Upload);
Vue.use(Drawer);
Vue.use(Skeleton);

Vue.use(Comment);
Vue.use(ConfigProvider);
Vue.use(Empty);
Vue.use(Result);
Vue.use(Descriptions);
Vue.use(PageHeader);
Vue.use(Space);

Vue.prototype.$message = Message;
Vue.prototype.$notification = Notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;
