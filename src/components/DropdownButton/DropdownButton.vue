<template>
  <ul class="dropdown__list">
    <li v-for="item in list" v-bind:key="item" class="dropdown__item"><p>{{ item }}</p></li>
  </ul>
</template>

<script>

export default {
  props: 
    ['list']
 ,
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/Navigation/style.scss"></style>