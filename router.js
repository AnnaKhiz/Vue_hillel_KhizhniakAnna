import {createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    path: '/',
    component: () => import("@/pages/ArticlesList.vue"),
  },
  {
    path: '/create',
    component: () => import("@/pages/ArticleCreate.vue"),
  },
  {
    path: '/info',
    component: () => import("@/pages/ArticleInfo.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
