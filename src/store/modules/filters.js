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
    bardata: [{ 'name': 'Peter', 'age': 33 }, { 'name': 'James', 'age': 3 }, { 'name': 'Nora', 'age': 15 }],
    linedata: [{ date: '1-May-12', 'close': 58.33 },
        { date: '21-Jan-13', 'close': 158.33 },
        { date: '11-May-13', 'close': 18.33 },
        { date: '1-Dec-14', 'close': 88.33 }
    ]
}

const getters = {
    auths: state => state.filters.auths,
    names: state => state.filters.names,
    frequency: state => state.filters.frequency,
    bardata: state => state.bardata,
    linedata: state => state.linedata
}

const actions = {
    CriteriaChanged: ({ commit }, criteria) => commit(types.CRITERIA_CHANGED, criteria)
}

const mutations = {
    [types.CRITERIA_CHANGED](state, criteria) {
        if (criteria.key === 'Auths') {
            state.criteria.Auths = criteria.value
            state.bardata.push({ 'name': 'Sachin', 'age': 27 })
        } else if (criteria.key === 'Frequency') {
            state.criteria.Frequency = criteria.value
            state.bardata.push.apply(state.bardata, [{ 'name': 'Janet', 'age': 13 }, { 'name': 'Tanvi', 'age': 3 }])
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