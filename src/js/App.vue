<template>
  <div id="app">
    <header>
      <BaseNavigation></BaseNavigation>
    </header>
    <router-view />
  </div>
</template>

<script>
import ProjectsPage from '@/view/ProjectsPage.vue'
import TasksPage from '@/view/TasksPage.vue'
import UsersPage from '@/view/UsersPage.vue'
import ProfilePage from '@/view/ProfilePage.vue'
import CreateTaskPage from '@/view/CreateTaskPage.vue'

export default {
  data() {
      return {
        activePage: 'ProjectsPage',
      }
  },
  components: {

  },
}
</script>