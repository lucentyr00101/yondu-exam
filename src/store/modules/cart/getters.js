export const getCart = state => {
    return state.cart_items
}

export const getCartItemsCount = state => {
    return state.cart_items.length
}

export const getTotalCost = state => {
    return state.total_cost
}