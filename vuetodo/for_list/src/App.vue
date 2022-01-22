<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="deleteTask(todo.id)">x</button>
    </li>
  </ul>
</template>

<script>

export default {
  data() {
    return {
      todos: [
        {id: "1", text: "todo1"},
        {id: "2", text: "todo2"},
        {id: "3", text: "todo3"}
      ]
    }
  },
  methods: {
    deleteTask(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    }
  }
}
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
