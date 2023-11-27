<template>
  <div class="task-list">
    <TaskListItem
      v-for="(task, index) in taskList" :key="index"
      :task="task"
      :currentIndex="index"
      @deleteCurrentTask="deleteCurrentTask(index)"
    />
  </div>
</template>

<script>
import TaskListItem from '@/components/Tasks/TaskListItem'
export default {
  name: 'TaskList',
  components: { TaskListItem },
  props: {
    taskList: {
      type: Array,
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
.task-list {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}
</style>
