<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

const greeting = ref('Hello from parent')
</script>

<template>
  <ChildComponent :msg="greeting" />
</template>

<style scoped></style>
