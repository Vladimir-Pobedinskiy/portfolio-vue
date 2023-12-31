import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/home-view'
import HeroesView from '@/views/heroes-view'
import HeroView from '@/views/hero-view'
import TasksView from '@/views/tasks-view'
import UIView from '@/views/ui-view'
import LoginView from '@/views/login-view'
import RegistrationView from '@/views/registration-view'
import PersonalAccountView from '@/views/personal-account-view'
import NotFoundView from '@/views/not-found-view'

const routes = [
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
    path: '/personal-account',
    name: 'PersonalAccountView',
    component: PersonalAccountView
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFoundView',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (window.scrollY !== 0) {
    window.scrollTo(0, 0)
  }
  next()
})

export { router }
