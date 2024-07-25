import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import CreateTodoItem from "./pages/CreateTodoItem.vue";
import EditTodoItem from "./pages/EditTodoItem.vue";

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/create', component: CreateTodoItem, name: 'create' },
  { path: '/edit/:id', component: EditTodoItem, name: 'edit' },
]

const router = createRouter({
                              history: createWebHistory(),
                              routes
                            })

export default router
