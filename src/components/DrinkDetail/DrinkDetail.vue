<template>
  <div class="drink-detail">
    <div class="con">
      <h1>
        {{ drink.strDrink }}
      </h1>
      <h2 v-if="drink.strTags">Tags: {{ drink.strTags }}</h2>

      <h3>Category: {{ drink.strCategory }}</h3>
      <p>Instruction: {{ drink.strInstructions }}</p>

      <Ingredient
        v-for="ingredient in ingredients"
        :key="ingredient"
        :ingredient="ingredient"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import Drink from "../../interfaces/Drink";
import Ingredient from "./Ingredient.vue";

export default defineComponent({
  components: {
    Ingredient
  },
  props: {
    drink: {
      type: Object as PropType<Drink>,
      required: true
    }
  },
  setup(props) {
    const { drink } = toRefs(props); // destructure props
    const ingredients = [
      {[drink.value.strIngredient1 as string]: drink.value.strMeasure1},
      {[drink.value.strIngredient2 as string]: drink.value.strMeasure2},
      {[drink.value.strIngredient3 as string]: drink.value.strMeasure3},
      {[drink.value.strIngredient4 as string]: drink.value.strMeasure4},
      {[drink.value.strIngredient5 as string]: drink.value.strMeasure5},
      {[drink.value.strIngredient6 as string]: drink.value.strMeasure6},
      {[drink.value.strIngredient7 as string]: drink.value.strMeasure7},
      {[drink.value.strIngredient8 as string]: drink.value.strMeasure8},
      {[drink.value.strIngredient9 as string]: drink.value.strMeasure9},
      {[drink.value.strIngredient10 as string]: drink.value.strMeasure10},
      {[drink.value.strIngredient11 as string]: drink.value.strMeasure11},
      {[drink.value.strIngredient12 as string]: drink.value.strMeasure12},
      {[drink.value.strIngredient13 as string]: drink.value.strMeasure13},
      {[drink.value.strIngredient14 as string]: drink.value.strMeasure14},
      {[drink.value.strIngredient15 as string]: drink.value.strMeasure15},

    ].filter(ingredient => {
      return !ingredient.hasOwnProperty(null as any);
    }) as Array<Object>;
    console.log(ingredients)
    return { drink,ingredients};
  }
});
</script>

<style scoped>
.drink-detail {
  margin: 0 10px;
  box-shadow: 0px 0px 4px 1px lightgray;
  background-color: #ffffff;
  overflow: hidden;
}
.con {
  margin: 10px;
}
</style>
