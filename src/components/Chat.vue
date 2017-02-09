<template>
  <div class="chat">
    <h1>{{ msg }}{{ $route.params.chat_id }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'chat#'
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.commit('chatSelected', this.$route.params.chat_id)
    }
  }
}
</script>
