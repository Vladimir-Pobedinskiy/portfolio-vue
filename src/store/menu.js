export const menu = {
  state: {
    isOpen: null
  },
  mutations: {
    TOGGLE_IS_OPEN(state, payload) {
      if (state.isOpen === payload) {
        state.isOpen = null
      } else {
        state.isOpen = payload
      }
    }
  },
  actions: {
    toggleIsOpen({ commit }, payload) {
      commit('TOGGLE_IS_OPEN', payload)
    }
  },
  getters: {
    isOpen(state) {
      return state.isOpen
    }
  }
}
