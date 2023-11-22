<template>
  <div class="hero-card">
    <div class="hero-card__img-wrapper">
      <img class="hero-card__img" :src="hero.imgUrl" :alt="hero.title">
    </div>
    <span class="hero-card__name s6">{{ hero.name }}</span>
    <span class="hero-card__title h3">{{ hero.title }}</span>
    <div class="hero-card__body">
      <span class="hero-card__descr">{{ hero.descr }}</span>
    </div>
    <router-link class="hero-card__link" to="#!">See more info</router-link>
  </div>
</template>

<script>

export default {
  name: 'HeroCard',
  props: {
    hero: {
      type: Object,
      requaired: true
    }
  }
}
</script>

<style lang="scss">
.hero-card {
  padding: 16px;
  width: 100%;
  height: 100%;
  max-width: 442px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgb(227, 221, 221);

  &__img-wrapper {
    width: 100%;
    max-width: 442px;
    height: 320px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__name {
    display: block;
    margin: 24px 0 6px;
    text-transform: uppercase;
  }

  &__title {
    display: block;
    margin-bottom: 8px;
  }

  &__body {
    margin-bottom: 16px;
  }

  &__descr {
    display: block;
    margin-bottom: auto;
  }

  &__link {
    display: block;
    margin-top: auto;
    padding: 8px 16px;
    width: 100%;
    border: 1px solid $color-orange;
    border-radius: 14px;
    background-color: $color-orange;
    color: $color-white;
    cursor: pointer;
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
