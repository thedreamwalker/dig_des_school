<template>
  <ul class="dropdown__list">
    <li v-for="item in list" v-bind:key="item" v-bind:class="`${setClass(item)}`"><p>{{ item }}</p></li>
  </ul>
</template>

<script>
const baseClass = 'dropdown__item';

export default {
  props: { 
    list: Array
  },
    methods: {
      setClass: function(item) {
        switch (item) {
          case 'Удалить':
            return [`${baseClass} ${baseClass}_delete`]
          default:
            return [`${baseClass}`]
        }
      }
    }
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/BaseNavigation/style.scss"></style>