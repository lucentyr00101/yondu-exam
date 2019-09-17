export default {
    data() {
        return {
            drawer: true,
            menuItems: [
                { title: 'Products', icon: 'mdi-format-list-bulleted-square', link: { name: 'products-index' } },
                { title: 'Config', icon: 'mdi-settings', link: { name: 'config-home' } }
            ]
        }
    }
}