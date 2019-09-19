import { mapActions } from "vuex";

export default {
    props: ['dialog', 'brand', 'create'],
    methods: {
        ...mapActions([
            'addNewBrand', 'editBrand'
        ]),
        closeModal() {
            Event.$emit('brandModalClosed')
        },
        insertNewBrand() {
            this.create ? this.addNewBrand(this.brand) : this.editBrand(this.brand)
            this.closeModal()
        }
    },
}