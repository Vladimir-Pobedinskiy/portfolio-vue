<template>
  <section class="marquee-section offset">

    <div v-if="$slots.title" class="marquee-section__top">
      <div class="container">
        <slot name="title"></slot>
      </div>
    </div>

    <Vue3Marquee
      :duration="marqueeSettings.duration"
      :pauseOnHover="marqueeSettings.pauseOnHover"
      :direction="marqueeSettings.direction"
      :loop="marqueeSettings.loop"
      :gradient="marqueeSettings.gradient"
      :gradientColor="marqueeSettings.gradientColor"
      :gradientLength="marqueeSettings.gradientLength"
    >
      <div v-for="item in marqueeImages" :key="item" :class="className">
        <img :src="`${item.imgUrl}`" :alt="`${item.title}`" />
      </div>
    </Vue3Marquee>

  </section>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
export default {
  name: 'UIMarquee',
  components: { Vue3Marquee },
  props: {
    marqueeImages: {
      type: Array,
      required: true
    },
    marqueeSettings: {
      type: Object,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

.marquee-section {

  &__top {
    margin-bottom: 32px;

    @media (min-width:$desktop) {
      margin-bottom: 48px;
    }
  }
}

</style>
