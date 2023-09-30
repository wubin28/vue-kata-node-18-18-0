<script setup lang="ts">
import {reactive, ref} from 'vue'

// component logic
// declare some reactive state here.
const counter = reactive({count: 0})

console.log(counter.count) // 0
counter.count++ // 1

const message = ref('Hello World!')

console.log(message.value) // Hello World!
message.value = 'Changed' // Changed
</script>

<template>
  <h1>{{ message }}</h1>
  <h1>{{ message.split('').reverse().join('') }}</h1>
  <p>count is: {{ counter.count}}</p>
</template>

<style scoped></style>
