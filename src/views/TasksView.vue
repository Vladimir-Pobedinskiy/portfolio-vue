<template>
  <div class="tasks-view offset-page">
    <div class="container">
      <h1 class="tasks-view__title title h1">В этом приложении реализовано:</h1>

      <ul class="description-list">
        <li class="description-item p1" v-for="(item, i) in descriptionList" :key="i">{{ item }}</li>
      </ul>

      <section class="tasks-view__section offset">
        <h2 class="tasks-view__title title h1">Список задач</h2>

        <div class="tasks-view__form-wrapper">
          <form class="tasks-view__form" @submit.prevent="onSubmit">
            <textarea v-model="textareaValue" class="tasks-view__form-textarea" placeholder="Введите новую задачу" required></textarea>
            <TaskTagList :tags="tags" @handleSelectedTags="handleSelectedTags" />
            <UIButton btn-class="tasks-view__form-btn btn" type="submit">Add new task</UIButton>
          </form>
        </div>

        <template v-if="taskList.length">
          <TaskList :task-list="taskList" @deleteCurrentTask="deleteCurrentTask" />
        </template>
        <template v-else>
          <p class="h3">Список задач пуст! Введите вашу первую задачу!</p>
        </template>

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
      descriptionList: [
        'Добавление, удаление, редактирование задач',
        'Добавление в задачу hashtags и времени добавления',
        'Хранение данных в Store и LocalStorage'
      ],
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
    handleSelectedTags(selectedTags) {
      this.selectedTags = selectedTags
    },
    onSubmit() {
      if (this.textareaValue.length) {
        this.changeTaskList([this.textareaValue.trim(), this.dateTask(), this.selectedTags])
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
