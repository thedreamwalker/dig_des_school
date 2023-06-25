<template>
  <!--<h1>{{ title }}</h1>-->
  <ExampleOne></ExampleOne>
  <!-- <ExampleTwo></ExampleTwo> -->
</template>

<script>
import ExampleOne from '@/view//ExampleOne.vue'
// import ExampleTwo from '../view/ExampleTwo.vue'

export default {
  data() {
      return {
        title: 'Новое название'
      }
  },
  components: {
    ExampleOne,
    // ExampleTwo   
  }
}
</script>

<style>

</style>