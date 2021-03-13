<template>
  <input type="text" @input="handleOnChange" autofocus />
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
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
