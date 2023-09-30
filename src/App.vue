<script setup lang="ts">
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1>Make me red</h1>
  <!-- add dynamic class binding here -->
</template>

<style scoped>
.title {
  color: red;
}
</style>
