<template>
  <button
    v-bind="$attrs"
    :class="btnClass"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UIButton',
  props: {
    btnClass: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>
