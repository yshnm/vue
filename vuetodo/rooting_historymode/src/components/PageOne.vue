<template>
    <div>
        <h3>PageOne</h3>
        <router-link to="/pagetwo">PageTwo</router-link>
        <button @click="toPageTwo">toPageTwo</button>
    </div>
</template>

<script>

export default {
    methods: {
        toPageTwo() {
            this.$router.push('/pagetwo')
        }
    },
}
</script>
