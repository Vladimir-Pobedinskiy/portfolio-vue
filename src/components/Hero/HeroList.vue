<template>
  <div class="hero-swiper">
    <div class="hero-swiper__top">
      <span class="hero-swiper__title h2">Герои</span>
      <div class="hero-swiper__navigation-wrapper">
        <span class="visually-hidden">Стрелки навигации по слайдеру</span>
        <div class="hero-swiper__button-prev swiper-button-prev">
          <span class="visually-hidden">К предыдущему слайду</span>
          <svg class="hero-swiper__button-icon hero-swiper__button--prev-icon" width="48px" height="10px">
            <use xlink:href="#icon-arrow-slider"></use>
          </svg>
        </div>
        <div class="hero-swiper__button-next swiper-button-next">
          <span class="visually-hidden">К следующему слайду</span>
          <svg class="hero-swiper__button-icon hero-swiper__button--next-icon" width="48px" height="10px">
            <use xlink:href="#icon-arrow-slider"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="hero-swiper__inner">

      <swiper
        class="hero-swiper__list hero-list"
        :slidesPerView="swiperOptions.slidesPerView"
        :spaceBetween="swiperOptions.spaceBetween"
        :speed="swiperOptions.speed"
        :autoplay="swiperOptions.autoplay"
        keyboard
        :pagination="swiperOptions.pagination"
        :navigation="swiperOptions.navigation"
        :breakpoints="swiperOptions.breakpoints"
      >
        <swiper-slide v-for="(hero, i) in heroList" :key="i" class="hero-swiper__slide">
          <HeroCard :hero="hero" />
        </swiper-slide>
      </swiper>

      <div class="swiper-pagination hero-swiper__pagination"></div>
    </div>
  </div>
</template>

<script>
import HeroCard from '@/components/Hero/HeroCard.vue'
export default {
  name: 'HeroList',
  components: {
    HeroCard
  },
  props: {
    heroList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1.2,
        spaceBetween: 16,
        speed: 900,
        autoplay: {
          delay: 4000
        },
        navigation: {
          nextEl: '.hero-swiper__button-next',
          prevEl: '.hero-swiper__button-prev'
        },
        pagination: {
          el: '.hero-swiper__pagination',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 8
          },
          400: {
            slidesPerView: 1.3,
            spaceBetween: 8
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 8
          },
          700: {
            slidesPerView: 2.1,
            spaceBetween: 8
          },
          767: {
            slidesPerView: 2.3,
            spaceBetween: 16
          },
          992: {
            slidesPerView: 2.5,
            spaceBetween: 16
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 12
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .hero-swiper {
    &__top {
      margin-bottom: 24px;

      @media (min-width:$tablet) {
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    &__title {
      text-transform: uppercase;
    }

    &__navigation-wrapper {
      width: 100%;
      max-width: 180px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__button-prev,
    &__button-next {

      @media (min-width:$desktop) {
        cursor: pointer;
      }
    }

    &__list {
      overflow: hidden;
    }

    &__slide {
      display: flex;
      flex-direction: column;
      height: auto!important;
    }
  }

  .hero-swiper__button-prev.swiper-button-prev,
  .hero-swiper__button-next.swiper-button-next {
    display: none;

    @media (min-width:$desktop) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 40px;
      background-color: $color-gray-dark;
      border-radius: 4px;
      color: $color-white;
      transition: background-color 0.3s ease, border-color 0.3s ease;

      &:hover {
        transition: background-color 0.3s ease, border-color 0.3s ease;

        .hero-swiper__button-icon {
          fill: $color-white;
          transition: fill 0.3s ease;
        }
      }

      &:active {
        transition: background-color 0.3s ease, border-color 0.3s ease;
      }
    }
  }

  .hero-swiper__button-prev.swiper-button-prev.swiper-button-disabled,
  .hero-swiper__button-next.swiper-button-next.swiper-button-disabled {
    background-color: $color-gray-disabled;
    border: none;
    transition: background-color 0.3s ease, fill 0.3s ease;
  cursor: default;

  .hero-swiper__button-icon {
    fill: $color-gray-light;
    transition: fill 0.3s ease;
  }

  }

  .hero-swiper__button-icon {
    fill: $color-white;
    transition: fill 0.3s ease;
  }

  .hero-swiper__button--prev-icon {
    transform: rotate(-180deg);
  }

  .swiper-wrapper {
    will-change: transform;
  }

</style>
