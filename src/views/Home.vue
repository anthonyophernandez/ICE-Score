<template>
  <div>

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
  mounted () {
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
