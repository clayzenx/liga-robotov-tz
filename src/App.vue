<template>
  <div id="app">
    <main-form/>
  </div>
</template>

<script>
import MainForm from './components/MainForm.vue' 

  export default {
    components: {MainForm}
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
