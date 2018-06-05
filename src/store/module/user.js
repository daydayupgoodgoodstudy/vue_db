const state = {
    count:1
}
// getters
const getters = {
    checkoutStatus: state => state.checkoutStatus,
  
    cartProducts: (state, getters, rootState) => {
      return state.added.map(({ id, quantity }) => {
        const product = rootState.products.all.find(product => product.id === id)
        return {
          title: product.title,
          price: product.price,
          quantity
        }
      })
    },
  
    cartTotalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    }
  }


export default {
    state,
    getters
}