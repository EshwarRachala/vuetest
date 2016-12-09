import * as types from '../mutation-types'

const state = {
    filters: {
        auths: ['ipAuth', 'opAuth'],
        frequency: ['monthly', 'quarterly', 'annually']
    },
    criteria: {
        Auths: 'ipAuth',
        Frequency: 'monthly'
    },
    bardata: [{ 'name': 'Eshwar', 'age': 33 },
        { 'name': 'Peter', 'age': 3 },
        { 'name': 'JOhn', 'age': 15 }
    ]
}

const getters = {
    auths: state => state.filters.auths,
    names: state => state.filters.names,
    frequency: state => state.filters.frequency,
    bardata: state => state.bardata
}

const actions = {
    CriteriaChanged: ({ commit }, criteria) => commit(types.CRITERIA_CHANGED, criteria),
    getBarData: ({ commit }, value) => commit(types.BARDATA, value)
}

const mutations = {
    [types.CRITERIA_CHANGED](state, criteria) {
        if (criteria.key === 'Auths') {
            state.criteria.Auths = criteria.value
            state.bardata = null
            state.bardata = [{ 'name': 'Eshwar', 'age': 33 }, { 'name': 'Mounika', 'age': 27 }]
        } else if (criteria.key === 'Frequency') {
            state.criteria.Frequency = criteria.value
            state.bardata = null
            state.bardata = [{ 'name': 'Eshwar', 'age': 33 }, { 'name': 'Mounika', 'age': 27 }, { 'name': 'Tanvi', 'age': 3 }]
        }
    },
    [types.BARDATA](state, value) {
        debugger
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}