import shopItems from '@/data-src/data.json'
import _ from 'lodash'

export const setProducts = ({commit}) => {
    const data = restructureData()
    commit('setProducts', data)
}

const restructureData = () => {
    shopItems.data = _.sortBy(shopItems.data, o => { o.order })

    let items = _.filter(shopItems.data, x => { return x.parent_id === null })

    _.filter(items, category => {
        category.brands = _.filter(shopItems.data, shopItem => { return shopItem.parent_id === category.id })
    })

    _.forEach(items, item => {
        _.filter(item.brands, brand => {
            brand.items = _.filter(shopItems.data, shopItem => { return shopItem.parent_id === brand.id })
        })
    })

    return items
}

export const addNewCategory = ({commit}, payload) => {
    const newCategory = {
        id: uuidv4(),
        title: payload.title,
        order: payload.order,
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
        order: payload.order,
        parent_id: payload.parent_id,
        items: []
    }
    commit('addNewBrand', newBrand)
}

export const addNewItem = ({commit}, payload) => {
    const newItem = {
        id: uuidv4(),
        title: payload.title,
        order: payload.order,
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

export const editCategory = ({commit}, payload) => {
    commit('editCategory', payload)
}

export const editBrand = ({commit}, payload) => {
    commit('editBrand', payload)
}

export const editItem = ({commit}, payload) => {
    commit('editItem', payload)
}