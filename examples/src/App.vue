<template>
  <div id="app">
    <BasicExample />
  </div>
</template>

<script>
import BasicExample from "./components/BasicExample.vue";

export default {
  name: "app",
  components: {
    BasicExample
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
