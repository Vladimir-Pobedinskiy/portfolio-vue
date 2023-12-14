/**
  isOnlyOneOpen (true) - открывается один item, остальные закрываются
  initItemOpen - задает какой item будет открытым при рендеринге страницы (варианты: index, all), если ничего не задано то все items закрыты
*/
<template>
  <div class="accordion">
    <UIAccordionItem
      v-for="(item, index) in accordionList"
      :key="index"
      :item="item"
      :currentIndex="index"
      @onAccordionItem="onAccordionItem"
      ref="accordionItem"
    >
    <template #header>
      <span class="accordion-item-title h4">{{ item.title }}</span>
    </template>
    <template #content>
      <div v-dompurify-html="item.text" class="user-content p4"></div>
    </template>
  </UIAccordionItem>
  </div>
</template>

<script>
import UIAccordionItem from '@/components/UI/Accordion/UIAccordionItem'
export default {
  name: 'UIAccordion',
  components: { UIAccordionItem },
  props: {
    accordionList: {
      type: Array,
      required: true
    },
    isOnlyOneOpen: {
      type: Boolean,
      default: false
    },
    initItemOpen: {
      type: String,
      required: false
    }
  },
  mounted() {
    this.initAccordion()
  },
  methods: {
    initAccordion() {
      const accordionItemRefsBody = this.$refs.accordionItem
      this.accordionList.forEach((elem, index) => {
        accordionItemRefsBody.forEach((itemRef, i) => {
          if (index === i && i === Number(this.initItemOpen)) {
            elem.selected = true
            itemRef.$refs.body.style.maxHeight = `${itemRef.$refs.body.scrollHeight}px`
          } else if (index === i && this.initItemOpen === 'all') {
            elem.selected = true
            itemRef.$refs.body.style.maxHeight = `${itemRef.$refs.body.scrollHeight}px`
          }
        })
      })
    },
    onAccordionItem(payload) {
      if (!this.isOnlyOneOpen) {
        const [item, index] = payload
        const accordionItemRefsBody = this.$refs.accordionItem
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
      } else {
        const [item, index] = payload
        const accordionItemRefsBody = this.$refs.accordionItem
        accordionItemRefsBody.forEach((itemRef, i) => {
          if (i === index) {
            if (!item.selected) {
              this.accordionList.forEach((elem) => {
                elem.selected = false
              })
              accordionItemRefsBody.forEach((itemRef) => {
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
  .accordion-item-title {
    margin-right: 15px;
  }
</style>
