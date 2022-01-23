<template>
  <div>
    <router-link to="/">BACK</router-link>
    <br>
    <input v-model="newTodo" placeholder="Input here...">
    <button @click="addTodo()">ADD</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTodo: ''
      }
    },
    methods: {
      addTodo() {
        if(this.newTodo === '') return
        const todos = JSON.parse(localStorage.getItem("todos")) || []
        todos.push(this.newTodo)
        localStorage.setItem("todos", JSON.stringify(todos))
        this.newTodo = ''
        this.$router.push("/")
      }
    }
  }
</script>
