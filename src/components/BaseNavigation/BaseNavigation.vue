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
          v-bind:page="page"
          v-on:changePage="changeActivePage">
        </BaseButton>
      </li>
    </ul>
    <BaseButton 
      typeIcon="drop_down" 
      v-bind:isUser="true" 
      v-bind:constentList="['Профиль', 'Выход']"></BaseButton>
  </nav>
</template>

<script>

export default {
  props: {
    page: Function,
    changePage: Function
  },

  data() {
      return {
        list: ['Проекты', 'Задачи', 'Пользователи'],
      }
  },
  methods: {
    changeActivePage(key) {
      this.$emit('changePage', key);
    }
  }
}

</script>

<style src="@/css/base.scss"></style>
<style src="./style.scss"></style>