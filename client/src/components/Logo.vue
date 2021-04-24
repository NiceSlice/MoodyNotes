<template>
  <img v-bind:src="require(`../assets/logo${logoNum}.png`)" id='logo' />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
  data: function () {
    return {
      logoNum: 1,
      interval: 0
    }
  },
  methods: {
    changeLogoNum: function () {
      this.logoNum = this.logoNum === 3 ? 1 : this.logoNum + 1
    },
    cancelAutoUpdate: function () {
      clearInterval(this.interval)
    }
  },
  created: function () {
    this.interval = setInterval(this.changeLogoNum, 300)
  }
})
</script>

<style scoped>
#logo {
  height: 3rem;
  width: 3rem;
}
</style>
