import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
  },
  getters: {
    todoList: (state) => {
      return state.todoList;
    },
    top10todos: (state) => {
      return state.todoList.filter((todo) => todo.id < 10);
    },
  },
  mutations: {
    setTodoList(state, payload) {
      state.todoList = payload;
    },
  },
  actions: {
    async getTodoList() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => this.commit("setTodoList", data));
    },
  },
});
