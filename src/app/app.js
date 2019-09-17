import { mapActions } from "vuex";

export default {
    data() {
        return {
            drawer: true,
            menuItems: [
                { title: 'Products', icon: 'mdi-format-list-bulleted-square', link: { name: 'products-index' } },
                { title: 'Cart', icon: 'mdi-cart', link: { name: 'cart' } },
                { title: 'Config', icon: 'mdi-settings', link: { name: 'config-home' } }
            ]
        }
    },
    methods: {
        ...mapActions([
            'setProducts'
        ])
    },
    mounted() {
        this.setProducts()
    }
}