<template>
  <div class="modal-tags">
    <UIModal
      :modal-settings="modalSettings"
      @onSaveBtnClick="onSaveBtnClick"
      :selected-tags="selectedTags"
      :btnOpenClassName="currentTags.length ? 'modal-tags-btn-open' : 'btn btn-small'"
    >
      <template #header>
        <span class="modal-tags-title s2">Выберите теги</span>
      </template>
      <template #body>
        <TaskTagList :tags="tags" @handleSelectedTags="handleSelectedTags" />
      </template>
      <template #btnOpenModal>
        <svg v-if="currentTags.length" class="modal-tags-btn-open-icon" width="20px" height="20px">
          <use xlink:href="#icon-edit"></use>
        </svg>
        <span v-else class="p3">Добавить теги</span>
      </template>
    </UIModal>
  </div>
</template>

<script>
import UIModal from '@/components/UI/Modal/UIModal'
import TaskTagList from '@/components/Tasks/TaskTagList'
export default {
  name: 'ModalTags',
  components: { UIModal, TaskTagList },
  props: {
    currentTags: {
      type: Array,
      required: true
    }
  },
  emits: ['editSelectedTags'],
  data() {
    return {
      modalSettings: {
        name: 'modal-tags',
        lockScroll: true, // Отключена прокрутка тела во время отображения модального окна
        clickToClose: true, // Включено закрытие модального окна при нажатии на наложение модального окна
        escToClose: true, // Нажмите esc, чтобы закрыть модальное окно
        hideOverlay: false, // Скрытие отображения наложения
        preventClick: false, // отмена закрытия по overlay
        zIndex: 1000,
        btnSaveClassName: 'modal-tags-btn-save btn btn-small'
      },
      tags: [
        { title: 'home', selected: false },
        { title: 'travel', selected: false },
        { title: 'work', selected: false }
      ],
      selectedTags: []
    }
  },
  methods: {
    handleSelectedTags(selectedTags) {
      this.selectedTags = selectedTags
    },
    onSaveBtnClick() {
      this.$emit('editSelectedTags', this.selectedTags)
      this.selectedTags.length = 0
      this.tags.forEach((item) => {
        item.selected = false
      })
    }
  }
}
</script>

<style lang="scss">
  .modal-tags-btn-open-icon {
    width: 20px;
    height: 20px;
  }

  .modal-tags-btn-open {
    margin-left: 20px;
    width: 20px;
    height: 20px;
  }

  .modal-tags-btn-save.btn.btn-small {
    margin-top: 24px;
    width: 100%;
  }
</style>
