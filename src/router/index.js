import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateTaskPage from '@/view/CreateTaskPage.vue'
import ProfilePage from '@/view/ProfilePage.vue'
import ProjectsPage from '@/view/ProjectsPage.vue'
import ProjectDetailPage from '@/view/ProjectDetailPage.vue'
import TasksPage from '@/view/TasksPage.vue'
import TaskDetailPage from '@/view/TaskDetailPage.vue'
import UsersPage from '@/view/UsersPage.vue'
import NotFound from '@/view/NotFound.vue'
import BaseAuth from '@/components/BaseAuth/BaseAuth.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'ProjectsPage'},
    pathMatch: 'full'
  },

  {
    path: '/',
    name: 'DefaultLayout',
    component: DefaultLayout,
    props: true,
    children: [
      {
        path: 'projects',
        name: 'ProjectsPage',
        component: ProjectsPage, 
        props: true,
      },
      {
        path: '/projects/:id', 
        name: 'ProjectDetailPage',
        component: ProjectDetailPage, 
        props: true,
      },
      {
        path: 'tasks',
        name: 'TasksPage',
        component: TasksPage,
        props: true,
      },
      {
        path: '/tasks/:id', 
        name: 'TaskDetailPage',
        component: TaskDetailPage,
        props: true,
      },
      {
        path: 'tasks/create',
        name: 'CreateTaskPage',
        component: CreateTaskPage,
      }, 
      {
        path: '/users',
        name: 'UsersPage',
        component: UsersPage,
        beforeEnter: (to, from, next) => {
          next({name: 'BaseAuth'})
          // next({name: 'BaseAuth', params: { nextUrl: to.fullPath }},)
          // if (localStorage.getItem('Auth')  === 'true') {
          //   console.log('ага');
          // }
          // console.log(to.fullPath);
          // console.log(from.query);
          // console.log(next.query);

            // if(!localStorage.getItem('Auth') || localStorage.getItem('Auth')  === 'false') {
            //   next({name: 'BaseAuth'}, )
            // } else {
            //   next()
            // }
          }
      },
      {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage,
      },
    ]
  },

  {
    path: '/login',
    name: 'BaseAuth',
    component: AuthLayout,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  base: "/",
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   if(!localStorage.getItem('Auth')) {
//     next(name: 'BaseAuth')
//   } else {
//     next()
//   }
// })

export default router