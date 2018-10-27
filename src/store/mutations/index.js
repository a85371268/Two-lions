export default {
  addCart (state, action) {
    let newCart = JSON.parse(window.localStorage.getItem('cart')) || []
    if (state.cart.some(item => action.id === item.id)) {
      newCart = state.cart.map(item => {
        if (action.id === item.id) {
          item.count += 1
        }
        return item
      })
    } else {
      action.count = 1
      newCart.push(action)
    }
    state.cart = newCart
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}
