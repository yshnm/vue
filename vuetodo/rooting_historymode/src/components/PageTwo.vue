<template>
    <div>
        <h3>PageTwo</h3>
        <router-link to="/">PageOne</router-link>
        <button @click="toPageOne">toPageOne</button>
    </div>
</template>

<script>

export default {
    methods: {
        toPageOne() {
            this.$router.push('/')
        }
    }
}
</script>
