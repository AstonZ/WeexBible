import Vue from 'vue';

import App from './App.vue'
import router from './router'
import * as filters from './filters'
import mixins from './mixins'

Object.keys(filters).forEach( key => {
    Vue.filter(key, filters[key])
})

Vue.mixin(mixins);

//
new Vue(Vue.util.extend({
    el: '#root', router
}, App));

router.push('/');

// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);

// weex.init(Vue);

const App = require('../../../src/pages/reference/reference.vue');
App.el = '#root';
new Vue(App);
