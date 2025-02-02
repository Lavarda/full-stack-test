import { boot } from 'quasar/wrappers'
import mitt from 'mitt'
let emitter = mitt()

export default boot(({ app }) => {
  app.config.globalProperties.$emitter = emitter
})
