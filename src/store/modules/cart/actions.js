export const addItemToCart = ({commit}, payload) => {
    commit('addItemToCart', payload)
}

export const clearCart = ({commit}) => {
    commit('clearCart')
}

export const reduceQuantity = ({commit},payload) => {
    commit('reduceQuantity', payload)
}

export const increaseQuantity = ({commit}, payload) => {
    commit('increaseQuantity', payload)
}