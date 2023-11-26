<template>
  <div class="task-list">
    <TaskListItem v-for="(task, i) in taskList" :key="i" :task="task" @deleteCurrentTask="deleteCurrentTask(i)" />
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
