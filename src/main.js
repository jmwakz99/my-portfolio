import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Projects from './components/Project.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('projects', Projects)
Vue.component('about', About)
Vue.component('leg', Footer)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')