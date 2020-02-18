<template>
  <div id="app">
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter'
export default {
  components: {
    AppFooter
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;

  * {
    box-sizing: border-box;
  }
}

#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
