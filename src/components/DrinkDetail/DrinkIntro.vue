<template>
  <div class="intro">
    <h2>

    {{drink.strDrink}}

    </h2>
  <img class='intro-image' :src="drink.strDrinkThumb" :alt="drink.strDrink">

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType,toRefs} from "vue";
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
    
    return {drink};
  }
});
</script>

<style scoped>
.intro {
  width: 240px;
  background-color: #ffffff;

  box-shadow: 0px 0px 4px 1px lightgray;
  border-radius: 2px;
  text-align: center;
}
.intro-image {
  box-shadow: 0px 0px 4px 1px lightgray;
  width: 220px;
  height:220px;
  margin-bottom: 5px;

}
</style>
