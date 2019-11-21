import Vue from 'vue'
import App from './components/App.vue'
import router from "./routes";

Vue.config.productionTip = false;

new Vue({
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app');
