import {
  Detail,
  Home,
  Kind,
  Cart,
  Mine,
  Login,
  List,
  Search
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
    meta: {auth: true},
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
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }
]

export default routes
