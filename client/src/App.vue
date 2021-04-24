<template>
  <Dashboard />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dashboard from './components/Dashboard.vue'

export default defineComponent({
  name: 'App',
  components: {
    Dashboard
  }
})
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
