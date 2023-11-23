
import axios from 'axios'

export const heroes = {
  state: {
    heroes: []
  },
  mutations: {
    SET_HEROES(state, payload) {
      state.heroes = payload
    }
  },
  actions: {
    async getHeroes({ commit }) {
      try {
        const response = await axios.get('/api/heroes/')
        commit('SET_HEROES', response.data)
      } catch (error) {
        console.error('Error fetching heroes:', error)
      }
    }
  },
  getters: {
    heroes(state) {
      return state.heroes
    }
  }
}
