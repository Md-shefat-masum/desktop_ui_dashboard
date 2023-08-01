import { createApp } from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './plugins/axios_setup';
import './plugins/moment_setup';
import './plugins/preview_image';
import './plugins/auto_logout';
import './plugins/preloader';
import './plugins/csv_to_array';
import './plugins/demo_data_load';
import './plugins/get_selector_form_data';
import './plugins/set_selector_form_data';
import './plugins/enToBn';

import debounce from 'debounce';
import { CsvBuilder } from 'filefy';
window.debounce = debounce;
window.CsvBuilder = CsvBuilder;

/*********************
   dashboard vue setup
**********************/

let pinia = createPinia();
var app = createApp(App);

app.config.globalProperties.$number_format = (number = 0) => new Intl.NumberFormat().format(number)
app.config.globalProperties.$moment = moment

app.use(router);
app.use(PiniaVuePlugin);
app.use(pinia);
app.mount('#dashboard');

