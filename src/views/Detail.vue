<template>
<DrinkLoading v-if="loading"/>
  <div class="detail" v-if="!loading && drink">
    <div class="drink">
      <DrinkDetail :drink="drink" />
    </div>

    <DrinkIntro :drink="drink" class="side" />
  </div>
</template>

<script lang="ts">
import { reactive, computed, ref, defineComponent, toRefs, Ref } from "vue";
import { key } from "../store";
import { useStore } from "vuex";
import fetchDrinks from "../composables/fetchDrinks";
import DrinkDetail from "../components/DrinkDetail/DrinkDetail.vue";
import Search from "../components/Search.vue";
import DrinkIntro from "../components/DrinkDetail/DrinkIntro.vue";
import Drink from "../interfaces/Drink";
import DrinkLoading from "../components/DrinkDetail/DrinkLoading.vue";

export default defineComponent({
  name: "Detail",
  components: {
    DrinkDetail,
    Search,
    DrinkIntro,
    DrinkLoading
  },
  props: {
    name: { type: String, required: true }
  },
  setup(props) {
    const { name } = toRefs(props); // destructure props
    const loading = ref(true);
    const drink = ref<Drink>();
    fetchDrinks(name.value).then(value => {
      if (value !== undefined) {
        drink.value = value[0] as Drink;
        loading.value = false;
      }
    });

    return {
      name,
      drink,
      loading
    };
  }
});
</script>

<style scoped>
.detail {
  display: flex;
  max-width: 960px;
  margin: 0 auto;
}
.drink {
  flex: 1 0 700px;
}
.side {
  flex: 0 0 auto;
}
</style>
