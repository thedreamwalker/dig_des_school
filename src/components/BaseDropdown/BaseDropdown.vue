<template>
  <ul class="dropdown__list">
    <li v-for="item in list" v-bind:key="item">
      <BaseButton 
          v-bind:isDropdownItem="true" 
          v-bind:text="item"
          v-bind:dropdownItemStyle="setClass(item)"
          v-on:setPage="changeActivePage($event)">
        </BaseButton>
      </li>
  </ul>
</template>

<script>
const baseClass = 'dropdown__item';

export default {
  props: { 
    list: Array,
  },
  methods: {
    setClass: function(item) {
      switch (item) {
        case 'Удалить':
          return [`${baseClass} ${baseClass}_delete`]
        default:
          return [`${baseClass}`]
      }
    },
    changeActivePage(key) {
      this.$emit('forDrop', key)
    }
  }
}
</script>

<style src="@/css/base.scss"></style>
<style src="@/components/BaseNavigation/style.scss"></style>