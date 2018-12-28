import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home.vue'
import Search from '@/page/Search.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        }
    ]
})
