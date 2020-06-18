<template>
  <form class="flex flex-col w-full m-auto">

    <div>
      <label class="block text-gray-700 text-lg font-bold" for="description">
        Task:
      </label>
      <textarea class="w-full h-24 p-2 bg-gray-900 rounded text-white resize-none" id="description" type="text" placeholder="Task Description" />
    </div>

    <div class="flex flex-col my-2">
      <label class="block text-gray-700 text-lg font-bold" for="impact">
        Impact: {{ impact }}
      </label>
      <input type="range" min="1" max="10" value="5" id="impact" v-model="impact">
      <label class="block text-gray-700 text-lg font-bold" for="confidence">
        Confidence: {{ confidence }}
      </label>
      <input type="range" min="1" max="10" value="5" id="confidence" v-model="confidence">
      <label class="block text-gray-700 text-lg font-bold" for="ease">
        Ease: {{ ease }}
      </label>
      <input type="range" min="1" max="10" value="5" id="ease" v-model="ease">
      <p class="text-gray-700 text-lg font-bold">ICE Score: {{ iceScore }}</p>
    </div>

    <div>
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" type="button">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      impact: 5,
      confidence: 5,
      ease: 5
    }
  },
  computed: {
    iceScore () {
      const result = (parseInt(this.impact) + parseInt(this.confidence) + parseInt(this.ease)) / 3
      return result.toFixed(2)
    }
  }
}
</script>

<style>

</style>
