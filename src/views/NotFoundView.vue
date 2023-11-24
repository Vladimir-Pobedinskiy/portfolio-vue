<template>
  <div class="not-found-view">
    <div class="not-found-view__inner">
      <div class="not-found-view__img-wrapper">
        <svg class="not-found-view__img" width="754px" height="304px">
          <use xlink:href="#icon-error-404"></use>
        </svg>
      </div>
      <h2 class="not-found-view__title h3">Запрашиваемая страница не найдена</h2>
      <p class="not-found-view__text p2">
        Запрашиваемая вами страница не существует. Возможно она была удалена или был введён неверный адрес в адресной строке.
      </p>
      <router-link class="not-found-view__btn btn" :to="{ name: 'HomeView' }">На главную</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style lang="scss">
.not-found-view {
  height: 100%;
  padding: 56px 16px;

  @media (min-width:$desktop) {
    padding: 120px 16px;
  }

  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__img-wrapper {
    margin-bottom: 48px;
    padding: 0 16px;
    width: 100%;
    max-width: 550px;
    color: $color-vue;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    margin-bottom: 16px;
  }

  &__text {
    margin-bottom: 32px;
    width: 100%;
    max-width: 675px;
  }

  &__btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
