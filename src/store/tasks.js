import Api from '../services/api'

export default {
  namespaced: true,
  state: {
    tasks: []
  },
  mutations: {
    SET_TASKS (state, tasks) {
      state.tasks = tasks
    },
    ADD_TASK (state, task) {
      const tasks = state.tasks.concat(task)
      state.tasks = tasks
    }
  },
  actions: {
    async loadAll ({ commit }) {
      const response = await Api().get('/api/tasks')
      const tasks = response.data
      commit('SET_TASKS', tasks)
    },
    async create ({ commit }, task) {
      const response = await Api().post('/api/tasks', task)
      const savedTask = response.data
      commit('ADD_TASK', savedTask)
    }
  }
}
