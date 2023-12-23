<template>
  <UITabs :tabs-nav="tabs.tabsNav">
    <UITabPanel class-name="tabs-panel" panel-name="tab-1">
      <div class="tabs-panel__left-side">
        <div class="tabs-panel__img-wrapper">
          <img src="/img/hero/wizard.png" alt="image">
        </div>
      </div>
      <div class="tabs-panel__right-side">
        <div class="user-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
        </div>
      </div>
    </UITabPanel>
    <UITabPanel class-name="tabs-panel" panel-name="tab-2">
      <div class="tabs-panel__left-side">
        <div class="tabs-panel__img-wrapper">
          <img src="/img/hero/archer.png" alt="image">
        </div>
      </div>
      <div class="tabs-panel__right-side">
        <div class="user-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
        </div>
      </div>
    </UITabPanel>
    <UITabPanel class-name="tabs-panel" panel-name="tab-3">
      <div class="tabs-panel__left-side">
        <div class="tabs-panel__img-wrapper">
          <img src="/img/hero/giant.png" alt="image">
        </div>
      </div>
      <div class="tabs-panel__right-side">
        <div class="user-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti fugit totam similique officiis blanditiis sequi architecto laboriosam, facere, neque, laborum obcaecati et harum voluptatibus sint labore quidem esse distinctio.</p>
        </div>
      </div>
    </UITabPanel>
  </UITabs>
</template>

<script>
import UITabs from '@/components/UI/Tabs/UITabs'
import UITabPanel from '@/components/UI/Tabs/UITabPanel'
export default {
  name: 'UIViewTabs',
  components: { UITabs, UITabPanel },
  props: {
    tabs: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.tabs-panel {
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 24px;

  @media (min-width:$tablet) {
    grid-template-columns: repeat(12, 1fr);
  }

  &__left-side {

    @media (min-width:$tablet) {
      grid-column: 5 span;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
  }

  &__img-wrapper {

    @media (min-width:$tablet) {
      width: 100%;
      max-width: 400px;
    }
  }

  &__right-side {

    @media (min-width:$tablet) {
      grid-column: 6 / -1;
    }
  }
}
</style>
