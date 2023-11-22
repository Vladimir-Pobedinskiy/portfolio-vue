<template>
  <div class="about-view">
    <div class="container">
      <template v-if="loading">
        <loading :loading="loading" />
      </template>
      <template v-else>
        <template v-if="errorLoading === null">
          <h2 class="about-view__title title h1">Страница героев</h2>
          <HeroList :hero-list="heroList" />
        </template>
        <template v-else-if="errorLoading !== null">
          <h2 class="about-view__title title h1">{{ errorLoading }}</h2>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import loading from '@/components/App/AppLoading'
import HeroList from '@/components/Hero/HeroList.vue'

export default {
  components: { loading, HeroList },
  name: 'AboutView',
  data() {
    return {
      heroList: [],
      errorLoading: null
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  mounted() {
    this.getHeroes()
  },
  methods: {
    ...mapActions({
      startLoading: 'startLoading',
      endLoading: 'endLoading'
    }),
    async getHeroes() {
      try {
        this.startLoading()
        const response = await axios.get('/api/heroes/')
        this.heroList = response.data
        this.errorLoading = null
        this.endLoading()
      } catch (error) {
        this.endLoading()
        this.errorLoading = 'Сервер не работает, извините за временные неудобства! Зайдите на сайт позже.'
        console.error('Error fetching heroes:', error)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
