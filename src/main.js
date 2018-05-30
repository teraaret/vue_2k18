import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App.vue'
import Example from './Example.vue'
import About from './About.vue'

import Style from './style/style.less'
import Icon from './img/tree.ico'

var router = new VueRouter({
    routes: [
        { path: '/', component: App },
        { path: '/index', component: App },
        { path: '/about', component: About, props: {test: "123", foo_change_lorem: function() {alert("clicked!")} } },
    ]
})

new Vue({
    el: '#app',
    router: router,
    data: {
        test: "lorem"
    },
    methods: {
        change_lorem: function() {
            alert("changed!");
        }
    }
//    render: h => h(App)
})
