import Vue from "vue";
import Main from './main.vue';
import router from './router/router.map.js';
import axios from "./http/axios.config.js";
import '@/mock';


//全局ajax
Vue.prototype.$http = axios;

new Vue({
    router,
    render: h => h(Main)
}).$mount('#app');