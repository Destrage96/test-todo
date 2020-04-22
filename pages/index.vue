<template>
  <div class="home-page__container">
    <div v-for="todo in todos" :key="todo.id">
      <TodoList :todo="todo" :readonly="true" />
    </div>
  </div>
</template>

<script>
import TodoList from "../components/todo-list";
import _ from 'lodash';

export default {
  components: {
    TodoList
  },

  mounted() {
    this.fetchTodoList();
  },

  data() {
    return {
      todos: []
    }
  },

  methods: {
    async fetchTodoList() {
      try {
        let list = await this.$api.todo.fetchList();
        this.todos = _.head(Object.values(list));
      } catch (e) {
        throw e;
      }
    }
  }
}
</script>

<style lang="less">
  .home-page__container {
    display: flex;
    flex-wrap: wrap;
  }
</style>

