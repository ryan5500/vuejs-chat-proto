import Vue from 'vue'
import Router from 'vue-router'
import Top from 'components/Top'
import Chat from 'components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/chat/:chat_id',
      component: Chat
    }
  ]
})
