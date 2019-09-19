import { mapGetters, mapActions } from "vuex";

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
            item: {
                id: '',
                title: '',
                order: '',
                parent_id: '',
                on_sale: false,
                price: '',
                sale_price: '',
                count: 0,
            },
            modals: {
                category: false,
                brand: false,
                item: false
            }
        }
    },
    methods: {
        ...mapActions([
            'deleteCategory', 'deleteBrand', 'deleteItem'
        ]),
        triggerCategoryModal() {
            this.modals.category = true
            this.category.count = this.getProducts.length
        },
        triggerBrandModal(length) {
            this.modals.brand = true
            this.brand.parent_id = this.category.id
            this.brand.count = length
        },
        triggerItemModal(length, brand_id) {
            this.modals.item = true
            this.item.parent_id = brand_id
            this.item.count = length
            console.log(this.item.parent_id)
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