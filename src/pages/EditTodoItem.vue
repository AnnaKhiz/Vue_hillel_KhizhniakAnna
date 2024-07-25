<template>
  <el-container style="max-width: 1250px; margin: 0 auto">
    <el-header>
      <h2 class="text-large font-600 mr-3"> Edit Todo Item #{{$route.params.id}} </h2>
    </el-header>
    <nav>
      <el-button type="warning" size="small" @click="gotoHome">
        Go back
      </el-button>
    </nav>
    <el-main>
      <todo-form v-if="todoItemData" @setTodoItems="handleSetTodoItems" :initial-values="todoItemData"/>
    </el-main>
  </el-container>
</template>
<script setup>
import {useRoute, useRouter} from "vue-router";
import TodoForm from "../components/TodoForm.vue";
import {useToDoStore} from "../store/useToDoStore.js";

const route = useRoute()
const router = useRouter()
const store = useToDoStore()

const todoItemData = store.getItemById(route.params.id)
const gotoHome = () => {
  router.push('/')
}

const handleSetTodoItems = (data) => {
  const saved = store.changeItemFields(route.params.id, {...data});
  gotoHome()
}


</script>
