<template>
  <div class="bg-blue-300 border-blue-900 border-2 border-dashed font-normal text-gray-900 z-50 p-1" v-html="message">
  </div>
</template>

<script>
export default {
  name: 'ToolTip',
  props: ['variable'],
  computed: {
    message () {
      let text = ''
      if (this.variable === 'impact') {
        text = '<p>The positive <strong>Impact</strong> it would have if it succeeds.</p>'
      } else if (this.variable === 'confidence') {
        text = '<p>The <strong>Confidence</strong> you have that it will succeed if you try it.</p>'
      } else if (this.variable === 'ease') {
        text = '<p>How <strong>Easy</strong> it would be to try it.</p>'
      } else if (this.variable === 'ice-score') {
        text = '<p>(<strong>I</strong>mpact + <strong>C</strong>onfidence + <strong>E</strong>ase) / 3.</p>'
      }
      return text
    }
  }
}
</script>

<style>

</style>
