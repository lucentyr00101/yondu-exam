import { mapActions } from "vuex";

export default {
    props: ['dialog', 'brand'],
    methods: {
        ...mapActions([
            'addNewBrand'
        ]),
        closeModal() {
            Event.$emit('brandModalClosed')
        },
        insertNewBrand() {
            this.addNewBrand(this.brand)
            this.closeModal()
        }
    },
}