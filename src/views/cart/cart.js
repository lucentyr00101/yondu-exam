import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters([
            'getCart'
        ])
    },
    methods: {
        ...mapActions([
            'reduceQuantity', 'increaseQuantity'
        ])
    }
}