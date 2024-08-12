<template>
    <h1>Hello World</h1>

    <el-container style="max-width: 1250px; margin: 0 auto">
      <el-header>
        <h2 class="text-large font-600 mr-3"> Todo Items View </h2>
      </el-header>
      <nav>
        <el-button type="primary" size="small" @click="gotoCreate">
          Add new
        </el-button>
      </nav>
      <el-main>
        <el-table :data="todoList" style="width: 100%" >
          <el-table-column prop="id" label="#" />
          <el-table-column prop="title" label="Title" />
          <el-table-column prop="description" label="Description" />
          <el-table-column prop="status" label="Status" />
          <el-table-column prop="status" label="Actions" fixed="right">
            <template #default="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.row)">Edit</el-button>
              <el-button type="danger" size="small" @click="handleRemove(scope.row)">
                X
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
</template>
<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {ElButton, ElHeader, ElMain, ElContainer, ElTable, ElTableColumn} from "element-plus";
import {useToDoStore} from "../store/useToDoStore.js";
import {storeToRefs} from "pinia";

const store = useToDoStore();
const router = useRouter()

const {todoList} = storeToRefs(store)

onMounted(() => {
  store.getItems()
})

const gotoCreate = () => {
  router.push({name: 'create'})
}
const handleEdit = (row) => {
  router.push(`edit/${row.id}`)
}
const handleRemove = (row) => {
  store.removeItem(row.id);
}
</script>
