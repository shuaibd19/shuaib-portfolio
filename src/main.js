import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnimate from 'vue-animate-scroll'
import VueKinesis from 'vue-kinesis'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Eagle from 'eagle.js'
import 'animate.css'
import Vuelidate from 'vuelidate'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAnimate)
Vue.use(VueKinesis)
Vue.use(Eagle)
Vue.use(Vuelidate)

// Vue.use(vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
