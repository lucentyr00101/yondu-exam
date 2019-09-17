export default {
    methods: {
        addToCart() {
            Event.$emit('addToCartSuccess')
        }
    }
}