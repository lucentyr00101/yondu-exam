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