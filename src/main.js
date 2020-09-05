import Vue from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCog} from '@fortawesome/free-solid-svg-icons'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')




library.add(faUserCog)
library.add(faTrashAlt)
library.add(faClock)



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


