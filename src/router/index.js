import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'
import HeroesView from '@/views/HeroesView'
import HeroView from '@/views/HeroView'
import TasksView from '@/views/TasksView'
import UIView from '@/views/UIView'
import LoginView from '@/views/LoginView'
import RegistrationView from '@/views/RegistrationView'
import NotFoundView from '@/views/NotFoundView'

export const router = createRouter({
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
      path: '/ui',
      name: 'UIView',
      component: UIView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/registration',
      name: 'RegistrationView',
      component: RegistrationView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFoundView',
      component: NotFoundView
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (window.scrollY !== 0) {
    window.scrollTo(0, 0)
  }

  next()
})
