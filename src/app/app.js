import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            drawer: true,
            menuItems: [
                { title: 'Products', icon: 'mdi-format-list-bulleted-square', link: { name: 'products-index' }, exact: true },
                { title: 'Cart', icon: 'mdi-cart', link: { name: 'cart' }, exact: false },
                { title: 'Config', icon: 'mdi-settings', link: { name: 'config-home' }, exact: false }
            ]
        }
    },
    methods: {
        ...mapActions([
            'setProducts'
        ])
    },
    computed: {
        ...mapGetters([
            'getCartItemsCount'
        ])
    },
    mounted() {
        this.setProducts()
    }
}