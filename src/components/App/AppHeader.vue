<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="header__logo h4" :to="{ name: 'HomeView' }">PORTFOLIO</router-link>
        <div class="header__nav-list-wrapper" :class="{ 'active': open === 'navigation' }">
          <ul class="nav-list">
            <li v-for="(item, i) in navLinks" :key="i" class="nav-item">
              <router-link class="nav-link p1" :to="`${item.url}`">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <button class="header__burger-btn burger-btn" :class="{ 'active': open === 'navigation' }" type="button" @click="toggleOpen('navigation')">
          <span class="burger-btn__label">
            <span class="visually-hidden">открыть меню</span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { scrollController } from '@/utils/utils.js'
export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters({
      navLinks: 'navLinks',
      open: 'open'
    })
  },
  watch: {
    $route() {
      if (this.open === 'navigation') {
        this.toggleOpen(this.open)
      }
    },
    open: {
      handler(value) {
        if (value === 'navigation') {
          scrollController.disabledScroll()
        } else {
          scrollController.enabledScroll()
        }
      }
    }
  },
  methods: {
    ...mapActions({
      toggleOpen: 'toggleOpen'
    })
  }
}
</script>

<style lang="scss">
.header {
  padding: 20px 0;
  min-height: 66px;
  background-color: $color-vue;

  @media (min-width:$desktop) {
    padding: 25px 0;
    min-height: 82px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav-list-wrapper {

    @media (max-width:$tablet-big-for-maxWidth){
      position: fixed;
      left: 0;
      top: 66px;
      height: 100vh;
      width: 100%;
      padding: 24px 16px 150px;
      opacity: 0;
      visibility: hidden;
      overflow-y: auto;
      z-index: 1000;
      transform: translateX(-200%);
      background-color: $color-vue;
      transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;

      &.active {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        transition: transform 0.5s ease, opacity 0.3s ease, visibility 0.3s ease;
      }
    }
  }

  &__burger-btn {

    @media (min-width:$tablet-big) {
      display: none;
    }
  }

}

</style>
