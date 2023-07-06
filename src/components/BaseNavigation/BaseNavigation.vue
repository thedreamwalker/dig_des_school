<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"
        v-for="item in list" 
        v-bind:key="item.name">
        <BaseButton 
          v-bind:color="'primary'"
          v-bind:text="item"
          v-on:setPage="changeActivePage($event)">
        </BaseButton>
      </li>
    </ul>
    <div class="navigation__user">
    <BaseDropdown
      v-bind:color="'primary'"
      v-bind:parent="'navigation'"
      v-bind:typeIcon="'drop_down'"
      v-bind:list="[{name: 'Профиль'}, {name: 'Выход'}]"
      v-on:setPage="changeActivePage($event)">
      <img class="navigation__avatar"  
      src="@/assets/img/user-item.jpg" 
      alt="аватар пользователя">
    </BaseDropdown>
    </div>
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

<style src="./style.scss"></style>