export const menu = {
  state: {
    open: null
  },
  mutations: {
    TOGGLE_OPEN(state, payload) {
      if (state.open === payload) {
        state.open = null
      } else {
        state.open = payload
      }
    }
  },
  actions: {
    toggleOpen({ commit }, payload) {
      commit('TOGGLE_OPEN', payload)
    }
  },
  getters: {
    open(state) {
      return state.open
    }
  }
}
