<template>
  <div class="bg-gray-500 min-h-screen p-4">
    <div class="w-full ma-2 text-center">
      <router-link class="text-xl font-bold text-gray-900 hover:text-blue-700" to="/">Home</router-link>
    </div>
    <div class="py-4 flex flex-col items-center justify-center text-gray-900">
      <router-view/>
    </div>
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
