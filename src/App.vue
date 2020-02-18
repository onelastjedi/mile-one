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
  background-color: #191919;

  * {
    box-sizing: border-box;
  }
}

#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    font-family: 'Kulturista', sans-serif;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  .small {
    font-size: 10px;
    line-height: 1.5;
  }
}

@font-face {
    font-family: 'Kulturista';
    src: url('./assets/fonts/Kulturista-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
}

@font-face {
  font-family: 'Avenir Next';
  src: url('./assets/fonts/AvenirNext-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
</style>
