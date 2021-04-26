<template>
  <div class="note">
    <div class="note-header">
      <h2>{{ date }}</h2>
      <div class="delete-note-button">
        <img class="delete-note-x-symbol" src="../assets/plus.png" />
      </div>
    </div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Note',
  props: {
    date: String,
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
  cursor: pointer;
}
.note:hover {
  background-color: #8d85abff;
}

.note-header {
  display: flex;
  justify-content: space-between;
}

.delete-note-x-symbol {
  height: 1rem;
  transform: rotate(45deg);
  cursor: pointer;
}

h1 {
  font-size: 1rem;
  margin: 0;
}
h2 {
  font-size: 0.8rem;
  margin: 0;
}
p {
  margin: 0;
  margin-top: 0.5rem;
}
</style>
