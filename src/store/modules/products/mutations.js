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

export const deleteCategory = (state, payload) => {
    const index = _.indexOf(state.items, payload)
    state.items.splice(index, 1)
}

export const deleteBrand = (state, payload) => {
    _.forEach(state.items, category => {
        if(payload.parent_id === category.id) {
            const index = _.indexOf(category.brands, payload)
            category.brands.splice(index, 1)
        }
    })
}

export const deleteItem = (state, payload) => {
    _.forEach(state.items, category => {
        _.forEach(category.brands, brand => {
            _.forEach(brand.items, item => {
                if(item.id === payload.id) {
                    const index = _.indexOf(brand.items, payload)
                    brand.items.splice(index, 1)
                }
            })
        })
    })
}

export const editCategory =(state, payload) => {
    const index = _.indexOf(state.items, payload)
    state.items.splice(index, 1, payload)
}

export const editBrand = (state, payload) => {
    _.forEach(state.items, category =>{
        const index = _.indexOf(category.brands, payload)
        category.brands.splice(index, 1, payload)
    })
}

export const editItem = (state, payload) => {
    _.forEach(state.items, category => {
        _.forEach(category.brands, brand => {
            const index = _.indexOf(brand.items, payload)
            brand.items.splice(index, 1, payload)
        })
    })
}