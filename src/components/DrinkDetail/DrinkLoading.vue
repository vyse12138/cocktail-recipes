<template>
  <div class="detail">
    <div class="drink-detail" />

    <div drink="drink" class="drink-intro">
      <h2 class="name"></h2>
      <div class="img"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DrinkDetail from "./DrinkDetail.vue";
import DrinkIntro from "./DrinkIntro.vue";

export default defineComponent({
  components: {
    DrinkDetail,
    DrinkIntro
  },
  setup() {}
});
</script>

<style scoped>
.detail {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
}
.drink-detail {
  flex: 1 0 700px;
  margin: 10px;
  margin-top: 0px;
  height: 500px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 1px lightgray;
}
.drink-intro {
  flex: 0 0 240px;
  background-color: #ffffff;
  height: 296px;
  box-shadow: 0px 0px 4px 1px lightgray;
}
.drink-intro > .name {
  background-color: #f4f5f5;
  width: 150px;
  height: 35px;
  margin: 20px auto;
  margin-bottom: 10px;
}
.drink-intro > .img {
  background-color: #f4f5f5;
  width: 220px;
  height: 220px;
  margin: 0px auto;
}
</style>
