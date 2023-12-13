<template>
  <div class="accordion">
    <UIAccordionItem v-for="(item, index) in accordionList" :key="index" :item="item" />
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
    }
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  beforeUnmounted() {
  },
  methods: {
    handlerToggle() {
    }
  }
}
</script>
