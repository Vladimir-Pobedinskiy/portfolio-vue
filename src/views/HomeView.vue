<template>
  <div class="home-view offset-page">
    <div class="container">
      <h1 class="home-view__title h2">В этом портфолио реализовано:</h1>
      <ul class="home-view__list">
        <li class="home-view__item s4" v-for="(item, i) in list" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      list: [
        'Установка и настройка Vue CLI',
        'Установка и настройка Vue-router и Vuex',
        'Динамическая перерисовка без перезагрузки страницы',
        'Динамические маршруты',
        'Обработка несуществующих роутов',
        'Храниение и взаимодействие с данными из JSON Server'
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
