<template>
  <div class="task-tag-list">
    <TaskTagListItem
      v-for="tag in tags" :key="tag"
      :tag="tag"
      :isPreview="isPreview"
      @handleSelectedTag="handleSelectedTag"
    />
  </div>
</template>

<script>
import TaskTagListItem from '@/components/Tasks/TaskTagListItem'
export default {
  name: 'TaskTagList',
  components: { TaskTagListItem },
  props: {
    tags: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSelectedTag(selectedTag) {
      this.$emit('handleSelectedTag', selectedTag)
    }
  }
}
</script>

<style lang="scss">
.task-tag-list {
  margin: 16px 0;
  width: 100%;
  max-width: 290px;
  display: flex;
}
</style>
