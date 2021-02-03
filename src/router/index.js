import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },{
      path: '/home',
      name: 'home',
      meta: { title: '主页' },
      component: () => import('../components/home/Home.vue')
    },{
      path: '/main',
      name: 'main',
      meta: { title: '首页' },
      component: () => import('../components/home/Main.vue')
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
//
//     if (token === 'null' || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });
export default router;
