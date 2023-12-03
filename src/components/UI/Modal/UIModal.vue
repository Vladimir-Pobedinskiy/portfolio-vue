<template>
  <vue-final-modal
    v-model="showModal"
    classes="modal-container"
    content-class="modal-content"
    overlay-class="modal-overlay"
    :name="modalSettings.name"
    :lock-scroll="modalSettings.lockScroll"
    :click-to-close="modalSettings.clickToClose"
    :esc-to-close="modalSettings.escToClose"
    :hide-overlay="modalSettings.hideOverlay"
    :prevent-click="modalSettings.preventClick"
    :z-index="modalSettings.zIndex"
  >
    <div class="modal-inner">
      <button class="modal-close-btn" @click="showModal = false" aria-label="Закрыть модальное окно">
        <svg class="modal-close-btn-icon" width="24px" height="24px">
          <use xlink:href="#icon-close"></use>
        </svg>
      </button>
      <div v-if="$slots.header" class="modal-header">
        <slot name="header" />
      </div>
      <div v-if="$slots.body" class="modal-body">
        <slot name="body" />
        <button
          v-if="modalSettings.btnSaveClassName.length"
          :class="modalSettings.btnSaveClassName"
          :disabled="!selectedTags.length"
          type="button"
          @click="$emit('onSaveBtnClick'), showModal = false"
        >
        Сохранить
      </button>
      </div>
    </div>
  </vue-final-modal>
  <button v-if="$slots.btnOpenModal" @click="showModal = true" :class="btnOpenClassName" aria-label="Открыть модальное окно">
    <slot name="btnOpenModal" />
  </button>
</template>
<script>
import { VueFinalModal } from 'vue-final-modal'
export default {
  name: 'UIModal',
  components: { VueFinalModal },
  emits: ['onSaveBtnClick'],
  props: {
    modalSettings: {
      type: Object,
      required: true
    },
    selectedTags: {
      type: Array,
      required: false
    },
    btnOpenClassName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss">
.vfm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.modal-container.vfm__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-overlay.vfm__overlay {
  background-color: rgba(0, 0, 0, 0.8);
}
.modal-content {
  position: relative;
  padding: 40px 16px 32px;
  width: 100%;
  max-width: 530px;
  max-height: 70%;
  overflow-y: auto;
  background-color: $color-white;
  border-radius: 12px;
}
.modal-close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 8px 8px 0 0;
  cursor: pointer;
}

</style>
