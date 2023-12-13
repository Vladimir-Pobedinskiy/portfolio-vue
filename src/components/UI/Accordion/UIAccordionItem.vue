<template>
  <div class="accordion-item">
    <div class="accordion-item__header h4">
      <span class="accordion-item__title h4">{{ item.title }}</span>
      <div class="accordion-item__header-icon-wrapper">
        <UIIcon icon-name="mdi-close" class-name="icon-close" width="32px" height="32px" />
      </div>
    </div>

    <div ref="body" class="accordion-item__body">
      <div v-safe-html.p="item.text" class="user-content p4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIAccordionItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss">

.accordion-item {
  padding-top: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid $color-gray-light;

  &.active {
    .accordion__header-icon.accordion-icon-arrow {
      transform: rotate(180deg);
      transition: transform 0.4s ease;
    }
  }

  @media (min-width:$desktop) {
    padding-top: 0;
    border-bottom: 0;
  }

  &__header {
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    cursor: pointer;

    @media (min-width:$desktop) {
      margin-bottom: 20px;
      cursor: text;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;

    @media (max-width:$desktop-for-maxWidth){
      overflow: hidden;
      max-height: 0;
      will-change: max-height;
      transition: max-height 0.4s ease-in-out;
    }

    @media (min-width:$desktop) {
      margin-bottom: 0;
    }
  }

  &__body a {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 16px;
    }

    @media (min-width:$desktop) {

      &:last-child {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
