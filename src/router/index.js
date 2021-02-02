import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },{
      path: '/main',
      name: 'main',
      meta: { title: '主页' },
      component: () => import('../components/main/Main.vue')
    }
  ]
})
