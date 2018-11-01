export default {
  cart: window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : [],
  currentId: 2,
  homeId: 1,
  historys: window.localStorage.getItem('tl-history') ? window.localStorage.getItem('tl-history').split(',') : [],
  loginName: window.localStorage.getItem('isLogin') ? window.localStorage.getItem('isLogin') : '',
  backUrl: ''
}
