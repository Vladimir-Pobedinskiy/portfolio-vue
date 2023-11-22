
import Swiper from 'swiper'
import { Navigation, Pagination, FreeMode, Autoplay, Thumbs, Keyboard } from 'swiper/modules'
import { Swiper as SwiperVue, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

Swiper.use([Navigation, Pagination, FreeMode, Autoplay, Thumbs, Keyboard])

/*eslint-disable*/
export default {
  install(app) {
    app.component('Swiper', SwiperVue)
    app.component('SwiperSlide', SwiperSlide)
    app.config.globalProperties.$swiper = Swiper
    app.config.globalProperties.$swiperModules = {
      Navigation,
      Pagination,
      FreeMode,
      Autoplay,
      Thumbs,
      Keyboard
    };
  }
};
