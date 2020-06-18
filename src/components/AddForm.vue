<template>
  <form class="flex flex-col w-full m-auto" @submit.prevent="handleSubmit">

    <div>
      <label class="block text-gray-700 text-lg font-bold" for="description">
        Task:
      </label>
      <p v-if="error" class="text-red-600 mb-1">
        {{ error }}
      </p>
      <textarea v-model="formData.description" class="w-full h-24 p-2 bg-gray-900 rounded text-white resize-none" id="description" type="text" placeholder="Task Description" />
    </div>

    <div class="flex flex-col my-2">
      <label class="block text-gray-700 text-lg font-bold" for="impact">
        Impact: {{ formData.impact }}
      </label>
      <input type="range" min="1" max="10" value="5" id="impact" v-model="formData.impact">
      <label class="block text-gray-700 text-lg font-bold" for="confidence">
        Confidence: {{ formData.confidence }}
      </label>
      <input type="range" min="1" max="10" value="5" id="confidence" v-model="formData.confidence">
      <label class="block text-gray-700 text-lg font-bold" for="ease">
        Ease: {{ formData.ease }}
      </label>
      <input type="range" min="1" max="10" value="5" id="ease" v-model="formData.ease">
      <p class="text-gray-700 text-lg font-bold">ICE Score: {{ iceScore }}</p>
    </div>

    <div>
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">Add</button>
    </div>

  </form>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      error: '',
      formData: {
        description: '',
        impact: 5,
        confidence: 5,
        ease: 5
      }
    }
  },
  computed: {
    iceScore () {
      const result = (parseInt(this.formData.impact) + parseInt(this.formData.confidence) + parseInt(this.formData.ease)) / 3
      return result.toFixed(2)
    }
  },
  methods: {
    handleSubmit () {
      if (this.formData.description) {
        const task = {
          description: this.formData.description,
          impact: parseInt(this.formData.impact),
          confidence: parseInt(this.formData.confidence),
          ease: parseInt(this.formData.ease),
          iceScore: parseFloat(this.iceScore)
        }
        this.$store.dispatch('tasks/create', task)
        // Reset Form
        this.formData.description = ''
        this.formData.impact = 5
        this.formData.confidence = 5
        this.formData.ease = 5
        this.error = ''
      } else {
        this.error = 'You must introduce a description.'
      }
    }
  }
}
</script>

<style>

</style>
