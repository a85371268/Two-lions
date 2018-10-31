export default {
  allCount (state) {
    return state.cart.reduce((result, item) => {
      if (item.isChecked === true) {
        result += item.count
      }
      return result
    }, 0)
  },
  allPrice (state) {
    return state.cart.reduce((result, item) => {
      if (item.isChecked === true) {
        result += item.count * item.price
      }
      return result
    }, 0)
  },
  isAllChecked (state) {
    return !state.cart.some(item => item.isChecked === false)
  }
}
