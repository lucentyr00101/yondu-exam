export const getCart = state => {
    return state.cart_items
}

export const getCartItemsCount = state => {
    return state.cart_items.length
}