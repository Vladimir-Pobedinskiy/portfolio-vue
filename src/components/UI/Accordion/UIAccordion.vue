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
  }
}
</script>
