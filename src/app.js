import { createApp } from 'vue';
import router from "./router.js";
import theme from "./theme.js";
import store from "./store.js";

import Root from "./Root.vue";
import Login from "./Login.vue";

import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import '../index.css'

import PrimeVue from 'primevue/config';
import FileUpload from 'primevue/fileupload';
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import MultiSelect from 'primevue/multiselect';


const app = createApp(Root);
const login = createApp(Login);

app.use(router)
app.use(store)
app.use(PrimeVue, {
    unstyled: true, //apply preset
    pt: theme,
});
app.use(Vue3Toasity, {
    autoClose: 3000,
    // ...
});

app.component('Calendar', Calendar);
app.component('FileUpload', FileUpload);
app.component('Card', Card);
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('MultiSelect', MultiSelect);

app.mount('#app');

if (document.getElementById('login') !== undefined && document.getElementById('login') !== null) {
    login.use(Vue3Toasity, {
        autoClose: 3000,
        // ...
    });
    login.mount('#login');
}
