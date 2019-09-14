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
    this.$store.dispatch({ type: 'task/getBookList', index: 0, id: 0 })
  }
}
</script>

<style>

</style>