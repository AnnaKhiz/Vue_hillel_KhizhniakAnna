import { defineStore } from 'pinia'
import {data} from "../functions/useLStorage.js";

export const useToDoStore = defineStore('TodoStore', {
  state: () => ({
    todoList: [],
    key: 'data',
    currentId: 0,
  }),
  getters: {
    getItemById: (state) => {
      state.getItems()
      return (itemId) => state.todoList.find((item) => +item.id === +itemId);
    },
  },
  actions: {
    saveItem(item) {
      this.todoList.push({...item, id: this.currentId})
      localStorage.setItem(this.key, JSON.stringify(this.todoList))
    },
    getItems() {
      if (!localStorage.getItem(this.key)) return

      let data = JSON.parse(localStorage.getItem(this.key));
      this.todoList = data ? data : []
      this.currentId = data.length ? data.at(-1).id + 1 : 1


    },
    removeItem(id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
      localStorage.setItem(this.key, JSON.stringify(this.todoList))
      this.currentId = this.todoList.length ? this.todoList.at(-1).id + 1 : 1
    },
    changeItemFields(id, itemNewData) {
      const index = this.todoList.findIndex(item => item.id === +id)

      if (index === -1) return

      this.todoList[index] = itemNewData

      localStorage.setItem(this.key, JSON.stringify(this.todoList));
    }
  }
})
