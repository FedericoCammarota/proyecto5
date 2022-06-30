import Vue from "vue"
import VueRouter from "vue-router"

import Easy from './components/Easy.vue'
import Hard from './components/Hard.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: "history",
    routes:[
        {path:"/easy",components: Easy},
        {path:"/hard",components: Hard}
    ]
})