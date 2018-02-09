import Router from 'vue-router'

import Home from 'pages/bible/home.vue'
import Reference from 'pages/reference/reference.vue'
import Translation from 'pages/translation.vue'
import User from 'pages/user/user.vue'

Vue.use(Router)

export default new Router ({
    mode: 'abstract',
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/reference', component: Reference },
        { path: '/translation', component: Translation },
        { path: '/user', component: User }
    ]
})