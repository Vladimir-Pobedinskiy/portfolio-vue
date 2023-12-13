<template>
  <template v-if="loading">
    <AppLoading :loading="loading" />
  </template>
  <template v-else>
    <div class="ui-view offset-page">
      <div class="container">
        <h1 class="ui-view__title title h1">В UI компонентах реализовано:</h1>
        <ul class="description-list">
          <li class="description-item p1" v-for="(item, i) in descriptionList" :key="i">{{ item }}</li>
        </ul>
      </div>

      <div class="ui-accordion offset">
        <div class="container">
          <h2 class="ui-accordion__title section-title h2">{{ accordion.title }}</h2>

          <UIAccordion
            :accordion-list="accordion.accordionList"
            @onAccordionItem="onAccordionItem"
            :isOneOpen="isOneOpen"
            ref="accordion"
          />

        </div>
      </div>

      <UIMarquee :marquee-images="marqueeImages" :marquee-settings="marqueeSettings" class-name="hero-img-wrapper" >
        <template #title>
          <h2 class="marquee-title h2">Бесконечная строка героев</h2>
        </template>
      </UIMarquee>

    </div>
  </template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppLoading from '@/components/App/AppLoading'
import axios from 'axios'
import UIAccordion from '@/components/UI/Accordion/UIAccordion'
import UIMarquee from '@/components/UI/Marquee/UIMarquee'
export default {
  name: 'UIView',
  components: { AppLoading, UIAccordion, UIMarquee },
  data() {
    return {
      descriptionList: [
        'Храниение и взаимодействие с данными из JSON Server',
        'Компонент: "Аккордион"',
        'Компонент: "Бесконечная строка"'
      ],
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
      isOneOpen: false
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
        this.marqueeImages = response.data.marqueeImages
        this.accordion = response.data.accordion
        this.endLoading()
      } catch (error) {
        this.endLoading()
        this.$vfm.open('ModalError')
        console.error('Error fetching UIView', error)
      }
    },
    onAccordionItem(payload) {
      if (!this.isOneOpen) {
        const [item, index] = payload
        const accordionItemRefsBody = this.$refs.accordion.$refs.accordionItem
        accordionItemRefsBody.forEach((itemRef, i) => {
          if (i === index) {
            if (!item.selected) {
              item.selected = true
              itemRef.$refs.body.style.maxHeight = `${itemRef.$refs.body.scrollHeight}px`
            } else {
              item.selected = false
              itemRef.$refs.body.style.maxHeight = null
            }
          }
        })
      } else if (this.isOneOpen) {
        const [item, index] = payload
        const accordionItemRefsBody = this.$refs.accordion.$refs.accordionItem
        accordionItemRefsBody.forEach((itemRef, i) => {
          if (i === index) {
            if (!item.selected) {
              this.accordion.accordionList.forEach((elem) => {
                elem.selected = false
              })
              accordionItemRefsBody.forEach((itemRef, i) => {
                itemRef.$refs.body.style.maxHeight = null
              })
              item.selected = true
              itemRef.$refs.body.style.maxHeight = `${itemRef.$refs.body.scrollHeight}px`
            } else if (item.selected) {
              item.selected = false
              itemRef.$refs.body.style.maxHeight = null
            }
          }
        })
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
</style>
