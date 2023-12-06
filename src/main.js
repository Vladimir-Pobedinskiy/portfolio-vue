import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { router } from './router'
import { store } from './store'
import './assets/scss/main.scss'

import Hammer from 'hammerjs'
import SwiperPlugin from './plugins/swiper'
import { vfmPlugin } from 'vue-final-modal'

// Глобальные компоненты
import UIButton from '@/components/UI/UIButton'
import UILink from '@/components/UI/UILink'

const app = createApp(App)
app.use(router)
app.use(store)

if (app.config.globalProperties.$store) {
  app.config.globalProperties.$store.dispatch('getNavLinks')
}

app.config.globalProperties.$hammer = Hammer
app.use(SwiperPlugin)
app.use(vfmPlugin)

// Регистрируем глобальные компоненты
app.component('UIButton', UIButton)
app.component('UILink', UILink)

app.mount('#app')
