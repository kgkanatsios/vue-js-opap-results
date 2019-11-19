import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "./custom.scss";

import axios from "axios";
axios.defaults.baseURL = "https://api.opap.gr/draws/v3.0";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
