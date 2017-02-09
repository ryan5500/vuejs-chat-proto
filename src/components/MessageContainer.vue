<template>
  <div class="message-container">
    <ul>
      <li v-for="message in messages">
          {{ content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'message-container',
  data () {
    return {
      messages: []
    }
  }
}
</script>
