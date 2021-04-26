<template>
  <!-- <div id="note-editor" class="note-editor-inactive"> -->
  <div id="note-editor" v-bind:class="{'note-editor-active': active, 'note-editor-inactive': !active}" src="../assets/plus.png">
    <input type="text"  id="note-editor-title-input" name="note-editor-title-input" placeholder="Title...">
    <textarea type="textarea"  id="note-editor-content-input" name="note-editor-content-input" placeholder="Write your note here..." rows="5"></textarea>
    <div class="button">Useless Save Button!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoteEditor',
  props: {
    active: Boolean
  }
})
</script>

<style scoped>
#note-editor {
  background-color: rgb(238, 238, 238);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  transition: 200ms;
  overflow: hidden;
}

.note-editor-active {
  padding: 1rem;
  margin-top: 1rem;
  max-height: 30rem;
}

.note-editor-inactive {
  padding: 0;
  margin: 0;
  max-height: 0;
}

#note-editor-content-input {
  margin-top: 1rem;
  resize: none;
}

.button {
  background-color: rgb(127, 116, 159);;
  padding: 0.5rem;
  color: white;
  border-radius: 0.4rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 1rem;
}
.button:hover {
  background-color: #8d85abff;
}
</style>
