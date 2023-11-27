export const tasks = {
  state: {
    taskList: []
  },
  mutations: {
    CHANGE_TASK_LIST(state, payload) {
      const [textareaValue, dateTask, tags] = payload
      state.taskList.push(
        {
          title: textareaValue,
          date: dateTask,
          tags: [...tags]
        }
      )
    },
    CHANGE_TASK_ITEM(state, payload) {
      const [index, inputValue] = payload
      state.taskList.forEach((item, i) => {
        if (i === index) {
          item.title = inputValue
        }
      })
    },
    DELETE_CURRENT_TASK(state, index) {
      state.taskList.splice(index, 1)
    }
  },
  actions: {
    changeTaskList({ commit }, payload) {
      commit('CHANGE_TASK_LIST', payload)
    },
    changeTaskItem({ commit }, payload) {
      commit('CHANGE_TASK_ITEM', payload)
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
