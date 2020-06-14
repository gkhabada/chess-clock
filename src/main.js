import Vue from 'vue'
import App from './App.vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

Vue.use(VueSocketIOExt, io('http://localhost:3000'));

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
