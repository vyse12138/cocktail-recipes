<template>
  <div class="input">
    <input
      type="text"
      @input="handleOnChange"
      autofocus
      placeholder="Search cocktail"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Search",
  props: {
    name: {
      type: String
    }
  },
  setup: (props, { emit }) => {
    // decounced input
    let callback: number = 0;
    function handleOnChange(e: any) {
      if (callback) {
        clearTimeout(callback);
      }
      callback = setTimeout(() => {
        emit("update:name", e.target.value);
      }, 250);
    }

    return { handleOnChange };
  }
});
</script>

<style scoped>
.input {
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
}
::placeholder {
  color: lightgray;
}
input {
  width: 694px;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  border: 1px solid lightgray;
  transition: box-shadow 1.5s;
  box-shadow: 0px 0px 1px 1px lightgray;
}
input:focus {
  outline: none;
  box-shadow: 0 0 5px 3px #e08a91;
  transition: box-shadow 1.5s;
}
</style>
