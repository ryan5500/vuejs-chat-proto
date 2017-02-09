<template>
  <div class="message-container">
    <ul>
      <li v-for="message in messages">
          {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'message-container',
  computed: {
    messages () {
      return this.$store.state.messages[this.$store.state.selectedChat]
    }
  }
}
</script>
