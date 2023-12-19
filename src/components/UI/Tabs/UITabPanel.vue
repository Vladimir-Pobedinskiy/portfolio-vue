<template>
  <div v-show="isActive" class="tabs-panel" :class="{'active': isActive}">
    <slot />
  </div>
</template>

<script>
import { ref, inject, watch } from 'vue'
export default {
  name: 'UITabPanel',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const tabName = ref(inject('tabName'))
    const isActive = ref(false)

    watch(tabName, (value) => {
      console.log(value)
      // if (String(value + 1) === props.name) {
      //   console.log(props.name)
      //   isActive.value = true
      // }
    })

    return {
      tabName,
      isActive
    }
  }
}
</script>
