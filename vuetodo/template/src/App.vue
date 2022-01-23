<template>
  <div>
    <h3>My Todo</h3>
    <input v-model="newTodo" placeholder="Input here..."/>
    <button @click="insertTodo()"></button>
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
  data() {
    return {
      newTodo: "",
      todos: []
    }
  },
  methods: {
    deleteTodo(i) {
      this.todos.pop(i);
    },
    insertTodo() {
      if(this.newTodo === "") return

      this.todos.push(this.newTodo)

      this.newTodo = ''
    }
  }
}
</script>
