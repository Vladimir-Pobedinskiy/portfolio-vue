import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { router } from './router'
import { store } from './store'
import './assets/scss/main.scss'

import '@/plugins/iconify-vue'
import SwiperPlugin from '@/plugins/swiper'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import VueDOMPurifyHTML from 'vue-dompurify-html'

// Глобальные компоненты
import UIButton from '@/components/UI/UIButton'
import UILink from '@/components/UI/UILink'
import UIIcon from '@/components/UI/UIIcon'

const app = createApp(App)
app.use(router)
app.use(store)

if (app.config.globalProperties.$store) {
  app.config.globalProperties.$store.dispatch('getNavLinks')
}

app.use(SwiperPlugin)
const vfm = createVfm()
app.use(vfm)
app.use(VueDOMPurifyHTML)

// Регистрируем глобальные компоненты
app.component('UIButton', UIButton)
app.component('UILink', UILink)
app.component('UIIcon', UIIcon)

app.mount('#app')
