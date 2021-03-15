<template>
  <div class="navigation">
    <div class="container">
      <a class="logo" href="https://github.com/Vyse12138/vue-cocktail">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </a>
      <h1 class="name">Cocktail Recipes</h1>
      <a
        class="logo"
        href="https://github.com/Vyse12138/vue-cocktail"
        target="_blank"
        ><img src="../assets/GitHub.png" alt="logo"
      /></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  setup() {}
});
</script>

<style scoped>
.navigation {
  height: 4rem;
  background-color: #ffffff;
  margin-bottom: 10px;
}
.container {
  max-width: 960px;
  height: 4rem;
  display: flex;
  margin: 0 auto;
}
.logo {
  flex: 0 0 auto;

  align-self: center;
}
.name {
  flex: 1 1 auto;

  color: #e83342;
}
</style>
