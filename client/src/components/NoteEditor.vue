<template>
  <div id="note-editor">
    <input type="text"  id="note-editor-title-input" name="note-editor-title-input" placeholder="Title...">
    <textarea type="textarea"  id="note-editor-content-input" name="note-editor-content-input" placeholder="Write your note here..." rows="5"></textarea>
    <div class="button">Useless Save Button!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NoteEditor'
})
</script>

<style scoped>
#note-editor {
  background-color: rgb(238, 238, 238);
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
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
</style>
