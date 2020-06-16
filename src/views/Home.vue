<template>
  <div class="flex flex-wrap lg:w-1/2 sm:w-full m-auto bg-white">
    <div class="md:w-1/3 sm:w-1/2" v-for="task in tasks" :key="task.id">
      <div class="h-48 mx-2 my-2 px-4 py-4 bg-gray-900 text-white rounded">
        <h2 class="text-center text-lg font-bold">{{ "Task #" + task.id }}</h2>
        <p>Description: {{ task.description }}</p>
        <p>Impact: {{ task.impact }}</p>
        <p>Confidence: {{ task.confidence }}</p>
        <p>Ease: {{ task.ease }}</p>
        <p>ICE Score: {{ task.iceScore }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../services/api'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      tasks: []
    }
  },
  created () {
    this.loadAll()
  },
  methods: {
    async loadAll () {
      const response = await Api().get('/api/tasks')
      this.tasks = response.data
    }
  }
}
</script>
