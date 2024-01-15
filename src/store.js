import { createStore } from 'vuex'

const store = createStore({
    state: {
        dashboard: {
            report: {},
        }
    },
    getters: {
        getDashboardReport(state) {
            return state.dashboard.report
        }
    },
    mutations: {
        setDashboardReport(state, report) {
            state.dashboard.report = report
        }
    }
})

export default store
