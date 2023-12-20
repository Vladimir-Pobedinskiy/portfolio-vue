<template>
  <transition name="slide-up-from-bottom" appear>
    <div v-show="isActive" class="tabs-panel" :class="{ 'active': isActive }">
      <slot />
    </div>
  </transition>
</template>

<script>
import { ref, toRefs, inject, watch } from 'vue'
export default {
  name: 'UITabPanel',
  props: {
    panelName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { panelName } = toRefs(props)
    const tabBtnName = ref(inject('tabBtnName'))
    const initFirstTab = ref(inject('initFirstTab'))
    const isActive = ref(false)

    function getfirstPanel() {
      if (initFirstTab.value === panelName.value) {
        isActive.value = true
      }
    }
    getfirstPanel()

    watch(tabBtnName, (value) => {
      if (value === panelName.value) {
        isActive.value = true
      } else {
        isActive.value = false
      }
    })

    return {
      tabBtnName,
      isActive
    }
  }
}
</script>

<style lang="scss">
  .tabs-panel {
    will-change: transform, opacity;
  }
</style>
