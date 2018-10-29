export default {
  allCount (state) {
    return state.cart.reduce((result, item) => {
      result += item.count
      return result
    }, 0)
  }
}
