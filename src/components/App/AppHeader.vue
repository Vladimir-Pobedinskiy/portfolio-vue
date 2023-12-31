<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="header__logo h4" :to="{ name: 'HomeView' }">PORTFOLIO</router-link>
        <div ref="navigation" class="header__nav-list-wrapper" :class="{ 'active': isOpen === 'navigation' }">
          <ul class="nav-list">
            <li v-for="(item, i) in navLinks" :key="i" class="nav-item">
              <router-link class="nav-link p1 hover-from-center" :to="`${item.url}`">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <button class="header__burger-btn burger-btn" :class="{ 'active': isOpen === 'navigation' }" type="button" @click="toggleState('navigation')">
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
import Hammer from 'hammerjs'
export default {
  name: 'AppHeader',
  data() {
    return {
      mc: null
    }
  },
  computed: {
    ...mapGetters({
      navLinks: 'navLinks',
      isOpen: 'isOpen'
    })
  },
  watch: {
    $route() {
      if (this.isOpen === 'navigation') {
        this.toggleState(this.isOpen)
      }
    },
    isOpen(value) {
      if (value === 'navigation') {
        scrollController.disabledScroll()
      } else {
        scrollController.enabledScroll()
      }
    }
  },
  mounted() {
    this.setupHammer()
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    ...mapActions({
      toggleState: 'toggleState'
    }),
    setupHammer() {
      const hammer = new Hammer.Manager(this.$refs.navigation)
      hammer.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }))
      hammer.on('swipeleft', () => {
        this.toggleState(this.isOpen)
      })
      this.mc = hammer
    },
    handleWindowResize() {
      if (window.innerWidth >= parseInt(screens.desktop)) {
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
  z-index: 998;

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
    z-index: 999;
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
      z-index: 998;
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
    z-index: 999;

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
