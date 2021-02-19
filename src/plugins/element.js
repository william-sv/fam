import Vue from 'vue'
import {
  Button,
  Menu,
  MenuItem,
  Container,
  Aside,
  Main,
  Table,
  TableColumn,
  Input,
  Form,
  FormItem,
  Select,
  Option,
  Alert,
  RadioButton,
  RadioGroup,
  MessageBox,
  Message,
} from 'element-ui'

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Alert)
Vue.use(RadioButton)
Vue.use(RadioGroup)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
