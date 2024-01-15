<template>
     <div class="wrapper grid grid-cols-12 gap-3 min-w-screen min-h-screen w-full h-full">
    <div class="header col-span-full row-start-1 row-end-2 bg-white shadow-md"></div>
<!--        <div class="aside col-start-2 col-end-4 row-span-full"></div>-->
        <div class="main col-span-full row-start-2 row-end-auto px-2 lg:px-4 xl:px-6 ">
            <Card>
        <template #header>
        
            <div class="mb-4">
                <Calendar v-model="report_date" class="mr-4" dateFormat="yy-mm-dd" :pt="{ input: { placeholder: 'Дата отчета...' } }" />
                <!--            <Calendar v-model="date_to" class="mr-4" dateFormat="yy-mm-dd" :pt="{ input: { placeholder: 'Конечная дата...' } }" />-->
                <Button @click="getReport" label="Найти" />
            </div>
            <div class="filters flex mb-4">
                <div class="group basis-25 mr-3">
                    <MultiSelect
                        v-model="filters.sources"
                        :options="reportSources"
                        optionLabel="name"
                        placeholder="Источники..."
                    />
                </div>
                <div class="group basis-25 mr-3">
                    <MultiSelect
                        v-model="filters.buyers"
                        :options="reportBuyers"
                        optionLabel="name"
                        placeholder="Баеры..."
                    />
                </div>
            </div>
        </template>
        <template
            v-if="report"
            #content>
            <ReportTable :data="report.data" />
        </template>
    </Card>
        </div>
        <div class="footer col-span-full row-start-3 row-end-auto"></div>
    </div>
  
</template>

<script>
import dateTime from "../helpers/DateTime.vue";
import ReportTable from "../components/ReportTable.vue";
import apiRequest from "../helpers/ApiRequest.vue";

export default {
    name: "Home",
    components: { ReportTable },
    data() {
        return {
            report_date: null,
            filters: {
                sources: [],
                buyers: [],
            },
        }
    },
    computed: {
        report() {
            let report = this.$store.getters['getDashboardReport']
            return (typeof report === 'object' && Object.keys(report).length) ? report : false
        },
        reportData() {
            return []
        },
        reportSources() {
            let sources = []
            if (this.report) {
                this.report.data.map(elem => {
                    console.log(typeof elem.source)
                    if (typeof elem.source === 'object' && Object.keys(elem.source).length) {
                        sources[elem.source.id] = elem.source
                    }
                    return elem.source
                })
            }

            return sources.filter(elem => elem !== undefined)
        },
        reportBuyers() {
            let buyers = []
            if (this.report) {
                this.report.data.map(elem => {
                    if (typeof elem.buyer === 'object' && Object.keys(elem.buyer).length) {
                        buyers[elem.buyer.id] = elem.buyer
                    }
                    return elem.source
                })
            }

            return buyers.filter(elem => elem !== undefined)
        }

    },
    methods: {
        async getReport() {
            const filters = { ...this.filters }
            const date = (filters.date && filters.date instanceof Date)
                ? dateTime.format(filters.date)
                : dateTime.getYesterday()

            const report = await apiRequest.loadDashboardReportDetail(date)
            this.$store.commit('setDashboardReport', report)
        }
    },
    mounted() {
        this.getReport()
    }
}
</script>

<style scoped>

</style>
