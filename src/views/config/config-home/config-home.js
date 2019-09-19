import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            category: {
                title: '',
            },
            brand: {
                parent_id: '',
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
            },
            modals: {
                category: false,
                brand: false,
                item: false
            },
            create: true,
        }
    },
    methods: {
        ...mapActions([
            'deleteCategory', 'deleteBrand', 'deleteItem'
        ]),
        triggerCategoryModal() {
            this.modals.category = true
            this.create = true
            this.category.order = this.getProducts.length + 1
        },
        triggerBrandModal(length, category_id) {
            this.modals.brand = true
            this.brand.parent_id = category_id
            this.create = true
            this.brand.order = length + 1
        },
        triggerItemModal(length, brand_id) {
            this.modals.item = true
            this.item.parent_id = brand_id
            this.create = true
            this.item.order = length + 1
        },
        editCategory(category) {
            this.category = category
            this.create = false
            this.modals.category = true
        },
        editBrand(brand) {
            this.brand = brand
            this.create = false
            this.modals.brand = true
        },
        editItem(item) {
            this.item = item
            this.create = false
            this.modals.item = true
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
            this.category = {
                title: '',
                count: 0,
            }
            this.modals.category = false
        })
        Event.$on('brandModalClosed', () => {
            this.brand = {
                parent_id: '',
                count: 0,
                title: ''
            }
            this.modals.brand = false
        })
        Event.$on('itemModalClosed', () => {
            this.item = {
                id: '',
                title: '',
                order: '',
                parent_id: '',
                on_sale: false,
                price: '',
                sale_price: '',
                count: 0,
            }
            this.modals.item = false
        })
    },
    beforeDestroy() {
        Event.$off('categoryModalClosed')
        Event.$off('brandModalClosed')
        Event.$off('itemModalClosed')
    }
}