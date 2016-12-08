import * as types from './mutation-types'

const actions = {
    increment: ({ commit }) => commit(types.INCREMEMNT),
    decrement: ({ commit }) => commit(types.DECREMENT),
    incrementIfOdd({ commit, state }) {
        debugger
        console.log('hi')
        if ((state.count + 1) % 2 === 0) {
            commit(types.INCREMEMNT)
        }
    },
    decrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit(types.DECREMENT)
                resolve()
            }, 1000)
        })
    }
}

export default actions