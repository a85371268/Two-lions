export default {
  addCart (state, action) {
    let newCart = state.cart
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
  },
  reduceCount (state, id) {
    let newCart = state.cart
    newCart = newCart.reduce((result, item) => {
      if (item.id === id) {
        item.count -= 1
      }
      if (item.count >= 1) {
        result.push(item)
      }
      return result
    }, [])
    state.cart = newCart
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  addCount (state, id) {
    state.cart.map(item => {
      if (item.id === id) {
        item.count += 1
      }
      return item
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}
