<template>
    <DataTable
        :value="data"
        paginator
        :rows="25"
        :rowsPerPageOptions="[25, 50, 100]"

    >
        <Column sortable field="buyer_id" header="Buyer">
            <template #body="slotProps">
                {{
                    (typeof slotProps.data.buyer === 'object' && slotProps.data.buyer.hasOwnProperty('name'))
                        ? slotProps.data.buyer.name
                        : slotProps.data.buyer_id
                }}
            </template>
        </Column>
        <Column sortable field="campaign_id" header="CampaignID"></Column>
        <Column sortable field="campaign_name" header="CampaignName" :class="'text-nowrap'"></Column>
        <Column sortable field="campaign_traffic_source_id" header="Source" :class="'text-nowrap'">
            <template #body="slotProps">
                {{
                    (typeof slotProps.data.source === 'object' && slotProps.data.source.hasOwnProperty('name'))
                        ? slotProps.data.source.name
                        : slotProps.data.campaign_traffic_source_id
                }}
            </template>
        </Column>
        <Column sortable field="conversions" header="Conversions"></Column>
        <Column sortable field="cost" header="Cost"></Column>
        <Column sortable field="cpa" header="CPA"></Column>
        <Column sortable field="cpv" header="CPV"></Column>
        <Column sortable field="custom_conversion_1" header="CustomConversion1"></Column>
        <Column sortable field="custom_revenue_1" header="CustomRevenue1"></Column>
        <Column sortable field="dynamic_payout" header="DynamicPayout"></Column>
        <Column sortable field="epv" header="EPV"></Column>
        <Column sortable field="profit" header="Profit"></Column>
        <Column sortable field="revenue" header="Revenue"></Column>
        <Column sortable field="roas" header="ROAS"></Column>
        <Column sortable field="roi" header="ROI"></Column>
        <Column sortable field="visits" header="Visits"></Column>
        <Column sortable field="unique_visits" header="UniqueVisits"></Column>
        <Column sortable field="visit_cvr" header="VisitCVR"></Column>
    </DataTable>
</template>

<script>
export default {
    name: "ReportTable",
    props: ['data'],
}
</script>

<style scoped>

</style>
