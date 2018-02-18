// import Vue from 'vue';
// import App from '@/App.vue';
// import router from '@/router.js';
// import weex from 'weex-vue-render';
// //
// weex.init(Vue);
// new Vue(Vue.util.extend({
//     el: '#root',
//     router
// }, App));

import Vue from 'vue';

import App from 'src/App.vue'
import router from 'src/router'
import * as filters from 'src/filters'
import mixins from 'src/mixins'
// import weex from 'weex-vue-render';

// weex.init(Vue);

Object.keys(filters).forEach( key => {
    Vue.filter(key, filters[key])
})

Vue.mixin(mixins);

new Vue(Vue.util.extend({
    el: '#root', router
}, App));

router.push('/');