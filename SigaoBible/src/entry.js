import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router.js';
import weex from 'weex-vue-render';
//
weex.init(Vue);
new Vue(Vue.util.extend({
    el: '#root',
    router
}, App));