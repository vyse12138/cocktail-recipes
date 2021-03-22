<template>
  <TopRankedList class="a"></TopRankedList>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopRankedList from './TopRankedList.vue'
export default defineComponent({
  components: {
    TopRankedList
  },
  setup() {
    
  },
})
</script>


<style scoped>
.a {
  width: 240px;
  height: 300px;
  background-color: #ffffff;

  box-shadow: 0px 0px 4px 1px lightgray;
  border-radius: 2px;
}
</style>
