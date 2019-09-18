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
    let index = state.cart_items.indexOf(payload)
    console.log(payload.quantity)
    if(payload.quantity === 0 ){
        state.cart_items.splice(index, 1)
    } else {
        state.cart_items[index] = payload
    }
}

export const increaseQuantity = (state, payload) => {
    let index = state.cart_items.indexOf(payload)
    state.cart_items[index].quantity++
}