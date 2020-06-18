<template>
  <div class="bg-gray-500 min-h-screen p-4 flex items-center justify-center text-gray-900">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('tasks/loadAll')
  }
}
</script>

<style lang="scss">
</style>
