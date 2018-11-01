export default {
  cart: window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : [],
  currentId: 2,
  historys: window.localStorage.getItem('tl-history') ? window.localStorage.getItem('tl-history').split(',') : []
}
