<template>
  <div class="top-ranked">
    <h2 class="head">Today's Feeling</h2>
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="drinks">
      <TopRanked
        v-for="drink in drinks"
        :key="drink.idDrink"
        :drink="drink"
      ></TopRanked>
    </div>
    <div class="loading" v-if="!loading && !drinks">Failed to fetch...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TopRanked from "./TopRanked.vue";
import Drink from "../../interfaces/Drink";
import fetchRandom from "../../composables/fetchRandom";

export default defineComponent({
  components: {
    TopRanked
  },
  setup() {
    let loading = ref(true);
    let drinks = ref<Drink[]>();
    Promise.all([fetchRandom(), fetchRandom(), fetchRandom()])
      .then(value => {
        drinks.value = Array.from(value);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        loading.value = false;
      });

    return {
      drinks,
      loading
    };
  }
});
</script>

<style scoped>
.a {
  width: 240px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 1px lightgray;
  border-radius: 2px;
}
.head {
  margin-left: 1.5rem;
}
.loading {
  margin-left: 1.6rem;
}
</style>
