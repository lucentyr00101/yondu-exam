import shopItems from '@/data-src/data.json'
import _ from 'lodash'

export const setProducts = ({commit}) => {
    const data = restructureData()
    commit('setProducts', data)
}

function restructureData() {
    let items = []

    shopItems.data = _.sortBy(shopItems.data, o => { return o.order })

    _.forEach(shopItems.data, category => {
        if(category.parent_id === null) {
            category.brands = []
            items.push(category)
        }
    })

    _.forEach(shopItems.data, item => {
        _.forEach(items, category => {
            if(item.parent_id === category.id) {
                category.brands.push(item)
            }
        })
    })

    _.forEach(items, category => {
        _.forEach(category.brands, brand => {
            brand.items = []
            _.forEach(shopItems.data, item => {
                if(brand.id === item.parent_id && item.price) {
                    brand.items.push(item)
                }
            })
        })
    })
    
    return items
}

export const addNewCategory = ({commit}, payload) => {
    const newCategory = {
        id: uuidv4(),
        title: payload.title,
        order: payload.count + 1,
        parent_id: null,
        brands: []
    }
    commit('addNewCategory', newCategory)
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const addNewBrand = ({commit}, payload) => {
    console.log(payload)
    const newBrand = {
        id: uuidv4(),
        title: payload.title,
        order: payload.count +1,
        parent_id: payload.parent_id,
        items: []
    }
    commit('addNewBrand', newBrand)
}

export const addNewItem = ({commit}, payload) => {
    const newItem = {
        id: uuidv4(),
        title: payload.title,
        order: payload.count + 1,
        parent_id: payload.parent_id,
        on_sale: payload.on_sale,
        price: payload.price,
        sale_price: payload.sale_price
    }
    commit('addNewItem', newItem)
}

export const deleteCategory = ({commit}, payload) => {
    commit('deleteCategory', payload)
}

export const deleteBrand = ({commit}, payload) => {
    commit('deleteBrand', payload)
}

export const deleteItem = ({commit}, payload) => {
    commit('deleteItem', payload)
}