import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { navLinks } from './navLinks'
import { menu } from './menu'
import { tasks } from './tasks'

export const store = createStore({
  state: {
    loading: false,
    user: null
  },
  mutations: {
    START_LOADING(state) {
      state.loading = true
    },
    END_LOADING(state) {
      state.loading = false
    },
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  },
  actions: {
    startLoading({ commit }) {
      commit('START_LOADING')
    },
    endLoading({ commit }) {
      commit('END_LOADING')
    },
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    clearUser({ commit }) {
      commit('CLEAR_USER')
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    user(state) {
      return state.user
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
