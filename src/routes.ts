import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requireAdmin?: boolean
    requireAuth?: boolean
    requireGuest?: boolean
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'), // use default layout
    meta: {
      requireAuth: true,
    },
    children: [
      { path: '/', component: () => import('@/pages/index.vue') },
      { path: '/test', component: () => import('@/pages/test.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/login.vue'),
    meta: { requireGuest: true },
    children: [{ path: '/', component: () => import('@/pages/index.vue') }],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/login.vue'),
    meta: { requireAdmin: true },
    children: [{ path: '/', component: () => import('@/pages/index.vue') }],
  },
  {
    path: '/:path(.*)*',
    component: () => import('@/layouts/error.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
