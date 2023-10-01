<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComponent>
    Slot content {{ msg }}
  </ChildComponent>
</template>

<style scoped>
</style>
