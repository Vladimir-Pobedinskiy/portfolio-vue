<template>
  <div class="task-list-item">
    <div class="task-list-item__header">
      <div class="task-list-item__title-wrapper">
        <span class="task-list-item__title p1">{{ task.title }}</span>
        <button class="task-list-item__title-edit-btn" type="button" aria-label="Открыть редактирование задачи" @click="inputHiddenFlag = false">
          <svg class="task-list-item__title-edit-icon" width="20px" height="20px">
            <use xlink:href="#icon-edit"></use>
          </svg>
        </button>
      </div>
      <div class="task-list-item__input-wrapper" :class="{ 'visually-hidden': inputHiddenFlag }">
        <input v-model="inputValue" class="task-list-item__input p3" type="text">
        <button class="task-list-item__btn-close-input" type="button" @click="editCurrentTask(), inputHiddenFlag = true">
          {{ !inputValue.length ? 'Закрыть' : 'Сохранить' }}
        </button>
      </div>
      <UIButton btn-class="task-list-item__remove-btn" type="button" aria-label="Закрыть задачу" @click="deleteCurrentTask">
        <svg class="task-list-item__remove-btn-icon" width="24px" height="24px">
          <use xlink:href="#icon-close"></use>
        </svg>
      </UIButton>
    </div>
    <div class="task-list-item__footer">
      <TaskTagList v-if="task.tags && task.tags.length" :tags="task.tags" isPreview />
      <span v-if="task.date" class="task-list-item__date p5">{{ task.date }}</span>
    </div>
  </div>
</template>

<script>
import TaskTagList from '@/components/Tasks/TaskTagList'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TaskListItem',
  components: { TaskTagList },
  emits: ['deleteCurrentTask'],
  props: {
    task: {
      type: Object,
      required: true
    },
    currentIndex: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      inputHiddenFlag: true,
      inputValue: ''
    }
  },
  computed: {
    ...mapGetters({
      taskList: 'taskList'
    })
  },
  methods: {
    ...mapActions({
      changeTaskItem: 'changeTaskItem'
    }),
    deleteCurrentTask(index) {
      this.$emit('deleteCurrentTask', index)
    },
    editCurrentTask() {
      if (this.inputValue.trim().length) {
        this.changeTaskItem([this.currentIndex, this.inputValue.trim()])
      }
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss">
.task-list-item {
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    border-radius: 14px;
    background-color: $color-white;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    @media (min-width:$desktop) {
      &:hover {
        transform: translate(0, -3px);
        box-shadow: 0 30px 30px rgba(0, 0, 0, 0.06);
      }
    }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title-wrapper {
    display: flex;
    align-items: center;
    flex: 1 1 90%;
    overflow: hidden;
    z-index: 1;
  }

  &__title {
    text-align: left;
  }

  &__title-edit-btn {
    margin-left: 20px;
    width: 20px;
    height: 20px;
  }

  &__title-edit-icon {
    width: 20px;
    height: 20px;
  }

  &__input-wrapper {
    width: 60%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  &__input {
    flex: 1 1 80%;
    padding: 6px 8px;
    border: 1px solid rgb(227, 221, 221);
    border-radius: 10px;
  }

  &__btn-close-input {
    margin-left: 10px;
    flex: 1 1 15%;
  }

  &__remove-btn {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 7%;
  }

  &__footer {
    margin-top: 10px;
    text-align: left;
  }
}
</style>