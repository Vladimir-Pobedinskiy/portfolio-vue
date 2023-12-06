<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="header__logo h4" :to="{ name: 'HomeView' }">PORTFOLIO</router-link>
        <div ref="navigation" class="header__nav-list-wrapper" :class="{ 'active': open === 'navigation' }">
          <ul class="nav-list">
            <li v-for="(item, i) in navLinks" :key="i" class="nav-item">
              <router-link class="nav-link p1 hover-from-center" :to="`${item.url}`">{{ item.title }}</router-link>
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
import { screens, scrollController } from '@/utils/utils'
export default {
  name: 'AppHeader',
  data() {
    return {
      mc: null,
      destroyScreen: parseInt(screens.desktop)
    }
  },
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
    open(value) {
      if (value === 'navigation') {
        scrollController.disabledScroll()
      } else {
        scrollController.enabledScroll()
      }
    }
  },
  mounted() {
    this.setupHammer()
    window.addEventListener('resize', this.handleWindowResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    ...mapActions({
      toggleOpen: 'toggleOpen'
    }),
    setupHammer() {
      const hammer = this.$hammer
      const nav = this.$refs.navigation

      this.mc = new hammer.Manager(nav)
      this.mc.add(new hammer.Swipe({ direction: hammer.DIRECTION_HORIZONTAL }))
      this.mc.on('swipeleft', () => {
        this.toggleOpen(this.open)
      })
    },
    handleWindowResize() {
      if (window.innerWidth >= this.destroyScreen) {
        this.mc.set({ enable: false })
      } else {
        this.mc.set({ enable: true })
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  padding: 20px 0;
  min-height: 66px;
  background-color: $color-vue;
  z-index: 1000;

  @media (min-width:$desktop) {
    padding: 25px 0;
    min-height: 82px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    position: relative;
    z-index: 1001;
  }

  &__nav-list-wrapper {

    @media (max-width:$desktop-for-maxWidth){
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      padding: 94px 16px 150px;
      opacity: 0;
      visibility: hidden;
      overflow-y: auto;
      transform: translateX(-200%);
      background-color: $color-vue;
      z-index: 1000;
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
    z-index: 1001;

    @media (min-width:$desktop) {
      display: none;
    }
  }

  .nav-item {

    @media (max-width: $desktop-for-maxWidth) {
      text-transform: uppercase;
    }
  }

}

</style>
