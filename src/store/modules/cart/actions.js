export const addItemToCart = ({commit}, payload) => {
    commit('addItemToCart', payload)
}

export const clearCart = ({commit}) => {
    commit('clearCart')
}