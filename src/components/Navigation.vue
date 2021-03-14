<template>
  <div class="navigation">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Navigation",
  setup() {
    
  },
})
</script>

<style scoped>
  @keyframes breathing {
  from {
    background-color: #f4f5f5;
  }

  to {
    background-color: red;
  }
}

.navigation {
  height: 60px;
  background-color: #ffffff;
  margin-bottom: 10px;

  animation-name: breathing;
    animation-duration: 0.5s;

  animation-iteration-count: infinite;
}

</style>