<template><div class="a">
  {{ingredientName}} : {{ingredientMeasure ? ingredientMeasure : 'A little'}}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    ingredient: { type: Object, required: true }
  },
  setup(props) {
    const ingredient = props.ingredient; // No need to be reactive, destructure directly
    const ingredientName = Object.keys(ingredient).toString();
    const ingredientMeasure = ingredient[ingredientName];

    return {ingredientName, ingredientMeasure}
  }
});
</script>

<style scoped></style>
