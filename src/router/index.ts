// 路由入口文件
import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
import routes from './router'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes]
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router