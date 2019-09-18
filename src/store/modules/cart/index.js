import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

export default {
    state: {
        cart_items: [],
        total_cost: 0
    },
    mutations, actions, getters
}