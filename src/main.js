import { createApp } from "vue";
import { createPinia } from "pinia";

import Vuex from 'vuex';


import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";


// PrimeVue Material Design Theme
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Divider from "primevue/divider";
import Slider from "primevue/slider";
import ToggleButton from "primevue/togglebutton";
import Menubar from "primevue/menubar";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Image from 'primevue/image';
import Calendar from 'primevue/calendar';
import InputSwitch from 'primevue/inputswitch';


const app = createApp(App);

app.use(createPinia());
app.use(router);

// Toast Service
app.use(ToastService);

// PrimeVue Configuration
app.use(PrimeVue, { ripple: true });
app.use(Vuex);
app.component("pv-data-table", DataTable);
app.component("pv-column", Column);
app.component("pv-toolbar", Toolbar);
app.component("pv-input-text", InputText);
app.component("pv-textarea", Textarea);
app.component("pv-button", Button);
app.component("pv-row", Row);
app.component("pv-sidebar", Sidebar);
app.component("pv-menu", Menu);
app.component("pv-dialog", Dialog);
app.component("pv-toast", Toast);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-card", Card);
app.component("pv-divider", Divider);
app.component("pv-slider", Slider);
app.component("pv-toogle-buttom", ToggleButton);
app.component("pv-menubar", Menubar);
app.component("pv-dataview", DataView);
app.component("pv-image", Image);
app.component("pv-calendar", Calendar);
app.component("pv-switch", InputSwitch);
app.mount("#app");
