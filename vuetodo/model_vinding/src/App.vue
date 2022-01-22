<template>
  <div>
    <button v-model="clickResult">click</button>
    {{ clickResult }}
    
    <br>
    <input v-model="changeResult" placefolder="change">
    {{ changeResult }}

    <br>
    <input v-model="inputResult" placefolder="input">
    {{ inputResult }}

    <br>
    <input v-model="keyupResult" placefolder="keyup">
    {{ keyupResult }}

  </div>
</template>

<script>
export default {
  data() {
    return {
      clickResult: '',
      changeResult: '',
      inputResult: '',
      keyupResult: ''
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
