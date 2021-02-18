<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/peiko-logo-mini.png">
    <hr>
    <MainApp />
  </div>
</template>

<script>
  import MainApp from "./components/MainApp/MainApp";
  export default {
    name: 'App',
    components: {
      MainApp
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
