<template>
  <Icon :icon="iconName" :class="className" :width="width" :height="height" />
</template>

<script>
import { Icon } from '@iconify/vue'
import * as mdi from '@iconify-json/mdi'
export default {
  name: 'UIIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      return mdi[this.iconName]
    }
  }
}
</script>
