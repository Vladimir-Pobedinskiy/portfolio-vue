/**
  isOnlyOneOpen (true) - открывается один item, остальные закрываются
  initItemOpen - задает какой item будет открытым при рендеринге страницы (варианты: index, all(все открыты)),
    если ничего не задано то все items закрыты
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
  }
}
</script>
