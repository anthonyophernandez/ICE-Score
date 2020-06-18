<template>
  <div class="bg-gray-900 p-4 w-full xl:w-4/5 flex flex-wrap">
    <div class="w-full bg-white border rounded-lg overflow-hidden p-6 my-2 mx-2">
      <AddForm />
    </div>
    <div class="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full" v-for="task in tasks" :key="task.id">
      <Card :task="task" class="my-2 mx-2"/>
    </div>
  </div>
</template>

<script>
import Api from '../services/api'
import Card from '../components/Card.vue'
import AddForm from '../components/AddForm.vue'

export default {
  name: 'Home',
  components: {
    Card,
    AddForm
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
