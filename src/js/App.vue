<template>
  <div id="app">
    <header>
      <BaseNavigation v-on:changePage="changeActivePage($event)"></BaseNavigation>
    </header>
    <component v-bind:is="activePage" v-on:newPage="changeActivePage($event)"></component>
    <!-- <TasksPage v-on:some="changeActivePage($event)"></TasksPage> -->
  </div>
</template>

<script>
import ProjectsPage from '@/view/ProjectsPage.vue'
import TasksPage from '@/view/TasksPage.vue'
import UsersPage from '@/view/UsersPage.vue'
import ProfilePage from '@/view/ProfilePage.vue'
import CreateTaskPage from '@/view/CreateTaskPage.vue'

const pages = {
  'Проекты': 'ProjectsPage',
  'Задачи': 'TasksPage',
  'Пользователи': 'UsersPage',
  'Профиль': 'ProfilePage',
  'Создать задачу': CreateTaskPage
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
    ProfilePage,
    CreateTaskPage
  },

  methods: {
    changeActivePage(name) {
      this.activePage = pages[name];
    }
  }
}
</script>