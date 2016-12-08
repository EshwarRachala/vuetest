import * as types from './mutation-types'

const mutations = {
    [types.INCREMEMNT](state) {
        state.count++
    },
    [types.DECREMENT](state) {
        state.count--
    }
}

export default mutations