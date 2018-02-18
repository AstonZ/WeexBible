/**
 * Created by jiangxiaogang938 on 18/2/13.
 */
import Vue from "vue";
import Router from "vue-router";
// import HOME from "./pages/home.vue";
// import LOGIN from "./pages/login.vue";

import Home from 'pages/bible/home.vue'
import Reference from 'pages/reference/reference.vue'
import Translation from 'pages/translation/translation.vue'
import User from 'pages/user/user.vue'
import Login from 'pages/user/user.vue'

Vue.use(Router);
export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/reference', component: Reference },
        { path: '/translation', component: Translation },
        { path: '/user', component: User },
        { path: '/Login', component: Translation }       
    ]
})