import { mapActions } from "vuex"

export default {
    props: ['dialog', 'item', 'create'],
    methods: {
        ...mapActions([
            'addNewItem', 'editItem'
        ]),
        closeModal() {
            Event.$emit('itemModalClosed')
        },
        submitItem() {
            this.create ? this.addNewItem(this.item) : this.editItem(this.item)
            this.closeModal()
        }
    }
}