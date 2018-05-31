import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from '../components/App.vue'
import Example from '../components/Example.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import About from '../components/About.vue'
import Auth from '../components/Auth/Auth'

export default new VueRouter({
    routes: [
        { path: '/', component: App },
        { path: '/index', component: App },
        { path: '/posts', component: Posts },
        { path: '/posts/:index', name: 'post', component: Post, props: true },
        { path: '/about', component: About, props: {test: "prop from router on main.js"} },
        { path: '/auth', component: Auth },
    ]
})
