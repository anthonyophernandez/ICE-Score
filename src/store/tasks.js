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
    },
    UPDATE_TASK (state, task) {
      const taskToUpdate = state.tasks.find(t => t.id === task.id)
      taskToUpdate.description = task.description
      taskToUpdate.impact = task.impact
      taskToUpdate.confidence = task.confidence
      taskToUpdate.ease = task.ease
      taskToUpdate.iceScore = task.iceScore
    },
    DELETE_TASK (state, task) {
      state.tasks = state.tasks.filter(t => t.id !== task.id)
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
    },
    async update ({ commit }, task) {
      Api().put(`/api/tasks/${task.id}`, task)
      commit('UPDATE_TASK', task)
    },
    delete ({ commit }, task) {
      Api().delete(`/api/tasks/${task.id}`)
      commit('DELETE_TASK', task)
    }
  },
  getters: {
    get: state => id => {
      return state.tasks.find(t => t.id === id)
    }
  }
}
