<template>
  <div class="tasks-view offset-page">
    <div class="container">
      <h1 class="tasks-view__title h1">Приложение cписок задач</h1>
      <section class="tasks-view__section">
        <h2 class="tasks-view__title title h2">Список задач</h2>

        <div class="tasks-view__form-wrapper">
          <form class="tasks-view__form" @submit.prevent="onSubmit">
            <textarea v-model="textareaValue" class="tasks-view__form-textarea" placeholder="Ведите новую задачу" required></textarea>
            <TaskTagList :tags="tags" @handleSelectedTag="handleSelectedTag" />
            <UIButton btn-class="tasks-view__form-btn btn" type="submit">Add new task</UIButton>
          </form>
        </div>

        <TaskList :task-list="taskList" @deleteCurrentTask="deleteCurrentTask" />

      </section>
    </div>
  </div>
</template>

<script>
import TaskList from '@/components/Tasks/TaskList'
import TaskTagList from '@/components/Tasks/TaskTagList'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TasksView',
  components: { TaskList, TaskTagList },
  data() {
    return {
      textareaValue: '',
      tags: [
        { title: 'home', selected: false },
        { title: 'travel', selected: false },
        { title: 'work', selected: false }
      ],
      selectedTags: []
    }
  },
  computed: {
    ...mapGetters({
      taskList: 'taskList'
    })
  },
  methods: {
    ...mapActions({
      changeTaskList: 'changeTaskList',
      deleteCurrentTask: 'deleteCurrentTask'
    }),
    dateTask() {
      const currentDate = new Date()
      const day = String(currentDate.getDate()).padStart(2, '0')
      const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Месяцы начинаются с 0
      const year = currentDate.getFullYear()
      const hours = String(currentDate.getHours()).padStart(2, '0')
      const minutes = String(currentDate.getMinutes()).padStart(2, '0')
      const seconds = String(currentDate.getSeconds()).padStart(2, '0')

      return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`
    },
    handleSelectedTag(selectedTag) {
      this.tags.forEach((item) => {
        if (item.title === selectedTag) {
          if (!item.selected) {
            item.selected = true
            this.selectedTags.push({
              title: selectedTag
            })
          } else {
            item.selected = false
            const selectedIndex = this.selectedTags.findIndex(tag => tag.title === selectedTag)
            if (selectedIndex !== -1) {
              this.selectedTags.splice(selectedIndex, 1)
            }
          }
        }
      })
    },
    onSubmit() {
      if (this.textareaValue.length) {
        this.changeTaskList([this.textareaValue, this.dateTask(), this.selectedTags])
        this.textareaValue = ''
        this.selectedTags.length = 0
        this.tags.forEach((item) => {
          if (item.selected) {
            item.selected = false
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.tasks-view {
  height: 100%;
  background-color: $bg;

  &__title {
    margin-bottom: 24px;
    text-align: center;
    text-transform: uppercase;

    @media (min-width:$desktop) {
      margin-bottom: 48px;
    }
  }

  &__section {
    text-align: center;
  }

  &__form-wrapper {
    margin-bottom: 40px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__form-textarea {
    padding: 16px;
    width: 100%;
    max-width: 1000px;
    height: 150px;
    border: 1px solid rgb(227, 221, 221);
    border-radius: 12px;
  }

  &__form-btn.btn {
    width: 100%;
    max-width: 300px;
  }
}

</style>
