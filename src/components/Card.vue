<template>

  <div class="bg-white border rounded-lg p-6">

    <h4 class="mb-2 text-gray-500 text-xl text-center uppercase font-extrabold tracking-widest">Task {{ task.id }}</h4>
    <div class="flex mb-2">
      <div class="w-2/3 mr-4">
        <div class="bg-gray-500 rounded-full m-auto" :class="color">
          <p class="text-center text-6xl font-bold">{{ task.iceScore }}</p>
        </div>
      </div>
      <div class="w-1/3">
        <p class="text-xl font-semibold"><span class="text-gray-500">I:</span> {{ task.impact }}</p>
        <p class="text-xl font-semibold"><span class="text-gray-500">C:</span> {{ task.confidence }}</p>
        <p class="text-xl font-semibold"><span class="text-gray-500">E:</span> {{ task.ease }}</p>
      </div>
    </div>

    <hr class="mx-1 border-1 border-gray-900">

    <div class="p-1">
      <h5 class="mb-1 text-gray-500 text-xs font-semibold uppercase tracking-wide">Description <span class="cursor-pointer text-lg text-right text-gray-900" @click="showDescription = !showDescription" v-html="symbol"></span></h5>
      <p v-if="showDescription">{{ task.description }}</p>
      <p v-else class="truncate">{{ task.description }}</p>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Card',
  props: ['task'],
  data () {
    return {
      showDescription: false
    }
  },
  computed: {
    symbol () {
      return this.showDescription ? '&#45;' : '&#43;'
    },
    color () {
      let rankColor = ''
      if (this.task.iceScore < 3) {
        rankColor = 'bg-red-600'
      } else if (this.task.iceScore < 5) {
        rankColor = 'bg-orange-600'
      } else if (this.task.iceScore < 8) {
        rankColor = 'bg-green-500'
      } else if (this.task.iceScore < 10) {
        rankColor = 'bg-green-700'
      } else {
        rankColor = 'bg-yellow-500'
      }
      return rankColor
    }
  }
}
</script>

<style>

</style>
