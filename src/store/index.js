import Vue from 'vue'
import Vuex from 'vuex'
import userPermission from './module/userPermission'
import navMenu from './module/homeNavMenu'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  modules: {
    userPermission,
    navMenu
  }
})