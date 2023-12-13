<template>
  <div ref="accordion" class="accordion">
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
      this.$emit('onAccordionItem', payload)
    }
  }
}
</script>
