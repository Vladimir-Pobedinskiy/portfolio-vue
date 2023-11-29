<template>
  <template v-if="loading">
    <loading :loading="loading" />
  </template>
  <template v-else>
    <div class="heroes-view offset-page">
      <div class="container">
        <h1 class="heroes-view__title title h1">В этом приложении реализовано:</h1>

        <ul class="description-list">
          <li class="description-item p1" v-for="(item, i) in descriptionList" :key="i">{{ item }}</li>
        </ul>

        <HeroList :hero-list="heroList" />
      </div>
    </div>
  </template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import loading from '@/components/App/AppLoading'
import axios from 'axios'
import HeroList from '@/components/Hero/HeroList'

export default {
  components: { loading, HeroList },
  name: 'HeroesView',
  data() {
    return {
      descriptionList: [
        'Храниение и взаимодействие с данными из JSON Server',
        'Динамические маршруты',
        'Слайдер'
      ],
      heroList: []
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  created() {
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
