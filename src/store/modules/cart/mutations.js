import _ from 'lodash'

export const addItemToCart = (state, payload) => {
    const index = _.indexOf(state.cart_items, payload)

    let unit_price = 0

    unit_price = payload.on_sale ? payload.sale_price : payload.price

    if(index === -1) {
        payload.quantity = 1
        payload.unit_price = unit_price
        payload.total_cost = payload.unit_price
        state.cart_items.unshift(payload)
    } else {
        state.cart_items[index]['quantity'] += 1
        state.cart_items[index]['total_cost'] = state.cart_items[index]['quantity'] * state.cart_items[index]['unit_price']
    }

    state.total_cost = computeTotalCost(state.cart_items)
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

    state.total_cost = computeTotalCost(state.cart_items)
}

export const increaseQuantity = (state, payload) => {
    payload.quantity++
    const index = state.cart_items.indexOf(payload)
    payload.total_cost = payload.unit_price * payload.quantity
    state.cart_items.splice(index, 1, payload)

    state.total_cost = computeTotalCost(state.cart_items)
}

function computeTotalCost(items) {
    let total = 0
    _.forEach(items, item => {
        total += item.total_cost
    })
    return total
}