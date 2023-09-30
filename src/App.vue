<script setup lang="ts">
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  // ...
}
</script>

<template>
  <button @click="toggle">toggle</button>
  <h1>Vue is awesome!</h1>
  <h1>Oh no 😢</h1>
</template>

<style scoped></style>
