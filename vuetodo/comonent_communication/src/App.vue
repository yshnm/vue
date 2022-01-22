<template>
  <child :pval="parentValue" @add="addValueParent($event)">
  </child>
</template>

<script>
import Child from './components/Child.vue'

export default {
  data(){
    return {
      parentValue: 100
    }
  },
  components: {
    'child': Child 
  },
  methods: {
    addValueParent(val) {
      this.parentValue += val
    }
  }
}
</script>

