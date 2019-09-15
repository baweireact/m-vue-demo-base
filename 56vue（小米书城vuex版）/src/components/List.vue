<template>
  <div>
    <ListItem v-for="item in bookList" :key="item.id" :item="item"></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  components: {
    ListItem
  },
  computed: {
    bookList() {
      return this.$store.state.task.bookList
    }
  },
  mounted() {
    let currentIndex = this.$store.state.task.currentIndex
    let id = this.$store.state.task.navId
    this.$store.dispatch({ type: 'task/getBookList', index: currentIndex, id })
  }
}
</script>

<style>

</style>