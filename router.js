import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import("@/pages/ArticleList.vue"),
    props: true
  },
  {
    path: '/create',
    component: () => import("@/pages/AddArticle.vue"),
    props: true
  },
  {
    path: '/article/:id',
    component: () => import("@/pages/ArticleDetail.vue"),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
