<template>
  <RouterView class="app md-app h-full" v-cloak />
</template>

<script>
import { waitForReadyState } from 'v~/services/utilities'

export default {
  name: 'App',
  metaInfo() {
    return {
      title: 'Dashboard by rykn0wxx'
    }
  },
  async mounted() {
    await waitForReadyState()
    await this.$nextTick()
  }
}
</script>

<style src="./assets/tailwind.css"></style>
