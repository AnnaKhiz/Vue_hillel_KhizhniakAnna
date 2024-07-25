<template>
  <el-container style="max-width: 1250px; margin: 0 auto">
    <el-header>
      <h2 class="text-large font-600 mr-3"> Create Todo Item </h2>
    </el-header>
    <nav>
      <el-button type="warning" size="small" @click="gotoHome">
        Go back
      </el-button>
    </nav>
    <el-main>
      <todo-form @setTodoItems="handleSetTodoItems" />
    </el-main>
  </el-container>
</template>
<script setup>
import {useRouter} from "vue-router";
import TodoForm from "../components/TodoForm.vue";
import {ElButton, ElContainer, ElHeader, ElMain} from "element-plus";
import {useToDoStore} from "../store/useToDoStore.js";

// import {saveItem} from "../functions/useLStorage.js"

const store = useToDoStore()
const router = useRouter()

const gotoHome = () => {
  router.push({name: 'home'})
}

const handleSetTodoItems = (data) => {
  // saveItem(data);

  store.saveItem(data)
  gotoHome()
}

</script>