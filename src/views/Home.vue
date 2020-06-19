<template>
  <div class="bg-gray-900 p-4 w-full xl:w-4/5 flex flex-wrap">
    <div class="w-full mx-2 mb-2">
      <router-link class="text-center bg-blue-500 font-bold text-white hover:bg-blue-700 px-2 py-2 rounded" to="/task/new">Add Task</router-link>
    </div>
    <div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full" v-for="task in tasks" :key="task.id">
      <Card :task="task" class="my-2 mx-2"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks
    })
  }
}
</script>
