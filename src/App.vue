<template>
  <div id="app">
    <router-link to="/chat/1">チャット#1リンク</router-link>
    <router-link to="/chat/2">チャット#2リンク</router-link>
    <router-view></router-view>
    <message-container></message-container>
    <input-field></input-field>
  </div>
</template>

<script>
import MessageContainer from 'components/MessageContainer'
import InputField from 'components/InputField'

export default {
  name: 'app',
  components: { MessageContainer, InputField }
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
