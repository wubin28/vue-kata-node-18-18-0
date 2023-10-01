<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
  <ChildComponent @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>

<style scoped></style>
