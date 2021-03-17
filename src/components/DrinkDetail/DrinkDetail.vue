<template>
  <div class="drink-detail">
    <div class="container">
      <h1>
        {{ drink.strDrink }}
      </h1>
      <h2 v-if="drink.strTags">Tags: {{ drink.strTags }}</h2>

      <h3>Category: {{ drink.strCategory }}</h3>
      <p>Instruction: {{ drink.strInstructions }}</p>

      <IngredientDetail
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
import Ingredient from "../../interfaces/Ingredient";

import IngredientDetail from "./IngredientDetail.vue";

export default defineComponent({
  components: {
    IngredientDetail
  },
  props: {
    drink: {
      type: Object as PropType<Drink>,
      required: true
    }
  },
  setup(props) {
    const drink = props.drink; // no need to be reactive, destructure directly
    const ingredients = [
      // list of ingredients
      {
        strIngredient: drink.strIngredient1,
        strMeasure: drink.strMeasure1
      } as Ingredient,
      {
        strIngredient: drink.strIngredient2,
        strMeasure: drink.strMeasure2
      } as Ingredient,
      {
        strIngredient: drink.strIngredient3,
        strMeasure: drink.strMeasure3
      } as Ingredient,
      {
        strIngredient: drink.strIngredient4,
        strMeasure: drink.strMeasure4
      } as Ingredient,
      {
        strIngredient: drink.strIngredient5,
        strMeasure: drink.strMeasure5
      } as Ingredient,
      {
        strIngredient: drink.strIngredient6,
        strMeasure: drink.strMeasure6
      } as Ingredient,
      {
        strIngredient: drink.strIngredient7,
        strMeasure: drink.strMeasure7
      } as Ingredient,
      {
        strIngredient: drink.strIngredient8,
        strMeasure: drink.strMeasure8
      } as Ingredient,
      {
        strIngredient: drink.strIngredient9,
        strMeasure: drink.strMeasure9
      } as Ingredient,
      {
        strIngredient: drink.strIngredient10,
        strMeasure: drink.strMeasure10
      } as Ingredient,
      {
        strIngredient: drink.strIngredient11,
        strMeasure: drink.strMeasure11
      } as Ingredient,
      {
        strIngredient: drink.strIngredient12,
        strMeasure: drink.strMeasure12
      } as Ingredient,
      {
        strIngredient: drink.strIngredient13,
        strMeasure: drink.strMeasure13
      } as Ingredient,
      {
        strIngredient: drink.strIngredient14,
        strMeasure: drink.strMeasure14
      } as Ingredient,
      {
        strIngredient: drink.strIngredient15,
        strMeasure: drink.strMeasure15
      } as Ingredient
    ].filter(ingredient => {
      // filter out empty or null ingredient
      if (
        ingredient.strIngredient === null ||
        ingredient.strIngredient === ""
      ) {
        return false;
      } else {
        return true;
      }
    }) as Array<Ingredient>;

    return { drink, ingredients };
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
.container {
  margin: 10px;
}
</style>
