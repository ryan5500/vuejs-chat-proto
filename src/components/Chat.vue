<template>
  <div class="chat">
    <h1>{{ msg }}{{ $route.params.chat_id }}</h1>
  </div>
</template>

<script>
import Bus from './Bus'

export default {
  data () {
    return {
      msg: 'chat#'
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('Chat watch $route')
      Bus.$emit('chat-selected', this.$route.params.chat_id)
    }
  }
}
</script>
