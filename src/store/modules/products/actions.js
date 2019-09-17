import shopItems from '@/data-src/data.json'

export const setProducts = () => {
    fixData()
}

function fixData() {
    shopItems.data.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));
    console.log(shopItems)
}