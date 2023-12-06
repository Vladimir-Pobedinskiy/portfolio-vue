import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { navLinks } from './navLinks'
import { menu } from './menu'
import { tasks } from './tasks'

export const store = createStore({
  state: {
    loading: false
  },
  mutations: {
    START_LOADING(state) {
      state.loading = true
    },
    END_LOADING(state) {
      state.loading = false
    }
  },
  actions: {
    startLoading({ commit }) {
      commit('START_LOADING')
    },
    endLoading({ commit }) {
      commit('END_LOADING')
    }
  },
  getters: {
    loading(state) {
      return state.loading
    }
  },
  modules: {
    navLinks, menu, tasks
  },
  plugins: [
    createPersistedState({
      // модули для сохранения в localStorage
      paths: ['tasks']
    })
  ]
})
