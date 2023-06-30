<template>
  <div id="app">
    <header>
      <BaseNavigation v-on:changePage="changeActivePage($event)"></BaseNavigation>
    </header>
    <component v-bind:is="activePage"></component>
  </div>
</template>

<script>
import ProjectsPage from '@/view/ProjectsPage.vue'
import TasksPage from '../view/TasksPage.vue'
import UsersPage from '@/view/UsersPage.vue'
import ProfilePage from '@/view/ProfilePage.vue'

const pages = {
  'Проекты': 'ProjectsPage',
  'Задачи': 'TasksPage',
  'Пользователи': 'UsersPage',
  'Профиль': 'ProfilePage'
}

export default {
  data() {
      return {
        activePage: 'ProjectsPage',
      }
  },
  components: {
    ProjectsPage,
    TasksPage,
    UsersPage,
    ProfilePage
  },

  computed: {
    changePage() {
      return pages[this.activePage];
    }
  },

  methods: {
    changeActivePage(name) {
      this.activePage = pages[name];
    }
  }
}
</script>

<style>

</style>