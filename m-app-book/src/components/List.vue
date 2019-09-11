<template>
  <div>
    <ListItem v-for="item in bookList" :key="item.id" :item="item"></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  props: ['bookList'],
  components: {
    ListItem
  }
}
</script>

<style>

</style>