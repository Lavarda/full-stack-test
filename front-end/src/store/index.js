import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import main from './main'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      main
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
