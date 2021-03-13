<template>
  <div class="" v-if="loading">loading</div>
  <div class="drinks" v-else>
    <div class="drink" v-for="drink in drinks" :key="drink.idDrink">
      <h2>{{ drink.strDrink }}</h2>
      <img class="drink-img" :src="drink.strDrinkThumb" :alt="drink.strDrink" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, Ref, watch, toRefs } from "vue";
import fetchDrinks from "../composables/fetchDrinks";
import Drink from "../interfaces/Drink";

export default defineComponent({
  name: "DrinksList",
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
  display: flex;
  flex-flow: row wrap;
}
.drink {
  margin: 10px;
  padding: 10px;
  flex: 1 200px;
  border: 1px solid;
}
.drink-img {
  width: 200px;
  height: 200px;
}
</style>
