export default {
    props: ['product'],
    methods: {
        addToCart() {
            Event.$emit('addToCartSuccess', this.product.title)
        },
    }
}