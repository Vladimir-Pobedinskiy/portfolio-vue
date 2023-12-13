<template>
  <div class="accordion">
    <UIAccordionItem
      v-for="(item, index) in accordionList"
      :key="index"
      :item="item"
      :isOneOpen="isOneOpen"
      :accordionList="accordionList"
      :currentIndex="index"
      @onAccordionItem="onAccordionItem"
      ref="accordionItem"
    />
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
    isOneOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onAccordionItem(payload) {
      if (!this.isOneOpen) {
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
      } else if (this.isOneOpen) {
        const [item, index] = payload
        const accordionItemRefsBody = this.$refs.accordionItem
        accordionItemRefsBody.forEach((itemRef, i) => {
          if (i === index) {
            if (!item.selected) {
              this.accordionList.forEach((elem) => {
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
