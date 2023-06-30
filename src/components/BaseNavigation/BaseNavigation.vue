<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"
        v-for="item in list" 
        v-bind:key="item">
        <BaseButton 
          v-bind:isNavigation="true" 
          v-bind:isPrimary="true" 
          v-bind:text="item"
          v-on:setPage="changeActivePage($event)">
        </BaseButton>
      </li>
    </ul>
    <BaseButton
      v-bind:isUser="true"
      v-bind:isDropdown="true" 
      v-bind:isIcon="true"
      v-bind:constentList="['Профиль', 'Выход']"
      v-on:setPage="changeActivePage($event)">
    </BaseButton>
  </nav>
</template>

<script>
export default {

  data() {
      return {
        list: ['Проекты', 'Задачи', 'Пользователи'],
      }
  },
  methods: {
    changeActivePage(key) {
      this.$emit('changePage', key)
    }
  }
}

</script>

<style src="@/css/base.scss"></style>
<style src="./style.scss"></style>