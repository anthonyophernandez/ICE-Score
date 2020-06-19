<template>
  <div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full bg-white border rounded-lg overflow-hidden p-6">
    <h2 class="text-4xl text-gray-500 font-semibold text-center uppercase tracking-wide">Edit Task</h2>
    <Form :task="task" :handleSubmit="editTask" buttonText="Edit" :error="error"/>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'EditTask',
  components: {
    Form
  },
  data () {
    return {
      error: ''
    }
  },
  computed: {
    ...mapGetters({
      getTask: 'tasks/get'
    }),
    task () {
      return this.getTask(this.$route.params.id)
    }
  },
  methods: {
    async editTask () {
      if (this.task.description) {
        const iceScore = (parseInt(this.task.impact) + parseInt(this.task.confidence) + parseInt(this.task.ease)) / 3
        this.task.iceScore = Number.isInteger(iceScore) ? iceScore : iceScore.toFixed(2)
        await this.$store.dispatch('tasks/update', this.task)
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
