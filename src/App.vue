<script setup lang="ts">
import { ref } from 'vue'

const pElementRef = ref(null)
</script>

<template>
  <p ref="pElementRef">hello</p>
</template>

<style scoped></style>
