<template>
  <div id="app">
    <h1>Hi Judy</h1>
    <ul>
      <li v-for="todo in top10todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["todoList", "top10todos"]),
  },
  mounted() {
    this.$store.dispatch("getTodoList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
