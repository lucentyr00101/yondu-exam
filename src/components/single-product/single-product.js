import { mapActions } from "vuex";

export default {
    props: ['product'],
    methods: {
        ...mapActions([
            'addItemToCart'
        ]),
        addToCart() {
            Event.$emit('addToCartSuccess', this.product.title)
            this.addItemToCart(this.product)
        },
    }
}