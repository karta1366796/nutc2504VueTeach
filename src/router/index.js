import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';  // 確保導入 store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login' // 進入應用後重定向到 Login 頁面
    },
    {
      path: '/count',
      name: 'count',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Count.vue')
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/product',
      name: 'Product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Product.vue'),
      meta: { requiresAuth: true }, // 需要登錄才可訪問
    },
    {
      path: '/cart',
      name: 'Cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Cart.vue'),
      meta: { requiresAuth: true }, // 需要登錄才可訪問
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: () => import('../views/UserProfile.vue'),
      meta: { requiresAuth: true }, // 需要登錄才可訪問
    },
    {
      path: '/weather',
      name: 'Weather',
      component: () => import('../views/Weather.vue'),
    },
  ]
})

// 路由守衛，檢查是否需要登錄
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['user/isAuthenticated'];
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
