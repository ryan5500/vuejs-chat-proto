<template>
  <div class="input-field">
    <textarea v-model="message" @keyup.enter="sendMessage" @compositionend="compositionEnd"></textarea>
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
    sendMessage: function (event) {
      if (this.isCompositionEnd) {
        this.isCompositionEnd = false
        return
      }

      console.log('TODO: send messsage', this.message)

      this.message = ''
    }
  }
}
</script>
