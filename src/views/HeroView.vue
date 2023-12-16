<template>
  <template v-if="loading">
    <AppLoading :loading="loading" />
  </template>
  <template v-else>
    <div v-if="hero" class="hero-view offset-page">
      <div class="container">
        <div class="hero-view__inner">
          <div class="hero-view__img-wrapper">
            <img :src="hero.imgUrl" :alt="hero.title">
          </div>
          <div class="hero-view__info">
            <h1 class="hero-view__title h1">{{ hero.title }}</h1>
            <p class="hero-view__descr s4">{{ hero.descr }}</p>
            <ul class="hero-view__statistic-list">
              <li v-for="(item, i) in hero.info" :key="i" class="hero-view__statistic-item">
                <span class="hero-view__statistic-value h3">{{ item.value }}</span>
                <span class="hero-view__statistic-name p5">{{ item.title }}</span>
              </li>
            </ul>
            <div>
              <router-link class="hero-view__back-link" :to="{ name: 'HeroesView' }">Back to heroes</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppLoading from '@/components/App/AppLoading'
import axios from 'axios'
export default {
  name: 'HeroView',
  components: { AppLoading },
  data() {
    return {
      hero: null
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  created() {
    this.getHero()
  },
  methods: {
    ...mapActions({
      startLoading: 'startLoading',
      endLoading: 'endLoading'
    }),
    async getHero() {
      try {
        this.startLoading()
        const response = await axios.get('/api/heroes/')
        const currentHeroRouteName = this.$route.params.heroView
        const currentHero = response.data.heroList.find((hero) => hero.alias === currentHeroRouteName)
        this.hero = currentHero
        if (currentHero === undefined) {
          this.$router.push({ name: 'NotFoundView' })
        }
        this.endLoading()
      } catch (error) {
        this.endLoading()
        this.$vfm.open('ModalError')
        console.error('Error fetching hero:', error)
      }
    }
  }
}
</script>

<style lang="scss">
.hero-view {

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__img-wrapper {
    width: 100%;
    max-width: 450px;
  }

  &__info {
    width: 100%;
    max-width: 900px;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__statistic-list {
    margin: 20px 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-white;
    background-color: $color-orange;
    font-weight: 700;
    border-radius: 12px;
  }

  &__statistic-item {
    flex: 1 1 33.3%;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px 15px;

    &:last-child {
      border-right: none;
    }
  }

  &__statistic-value {
    display: block;
    margin-bottom: 10px;
  }

  &__statistic-name {
    text-transform: uppercase;
  }

  &__back-link {
    display: block;
    margin: 0 auto;
    padding: 8px 16px;
    width: 100%;
    max-width: 350px;
    border: 1px solid $color-orange;
    border-radius: 12px;
    background-color: $color-orange;
    color: $color-white;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    @media (min-width:$desktop) {

      &:hover {
        border-color: $color-orange-hover;
        background-color: $color-orange-hover;
        transition: background-color 0.3s ease, border-color 0.3s ease;
      }
    }
  }
}
</style>
