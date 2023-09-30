<template>
  <div class="py-4">
    <div class="container">
    <div class="title border-bottom d-flex align-items-center justify-content-between py-2">
      <h5>Task</h5>
      <div class="d-flex align-items-center">
        <button class="btn btn-outline-primary py-1 px-3 me-4" @click="shuffle">
          Shuffle!
        </button>
        <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="searchQuery"
        >
        <div class="d-flex align-item-center justify-content-end w-100">
        <span class="me-2">View As</span>
        <button
        class="btn btn-outline-secondary py-1 px-3"
        @click="isGrid=!isGrid" >
        {{ isGrid ? 'Grid' : 'List' }}
        </button>
      </div>
      </div>
    </div>
    <transition-group name="tasks" tag="div" class="list-task row">
      <CardItem
      v-for="task in resultQuery"
      :key="task.id"
      :task="task"
      :isGrid="isGrid"
      />
    </transition-group>
    <div class="action py-2">
      <a
        v-if="!isCreating"
        href="#"
        class="add-button"
        @click="isCreating=!isCreating">Add Task</a>
      <!--<div v-else class="add-card">-->
      <form class="add-card" v-on:submit.prevent="onSubmit" v-else>
        <div class="card mb-2">
          <div class="card-body d-flex flex-column p-0">
          <input class="form-control border-0 mb-2"
            placeholder="Title"
            type="text"
            v-model="task.title">
          <textarea
            class="form-control border-0 small"
            placeholder="Description"
            rows="3"
            v-model="task.description"></textarea>
          </div>
        </div>
        <div class="button-wrapper d-flex">
          <button class="btn btn-primary me-2" type="submit">Save</button>
          <button
          class="btn btn-outline-secondary"
          @click="isCreating =!isCreating">Cancel</button>
        </div>
      </form>
      <!--</div>-->
    </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import CardItem from '@/components/Card/CardItem.vue'
export default {
  layout (context) {
    return 'custom'
  },
  components: {
    CardItem
  },
  data () {
    return {
      searchQuery: '',
      // Tipe layout daftar task
      isGrid: true,
      // Status saat menambahkan task
      isCreating: false,
      // Daftar task
      /* tasks: [
        {
          id: 1,
          title: 'Task 1',
          description: 'ini deskripsi 1',
          isDone: false
        },
        {
          id: 2,
          title: 'Tugas 2',
          description: 'ini deskripsi 2',
          isDone: false
        },
        {
          id: 3,
          title: 'Kerja 3',
          description: 'ini deskripsi 3',
          isDone: false
        }
      ] */
      task: {
        id: 3,
        title: '',
        description: '',
        isDone: false
      }
    }
  },
  computed: {
    resultQuery () {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split('')
            .every(v => item.title.toLowerCase().includes(v))
        })
      } else {
        console.log(this.tasks)
        return this.tasks
      }
    },
    ...mapState('tasks', ['tasks']),
    tasks () {
      return this.$store.state.tasks.tasks
    }
  },
  methods: {
    shuffle () {
      this.tasks = _.shuffle(this.tasks)
    },
    ...mapActions('tasks', ['addTask']),
    onSubmit () {
      // memperbaharui task id
      this.task.id += 1
      // agar tidak terjadi konflik saat perubahan data
      const payload = this.task
      // proses pemanggilan action ('nama_file/nama_method', parameter)
      // this.$store.dispatch('tasks/addTask', payload)
      this.addTask(payload)
      // mengembalikan isi form seperti semula
      this.task = {
        title: '',
        description: '',
        isDone: false
      }
    }
  }
}
</script>
<style>
  #app .tasks-move {
    transition: .4s;
  }
</style>
