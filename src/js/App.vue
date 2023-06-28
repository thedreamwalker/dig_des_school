<template>
  <div id="app">
    <header>
      <BaseNavigation v-on:changePage="changeActivePage"></BaseNavigation>
    </header>
    <component v-bind:is="activePage"></component>
  </div>
</template>

<script>
import ProjectsPage from '@/view/ProjectsPage.vue'
import TasksPage from '../view/TasksPage.vue'

const pages = {
  'Проекты': 'ProjectsPage',
  'Задачи': 'TasksPage',
  'Пользователи': 'UserPage'
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