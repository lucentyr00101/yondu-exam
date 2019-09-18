import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            items: []
        }
    },
    methods: {
        ...mapActions([
            'reduceQuantity', 'increaseQuantity'
        ])
    },
    computed: {
        ...mapGetters([
            'getCart'
        ])
    }
}