<template>
  <div class="tabs offset">
    <ul class="">
      <li v-for="(tab, i) in tabs" :key="i" class="" :class="{ 'active': selectedIndex === i }" @click="selectTab(i)">
        {{ tab }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from 'vue'
export default {
  name: 'UITabs',
  setup() {
    const selectedIndex = ref(0)
    const tabs = ref(['таб 1', 'таб 2', 'таб 3'])

    function selectTab(index) {
      this.selectedIndex = index
    }

    provide('tabs', tabs)
    provide('selectedIndex', selectedIndex)

    return {
      tabs,
      selectedIndex,
      selectTab
    }
  }

}
</script>

<style lang="scss">
</style>
