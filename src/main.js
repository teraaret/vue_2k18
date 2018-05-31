import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './components/App.vue'
import Example from './components/Example.vue'
import About from './components/About.vue'
import Posts from './components/Posts.vue'
import Post from './components/Post.vue'

import Style from './style/style.less'
import FavIcon from './img/tree.ico'

var router = new VueRouter({
    routes: [
        { path: '/', component: App },
        { path: '/index', component: App },
        { path: '/example', component: Example },
        { path: '/about', component: About, props: {test: "prop from router on main.js"} },
        { path: '/posts', component: Posts },
        { path: '/posts/:index', name: 'post', component: Post, props: true },
    ]
})

new Vue({
    el: '#app',
    router: router,
//    render: h => h(App)
})
