<template>
  <div>
    <button @click="addTodo">ADD</button>
    <h5>Todo List</h5>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        {{ todo }}
        <button @click="deleteTodo(i)">DEL</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  date() {
    return {
        todos: []
    }
  },
  created() {
      this.todos = JSON.parse(localStorage.getItem("todos")) || []
  },
  methods: {
      deleteTodo(i) {
          this.todos.splice(i, 1)
          localStorage.setItem("todos", JSON.stringify(this.todos))
      },
      addTodo() {
          this.$router.push("/todos/add")
      }
  }
}
</script>