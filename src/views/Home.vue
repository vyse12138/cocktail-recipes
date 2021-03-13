<template>
  <Search v-model:name="name"/>
  <DrinksList :name="name" />
</template>

<script lang="ts">
import { reactive, computed, ref, defineComponent, toRef, Ref } from "vue";
import { key } from "../store";
import { useStore } from "vuex";
import fetchDrinks from "../composables/fetchDrinks";
import DrinksList from "../components/DrinksList.vue";
import Search from "../components/Search.vue";

export default defineComponent({
  components: {
    DrinksList,
    Search
  },
  setup() {
    const name = ref("ma");

    return {
      name
    };
  }
});
</script>
