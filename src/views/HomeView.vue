<template>
  <div class="container">
    <h2 class="title h2">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      title: 'Home-page'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.title-line-clamp {
  width: 100%;
  max-width: 300px;
  color: $color-vue;
  @include line-clamp(3);
}

.mb {
  margin-bottom: 12px;
}

.img-wrapper {
  width: 100px;
  height: 100px;
}
.img-wrapper img {
  object-fit: contain;
}
.vk-wrapper {
  width: fit-content;
  transition: color 0.2s ease;

  @media (min-width:$desktop) {
    &:hover {
      color: $color-vk;
      cursor: pointer;
      transition: color 0.3s ease;
    }
  }
}
</style>
