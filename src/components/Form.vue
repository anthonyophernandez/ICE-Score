<template>
  <form class="flex flex-col w-full m-auto" @submit.prevent="handleSubmit">

    <div>
      <label class="block text-gray-700 text-lg font-bold" for="description">
        Task:
      </label>
      <p v-if="error" class="text-red-600 mb-1">
        {{ error }}
      </p>
      <textarea v-model="task.description" class="w-full h-24 p-2 bg-gray-900 rounded text-white resize-none" id="description" type="text" placeholder="Task Description" />
    </div>

    <div class="flex flex-col my-2">

      <label class="relative text-gray-700 text-lg font-bold" for="impact">
        Impact: {{ task.impact }}
        <span class="hover:text-blue-300 cursor-pointer" @mouseover="showToolTip = 'impact'" @mouseleave="showToolTip = ''">&#9432;</span>
        <ToolTip class="absolute" v-if="showToolTip === 'impact'" variable='impact'/>
      </label>
      <input type="range" min="1" max="10" value="5" id="impact" v-model="task.impact">

      <label class="relative text-gray-700 text-lg font-bold" for="confidence">
        Confidence: {{ task.confidence }}
        <span class="hover:text-blue-300 cursor-pointer" @mouseover="showToolTip = 'confidence'" @mouseleave="showToolTip = ''">&#9432;</span>
        <ToolTip class="absolute" v-if="showToolTip === 'confidence'" variable='confidence'/>
      </label>
      <input type="range" min="1" max="10" value="5" id="confidence" v-model="task.confidence">

      <label class="relative text-gray-700 text-lg font-bold" for="ease">
        Ease: {{ task.ease }}
        <span class="hover:text-blue-300 cursor-pointer" @mouseover="showToolTip = 'ease'" @mouseleave="showToolTip = ''">&#9432;</span>
        <ToolTip class="absolute" v-if="showToolTip === 'ease'" variable='ease'/>
      </label>
      <input type="range" min="1" max="10" value="5" id="ease" v-model="task.ease">

      <p class="relative text-gray-700 text-lg font-bold">
        ICE Score: {{ iceScore }}
        <span class="hover:text-blue-300 cursor-pointer" @mouseover="showToolTip = 'ice-score'" @mouseleave="showToolTip = ''">&#9432;</span>
        <ToolTip class="absolute" v-if="showToolTip === 'ice-score'" variable='ice-score'/>
      </p>

    </div>

    <div>
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">{{ buttonText }}</button>
    </div>

  </form>
</template>

<script>
export default {
  name: 'Form',
  props: ['task', 'handleSubmit', 'buttonText', 'error'],
  components: {
    ToolTip: () => import(/* webpackChunkName: 'ToolTip' */ '../components/ToolTip.vue')
  },
  data () {
    return {
      showToolTip: ''
    }
  },
  computed: {
    iceScore () {
      const result = (parseInt(this.task.impact) + parseInt(this.task.confidence) + parseInt(this.task.ease)) / 3
      return result.toFixed(2)
    }
  }
}
</script>

<style>

</style>
