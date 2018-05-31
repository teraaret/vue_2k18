import Vue from 'vue'

import VueCookie from 'vue-cookie'
Vue.use(VueCookie);

// Router (uses in Vue object)
import router from './router'

// Root template (uses in Vue object)
import Root from './components/Root.vue'

// Styles and favicon
import Style from './style/style.less'
import FavIcon from './img/tree.ico'

new Vue({
    el: '#app',
    router,
    components: { Root },
    template: '<Root/>'
})
