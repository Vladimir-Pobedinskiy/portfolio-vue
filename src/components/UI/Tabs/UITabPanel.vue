<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
import { ref, inject, watch } from 'vue'
export default {
  name: 'UITabPanel',
  setup() {
    const tabs = ref(inject('tabs'))
    const selectedIndex = ref(inject('selectedIndex'))
    const isActive = ref(false)

    watch(selectedIndex, (value) => {
      console.log(value)
      isActive.value = value === tabs.value.indexOf(tabs.value)
      console.log(isActive.value)
    })

    return {
      isActive
    }
  }
}
</script>
