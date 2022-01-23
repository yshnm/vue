<template>
  <div>
    <v-toolbar dark color="indigo">
      <v-toolbar-title class="white--text">My Todo</v-toolbar-title>
    </v-toolbar>
    <v-list>
        <template v-for="(todo, i) in todos">
            <v-list-tile :key="i">
              <v-list-tile-content>
                  {{ todo }}
              </v-list-tile-content>
              <v-list-tile-action>
                  <v-btn @click="deleteTodo(i)">
                      delete
                  </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider :key="i"></v-divider>
        </template>
    </v-list>

    <div class="bottom-right">
      <v-btn fab color="indigo" @click="addTodo">
          <v-icon color="white">add</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data() {
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

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 0px;
  right: 0px;
}
</style>