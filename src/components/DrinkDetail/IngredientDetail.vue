<template>
  <div class="a">{{ name }} : {{ measure ? measure : "A little" }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    ingredient: { type: Object, required: true }
  },
  setup(props) {
    const ingredient = props.ingredient; // no need to be reactive, destructure directly
    const name = ingredient.strIngredient;
    const measure = ingredient.strMeasure;
    return { name, measure };
  }
});
</script>

<style scoped></style>
