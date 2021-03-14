<template>
  <Navigation />
  <router-view />

</template>

<script lang="ts">

import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";

export default defineComponent({
  name: "App",
  components: {
    Navigation
  }
});
</script>

<style>
html {
  overflow-y: visible;
  background-color: #f4f5f5;
}
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
