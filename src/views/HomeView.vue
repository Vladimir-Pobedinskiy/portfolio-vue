<template>
  <div class="home-view offset-page">
    <div class="container">
      <h1 class="home-view__title title h1">В этом портфолио реализовано:</h1>
      <ul class="description-list">
        <li class="description-item p1" v-for="(item, i) in descriptionList" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      descriptionList: [
        'Установка и настройка Vue CLI',
        'Установка и настройка Vue-router и Vuex',
        'Настройка vue.config.js',
        'Динамическая перерисовка без перезагрузки страницы',
        'Динамические маршруты',
        'Обработка несуществующих роутов',
        'Храниение и взаимодействие с данными из JSON Server',
        'Использование Options Api',
        'Адаптивная верстка по принципу Mobile First'
      ]
    }
  }
}
</script>
