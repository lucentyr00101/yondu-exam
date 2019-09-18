export const addItemToCart = (state, payload) => {
    const index = state.cart_items.indexOf(payload)
    let unit_price = 0

    if(payload.on_sale) {
        unit_price = payload.sale_price
    } else {
        unit_price = payload.price
    }

    if(index === -1) {
        //not in array
        payload.quantity = 1
        payload.unit_price = unit_price
        payload.total_cost = payload.unit_price * payload.quantity
        state.cart_items.unshift(payload)
    } else {
        //in array
        payload.unit_price = unit_price
        payload.total_cost = payload.unit_price * (payload.quantity + 1)
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
        payload.total_cost = payload.unit_price * payload.quantity
        state.cart_items.splice(index, 1, payload)
    }
}

export const increaseQuantity = (state, payload) => {
    payload.quantity++
    const index = state.cart_items.indexOf(payload)
    payload.total_cost = payload.unit_price * payload.quantity
    state.cart_items.splice(index, 1, payload)
}

export const setTotalCost = (state, payload) => {
    state.total_cost = payload
}