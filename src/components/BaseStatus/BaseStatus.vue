<template>
  <p class="status" v-bind:class="status">{{ statusName }}</p>
</template>

<script>
export default {
  props: {
    statusName: String,
    status: String,
  },
}
</script>