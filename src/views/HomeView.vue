<template>
  <section class="home-view">
    <div class="container">
      <h1 class="home-view__title h2">{{ title }}</h1>
      <ul class="home-view__list">
        <li class="home-view__item s4" v-for="(item, i) in list" :key="i">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      title: 'В этом портфолио реализовано:',
      list: [
        'Установка и настройка Vue CLI',
        'Установка и настройка Vue-router и Vuex для Vue.js 3',
        'Динамическая перерисовка без перезагрузки страницы',
        'Обработка динамических роутов',
        'Обработка несуществующих роутов',
        'Работа с данными по технологии REST API'
      ]
    }
  }
}
</script>

<style lang="scss">
.home-view {

  &__title {
    margin-bottom: 24px;

    @media (min-width:$desktop) {
      margin-bottom: 32px;
    }
  }

  &__list {
    padding-left: 22px;
  }

  &__item {
    margin-bottom: 8px;
    list-style: disc;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
