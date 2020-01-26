import Vue from 'vue'
import VModal from 'vue-js-modal'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
import App from './App.vue'
import store from './store'

require('../node_modules/normalize.css')

Vue.use(VModal, {componentName: 'vmodal'})

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
