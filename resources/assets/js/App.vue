<template>
  <div id="app">
    <router-view/>
    <example></example>
  </div>
</template>

<script>
  import Example from './components/Example.vue'
  export default {
    mounted() {
      console.log('Component mounted.')
    },
    components: {
      Example
    }
  }
</script>
