export default {
    props: ['dialog'],
    methods: {
        closeModal() {
            Event.$emit('itemModalClosed')
        }
    }
}