<template>
  <div class="note">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Note',
  props: {
    title: String,
    content: String
  }
})
</script>

<style scoped>
.note {
  background-color: rgb(127, 116, 159);
  padding: 1rem;
  border-radius: 0.4rem;
  margin: 1rem;
  margin-right: 0;
  color: white;
  max-width: 20rem;
}

h1 {
  font-size: 1rem;
  margin: 0;
}
p {
  margin: 0;
  margin-top: 0.5rem;
}
</style>
