<template>
  <div class="task-list-item">
    <div class="task-list-item__header">
      <span class="task-list-item__title p1">{{ task.title }}</span>
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
export default {
  name: 'TaskListItem',
  components: { TaskTagList },
  emits: ['deleteCurrentTask'],
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteCurrentTask(index) {
      this.$emit('deleteCurrentTask', index)
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    flex: 1 1 90%;
    text-align: left;
    overflow: hidden;
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
