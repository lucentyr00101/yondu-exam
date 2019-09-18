export const setProducts = (state, payload) => {
    state.items = payload
}

export const addNewCategory =(state, payload) => {
    state.items.push(payload)
}