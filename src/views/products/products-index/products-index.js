export default {
    data() {
        return {
            snackbar: {
                message: '',
                color: '',
                visible: false,
            }
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
    mounted() {
        Event.$on('addToCartSuccess', () => {
            console.log('add to cart success')
            this.showSnackbar('Item added to cart. ADD PRODUCT NAME HERE', 'success')
        })
    },
    beforeDestroy() {
        Event.$off('addToCartSuccess')
    }
}