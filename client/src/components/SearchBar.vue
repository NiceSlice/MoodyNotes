<template>
  <input type="text"  id="search-bar-input" name="search-bar-input" placeholder="Currently useless search bar..">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar'
})
</script>

<style scoped>
#search-bar-input {
  flex-grow: 1;
}
</style>
