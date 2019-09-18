import { mapActions } from "vuex"

export default {
    props: ['dialog', 'category'],
    methods: {
        ...mapActions([
            'addNewCategory'
        ]),
        closeModal() {
            Event.$emit('categoryModalClosed')
        },
        submitCategory() {
            this.addNewCategory(this.category)
            this.closeModal()
        }
    }
}