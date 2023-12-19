<template>
  <div class="tabs offset">
    <ul class="tabs-btns">
      <li v-for="(tab, i) in tabs" :key="i" class="tabs-btn" @click="getTabName(tab.name)">
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { provide } from 'vue'
export default {
  name: 'UITabs',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    function getTabName(name) {
      console.log(name)
      return name
    }

    provide('tabName', getTabName)

    return {
      getTabName
    }
  }

}
</script>

<style lang="scss">
</style>
