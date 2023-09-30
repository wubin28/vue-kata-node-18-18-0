<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  // update component state
  count.value++
}
</script>

<template>
  <!-- make this button work -->
  <button v-on:click="increment">count is: {{ count }}</button>
  <!-- Or <button @click="increment">count is: {{ count }}</button> -->
</template>

<style scoped></style>
