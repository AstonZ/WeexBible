/**
 * Created by jiangxiaogang938 on 18/2/13.
 */
import Vue from "vue";
import Router from "vue-router";
import HOME from "./pages/home.vue";
import LOGIN from "./pages/login.vue";
Vue.use(Router);
export default new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', name: 'home', component: HOME},
        {path: '/login', name: 'login', component: LOGIN}
    ]
})