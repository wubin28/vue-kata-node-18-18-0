<script setup lang="ts">
import {onMounted, ref} from 'vue'

const pElementRef = ref<HTMLParagraphElement | null>(null)

onMounted(() => {
  console.log(pElementRef.value)
  if (pElementRef.value) {
    pElementRef.value.textContent = 'mounted!'
  }
})
</script>

<template>
  <p ref="pElementRef">hello</p>
</template>

<style scoped></style>
