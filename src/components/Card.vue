<template>

  <div class="bg-white border rounded-lg overflow-hidden p-6">

    <h4 class="mb-2 text-gray-500 text-xl text-center uppercase font-extrabold tracking-widest">Task {{ task.id }}</h4>
    <div class="flex mb-2">
      <div class="w-2/3 mr-4">
        <div class="bg-gray-500 rounded-full m-auto">
          <p class="text-center text-6xl font-bold">{{ task['ice-score'] }}</p>
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
      <h5 class="mb-1 text-gray-500 text-xs font-semibold uppercase tracking-wide">Description:</h5>
      <p>{{ task.description }}</p>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Card',
  props: ['task']
}
</script>

<style>

</style>
