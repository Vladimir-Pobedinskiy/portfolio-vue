<template>
  <div class="heroes-view">
    <div class="container">
      <template v-if="loading">
        <loading :loading="loading" />
      </template>
      <template v-else>
        <h2 class="heroes-view__title title h1">Приложение Герои</h2>
        <HeroList :hero-list="heroList" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import loading from '@/components/App/AppLoading'
import axios from 'axios'
import HeroList from '@/components/Hero/HeroList.vue'

export default {
  components: { loading, HeroList },
  name: 'HeroesView',
  data() {
    return {
      heroList: []
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapActions({
      startLoading: 'startLoading',
      endLoading: 'endLoading'
    }),
    async getData() {
      try {
        this.startLoading()
        const response = await axios.get('/api/heroes/')
        this.heroList = response.data
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
