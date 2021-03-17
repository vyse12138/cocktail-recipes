<template>
  <div class="navigation">
    <div class="container">
      <router-link class="home" to="/">
        <img
          class="logo"
          src="../assets/logo.png"
          alt="logo"
          height="50"
          width="50"
        />
        <h1 class="name">Cocktail Recipes</h1>
      </router-link>
      <h1 class="span"></h1>
      <a
        class="social"
        href="https://juejin.cn/user/1407794523416350"
        target="_blank"
        ><img src="../assets/JueJin.svg" alt="JueJin"
      /></a>
      <a
        class="social"
        href="https://github.com/Vyse12138/vue-cocktail"
        target="_blank"
        ><img src="../assets/GitHub.svg" alt="GitHub" height="35" width="35"
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
.home {
  flex: 0 0 auto;
  color: #e83342;
  display: flex;
  text-decoration: none;
}
.logo {
  align-self: center;
}
.social {
  flex: 0 0 auto;
  align-self: center;
  margin-top: 10px;
  margin-left: 20px;
}
.span {
  flex: 1 1 auto;
  color: #e83342;
}
</style>
