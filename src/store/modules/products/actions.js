import shopItems from '@/data-src/data.json'

export const setProducts = ({commit}) => {
    const data = restructureData()
    commit('setProducts', data)
}

function restructureData() {
    let items = []

    shopItems.data.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));
    
    shopItems.data.forEach(category => {
        if(category.parent_id === null) {
            category.brands = []
            items.push(category)
        }
    })

    shopItems.data.forEach(item => {
        items.forEach(category => {
            if(item.parent_id === category.id) {
                category.brands.push(item)
            }
        })
    })

    items.forEach(category => {
        category.brands.forEach(brand => {
            brand.items = []
            shopItems.data.forEach(item => {
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
        parent_id: null
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
    const newBrand = {
        id: uuidv4(),
        title: payload.title,
        order: payload.count +1,
        parent_id: payload.parent_id
    }
    commit('addNewBrand', newBrand)
}