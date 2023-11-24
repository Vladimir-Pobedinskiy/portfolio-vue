import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import SwiperPlugin from './plugins/swiper'
import Hammer from 'hammerjs'

import './assets/scss/main.scss'

const app = createApp(App)
app.use(router)
app.use(store)

if (app.config.globalProperties.$store) {
  app.config.globalProperties.$store.dispatch('getNavLinks')
}
app.config.globalProperties.$hammer = Hammer

app.use(SwiperPlugin)

app.mount('#app')
