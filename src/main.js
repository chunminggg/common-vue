import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/locale'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import store from '@/store'
Vue.config.productionTip = false
Vue.use(ViewUI, {
  i18n: (key, value) => i18n.t(key, value)
})
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
