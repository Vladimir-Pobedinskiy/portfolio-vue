/**
  isOnlyOneOpen (true) - открывается один item, остальные закрываются
  initItemOpen - задает какой item будет открытым при рендеринге страницы (варианты: index, all(все открыты)), если ничего не задано то все items закрыты
*/
<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UIAccordion',
  props: {
    isOnlyOneOpen: {
      type: Boolean,
      default: false
    },
    initItemOpen: {
      type: String,
      required: false
    }
  },
  methods: {
    handlerAccordionItem(currentIndex, refs) {
      console.log()
    }
  }
}
</script>
<style lang="scss">
  .accordion-item-title {
    margin-right: 15px;
  }
</style>

<!-- initAccordion() {
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
} -->
