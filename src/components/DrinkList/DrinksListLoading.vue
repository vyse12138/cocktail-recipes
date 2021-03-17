<template>
  <div class="loading">
    <div class="drink" v-for="item in items" :key="item">
      <div class="drink-text">
        <h4 class="drink-text-title" />
        <p class="drink-text-desc" />
      </div>
      <div class="drink-img" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, onMounted } from "vue";

export default defineComponent({
  setup() {
    return { items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  }
});
</script>

<style scoped>
.loading {
  margin: 10px;
  width: 700px;
    box-shadow: 0px 0px 4px 1px lightgray;
  border-radius: 0.3rem;

}
.drink {
  padding: 1.5rem 2rem;
  height: 100px;
  display: flex;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  background-color: #ffffff;
}
.drink-text {
  text-align: left;
  margin-top: -0.75em;
  flex: 1 1 auto;
  padding-right: 1rem;
}
.drink-text-title {
  background-color: #f4f5f5;
  width: 15rem;
  height: 1.5rem;
}
.drink-text-desc {
  background-color: #f4f5f5;
  width: 30rem;
  height: 3rem;
}

.drink-img {
  background-color: #f4f5f5;
  flex: 0 0 auto;
  width: 100px;
  height: 100px;
}
</style>
