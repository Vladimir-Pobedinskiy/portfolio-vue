<template>

  <AppHeader />

  <main class="main">
    <router-view />
  </main>

  <AppFooter />

  <ModalError />

  <div v-if="showIcons" class="img-wrapper visually-hidden">
    <img src="@/assets/icons/icon-error-404.svg" alt="">
    <img src="@/assets/icons/icon-vk.svg" alt="">
    <img src="@/assets/icons/icon-arrow-slider.svg" alt="">
    <img src="@/assets/icons/icon-close.svg" alt="">
    <img src="@/assets/icons/icon-edit.svg" alt="">
    <img src="@/assets/icons/icon-eye-input-password.svg" alt="">
    <img src="@/assets/icons/icon-eye-input-password-hidden.svg" alt="">
  </div>

</template>

<script>
import AppHeader from '@/components/App/AppHeader'
import AppFooter from '@/components/App/AppFooter'
import ModalError from '@/components/Modals/ModalError'

export default {
  name: 'App',
  components: { AppHeader, AppFooter, ModalError },
  data() {
    return {
      showIcons: false
    }
  }
}
</script>
