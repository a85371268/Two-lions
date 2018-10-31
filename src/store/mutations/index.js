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
    state.cart = state.cart.reduce((result, item) => {
      if (item.id === id) {
        item.count -= 1
      }
      if (item.count >= 1) {
        result.push(item)
      }
      return result
    }, [])
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  addCount (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.count += 1
      }
      return item
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  addHistory (state, word) {
    if (!state.historys.includes(word)) {
      state.historys.push(word)
      window.localStorage.setItem('tl-history', state.historys.join(','))
    }
  },
  clearHistory (state) {
    state.historys = []
    window.localStorage.removeItem('tl-history')
  },
  changeChecked (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  allChecked (state) {
    if (state.cart.some(item => item.isChecked === false)) {
      state.cart = state.cart.map(item => {
        item.isChecked = true
        return item
      })
    } else {
      state.cart = state.cart.map(item => {
        item.isChecked = !item.isChecked
        return item
      })
    }

    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}
