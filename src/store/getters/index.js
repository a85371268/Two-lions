export default {
  allCount (state) {
    return state.cart.reduce((result, item) => {
      result += item.count
      return result
    }, 0)
  },
  allPrice (state) {
    return state.cart.reduce((result, item) => {
      result += item.count * item.price
      return result
    }, 0)
  }
}
