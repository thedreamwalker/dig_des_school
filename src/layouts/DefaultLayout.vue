<template>
  <div class="layout-default">
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
import TaskDetailPage from '@/view/TaskDetailPage.vue'
import NotFound from '@/view/NotFound.vue'

export default {
  data() {
      return {
        
      }
  },
  components: {
    ProjectsPage,
    TasksPage,
    UsersPage,
    ProfilePage,
    CreateTaskPage,
    TaskDetailPage,
    NotFound
  },
}
</script>