import { createApp } from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

let pinia = createPinia();
var app = createApp(App);
app.use(router);
app.use(PiniaVuePlugin);
app.use(pinia);
app.mount('#dashboard');

