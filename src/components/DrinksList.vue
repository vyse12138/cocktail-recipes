<template>
  <div class="" v-if="loading">loading</div>
  <div class="drinks" v-else>
    <DrinksListItem
      v-for="drink in drinks"
      :key="drink.idDrink"
      :drink="drink"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, Ref, watch, toRefs } from "vue";
import fetchDrinks from "../composables/fetchDrinks";
import Drink from "../interfaces/Drink";
import DrinksListItem from "./DrinksListItem.vue";

export default defineComponent({
  name: "DrinksList",
  components: {
    DrinksListItem
  },
  props: {
    name: String
  },
  setup(props) {
    const drinks = ref<Array<Drink>>() as Ref<Array<Drink>>;
    const loading = ref(true);
    const { name } = toRefs(props); // destructure props

    // fetch abort controller setup
    let controller = new AbortController();
    let signal = controller.signal;

    // initial fetch
    fetchDrinks(props.name as String, { signal }).then(value => {
      drinks.value = value as Drink[];
      loading.value = false;
    });

    // fetch on name chage
    watch(name as Ref<String>, n => {
      controller.abort(); // abort previous unfinished fetch
      setTimeout(() => (loading.value = true)); // set to loading asynchronously(to make sure it's called after the abort call)
      controller = new AbortController();
      signal = controller.signal;
      fetchDrinks(n, { signal }).then(value => {
        drinks.value = value as Drink[];
        loading.value = false;
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
  margin: 10px auto;
  width:700px;
}

</style>
