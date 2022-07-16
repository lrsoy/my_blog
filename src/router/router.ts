import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("~/views/home/index.vue"),
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('~/views/error/404.vue'),
  },
] as RouteRecordRaw[]


export default routes