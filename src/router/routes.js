import {
  Detail,
  Home,
  List,
  Cart,
  Mine,
  Login,
  Kind
} from '@/pages'

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    text: '首页',
    isTabbar: true
  }, {
    path: '/kind',
    name: 'kind',
    text: '分类',
    component: Kind,
    isTabbar: true
  }, {
    path: '/list/:id',
    name: 'list',
    component: List
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
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]

export default routes
