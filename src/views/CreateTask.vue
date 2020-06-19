<template>
  <div class="w-1/2 bg-white border rounded-lg overflow-hidden p-6">
    <h2 class="text-4xl text-gray-500 font-semibold text-center uppercase tracking-wide">Create Task</h2>
    <Form :task="task" :handleSubmit="createTask" buttonText="Add" :error="error"/>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
export default {
  name: 'CreateTask',
  components: {
    Form
  },
  data () {
    return {
      error: '',
      task: {
        description: '',
        impact: 5,
        confidence: 5,
        ease: 5,
        iceScore: 5
      }
    }
  },
  methods: {
    async createTask () {
      if (this.task.description) {
        const iceScore = (parseInt(this.task.impact) + parseInt(this.task.confidence) + parseInt(this.task.ease)) / 3
        this.task.iceScore = iceScore.toFixed(2)
        await this.$store.dispatch('tasks/create', this.task)
        this.$router.push({ name: 'Home' })
      } else {
        this.error = 'You must introduce a description'
      }
    }
  }
}
</script>

<style>

</style>
