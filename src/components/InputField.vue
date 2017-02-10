<template>
  <div class="input-field">
    <textarea @input="updateValue($event.target.value)" @keyup.enter="sendMessage" @compositionend="compositionEnd">{{ message }}</textarea>
  </div>
</template>

<script>
export default {
  name: 'input-field',
  data: function () {
    return {
      message: '',
      isCompositionEnd: false
    }
  },
  methods: {
    compositionEnd: function (event) {
      this.isCompositionEnd = true
    },
    updateValue: function (value) {
      this.message = value
    },
    sendMessage: function (event) {
      if (this.isCompositionEnd) {
        this.isCompositionEnd = false
        return
      }

      console.log('updateValue', this.message)
      this.message = ''
    }
  }
}
</script>
