// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/static/'),
  routes,
})

router.beforeEach((to, from, next) => {
  // if (to.path !== '/user/login' && to.path !== '/user/register' && useUserStore().token === '') {
  //   next('/user/login');
  // } else {
  //   next();
  // }
  next()
})

export default router
