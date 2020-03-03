import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/router.js'
import ViewUI from 'view-design'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start()
  /* 这里写路由跳转逻辑
  1 没有登录状态 跳非登录页面
  2 没有登录状态 跳登录页面
  3 有登录状态 跳登录页面
  4 有登录状态 跳非登录页面
  */
    next()
  
})

router.afterEach(to => {
  ViewUI.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
