import {createStore} from "vuex";

const store = createStore({
  state () {
    return {
      articles: []
    }
  },
  getters: {
    getArticles(state) {
      return state.articles
    }
  },
  mutations: {
    addArticles(state, payload) {
      state.articles = payload
    }
  }
})

export default store
