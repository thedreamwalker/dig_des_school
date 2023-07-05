<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  components: {
    DefaultLayout,
    AuthLayout
  }
}
</script>