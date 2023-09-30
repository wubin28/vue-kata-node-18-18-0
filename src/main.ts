import { createApp, ref } from 'vue'

const app = createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
})

app.mount('#app')
