<template>
  <div id="app">
    <router-link to="/chat/1">チャット#1リンク</router-link>
    <router-link to="/chat/2">チャット#2リンク</router-link>
    <router-view></router-view>
    <message-container></message-container>
  </div>
</template>

<script>
import Bus from 'components/Bus'
import MessageContainer from 'components/MessageContainer'

export default {
  name: 'app',
  created () {
    console.log('created')

    Bus.$on('chat-selected', function (chatId) {
      console.log('chat-selected')
    })
  },
  components: { MessageContainer }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
