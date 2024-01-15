<script>
import axios from "axios";
import notify from "../helpers/Notify.vue";

export default {
    loadReportsList(params = {}) {
        const url = '/reports'
        return this.get(url, { params: params })
    },

    loadDashboardReportDetail(date, config = {}) {
        if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}/is.test(date)) {
            throw new Error('API_REQUEST:invalid date argument')
        }
        const url = `/reports/detail/${date}`
        return this.get(url, config)
    },

    get(url, config) {
        return axios.get(url, config)
            .then(response => {
                const { data, status } = response
                if (status !== 200) return notify.apiMessage(response)
                return data
            })
            .catch(error => notify.apiError(error))
    },
}
</script>
