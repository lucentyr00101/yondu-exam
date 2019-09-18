export const setProducts = (state, payload) => {
    state.items = payload
}

export const addNewCategory =(state, payload) => {
    state.items.push(payload)
}

export const addNewBrand = (state, payload) => {
    state.items.forEach(category => {
        if(category.id === payload.parent_id) {
            category.brands.push(payload)
        }
    });
}

export const addNewItem = (state, payload) => {
    console.log(state)
    console.log(payload)
}