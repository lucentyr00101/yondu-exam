import { mapActions } from "vuex"

export default {
    props: ['dialog', 'category', 'create'],
    methods: {
        ...mapActions([
            'addNewCategory', 'editCategory'
        ]),
        closeModal() {
            Event.$emit('categoryModalClosed')
        },
        submitCategory() {
            this.create ? this.addNewCategory(this.category) : this.editCategory(this.category)
            this.closeModal()
        }
    },
}