<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedChat: '1',
    messages: {
      '1': ['a', 'b'],
      '2': ['c', 'd']
    }
  },
  mutations: {
    chatSelected (state, chatId) {
      state.selectedChat = chatId
    }
  }
})

export default store
</script>
