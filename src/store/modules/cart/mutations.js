export const addItemToCart = (state, payload) => {
    const index = state.cart_items.indexOf(payload)
    if(index === -1) {
        //not in array
        payload.quantity = 1
        state.cart_items.unshift(payload)
    } else {
        //in array
        state.cart_items[index]['quantity'] += 1
    }
}

export const clearCart = state => {
    state.cart_items = []
}

export const reduceQuantity = (state, payload) => {
    payload.quantity--
    const index = state.cart_items.indexOf(payload)
    if(payload.quantity === 0 ){
        state.cart_items.splice(index, 1)
    } else {
        //https://stackoverflow.com/questions/40860592/vuex-getter-not-updating
        //Vue is unable to react to mutations on state arrays (by index).
        //splice the value in at an index:
        state.cart_items.splice(index, 1, payload)
    }
}

export const increaseQuantity = (state, payload) => {
    payload.quantity++
    const index = state.cart_items.indexOf(payload)
    state.cart_items.splice(index, 1, payload)
}