<template>
  <div id="dashboard">

    <div id="header">
      <Logo />
      <h1 id="logo-text">MoodyNotes</h1>
    </div>

    <div id="search-wrapper">
      <SearchBar />
    </div>

    <div id="notes-wrapper">
      <Note v-for="note in notes"
            v-bind:key="note.id"
            v-bind:title="note.title"
            v-bind:content="note.content"
      />
    </div>

    <NoteEditor v-if="noteEditorActive" />

    <div v-on:click="toggleNoteEditor" id="note-editor-toggle-button">
      <img id="note-editor-toggle-button-symbol" v-bind:class="{'plus-symbol': true, 'x-symbol': noteEditorActive}" src="../assets/plus.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo.vue'
import SearchBar from './SearchBar.vue'
import Note from './Note.vue'
import NoteEditor from './NoteEditor.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    Logo,
    SearchBar,
    Note,
    NoteEditor
  },
  data: function () {
    return {
      noteEditorActive: false,
      notes: [{
        id: 1,
        title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus quis ipsum eget lacinia. Mauris at ante est. Donec finibus, risus condimentum condimentum ornare, risus diam cursus magna, ac pellentesque erat quam nec neque.',
        date: '2021'
      }, {
        id: 2,
        title: 'Different Title',
        content: 'Fusce placerat, ex id blandit pharetra, quam lectus ultricies arcu, non mollis dolor magna ac urna. In quis nisl a dolor elementum euismod non sit amet neque. Cras risus ipsum, dignissim a felis nec, dictum porta lorem. Nulla non ante ac lorem finibus condimentum. Integer viverra neque non ligula feugiat, sit amet blandit lacus venenatis.',
        date: '2021'
      }]
    }
  },
  methods: {
    toggleNoteEditor: function () {
      this.noteEditorActive = !this.noteEditorActive
    }
  }
})
</script>

<style scoped>
#dashboard {
  width: 100%;
  min-height: 100vh;
  max-width: 75rem;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

#logo-text {
  margin-left: 0.5rem;
}

#header {
  display: flex;
  align-items: flex-end;
}

#search-wrapper {
  display: flex;
  margin-top: 1rem;
}

#notes-wrapper {
  background: rgb(238, 238, 238);
  margin-top: 1rem;
  border-radius: 0.4rem;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

#note-editor-toggle-button {
  height: 3rem;
  width: 3rem;
  background-color: rgb(127, 116, 159);
  position: absolute;
  border-radius: 25px;
  cursor: pointer;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.plus-symbol {
  height: 1.5rem;
  transition: 300ms;
}

.x-symbol {
  transform: rotate(45deg);
}

h1 {
  font-size: 2rem;
  margin: 0;
}
</style>
