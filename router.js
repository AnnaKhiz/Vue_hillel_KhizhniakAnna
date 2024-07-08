import {createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    path: '/',
    component: () => import("@/pages/ArticlesList.vue"),
    props: true
  },
  {
    path: '/create',
    component: () => import("@/pages/ArticleCreate.vue"),
    props: true
  },
  {
    path: '/article/:id',
    component: () => import("@/pages/ArticleInfo.vue"),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
