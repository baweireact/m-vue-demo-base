<template>
  <div>
    <ListItem v-for="item in bookList" :key="item.id" :item="item" @onUpdate="handleUpdate"></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  props: ['bookList', 'onUpdate'],
  components: {
    ListItem
  },
  methods: {
    handleUpdate() {
      this.$emit('onUpdate')
    }
  }
}
</script>

<style>

</style>