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