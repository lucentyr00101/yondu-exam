import { mapActions } from "vuex"

export default {
    props: ['dialog', 'item'],
    methods: {
        ...mapActions([
            'addNewItem'
        ]),
        closeModal() {
            Event.$emit('itemModalClosed')
        },
        submitItem() {
            this.addNewItem(this.item)
            this.closeModal()
        }
    }
}