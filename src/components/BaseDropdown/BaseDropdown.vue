<template>
  <ul class="dropdown__list">
    <li v-for="item in list" v-bind:key="item" v-bind:class="`${$data[item]}`"><p>{{ item }}</p></li>
  </ul>
</template>

<script>
const baseClass = 'dropdown__item';

export default {
  props: { 
    list: Array
  },
  data() {
      return {
        Редактировать: [`${baseClass}`],
        Удалить: [`${baseClass} ${baseClass}_delete`],
        Профиль: [`${baseClass}`],
        Выход: [`${baseClass}`],
      }
    }
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/BaseNavigation/style.scss"></style>