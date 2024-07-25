<template>
  <el-form :model="form">
    <el-form-item>
      <el-input v-model="form.title" placeholder="Title" size="large"/>
    </el-form-item>

    <el-form-item>
      <el-input type="textarea" v-model="form.description" placeholder="Description" size="large"/>
    </el-form-item>

    <el-form-item>
      <el-select
          v-model="form.status"
          placeholder="Select"
          size="large"
      >
        <el-option
            v-for="item in todoStatuses"
            :key="item.id"
            :label="item.title"
            :value="item.value"

        />
      </el-select>
    </el-form-item>
    <el-button @click.stop="handleSubmit" type="primary">Save</el-button>
  </el-form>
</template>

<script setup>
import {ref} from "vue"
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption} from "element-plus";
import {todoStatuses} from "../common/options.js";
const props = defineProps({
                            'initialValues': {
                              type: Object,
                              default: {
                                title: '',
                                description: '',
                                status: 'not-completed'
                              },
                            }})
const emit = defineEmits(['setTodoItems'])
const form = ref({
                   title: '',
                   description: '',
                   status: 'not-completed'
                 })
form.value = {...props.initialValues}

const handleSubmit = () => {
  emit('setTodoItems', form.value);
}

</script>
