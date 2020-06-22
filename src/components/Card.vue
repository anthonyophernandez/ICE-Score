<template>

  <div class="flex flex-col bg-white border rounded-lg p-6">

    <div class="flex mb-2">
      <h4 class="w-4/5 text-gray-500 text-xl text-center uppercase font-extrabold tracking-widest">Task {{ task.id }}</h4>
      <p class="w-1/5 text-xl font-bold text-right cursor-pointer hover:text-red-600" v-on:click="deleteTask(task)">&#215;</p>
    </div>

    <div class="flex mb-2">
      <div class="w-2/3 mr-4">

        <div class="bg-gray-500 rounded-full m-auto" :class="color">
          <p class="text-center text-6xl font-bold">
            {{ task.iceScore }}
          </p>
        </div>

      </div>

      <div class="w-1/3">

        <p class="relative text-lg font-semibold">
          <span class="text-gray-500">I:</span>
          {{ task.impact }}
          <span class="hover:text-blue-300 cursor-pointer" @mouseover="showToolTip = 'impact'" @mouseleave="showToolTip = ''">&#9432;</span>
          <ToolTip class="absolute" v-if="showToolTip === 'impact'" variable='impact'/>
        </p>

        <p class="relative text-lg font-semibold">
          <span class="text-gray-500">C:</span>
          {{ task.confidence }}
          <span class="hover:text-blue-300 cursor-pointer" @mouseover="showToolTip = 'confidence'" @mouseleave="showToolTip = ''">&#9432;</span>
          <ToolTip class="absolute" v-if="showToolTip === 'confidence'" variable='confidence'/>
        </p>

        <p class="relative text-lg font-semibold">
          <span class="text-gray-500">E:</span>
          {{ task.ease }}
          <span class="hover:text-blue-300 cursor-pointer" @mouseover="showToolTip = 'ease'" @mouseleave="showToolTip = ''">&#9432;</span>
          <ToolTip class="absolute" v-if="showToolTip === 'ease'" variable='ease'/>
        </p>

      </div>
    </div>

    <hr class="mx-1 border-1 border-gray-900">

    <div class="p-1">
      <h5 class="mb-1 text-gray-500 text-xs font-semibold uppercase tracking-wide">Description <span class="cursor-pointer text-lg text-right text-gray-900" @click="showDescription = !showDescription" v-html="symbol"></span></h5>
      <p v-if="showDescription">{{ task.description }}</p>
      <p v-else class="truncate">{{ task.description }}</p>
    </div>

    <router-link :to="`/task/${task.id}/edit`" class="w-full text-center bg-transparent hover:bg-blue-700 text-blue-700 font-bold hover:text-white border border-blue-500 hover:border-transparent py-2 rounded">Edit</router-link>

  </div>

</template>

<script>
export default {
  name: 'Card',
  props: ['task'],
  components: {
    ToolTip: () => import(/* webpackChunkName: 'ToolTip' */ '../components/ToolTip.vue')
  },
  data () {
    return {
      showDescription: false,
      showToolTip: ''
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
  },
  methods: {
    deleteTask (task) {
      this.$store.dispatch('tasks/delete', task)
    }
  }
}
</script>

<style>

</style>
