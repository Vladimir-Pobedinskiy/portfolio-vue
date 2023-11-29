<template>
  <div class="task-tag-list" :class="{'not-preview': !isPreview }">
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
  display: flex;

  @media (min-width:$desktop) {
    margin: 20px 0 16px;
  }
}

.task-tag-list.not-preview {
  width: 100%;
  max-width: 290px;
}
</style>
