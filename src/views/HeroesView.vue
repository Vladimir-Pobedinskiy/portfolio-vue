<template>
  <div class="heroes-view">
    <div class="container">
      <template v-if="loading">
        <loading :loading="loading" />
      </template>
      <template v-else>
        <template v-if="errorLoading === null">
          <h2 class="heroes-view__title title h1">Приложение Герои</h2>
          <HeroList :hero-list="heroList" />
        </template>
        <template v-else-if="errorLoading !== null">
          <h2 class="heroes-view__title title h1">{{ errorLoading }}</h2>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import loading from '@/components/App/AppLoading'
import HeroList from '@/components/Hero/HeroList.vue'

export default {
  components: { loading, HeroList },
  name: 'HeroesView',
  data() {
    return {
      errorLoading: null
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      heroList: 'heroes'
    })
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions({
      startLoading: 'startLoading',
      endLoading: 'endLoading',
      getHeroes: 'getHeroes'
    }),
    async getData() {
      try {
        this.startLoading()
        if (!this.heroList.length) {
          this.getHeroes()
        }
        this.endLoading()
      } catch (error) {
        this.endLoading()
        console.error('Error fetching heroes:', error)
      }
    }
  }
}
</script>

<style lang="scss">
.heroes-view {

  &__title {
    text-transform: uppercase;
  }
}
</style>
