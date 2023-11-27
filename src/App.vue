<template>

  <AppHeader />

  <main class="main">
    <router-view />
  </main>

  <AppFooter />

  <div v-if="showIcons" class="img-wrapper visually-hidden">
    <img src="@/assets/icons/icon-error-404.svg" alt="">
    <img src="@/assets/icons/icon-vk.svg" alt="">
    <img src="@/assets/icons/icon-arrow-slider.svg" alt="">
    <img src="@/assets/icons/icon-close.svg" alt="">
    <img src="@/assets/icons/icon-edit.svg" alt="">
  </div>

</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue'
import AppFooter from '@/components/App/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader, AppFooter
  },
  data() {
    return {
      showIcons: false
    }
  }
}
</script>
