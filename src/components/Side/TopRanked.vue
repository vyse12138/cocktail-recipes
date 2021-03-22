<template>
  <div class="top-ranked">
    <img class="img" height="50" :src="drink.strDrinkThumb" />
    <div class="detail">
      <h3 class="title">{{ drink.strDrink }}</h3>
      <p class="intro"> {{ drink.strIngredient1 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import Drink from "../../interfaces/Drink";

export default defineComponent({
  props: {
    drink: {
      type: Object as PropType<Drink>,
      required: true
    }
  },
  setup(props) {
    const { drink } = toRefs(props); // destructure props
    return {
      drink
    };
  }
});
</script>

<style scoped>
.top-ranked {
  display: flex;
  text-align: left;
  padding: 0.6rem 1.5rem;
}
.detail {
  flex: 1 1;
}
.img {
  border-radius: 50%;
  margin-right: 1.5rem;
  flex: 0 0;
}
.title {
  padding-top: 0.5rem;
  margin: -0.6rem 0;
}
.intro {
}
</style>
