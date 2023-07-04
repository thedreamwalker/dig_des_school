import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateTaskPage from '@/view/CreateTaskPage.vue'
import ProfilePage from '@/view/ProfilePage.vue'
import ProjectsPage from '@/view/ProjectsPage.vue'
import TasksPage from '@/view/TasksPage.vue'
import UsersPage from '@/view/UsersPage.vue'
import NotFound from '@/view/NotFound.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/system/projectsTest',
    name: 'ProjectsPage',
    component: ProjectsPage,
    children: [
      {
        path: '',
        name: 'Dinamic',
        component: ProjectsPage,
      },
      // {
      //   path: ':id',
      //   name: 'UserDetail',
      //   component: User,
      //   props: true
      // },
      // {
      //   path: '/slots',
      //   name: 'Slots',
      //   component: Slots
      // }
    ]
  },
  {
    path: '/tasks',
    name: 'TasksPage',
    component: TasksPage,
  },
  {
    path: '/users',
    name: 'UsersPage',
    component: UsersPage,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
  },
  {
    path: '/',
    redirect: {name: 'ProjectsPage'}
  },
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component: NotFound
  // },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// let isAuth = true

// router.beforeEach((to, from, next) => {
//   if(!isAuth) {
//     console.log('beforeEach пользователь не авторизова')
//   } else {
//     next()
//   }
// })

export default router