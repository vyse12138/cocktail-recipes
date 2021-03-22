<template>
  <div class="top-ranked">
    <h3>Top Ranked Drinks</h3>
    <div class="loading" v-if="!drinks">loading...</div>
    <TopRanked v-else v-for="drink in drinks" :key="drink.idDrink" :drink="drink"></TopRanked>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref} from "vue";
import TopRanked from "./TopRanked.vue";
import fetchDrinks from "../../composables/fetchDrinks";
import Drink from "../../interfaces/Drink";

export default defineComponent({
  components: {
    TopRanked
  },
  setup() {
    let drinks = ref<Drink[]>();
    let controller = new AbortController();
    let signal = controller.signal;
    fetchDrinks('w', { signal })
      .then(value => {
        drinks.value = value.slice(0, 3);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
      });

    return {
      drinks
    };
  }
});
</script>

<style scoped>
.a {
  width: 240px;
  height: 300px;
  background-color: #ffffff;
  text-align: center;
  box-shadow: 0px 0px 4px 1px lightgray;
  border-radius: 2px;
}
</style>
