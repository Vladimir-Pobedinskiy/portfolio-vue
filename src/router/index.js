import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'
import HeroesView from '@/views/HeroesView'
import HeroView from '@/views/HeroView'
import TasksView from '@/views/TasksView'
import NotFoundView from '@/views/NotFoundView'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/heroes',
      name: 'HeroesView',
      component: HeroesView
    },
    {
      path: '/heroes/:heroView',
      name: 'HeroView',
      component: HeroView
    },
    {
      path: '/tasks',
      name: 'TasksView',
      component: TasksView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFoundView',
      component: NotFoundView
    }
  ]
})

// router.beforeEach((to, from, next) => {})

export default router
