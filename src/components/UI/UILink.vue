<template>
  <router-link
    v-bind="$attrs"
    :class="linkClass"
    :to="linkUrl"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'UILink',
  props: {
    linkClass: {
      type: String,
      required: true
    },
    linkUrl: {
      type: Object,
      required: true
    }
  }
}
</script>
