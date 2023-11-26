export const tasks = {
  state: {
    taskList: []
  },
  mutations: {
    CHANGE_TASK_LIST(state, payload) {
      const [textareaValue, dateTask] = payload
      state.taskList.push(
        {
          title: textareaValue,
          date: dateTask
        }
      )
    },
    DELETE_CURRENT_TASK(state, index) {
      state.taskList.splice(index, 1)
    }
  },
  actions: {
    changeTaskList({ commit }, payload) {
      commit('CHANGE_TASK_LIST', payload)
    },
    deleteCurrentTask({ commit }, index) {
      commit('DELETE_CURRENT_TASK', index)
    }
  },
  getters: {
    taskList(state) {
      return state.taskList
    }
  }
}
