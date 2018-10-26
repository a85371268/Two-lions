import {
  Detail,
  Home,
  List,
  Cart,
  Mine,
  Login
} from '@/pages'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    text: '首页',
    isTabbar: true
  }, {
    path: '/list',
    name: 'list',
    text: '分类',
    component: List,
    isTabbar: true
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart,
    text: '购物车',
    isTabbar: true
  }, {
    path: '/mine',
    name: 'mine',
    component: Mine,
    text: '我的',
    isTabbar: true
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export default routes
