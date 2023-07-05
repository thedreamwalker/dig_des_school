<template>
  <main>
    <BaseDetail 
    v-bind:data="item"
    v-bind:parent="parent">
  </BaseDetail>
  </main>
</template>

<script>
  export default {
    props: {
      parent: String,
      item: Object
    },
  }
</script>