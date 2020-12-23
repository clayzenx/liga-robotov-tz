import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(Antd);

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mobile: 450,
    tablet: 1250,
    desktop: Infinity,
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
