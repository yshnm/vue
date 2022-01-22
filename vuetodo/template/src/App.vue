<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li><a :href="url1">Vue</a></li>
      <li><a :href="url2">Vuetify</a></li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "Vue sites",
      url1: "https://vuejs.org/",
      url2: "https://vuejs.org/"
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
