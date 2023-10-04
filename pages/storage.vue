<template>
    <div id="app">
        <p>
            My name is <input v-model="name">
            and I am <input v-model="age">years old
        </p>
        <p>
            <button @click="onSubmit">Save</button>
        </p>
        <h2>Cats</h2>
        <div v-for="(cat, n) in cats" :key="cat">
            <p>
                <span class="cat">{{  cat }}</span>
                <button @click="removeCat(n)">Remove</button>
            </p>
        </div>
        <p>
            <input v-model="newCat">
            <button @click="addCat">Add Cat</button>
        </p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      age: 0,
      cats: [],
      newCat: null
    }
  },
  mounted () {
    if (localStorage.name) {
      this.name = localStorage.name
    }
    if (localStorage.age) {
      this.age = localStorage.age
    }
    if (localStorage.getItem('cats')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'))
      } catch (e) {
        localStorage.removeItem('cats')
      }
    }
  },
  methods: {
    onSubmit () {
      localStorage.name = this.name
      localStorage.age = this.age
      console.log('data storage ...')
    },
    addCat () {
      if (!this.newCat) {
        return
      }
      this.cats.push(this.newCat)
      this.newCat = ''
      this.saveCats()
    },
    removeCat (x) {
      this.cats.splice(x, 1)
      this.saveCats()
    },
    saveCats () {
      const parsed = JSON.stringify(this.cats)
      localStorage.setItem('cats', parsed)
    }
  }
}
</script>
