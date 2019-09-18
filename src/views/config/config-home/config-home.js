import { mapGetters } from "vuex";

export default {
    data() {
        return {
            category: {
                title: '',
                count: 0,
            },
            brand: {
                parent_id: '',
                count: 0,
                title: ''
            },
            item: {},
            modals: {
                category: false,
                brand: false,
                item: false
            }
        }
    },
    computed: {
        ...mapGetters([
            'getProducts'
        ])
    },
    components: {
        categoryModal: () => import('@/components/config/category-modal'),
        brandModal: () => import('@/components/config/brand-modal'),
        itemModal: () => import('@/components/config/item-modal')
    },
    mounted() {
        Event.$on('categoryModalClosed', () => {
            this.modals.category = false
        })
        Event.$on('brandModalClosed', () => {
            this.modals.brand = false
        })
        Event.$on('itemModalClosed', () => {
            this.modals.item = false
        })
    },
    beforeDestroy() {
        Event.$off('categoryModalClosed')
        Event.$off('brandModalClosed')
        Event.$off('itemModalClosed')
    }
}