<template>
  <div>
    <ListItem v-for="item in bookList" :key="item.id" :item="item" @onListUpdate="handleListUpdate"></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  props: ['bookList', 'onListUpdate'],
  components: {
    ListItem
  },
  methods: {
    handleListUpdate() {
      this.$emit('onListUpdate')
    }
  }
}
</script>

<style>

</style>