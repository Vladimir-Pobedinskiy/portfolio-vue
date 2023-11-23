import { createStore } from 'vuex'
import { navLinks } from './navLinks'
import { heroes } from './heroes'

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
    navLinks, heroes
  }
})
