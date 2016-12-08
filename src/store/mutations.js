import * as types from './mutation-types'

const mutations = {
    [types.CHANGENAME](state, value) {
        state.name = value
    },

    [types.INCREMEMNT](state) {
        state.count++
    },

    [types.DECREMENT](state) {
        state.count--
    }
}

export default mutations