/**
 * Vue
 * @library
 */
// Lib imports
import Vue from 'vue'

// Application plugins
import 'v~/plugins/vue-material/theme.scss'
import { securedAxios, plainAxios } from 'v~/plugins/vue-axios/axios'
import VueMeta from 'v~/plugins/vue-meta/meta'
import VueElement from 'v~/plugins/vue-element/element'
// import VueMaterialAdapter from 'vue-material-adapter'
import VueMaterialAdapter from 'v~/plugins/vue-material/material'
import VueMedia from 'v~/plugins/vue-media/media'
import OutClick from 'v~/directives/out-click'
import { sync } from 'vuex-router-sync'
import store from 'v~/store'
import router from 'v~/router'

// Application imports
import 'v~/components/globals'
import App from './App.vue'
import 'v~/sass/app.scss'

// Application implementation
Vue.config.productionTip = false
Vue.use(OutClick)
Vue.use(VueMeta)
Vue.use(VueElement)
Vue.use(VueMaterialAdapter)
Vue.use(VueMedia)
sync(store, router)

new Vue({
  router,
  store,
  securedAxios,
  plainAxios,
  render: h => h(App)
}).$mount('#app')
