import Vue from 'vue'
import App from './App.vue'

import '@mozilla-protocol/core/protocol/css/protocol.css'
import '@mozilla-protocol/core/protocol/css/protocol-extra.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
