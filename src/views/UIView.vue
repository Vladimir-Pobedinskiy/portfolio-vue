<template>
  <template v-if="loading">
    <AppLoading :loading="loading" />
  </template>
  <template v-else>
    <div class="ui-view offset-page-br">
      <div class="container">
        <UIBreadcrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="ui-view__title title h1">В UI компонентах реализовано:</h1>
        <ul class="description-list">
          <li class="description-item p1" v-for="(item, i) in descriptionList" :key="i">{{ item }}</li>
        </ul>
      </div>

      <UIMarquee :marquee-images="marqueeImages" :marquee-settings="marqueeSettings" class-name="hero-img-wrapper" >
        <template #title>
          <h2 class="marquee-title h2">Бесконечная строка героев</h2>
        </template>
      </UIMarquee>

      <div class="ui-accordion offset">
        <div class="container">
          <h2 class="ui-accordion__title section-title h2">{{ accordion.title }}</h2>
          <UIAccordion :accordion-list="accordion.accordionList" :is-only-one-open="true" init-item-open="1" />
        </div>
      </div>

      <UITabs :tabs="tabs">
        <UITabPanel name="1">
          <p>111111111111</p>
        </UITabPanel>
        <UITabPanel name="2">
          <p>222222222222</p>
        </UITabPanel>
        <UITabPanel name="3">
          <p>333333</p>
        </UITabPanel>
      </UITabs>

    </div>
  </template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppLoading from '@/components/App/AppLoading'
import axios from 'axios'
import UIMarquee from '@/components/UI/Marquee/UIMarquee'
import UIAccordion from '@/components/UI/Accordion/UIAccordion'
import UITabs from '@/components/UI/Tabs/UITabs'
import UITabPanel from '@/components/UI/Tabs/UITabPanel'
export default {
  name: 'UIView',
  components: { AppLoading, UIAccordion, UIMarquee, UITabs, UITabPanel },
  data() {
    return {
      breadcrumbs: [],
      descriptionList: [],
      marqueeSettings: {
        duration: 40,
        pauseOnHover: true,
        direction: 'right',
        loop: 0, // 0 - бесконечно
        gradient: true,
        gradientColor: [240, 250, 230],
        gradientLength: '30px'
      },
      marqueeImages: [],
      accordion: {},
      tabs: []
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions({
      startLoading: 'startLoading',
      endLoading: 'endLoading'
    }),
    async getData() {
      try {
        this.startLoading()
        const response = await axios.get('/api/ui/')
        this.descriptionList = response.data.descriptionList
        this.breadcrumbs = response.data.breadcrumbs
        this.marqueeImages = response.data.marqueeImages
        this.accordion = response.data.accordion
        this.tabs = response.data.tabs
        this.endLoading()
      } catch (error) {
        this.endLoading()
        this.$vfm.open('ModalError')
        console.error('Error fetching UIView', error)
      }
    }
  }
}
</script>

<style lang="scss">
.hero-img-wrapper {
  padding: 10px;
  width: 250px;
  will-change: transform;

  @media (min-width:$mobile-big) {
    width: 300px;
  }

  @media (min-width:$tablet) {
    width: 350px;
  }

  @media (min-width:$tablet-big) {
    padding: 15px;
    width: 25%;
  }

  @media (min-width:$two-K-Display) {
    width: 35%;
  }
}

.ui-accordion__title.section-title {
  margin-bottom: 32px;

  @media (min-width:$desktop) {
    margin-bottom: 48px;
  }
}

</style>
