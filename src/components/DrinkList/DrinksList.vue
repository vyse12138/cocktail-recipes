<template>
  <DrinksListLoading v-if="loading" />
  <div class="drinks" v-if="!loading && drinks">
    <DrinksListItem
      v-for="drink in drinks"
      :key="drink.idDrink"
      :drink="drink"
    />
  </div>

  <DrinksListEmpty class="drinks" v-if="!loading && !drinks" />
</template>

<script lang="ts">
import { ref, defineComponent, Ref, watch, toRefs } from "vue";
import fetchDrinks from "../../composables/fetchDrinks";
import Drink from "../../interfaces/Drink";
import DrinksListItem from "./DrinksListItem.vue";
import DrinksListLoading from "./DrinksListLoading.vue";
import DrinksListEmpty from "./DrinksListEmpty.vue";

export default defineComponent({
  name: "DrinksList",
  components: {
    DrinksListItem,
    DrinksListLoading,
    DrinksListEmpty
  },
  props: {
    name: { type: String, required: true }
  },
  setup(props) {
    const loading = ref(true);

    const drinks = ref<Array<Drink>>();
    const { name } = toRefs(props); // destructure props
    // fetch abort controller setup
    let controller = new AbortController();
    let signal = controller.signal;

    // initial fetch
    fetchDrinks(name.value, { signal }).then(value => {
      if (value !== undefined) {
        drinks.value = value as Drink[];
        loading.value = false;
      }
    });

    // fetch on name chage
    watch(name as Ref<String>, n => {
      controller.abort(); // abort previous unfinished fetch
      setTimeout(() => (loading.value = true)); // set to loading asynchronously(to make sure it's called after the abort call)
      controller = new AbortController();
      signal = controller.signal;
      fetchDrinks(n, { signal }).then(value => {
        if (value !== undefined) {
          drinks.value = value as Drink[];
          loading.value = false;
        }
      });
    });

    return {
      drinks,
      loading
    };
  }
});
</script>

<style scoped>
.drinks {
  margin: 10px;
  width: 700px;
  box-shadow: 0px 0px 4px 1px lightgray;
}
</style>
