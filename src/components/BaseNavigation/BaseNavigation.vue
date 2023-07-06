<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"
        v-for="item in list" 
        v-bind:key="item.name">
        <router-link v-bind:to="item.link" v-bind:class="'button_primary'">{{ item.name }}</router-link>
      </li>
    </ul>
    <div class="navigation__user">
    <BaseDropdown
      v-bind:color="'primary'"
      v-bind:parent="'navigation'"
      v-bind:typeIcon="'drop_down'"
      v-bind:list="[{name: 'Профиль', link: '/profile'}, {name: 'Выход', link: '/exit'}]"
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
      list: [{ name: 'Проекты', link: '/projects' },
        { name: 'Задачи', link: '/tasks' },
        { name: 'Пользователи', link: '/users' },],
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