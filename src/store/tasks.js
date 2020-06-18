import Api from '../services/api'

export default {
  namespaced: true,
  state: {
    tasks: []
  },
  mutations: {
    SET_TASKS (state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    async loadAll ({ commit }) {
      const response = await Api().get('/api/tasks')
      const tasks = response.data
      commit('SET_TASKS', tasks)
    }
  }
}
