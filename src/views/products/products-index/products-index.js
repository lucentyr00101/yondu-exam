import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            snackbar: {
                message: '',
                color: '',
                visible: false,
            },
            products: []
        }
    },
    methods: {
        showSnackbar(message, color) {
            this.snackbar.visible = true
            this.snackbar.message = message
            this.snackbar.color = color
        }
    },
    components: {
        product: () => import('@/components/single-product')
    },
    computed: {
        ...mapGetters([
            'getProducts'
        ])
    },
    mounted() {
        Event.$on('addToCartSuccess', productName => {
            console.log('add to cart success')
            this.showSnackbar(`${productName} added to cart. `, 'success')
        })
    },
    beforeDestroy() {
        Event.$off('addToCartSuccess')
    }
}