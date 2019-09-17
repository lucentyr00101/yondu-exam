import shopItems from '@/data-src/data.json'

export default {
    data() {
        return {
            categories: [],
            brands: [],
            products: [],
        }
    },
    methods: {
        fixData() {
            shopItems.data.forEach(el => {
                if(el.parent_id === null) {
                    this.categories.push(el)
                }
            });
        },
        test() {
            shopItems.data.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));
            console.log(shopItems)
        }
    },
    mounted() {
        this.test()
    }
}