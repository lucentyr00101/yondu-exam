import _ from 'lodash'

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
    _.forEach(state.items, category => {
        _.forEach(category.brands, brand => {
            if (brand.id === payload.parent_id) {
                brand.items.push(payload)
            }
        })
    })
}